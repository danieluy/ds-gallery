'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DsImage = require('./DsImage');

var _DsImage2 = _interopRequireDefault(_DsImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsRoll = function (_Component) {
  _inherits(DsRoll, _Component);

  function DsRoll() {
    _classCallCheck(this, DsRoll);

    return _possibleConstructorReturn(this, (DsRoll.__proto__ || Object.getPrototypeOf(DsRoll)).apply(this, arguments));
  }

  _createClass(DsRoll, [{
    key: 'createAnimationStyle',
    value: function createAnimationStyle(animation_name, x_start, x_end) {
      if (x_start !== x_end) {
        var stylesheet = document.styleSheets[0];
        var keyframes = '\n        @keyframes ' + animation_name + ' {\n          0% {transform: translate(' + x_start + 'px)}\n          100% {transform: translate(' + x_end + 'px)}\n        }\n      ';
        stylesheet.insertRule(keyframes, stylesheet.cssRules.length);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.createAnimationStyle(this.props.animation.name, this.props.animation.x_start, this.props.animation.x_end);
      var style = {
        width: this.props.gallery.roll_width + 'px',
        animationName: this.props.animation.name,
        animationDuration: this.props.animation.duration + 'ms',
        animationFillMode: 'forwards'
      };
      return _react2.default.createElement(
        'div',
        { className: 'ds-gallery-roll', style: style },
        this.props.images.map(function (img, i) {
          return _react2.default.createElement(_DsImage2.default, { key: i, url: img, gallery: _this2.props.gallery });
        })
      );
    }
  }]);

  return DsRoll;
}(_react.Component);

exports.default = DsRoll;