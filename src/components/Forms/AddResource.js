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
  constructor(props) {
    super(props);
    this.state = {
      userId: this.props.authUser.uid,
      // userId: "example-uid",
      source: "tw",
      type: "pg",
      term: null
    };
  }

  handleSource = (e, { value }) => this.setState({ source: value });
  handleType = (e, { value }) => this.setState({ type: value });
  handleTerm = (e, { value }) => this.setState({ term: value });

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
    const { source, type, term } = this.state;
    return (
      <div>
        <Header as='h2' >Add new resource</Header>
        <Form
          name="resource"
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
          <Form.Group name="source" inline>
            <label>Source: </label>
            <Form.Radio
              name="source"
              value="tw"
              label="Twitter"
              checked={source === "tw"}
              onChange={this.handleSource}
            />
            <Form.Radio
              label="Facebook"
              value="fb"
              checked={source === "fb"}
              onChange={this.handleSource}
            />
            <Form.Radio
              label="Instagram"
              value="in"
              checked={source === "in"}
              onChange={this.handleSource}
            />
          </Form.Group>
          <Form.Group name="type" inline>
            <label>Type: </label>
            <Form.Radio
              label="Page/Profile"
              value="pg"
              checked={type === "pg"}
              onChange={this.handleType}
            />
            <Form.Radio
              label="Hashtag"
              value="hs"
              checked={type === "hs"}
              onChange={this.handleType}
            />
          </Form.Group>
          <Form.Input
            required
            name="term"
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
