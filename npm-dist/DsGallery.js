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
        prev: props.images.length - 1,
        current: 0,
        next: props.images.length > 1 ? 1 : 0
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
    value: function updateRollAnimationState(x) {
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
    key: 'setIndexNext',
    value: function setIndexNext() {
      var _this2 = this;

      if (this.state.images.length > 1) {
        var next = this.state.index.current + 2;
        if (this.state.index.current === this.state.images.length - 2) next = 0;
        if (this.state.index.current === this.state.images.length - 1) next = 1;
        this.setState({
          index: {
            prev: this.state.index.current,
            current: this.state.index.current === this.state.images.length - 1 ? 0 : this.state.index.current + 1,
            next: next
          }
        }, function () {
          return _this2.updateRollAnimationState.call(_this2);
        });
      }
    }
  }, {
    key: 'setIndexPrev',
    value: function setIndexPrev() {
      var _this3 = this;

      if (this.state.images.length > 1) {
        var prev = this.state.index.current - 2;
        if (this.state.index.current === 1) prev = this.state.images.length - 1;
        if (this.state.index.current === 0) prev = this.state.images.length - 2;
        this.setState({
          index: {
            prev: prev,
            current: this.state.index.current === 0 ? this.state.images.length - 1 : this.state.index.current - 1,
            next: this.state.index.current
          }
        }, function () {
          return _this3.updateRollAnimationState.call(_this3);
        });
      }
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
    key: 'nextImage',
    value: function nextImage() {
      this.setIndexNext();
    }
  }, {
    key: 'prevImage',
    value: function prevImage() {
      this.setIndexPrev();
    }
  }, {
    key: 'swipeHandler',
    value: function swipeHandler(evt) {
      if (evt.deltaX < 0) this.nextImage();
      if (evt.deltaX > 0) this.prevImage();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactHammerjs2.default,
        { onSwipe: this.swipeHandler.bind(this) },
        _react2.default.createElement(
          'div',
          { className: 'ds-gallery', id: 'ds-gallery-wrapper' },
          _react2.default.createElement(_DsRoll2.default, { gallery: this.state.gallery, images: this.state.images, animation: this.state.animation }),
          _react2.default.createElement(_DsControls2.default, {
            actions: {
              next: this.nextImage.bind(this),
              prev: this.prevImage.bind(this),
              jumpTo: function jumpTo() {
                return console.log('Jump!');
              }
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