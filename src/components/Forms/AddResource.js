import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "testResource", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="testResource"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your type:<br />
            <input type="text" name="type" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              Your source:<br />
              <input type="text" name="source" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <label>
              UID:<br />
              <textarea name="uid" onChange={this.handleChange}/>
            </label>
          </p>

          <p>
            <label>
              Term:<br />
              <textarea name="term" onChange={this.handleChange}/>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}