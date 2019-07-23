"use strict";

define(["exports", "react", "./signUpForm.css"], function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  var SignUpForm = function (_React$Component) {
    _inherits(SignUpForm, _React$Component);

    function SignUpForm(props) {
      var _this;

      _classCallCheck(this, SignUpForm);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SignUpForm).call(this, props));
      _this.state = {
        email: "",
        firstname: "",
        lastname: "",
        acceptedTerms: false,
        phonenumber: "",
        zipcode: "",
        errors: {},
        valid: false,
        screenWidth: window.innerWidth
      };
      return _this;
    }

    _createClass(SignUpForm, [{
      key: "onSubmit",
      value: function onSubmit(e) {
        e.preventDefault();
        /** Running each input statement thru the required validation */

        var errors = {
          email: !this.emailIsValid(this.state.email) ? "Apply a Valid Email Address" : false,
          firstname: this.state.firstname.length > 20 || !this.state.firstname.length ? "only 20 characters allowed" : false,
          lastname: this.state.lastname.length > 20 || !this.state.lastname.length ? "only 20 characters allows" : false,
          acceptedTerms: !this.state.acceptedTerms ? "You must agree to terms" : false,
          phonenumber: !this.phoneNumberIsValid(this.state.phonenumber) ? "Must be in traditional US number format (xxx) xxx-xxxx" : false,
          zipcode: this.state.zipcode.length > 5 || !this.state.zipcode.length ? "Only 5 digits allowed" : false
        };
        /** This sets the state of all the errors, if errors were found, then valid is set to false */

        this.setState({
          errors: errors,
          valid: Object.values(errors).every(function (err) {
            return !err;
          })
        });
      }
    }, {
      key: "emailIsValid",
      value: function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }
    }, {
      key: "phoneNumberIsValid",
      value: function phoneNumberIsValid(number) {
        return /((\d)\D)?(\(?(\d\d\d)\)?)?\D(\d\d\d)\D(\d\d\d\d)/.test(number) && number.replace(/[^0-9]/g, "").length === 10;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$state = this.state,
            valid = _this$state.valid,
            screenWidth = _this$state.screenWidth;
        var successFormDisplay = valid ? "block" : "none";
        var inputFormDisplay = !valid ? "block" : "none";
        var mobileDisplay = screenWidth <= 600 ? "block" : "none";
        var deskDisplay = screenWidth > 600 ? "inline-block" : "none";
        var FullName = this.state.firstname + " " + this.state.lastname;
        return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement("div", {
          style: {
            display: successFormDisplay
          }
        }, _react2.default.createElement("h1", {
          style: {
            textAlign: "center"
          }
        }, "Success!"), _react2.default.createElement("p", {
          style: {
            textAlign: "center"
          }
        }, "Congratulations ", FullName, " has successfully signed up.")), _react2.default.createElement("div", {
          style: {
            display: inputFormDisplay
          }
        }, _react2.default.createElement("div", {
          className: "nav",
          style: {
            display: mobileDisplay
          }
        }, _react2.default.createElement("span", {
          className: "skillTest"
        }, "SKILL TEST"), _react2.default.createElement("span", {
          className: "logo"
        }, "24")), _react2.default.createElement("div", {
          className: "nav",
          style: {
            display: deskDisplay
          }
        }, _react2.default.createElement("span", {
          className: "logo"
        }, "24"), _react2.default.createElement("span", {
          className: "skillTest"
        }, "SKILL TEST | ABOUT | BLOG | CONTACT")), _react2.default.createElement("div", {
          className: "mobileImage",
          style: {
            display: mobileDisplay
          }
        }, _react2.default.createElement("img", {
          src: "/img/phone.png",
          alt: "Mobile Phone pic",
          style: {
            width: 188,
            height: 320
          }
        })), _react2.default.createElement("div", {
          className: "deskImage",
          style: {
            display: deskDisplay
          }
        }, _react2.default.createElement("img", {
          src: "/img/desktop.png",
          alt: "Desktop pic",
          style: {
            height: 320
          }
        })), _react2.default.createElement("div", {
          className: "form-input"
        }, _react2.default.createElement("div", {
          className: "header1"
        }, "Fill Out This Form"), _react2.default.createElement("div", {
          className: "form-inside-input",
          onSubmit: this.onSubmit,
          noValidate: true
        }, _react2.default.createElement("input", {
          type: "text",
          name: "firstname",
          className: "".concat(this.state.errors.firstname ? "error" : "pass"),
          value: this.state.firstname,
          onChange: function onChange(event) {
            return _this2.setState({
              firstname: event.target.value
            });
          },
          placeholder: "First Name",
          max: "20"
        }), _react2.default.createElement("br", null), _react2.default.createElement("span", {
          className: "errorMessage"
        }, this.state.errors.firstname), _react2.default.createElement("br", null), _react2.default.createElement("input", {
          type: "text",
          name: "lastname",
          className: "".concat(this.state.errors.lastname ? "error" : "pass"),
          value: this.state.lastname,
          onChange: function onChange(event) {
            return _this2.setState({
              lastname: event.target.value
            });
          },
          placeholder: "Last Name",
          max: "20"
        }), _react2.default.createElement("br", null), _react2.default.createElement("span", {
          className: "errorMessage"
        }, this.state.errors.lastname), _react2.default.createElement("br", null), _react2.default.createElement("input", {
          type: "email",
          name: "email",
          className: "".concat(this.state.errors.email ? "error" : "pass"),
          value: this.state.email,
          onChange: function onChange(event) {
            return _this2.setState({
              email: event.target.value
            });
          },
          placeholder: "Email"
        }), _react2.default.createElement("br", null), _react2.default.createElement("span", {
          className: "errorMessage"
        }, this.state.errors.email), _react2.default.createElement("br", null), _react2.default.createElement("input", {
          type: "text",
          name: "phonenumber",
          id: "phone",
          className: "".concat(this.state.errors.phonenumber ? "error" : "pass"),
          value: this.state.phonenumber,
          onChange: function onChange(event) {
            return _this2.setState({
              phonenumber: event.target.value
            });
          },
          placeholder: "Phone Number"
        }), _react2.default.createElement("br", null), _react2.default.createElement("span", {
          className: "errorMessage phone"
        }, this.state.errors.phonenumber), _react2.default.createElement("br", {
          style: {
            display: mobileDisplay
          }
        }), _react2.default.createElement("input", {
          type: "text",
          name: "zipcode",
          id: "zip",
          className: "".concat(this.state.errors.zipcode ? "error" : "pass"),
          value: this.state.zipcode,
          onChange: function onChange(event) {
            return _this2.setState({
              zipcode: event.target.value
            });
          },
          placeholder: "Zip Code"
        }), _react2.default.createElement("br", null), _react2.default.createElement("span", {
          className: "errorMessage"
        }, this.state.errors.zipcode), _react2.default.createElement("br", null), _react2.default.createElement("div", {
          id: "checkBox"
        }, _react2.default.createElement("input", {
          type: "checkbox",
          className: "checkBox",
          checked: this.state.acceptedTerms,
          onChange: function onChange(event) {
            return _this2.setState({
              acceptedTerms: event.target.value
            });
          }
        }), _react2.default.createElement("span", {
          className: "acceptedPhrase"
        }, "I hereby consent to receive emails, text messages and other electronic communications at the telephone and email listed above."), _react2.default.createElement("span", {
          className: "errorMessage terms"
        }, this.state.errors.acceptedTerms)), _react2.default.createElement("button", {
          onClick: function onClick(event) {
            _this2.onSubmit(event);
          }
        }, "Submit")), _react2.default.createElement("div", {
          className: "mainArea mobile",
          style: {
            display: mobileDisplay
          }
        }, _react2.default.createElement("div", {
          className: "header2"
        }, "Mobile Main Area"), _react2.default.createElement("div", {
          className: "list"
        }, _react2.default.createElement("p", null, "1. Lorem ipsum dolor sit amet"), _react2.default.createElement("p", null, "2. ferri soleat ne has"), _react2.default.createElement("p", null, "3. et vidisse concludaturque es"), _react2.default.createElement("p", null, "4. No has enim congue essent"), _react2.default.createElement("p", null, "5. an ius odio munere adolescens"))), _react2.default.createElement("div", {
          className: "mainText mobile",
          style: {
            display: mobileDisplay
          }
        }, _react2.default.createElement("div", {
          className: "header2"
        }, "Mobile Main Text"), _react2.default.createElement("div", {
          className: "list"
        }, _react2.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna et pharetra pharetra. Fames ac turpis egestas sed. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi."), _react2.default.createElement("p", null, "Donec massa sapien faucibus et molestie ac feugiat sed. Sed turpis tincidunt id aliquet risus feugiat. Magnis dis parturient montes nascetur ridiculus mus mauris.")))), _react2.default.createElement("br", null), _react2.default.createElement("div", {
          className: "mainText desk",
          style: {
            display: deskDisplay
          }
        }, _react2.default.createElement("div", {
          className: "header2"
        }, "Main Body Text"), _react2.default.createElement("div", {
          className: "list"
        }, _react2.default.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames. Vehicula ipsum a arcu cursus vitae congue mauris. A lacus vestibulum sed arcu non odio. Eget lorem dolor sed viverra ipsum nunc aliquet."), _react2.default.createElement("p", null, "Enim neque volutpat ac tincidunt. Bibendum est ultricies integer quis auctor elit sed vulputate. Eu scelerisque felis imperdiet proin fermentum. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Consequat interdum varius sit amet mattis. Vitae auctor eu augue ut lectus arcu bibendum."), _react2.default.createElement("p", null, "Donec massa sapien faucibus et molestie ac feugiat sed. Sed turpis tincidunt id aliquet risus feugiat. Magnis dis parturient montes nascetur ridiculus mus mauris."))), _react2.default.createElement("div", {
          className: "mobileImage desk",
          style: {
            display: deskDisplay
          }
        }, _react2.default.createElement("img", {
          src: "/img/phone.png",
          alt: "Mobile Phone pic",
          style: {
            width: 320,
            height: 320
          }
        })), _react2.default.createElement("div", {
          className: "mainArea desk",
          style: {
            display: deskDisplay
          }
        }, _react2.default.createElement("div", {
          className: "header2 sideArea"
        }, "Desktop Side Area"), _react2.default.createElement("div", {
          className: "list sideArea"
        }, _react2.default.createElement("p", null, "1. Lorem ipsum dolor sit amet"), _react2.default.createElement("p", null, "2. ferri soleat ne has"), _react2.default.createElement("p", null, "3. et vidisse concludaturque es"), _react2.default.createElement("p", null, "4. No has enim congue essent"), _react2.default.createElement("p", null, "5. an ius odio munere adolescens")))));
      }
    }]);

    return SignUpForm;
  }(_react2.default.Component);

  exports.default = SignUpForm;
});
