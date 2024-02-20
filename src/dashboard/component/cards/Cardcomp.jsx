import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from '@mui/material';
import { FaBed } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { MdGroups2 } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";

export default function Cardcomp() {
  return (
    <div>
    <Container className='d-flex gap-5' style={{flexWrap:"wrap"}}>
    <Card className='card1' style={{ width: '15rem',textAlign:"left",backgroundColor:"#00887a",color:"white",justifyContent:"space-around",display:"flex"}}>
    <Card.Body>
    <div className='d-flex' style={{flexWrap:"wrap",justifyContent:"space-around"}}>
    <FaUserDoctor size={40} />
    <div>
    <Card.Subtitle className="mb-2 ">4</Card.Subtitle>
    <Card.Text>
     DOCTORS
    </Card.Text>
    </div>
    
      </div>
    </Card.Body>
  </Card>
  <Card className='card2' style={{ width: '15rem',textAlign:"left",backgroundColor:"#ec407a",color:"white",justifyContent:"space-around" }}>
  <Card.Body>
  <div className='d-flex' style={{flexWrap:"wrap",justifyContent:"space-around"}}>
  <FaBed size={40}/>
  <div>
    <Card.Subtitle className="mb-2 ">19</Card.Subtitle>
    <Card.Text>
     PETIENTS
    </Card.Text>
    </div>
    </div>
  </Card.Body>
</Card>
<Card className='card3' style={{ width: '15rem',textAlign:"left",backgroundColor:"#28b6f6",color:"white",justifyContent:"space-around" }}>
    <Card.Body>
    <div className='d-flex' style={{flexWrap:"wrap",justifyContent:"space-around"}}>
    <MdGroups2 size={45} />
    <div>
      <Card.Subtitle className="mb-2 ">6</Card.Subtitle>
      <Card.Text>
       STAFF
      </Card.Text>
      </div>
      </div>
    </Card.Body>
  </Card>
  <Card className='card4' style={{ width: '15rem' ,textAlign:"left",backgroundColor:"#ff7143",color:"white",justifyContent:"space-around"}}>
  <Card.Body>
  <div className='d-flex' style={{flexWrap:"wrap",justifyContent:"space-around"}}>
  <BsCalendarDate size={40} />
  <div>
    <Card.Subtitle className="mb-2">0</Card.Subtitle>
    <Card.Text>
     APPOINTMENTS
    </Card.Text>
    </div>
    </div>
  </Card.Body>
</Card>
  </Container>
    </div>
  )
}
