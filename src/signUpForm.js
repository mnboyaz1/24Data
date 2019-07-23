import React from "react";
import "./signUpForm.css";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  onSubmit(e) {
    e.preventDefault();
    /** Running each input statement thru the required validation */
    const errors = {
      email: !this.emailIsValid(this.state.email)
        ? "Apply a Valid Email Address"
        : false,
      firstname:
        this.state.firstname.length > 20 || !this.state.firstname.length
          ? "only 20 characters allowed"
          : false,
      lastname:
        this.state.lastname.length > 20 || !this.state.lastname.length
          ? "only 20 characters allows"
          : false,
      acceptedTerms: !this.state.acceptedTerms
        ? "You must agree to terms"
        : false,
      phonenumber: !this.phoneNumberIsValid(this.state.phonenumber)
        ? "Must be in traditional US number format (xxx) xxx-xxxx"
        : false,
      zipcode:
        this.state.zipcode.length > 5 || !this.state.zipcode.length
          ? "Only 5 digits allowed"
          : false
    };
    /** This sets the state of all the errors, if errors were found, then valid is set to false */
    this.setState({
      errors,
      valid: Object.values(errors).every(err => !err)
    });
  }

  /** regex to check a valid email format was used */
  emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  /** regex used to check the phone number was in the correct format and valid number of digits */
  phoneNumberIsValid(number) {
    return (
      /((\d)\D)?(\(?(\d\d\d)\)?)?\D(\d\d\d)\D(\d\d\d\d)/.test(number) &&
      number.replace(/[^0-9]/g, "").length === 10
    );
  }

  render() {
    const { valid, screenWidth } = this.state;
    const successFormDisplay = valid ? "block" : "none";
    const inputFormDisplay = !valid ? "block" : "none";
    const mobileDisplay = screenWidth <= 600 ? "block" : "none";
    const deskDisplay = screenWidth > 600 ? "inline-block" : "none";
    const FullName = this.state.firstname + " " + this.state.lastname;
    return (
      <>
        <div style={{ display: successFormDisplay }}>
          <h1 style={{ textAlign: "center" }}>Success!</h1>
          <p style={{ textAlign: "center" }}>
            Congratulations {FullName} has successfully signed up.
          </p>
        </div>
        <div style={{ display: inputFormDisplay }}>
          <div className="nav" style={{ display: mobileDisplay }}>
            <span className="skillTest">SKILL TEST</span>
            <span className="logo">24</span>
          </div>
          <div className="nav" style={{ display: deskDisplay }}>
            <span className="logo">24</span>
            <span className="skillTest">
              SKILL TEST | ABOUT | BLOG | CONTACT
            </span>
          </div>

          <div className="mobileImage" style={{ display: mobileDisplay }}>
            <img
              src="/img/phone.png"
              alt="Mobile Phone pic"
              style={{ width: 188, height: 320 }}
            />
          </div>
          <div className="deskImage" style={{ display: deskDisplay }}>
            <img
              src="/img/desktop.png"
              alt="Desktop pic"
              style={{ height: 320 }}
            />
          </div>
          <div className="form-input">
            <div className="header1">Fill Out This Form</div>
            <div
              className="form-inside-input"
              onSubmit={this.onSubmit}
              noValidate
            >
              <input
                type="text"
                name="firstname"
                className={`${this.state.errors.firstname ? "error" : "pass"}`}
                value={this.state.firstname}
                onChange={event =>
                  this.setState({ firstname: event.target.value })
                }
                placeholder="First Name"
                max="20"
              />
              <br />
              <span className="errorMessage">
                {this.state.errors.firstname}
              </span>
              <br />
              <input
                type="text"
                name="lastname"
                className={`${this.state.errors.lastname ? "error" : "pass"}`}
                value={this.state.lastname}
                onChange={event =>
                  this.setState({ lastname: event.target.value })
                }
                placeholder="Last Name"
                max="20"
              />
              <br />
              <span className="errorMessage">{this.state.errors.lastname}</span>
              <br />
              <input
                type="email"
                name="email"
                className={`${this.state.errors.email ? "error" : "pass"}`}
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
                placeholder="Email"
              />
              <br />
              <span className="errorMessage">{this.state.errors.email}</span>
              <br />
              <input
                type="text"
                name="phonenumber"
                id="phone"
                className={`${
                  this.state.errors.phonenumber ? "error" : "pass"
                }`}
                value={this.state.phonenumber}
                onChange={event =>
                  this.setState({ phonenumber: event.target.value })
                }
                placeholder="Phone Number"
              />
              <br />
              <span className="errorMessage phone">
                {this.state.errors.phonenumber}
              </span>
              <br style={{ display: mobileDisplay }} />
              <input
                type="text"
                name="zipcode"
                id="zip"
                className={`${this.state.errors.zipcode ? "error" : "pass"}`}
                value={this.state.zipcode}
                onChange={event =>
                  this.setState({ zipcode: event.target.value })
                }
                placeholder="Zip Code"
              />
              <br />
              <span className="errorMessage">{this.state.errors.zipcode}</span>
              <br />
              <div id="checkBox">
                <input
                  type="checkbox"
                  className="checkBox"
                  checked={this.state.acceptedTerms}
                  onChange={event =>
                    this.setState({ acceptedTerms: event.target.value })
                  }
                />
                <span className="acceptedPhrase">
                  I hereby consent to receive emails, text messages and other
                  electronic communications at the telephone and email listed
                  above.
                </span>
                <span className="errorMessage terms">
                  {this.state.errors.acceptedTerms}
                </span>
              </div>

              <button
                onClick={event => {
                  this.onSubmit(event);
                }}
              >
                Submit
              </button>
            </div>
            <div className="mainArea mobile" style={{ display: mobileDisplay }}>
              <div className="header2">Mobile Main Area</div>
              <div className="list">
                <p>1. Lorem ipsum dolor sit amet</p>
                <p>2. ferri soleat ne has</p>
                <p>3. et vidisse concludaturque es</p>
                <p>4. No has enim congue essent</p>
                <p>5. an ius odio munere adolescens</p>
              </div>
            </div>
            <div className="mainText mobile" style={{ display: mobileDisplay }}>
              <div className="header2">Mobile Main Text</div>
              <div className="list">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Turpis egestas sed tempus urna et pharetra pharetra. Fames ac
                  turpis egestas sed. Commodo elit at imperdiet dui accumsan sit
                  amet nulla facilisi.
                </p>
                <p>
                  Donec massa sapien faucibus et molestie ac feugiat sed. Sed
                  turpis tincidunt id aliquet risus feugiat. Magnis dis
                  parturient montes nascetur ridiculus mus mauris.
                </p>
              </div>
            </div>
          </div>
          <br />
          <div className="mainText desk" style={{ display: deskDisplay }}>
            <div className="header2">Main Body Text</div>
            <div className="list">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Morbi tristique senectus et netus et malesuada fames. Vehicula
                ipsum a arcu cursus vitae congue mauris. A lacus vestibulum sed
                arcu non odio. Eget lorem dolor sed viverra ipsum nunc aliquet.
              </p>
              <p>
                Enim neque volutpat ac tincidunt. Bibendum est ultricies integer
                quis auctor elit sed vulputate. Eu scelerisque felis imperdiet
                proin fermentum. Odio morbi quis commodo odio aenean sed
                adipiscing diam donec. Consequat interdum varius sit amet
                mattis. Vitae auctor eu augue ut lectus arcu bibendum.
              </p>
              <p>
                Donec massa sapien faucibus et molestie ac feugiat sed. Sed
                turpis tincidunt id aliquet risus feugiat. Magnis dis parturient
                montes nascetur ridiculus mus mauris.
              </p>
            </div>
          </div>
          <div className="mobileImage desk" style={{ display: deskDisplay }}>
            <img
              src="/img/phone.png"
              alt="Mobile Phone pic"
              style={{ width: 320, height: 320 }}
            />
          </div>
          <div className="mainArea desk" style={{ display: deskDisplay }}>
            <div className="header2 sideArea">Desktop Side Area</div>
            <div className="list sideArea">
              <p>1. Lorem ipsum dolor sit amet</p>
              <p>2. ferri soleat ne has</p>
              <p>3. et vidisse concludaturque es</p>
              <p>4. No has enim congue essent</p>
              <p>5. an ius odio munere adolescens</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SignUpForm;
