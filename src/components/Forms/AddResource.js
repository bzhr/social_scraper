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
      body: encode({ "form-name": "resource", ...this.state })
    })
      .then(() => alert("Success!"), console.log(this.state))
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    const { name, message } = this.state;
    return (
      <div>
        <Header as="h2">Add new resource</Header>
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
            <label>Source: </label>
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
          {/*<Form.Group name="type" inline>
            <label>Type: </label>
            <Form.Radio
              name="type"
              label="Page/Profile"
              value="pg"
              checked={type === "pg"}
              onChange={this.handleType}
            />
            <Form.Radio
              name="type"
              label="Hashtag"
              value="hs"
              checked={type === "hs"}
              onChange={this.handleType}
            />
          </Form.Group>*/}
          <Form.Input
            required
            name="message"
            fluid
            label="Term"
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
