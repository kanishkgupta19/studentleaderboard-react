import { render } from '@testing-library/react'
import React from 'react'
import { Nav, Navbar, FormControl, Button, Form} from 'react-bootstrap'

function Sidebar(props){
        return(
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/leaderboard">Leaderboard</Nav.Link>
              <Nav.Link href="/add-student-record">Register Student</Nav.Link>
            </Nav>
          </Navbar>
        );
}


export default Sidebar;