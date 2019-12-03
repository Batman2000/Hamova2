import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import SERVER_URL from "./consts";

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: "",
            password: ""
        };
    }


    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    submitAuth = (user, password) => {
        fetch(SERVER_URL + '/login').then()
    }

    render() {
        return (
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="login" bsSize="large">
                        <Form.Control
                            autoFocus
                            type="login"
                            value={this.state.login}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="password" bsSize="large">
                        <Form.Control
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </Form.Group>
                    <Button
                        block
                        bsSize="large"
                        //disabled={!this.validateForm()}
                        type="submit"
                        onClick={this.submitAuth(this.state.login, this.state.password)}
                    >
                        Login
                    </Button>
                </Form>
            </div>
        );
    }
}