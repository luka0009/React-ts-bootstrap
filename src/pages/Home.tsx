import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 style={{ textAlign: 'center', margin: '40px 0px' }}>
            Hello, This is Luka's Book Store
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 style={{ textAlign: 'center' }}>
            Happy <Link to='/store' style={{ textDecoration: 'underline', color: '#007bff' }}>Shopping</Link>
          </h2>
        </Col>
      </Row>
    </Container>
  );
}
// import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <>
//     <h1>
//       Hello, This is Luka's Book Store
//     </h1>
//     <h2>Happy <Link to='/store' style={{textDecoration: 'underline'}}>Shopping</Link></h2>
//     </>
//   )
// };
