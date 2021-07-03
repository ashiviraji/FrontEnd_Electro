import React from 'react';
import {Card} from "react-bootstrap";
import {Form} from "react-bootstrap";




const TOUSuggestions = () =>{
    const cardInfo =[
        {Applicance:"Television",Quantity:"1",Suggestion1:"Transfer to time peak to off-peak",Save:"200"},
        {Applicance:"Radio",Quantity:"2",Suggestion1:"Transfer to time peak to day",Save:"100"},
        {Applicance:"Celling Fan",Quantity:"3",Suggestion1:"Transfer to time peak to off-peak",Save:"300"},
        {Applicance:"Washing Machine",Quantity:"1",Suggestion1:"Transfer to time peak to off-peak",Save:"400"},
    ];

    const renderCard =(card,index) =>{
        return(
            
        <Card style={{ width: '40rem' }} key={index} className="box">
            
         <Card.Body  className="card-body">
            <Card.Title>Device Name &nbsp;:&nbsp;&nbsp;{card.Applicance}</Card.Title>
            <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Quantity &nbsp;:</Form.Label>
             <Form.Label>&nbsp;&nbsp;{card.Quantity}</Form.Label>
             </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Suggestion 1 &nbsp;:</Form.Label>
             <Form.Label className="suggestions">{card.Suggestion1}</Form.Label>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
             <Form.Label>Save Amount (LKR) &nbsp;:</Form.Label>
             <Form.Label>&nbsp;&nbsp;{card.Save}</Form.Label>
             </Form.Group>
            
            
         
         </Card.Body>
    </Card>

        );
    };
    return (
       
      <div className="grid">{cardInfo.map(renderCard)}</div>
       

    )
}

export default TOUSuggestions;
