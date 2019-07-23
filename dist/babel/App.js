"use strict";

define(["exports", "react", "./signUpForm", "./App.css"], function (exports, _react, _signUpForm) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _signUpForm2 = _interopRequireDefault(_signUpForm);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function App() {
    return _react2.default.createElement("div", {
      className: "App"
    }, _react2.default.createElement(_signUpForm2.default, null));
  }

  exports.default = App;
});
