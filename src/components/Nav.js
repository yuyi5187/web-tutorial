import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Write from "./Write";
import Main from "./Main";
import BookReview from "./BookReview";

import {
    BrowseRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom"

function Navigation() {
    return (
        <div className="navigation-bar">
            
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/write">Write</Nav.Link>
                    <Nav.Link href="#BookReview">Review</Nav.Link>
                    <Nav.Link href="#mypage">Mypage</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
         
            
        </div>
    );
}

export default Navigation;