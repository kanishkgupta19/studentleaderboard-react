import Maincarousel from '../components/Maincarousel';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';



function Home() {
  return (
    <div>
    <Maincarousel/>
      <Container className="py-5">
        <Row>
          <Col>
            <Card>
              <Card.Footer><h3>Add Student Record</h3></Card.Footer>
              <Card.Body style={{textAlign:'center'}}>
                <img src="https://img.icons8.com/color/96/000000/report-card.png"/><br/>
                <Card.Title>Add students marks of students here</Card.Title><br/>
                <a href="/add-student-record"><Button variant="success">Click Here</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col>
          <Card>
              <Card.Footer><h3>Student Leaderboard</h3></Card.Footer>
              <Card.Body style={{textAlign:'center'}}>
                <img src="https://img.icons8.com/color/96/000000/leaderboard.png"/><br/>
                <Card.Title>Shows All records of the students </Card.Title><br/>
                <a href="/leaderboard"><Button variant="success">Click Here</Button></a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
