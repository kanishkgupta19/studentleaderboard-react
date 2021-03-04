
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Leaderboard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
    this.sortby = this.sortby.bind(this)
  }

  componentDidMount() {
    fetch("https://api.allorigins.win/raw?url=https://studentleaderboard-api.herokuapp.com/students-records/view-all/", {method:'GET'})
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  searchRecords(){
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    console.log("search=>",filter);
    table = document.getElementById("records-table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        if (td[j]) {
          txtValue = td[j].innerHTML;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            break;
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
}

  sortby(e) {
    var field = document.getElementById('sortby').value;
    var order = document.getElementById('order').value; // Asc or Desc
    console.log('The link was clicked.', field, order);
    fetch(`https://api.allorigins.win/raw?url=https://studentleaderboard-api.herokuapp.com/students-records/view/sortby/${order}${field}`, {method:'GET'
      })
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }


  render(){
    const { error, isLoaded, items } = this.state;
    var elem = '';
    if (error) {
      console.log(error);
      elem = <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      elem = <h5 style={{ color:'grey' }}>Loading...</h5>;
    } else {
      var sno=1;
      elem=<table id="records-table" className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Roll No.</th>
                <th>Name</th>
                <th>Maths Marks</th>
                <th>Physics marks</th>
                <th>Chemistry Marks</th>
                <th>Total Marks</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
            {items.map(item => (
              <tr id={item.Id} key={item.id}>
                 <td>{sno++}</td>
                 <td>{item.RollNo}</td>
                 <td>{item.Name}</td>
                 <td>{item.Maths}</td>
                 <td>{item.Physics}</td>
                 <td>{item.Chemistry}</td>
                 <td>{item.Total}</td>
                 <td>{item.Percentage}</td>
              </tr>
            ))}
          </tbody>
          </table>;
    }

    return (
      <div>
        <Container>
          <Card className="mt-5">
            <Card.Header><h2>Students Leaderboard</h2></Card.Header>
            <Card.Body>
            <Row>
              <Col>
                <Form inline>
                    <Form.Label className="my-1 mr-2" htmlFor="sortby">
                      SortBy
                    </Form.Label>
                    <Form.Control defaultValue="Percentage" as="select" className="my-1 mr-sm-2" id="sortby" custom>
                      <option value="Name">Name</option>
                        <option value="RollNo">Roll No</option>
                        <option value="Maths">Maths</option>
                        <option value="Physics">Physics</option>
                        <option value="Chemistry">Chemistry</option>
                        <option value="Total">Total Marks</option>
                        <option value="Percentage">Percentage</option>
                    </Form.Control>
                    <Form.Control as="select"  defaultValue="-" className="my-1 mr-sm-2" id="order" custom>
                      <option value="">Low To High</option>
                      <option value="-">High To Low</option>
                    </Form.Control>
                    <Button type="button" className="my-1" onClick={this.sortby}>
                      Sort
                    </Button>
                </Form>
              </Col>
              <Col>
              <Form inline style={{textAlign:"right"}}>
                    <Form.Control className="my-1 mr-sm-2" id="search-input" placeholder="Search Records" />
                    <Button type="button" className="my-1" onClick={this.searchRecords}>
                      Search
                    </Button>
                </Form>
              </Col>
            </Row>
              <br/>
                {elem}
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}


export default Leaderboard;
