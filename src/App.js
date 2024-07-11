import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import './App.css';

const firstName = "John"; // Replace this with your first name or keep it empty

function App() {
  return (
    <Container className="mt-5">
      <Card className="card">
        <Card.Body className="card-body">
          <Card.Title><Name /></Card.Title>
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
          <Image />
        </Card.Body>
      </Card>
      <p className="greeting">
        Hello, {firstName ? firstName : 'there'}!
      </p>
      {firstName && (
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="user-image"
        />
      )}
    </Container>
  );
}

export default App;
