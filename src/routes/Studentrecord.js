import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';


class Studentrecord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {rollno: ''};
        this.formSubmit = this.formSubmit.bind(this);
      }

      formSubmit(event) {
        var form = document.getElementById('student-record-form');
        var formData = new FormData(form);
        var object = {};
        formData.forEach(function(value, key){
            if(!isNaN(value))
                object[key] = Number(value);
            else
                object[key] = value;
        });
        // Calculating Total Marks
        object['Total']=object['Physics'] + object['Chemistry'] + object['Maths'];

        //Calculating Percentage
        object['Percentage']=parseFloat((object['Total']/3).toFixed(2));
            fetch(`http://localhost:8000/students-records/create/`, {method:'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body:JSON.stringify(object)})
            .then(res => res.json())
            .then(
            (result) => {
                alert("Form Submitted Successfully");
            },
            (error) => {
                console.log(error);
                alert("Some Error Occurre");
            }
            )
      }
    render(){
    return (
        <div>
            <Container className="mt-5">
            <Card>
                <Card.Header className="p-3"><h3>Add Students record</h3></Card.Header>
                <Card.Body className="p-5">
                    <Form action="javascript:void(0)" onSubmit={this.formSubmit} id="student-record-form">
                        <Form.Group as={Row} controlId="formRollno">
                            <Form.Label column sm={2}>Roll No.</Form.Label>
                            <Col sm={10}><Form.Control type="number" min="0" name="RollNo" placeholder="Enter Roll Number" required/></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formName">
                            <Form.Label column sm={2}>Name</Form.Label>
                            <Col sm={10}><Form.Control type="text" name="Name" placeholder="Enter Student Name" required/></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formMaths">
                            <Form.Label column sm={2}>Maths Marks</Form.Label>
                            <Col sm={10}><Form.Control type="number" min="0" max="100" name="Maths" placeholder="Enter Maths marks" required/></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formPhysics">
                            <Form.Label column sm={2}>Physics Marks</Form.Label>
                            <Col sm={10}><Form.Control type="number" min="0" max="100" name="Physics" placeholder="Enter Physics marks" required/></Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formChemistry">
                            <Form.Label column sm={2}>Chemistry Marks</Form.Label>
                            <Col sm={10}><Form.Control type="number" min="0" max="100" name="Chemistry" placeholder="Enter Chemistry marks" required/></Col>
                        </Form.Group>
                        <br/>
                        <Button variant="primary" size="lg" type="submit">Add Record</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        </div>
    );

    }
}

export default Studentrecord;
