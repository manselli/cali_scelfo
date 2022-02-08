import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import profilo from './profilo.jpg'

export default function Contact() {
    return (
        <div>
            <h1 className='text-center'>Per maggiori informazioni contattami</h1>
            <Container className='d-flex justify-content-center mt-3'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={profilo} />
  <Card.Body>
    <Card.Title>Giacomo Scelfo PT</Card.Title>
    <Card.Text>
      N° telefono:   +39 3338808933
      (disponibile anche su whatsapp)
    </Card.Text>
    <Card.Text>
      e-mail:   giacomo.scelfo@gmail.com
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Container>
        </div>
    )
}
