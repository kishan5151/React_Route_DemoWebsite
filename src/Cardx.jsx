import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cardx=(props)=>{
    return(
        <>
            <Card style={{ width: '23rem',margin:"34px 25px", padding:"10px 5px" ,background: "#444546a8", color: "white"}} className="card">
                <Card.Img variant="top" src={props.img} className=" img-fluid"/>
                <Card.Body>
                  <Card.Title style={{color:"#00fff3"}}>{props.title}</Card.Title>
                  <Card.Text className="para">{props.para}
                  </Card.Text>
                  <Button variant="outlined" href="https://magnificent-hummingbird-6af549.netlify.app/" style={{border:"1px solid #00fff3",color:"#00fff3"}}>Show Demo</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Cardx;