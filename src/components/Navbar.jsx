import { useEffect ,useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import '../assets/css/homecss.css'






function NavBar() {
  //console.log(localStorage.getItem('user:token'));
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user:detail')))
  console.log('user:detail',user.fname);
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">The Third Eye</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="/general">General</Nav.Link>
            
            <Nav.Link href="/business">Business</Nav.Link>
            <Nav.Link href="/entertainment">Entertainment</Nav.Link>
            <Nav.Link href="/health">Health</Nav.Link>
            <Nav.Link href="/science">Science</Nav.Link>
            <Nav.Link href="/sports">Sports</Nav.Link>
            <Nav.Link href="/technology">Technology</Nav.Link>
       {
                       !(localStorage.getItem('user:token'))?<><Link to='/login'><button>Login</button></Link> <Link to='/register'><button>Register</button></Link> </> : <div className='welcome'> <h4>Welcome {user.fname}</h4> </div>

       }

           
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;