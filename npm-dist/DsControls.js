'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DsControls = function (_Component) {
  _inherits(DsControls, _Component);

  function DsControls(props) {
    _classCallCheck(this, DsControls);

    var _this = _possibleConstructorReturn(this, (DsControls.__proto__ || Object.getPrototypeOf(DsControls)).call(this));

    _this.state = {
      index: props.index
    };
    return _this;
  }

  _createClass(DsControls, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.index !== this.state.index) this.setState({
        index: nextProps.index
      });
    }
  }, {
    key: 'getDots',
    value: function getDots(images, jumpTo) {
      var _this2 = this;

      return images.map(function (img, i) {
        return _react2.default.createElement('div', {
          key: i,
          onClick: jumpTo.bind(null, i),
          className: 'ds-control-dot',
          style: { transform: 'scale(' + (i === _this2.state.index ? 1.5 : 1) + ')' }
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ds-controls' },
        _react2.default.createElement(
          'svg',
          { onClick: this.props.actions.prev, className: 'ds-control-arrow', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
          _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          _react2.default.createElement('path', { d: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'ds-control-dots' },
          this.getDots(this.props.images, this.props.actions.jumpTo)
        ),
        _react2.default.createElement(
          'svg',
          { onClick: this.props.actions.next, className: 'ds-control-arrow', height: '24', viewBox: '0 0 24 24', width: '24', xmlns: 'http://www.w3.org/2000/svg' },
          _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
          _react2.default.createElement('path', { d: 'M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z' })
        )
      );
    }
  }]);

  return DsControls;
}(_react.Component);

DsControls.propTypes = {
  actions: _propTypes2.default.objectOf(_propTypes2.default.func).isRequired,
  images: _propTypes2.default.array.isRequired,
  index: _propTypes2.default.number.isRequired
};

exports.default = DsControls;