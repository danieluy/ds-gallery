'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./DsGallery.css');

var _reactHammerjs = require('react-hammerjs');

var _reactHammerjs2 = _interopRequireDefault(_reactHammerjs);

var _DsRoll = require('./DsRoll');

var _DsRoll2 = _interopRequireDefault(_DsRoll);

var _DsControls = require('./DsControls');

var _DsControls2 = _interopRequireDefault(_DsControls);

var _ContextMenu = require('./ContextMenu');

var _ContextMenu2 = _interopRequireDefault(_ContextMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsGallery = function (_Component) {
  _inherits(DsGallery, _Component);

  function DsGallery(props) {
    _classCallCheck(this, DsGallery);

    var _this = _possibleConstructorReturn(this, (DsGallery.__proto__ || Object.getPrototypeOf(DsGallery)).call(this));

    _this.state = {
      index: {
        current: 0
      },
      images: props.images,
      animation: {
        name: 'initial_0',
        duration: props.options ? props.options.animation_duration_ms || 300 : 300,
        x_start: 0,
        x_end: 0
      },
      gallery: {
        self: null,
        width: 0,
        height: 0,
        roll_width: 10000
      },
      context_menu: {
        x: 0,
        y: 0,
        display: false
      }
    };
    window.addEventListener('resize', _this.setGalleryState.bind(_this));
    return _this;
  }

  _createClass(DsGallery, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setGalleryState();
    }
  }, {
    key: 'updateRollAnimationState',
    value: function updateRollAnimationState() {
      var name = this.state.animation.name.split('_');
      this.setState({
        animation: {
          name: name[0] + '_' + (parseInt(name[1], 10) + 1),
          duration: this.state.animation.duration,
          x_start: this.state.animation.x_end,
          x_end: this.state.gallery.width * this.state.index.current * -1
        }
      });
    }
  }, {
    key: 'setGalleryState',
    value: function setGalleryState() {
      if (this.state.gallery.self) this.setState({
        gallery: {
          width: this.state.gallery.width,
          height: this.state.gallery.height,
          roll_width: this.state.gallery.width * this.state.images.length
        }
      });else {
        var gallery = document.getElementById('ds-gallery-wrapper'); // TODO findout how do I do this with React
        this.setState({
          gallery: {
            self: gallery,
            width: gallery.offsetWidth,
            height: gallery.offsetHeight,
            roll_width: gallery.offsetWidth * this.state.images.length
          }
        });
      }
    }
  }, {
    key: 'jumpToImage',
    value: function jumpToImage(index) {
      var _this2 = this;

      this.setState({
        index: {
          current: index
        }
      }, function () {
        return _this2.updateRollAnimationState.call(_this2);
      });
    }
  }, {
    key: 'nextImage',
    value: function nextImage() {
      var _this3 = this;

      if (this.state.images.length > 1) {
        this.setState({
          index: {
            current: this.state.index.current === this.state.images.length - 1 ? 0 : this.state.index.current + 1
          }
        }, function () {
          return _this3.updateRollAnimationState.call(_this3);
        });
      }
    }
  }, {
    key: 'prevImage',
    value: function prevImage() {
      var _this4 = this;

      if (this.state.images.length > 1) {
        this.setState({
          index: {
            current: this.state.index.current === 0 ? this.state.images.length - 1 : this.state.index.current - 1
          }
        }, function () {
          return _this4.updateRollAnimationState.call(_this4);
        });
      }
    }
  }, {
    key: 'onSwipeHandler',
    value: function onSwipeHandler(evt) {
      if (evt.deltaX < 0) this.nextImage();
      if (evt.deltaX > 0) this.prevImage();
    }
  }, {
    key: 'onPressHandler',
    value: function onPressHandler(evt) {
      evt.preventDefault();
      this.displayContextMenu({ x: evt.srcEvent.clientX, y: evt.srcEvent.clientY });
    }
  }, {
    key: 'onRightClickHandler',
    value: function onRightClickHandler(evt) {
      evt.preventDefault();
      this.displayContextMenu({ x: evt.clientX, y: evt.clientY });
    }
  }, {
    key: 'displayContextMenu',
    value: function displayContextMenu(coord) {
      this.setState({
        context_menu: {
          x: coord.x,
          y: coord.y,
          display: true
        }
      });
    }
  }, {
    key: 'onTapHandler',
    value: function onTapHandler(evt) {
      console.log('Tap', evt);
    }
  }, {
    key: 'closeContextMenu',
    value: function closeContextMenu() {
      this.setState({ context_menu: { display: false } });
    }
  }, {
    key: 'openInNewWindow',
    value: function openInNewWindow() {
      window.open(this.getImageAbsoluteURL(this.state.images[this.state.index.current]));
      this.closeContextMenu();
    }
  }, {
    key: 'getImageAbsoluteURL',
    value: function getImageAbsoluteURL(path) {
      var img = document.createElement('img');
      img.src = path;
      return img.src;
    }
  }, {
    key: 'downloadImage',
    value: function downloadImage() {
      var link = document.createElement('a');
      link.href = this.getImageAbsoluteURL(this.state.images[this.state.index.current]);
      link.download = '';
      link.setAttribute('hidden', '');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.closeContextMenu();
    }
  }, {
    key: 'doAndCloseContextMenu',
    value: function doAndCloseContextMenu(action) {
      action();
      this.closeContextMenu();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactHammerjs2.default,
        { onSwipe: this.onSwipeHandler.bind(this), onPress: this.onPressHandler.bind(this), onContextMenu: this.onRightClickHandler.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'ds-gallery', id: 'ds-gallery-wrapper' },
          _react2.default.createElement(_ContextMenu2.default, {
            actions: {
              'Next image': this.doAndCloseContextMenu.bind(this, this.nextImage.bind(this)),
              'Previous image': this.doAndCloseContextMenu.bind(this, this.prevImage.bind(this)),
              'Open in new window': this.openInNewWindow.bind(this),
              'Download': this.downloadImage.bind(this),
              'Cancel': this.closeContextMenu.bind(this)
            },
            position: { x: this.state.context_menu.x, y: this.state.context_menu.y },
            display: this.state.context_menu.display ? 'flex' : 'none'
          }),
          _react2.default.createElement(_DsRoll2.default, {
            gallery: this.state.gallery,
            images: this.state.images,
            animation: this.state.animation
          }),
          _react2.default.createElement(_DsControls2.default, {
            actions: {
              next: this.nextImage.bind(this),
              prev: this.prevImage.bind(this),
              jumpTo: this.jumpToImage.bind(this)
            },
            images: this.state.images,
            index: this.state.index.current
          })
        )
      );
    }
  }]);

  return DsGallery;
}(_react.Component);

exports.default = DsGallery;