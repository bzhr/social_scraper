import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import { Form, Button, Header } from "semantic-ui-react";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class AddResource extends React.Component {
  // Email=UserId, Name=Source, message=Term
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.authUser.uid,
      name: "tw",
      message: null
    };
  }

  handleSource = (e, { value }) => this.setState({ name: value });
  // handleType = (e, { value }) => this.setState({ type: value });
  handleTerm = (e, { value }) => this.setState({ message: value });

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success! Please be patient, the resource data will be ready in about 5 minutes."), console.log(this.state))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const { name, message } = this.state;
    return (
      <div>
        <Header as="h2">What do you want to analyze?</Header>
        <Form
          name="contact"
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
          <Form.Group name="name" inline>
            <label>Choose platform</label>
            <Form.Radio
              name="name"
              value="tw"
              label="Twitter"
              checked={name === "tw"}
              onChange={this.handleSource}
            />
            <Form.Radio
              name="name"
              label="Facebook"
              value="fb"
              checked={name === "fb"}
              onChange={this.handleSource}
            />
            <Form.Radio
              name="name"
              label="Instagram"
              value="in"
              checked={name === "in"}
              onChange={this.handleSource}
            />
          </Form.Group>
          <Form.Input
            required
            name="message"
            fluid
            label="Insert handle, ID or hashtag"
            placeholder="Term"
            onChange={this.handleTerm}
          />
          <p>
            <Button type="submit">Send</Button>
          </p>
        </Form>
      </div>
    );
  }
}
