import React from 'react';
import {Card} from "react-bootstrap";
import '../../assets/css/TOUSuggestions.css';

const TOUSuggestions = () =>{
    const cardInfo =[
        {image:"https://homepages.cae.wisc.edu/~ece533/images/airplane.png",title:"Ashika",text:"The goat"},
        {image:"https://homepages.cae.wisc.edu/~ece533/images/arctichare.png",title:"Sithara",text:"He good"},
        {image:"https://homepages.cae.wisc.edu/~ece533/images/boat.png",title:"Siluni",text:"he good"},
        {image:"https://homepages.cae.wisc.edu/~ece533/images/peppers.png",title:"Ashoka",text:"he is very close to goat"},
    ];

    const renderCard =(card,index) =>{
        return(
            <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src="holder.js/100px180"  src={card.image}/>
         <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
             {card.text}
            </Card.Text>
         
         </Card.Body>
    </Card>

        )
    }
    return (
      <div>
      {cardInfo.map(renderCard)}
       </div>
       

    )
}

export default TOUSuggestions;
