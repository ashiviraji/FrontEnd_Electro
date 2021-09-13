import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../../assets/css/TOUSuggestions.css";
import Axios from 'axios';



const TOUSuggestions = (props) => {
  console.log(props);

  const params = new URLSearchParams(window.location.search);
  const calculatedBillId = params.get("bill_id");
  console.log(params.get("bill_id"));

  const [cardInfo, setCardInfo] = useState([]);
  const [devices, setDevices] = useState(cardInfo.slice(0, 15));
  const [pageNumber, setPageNumber] = useState(0);
  const devicesPerPage = 4;
  const pagesVisited = pageNumber * devicesPerPage;

  async function getSuggestionsDetails(newBillId) {

    var ParamsUserId = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
  
  
      // let History = useHistory();
      console.log("call device detail fixed function")
  
      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-suggestions/${ParamsUserId}`, {
          newBillId: newBillId
      }, {
          headers: {
              authorization: `Token ${token}`
          }
      })
  
      return response.data.data;
  
  }

  const displayDivices = cardInfo
    .slice(pagesVisited, pagesVisited + devicesPerPage)
    .map((card, index) => {
      return (
        <Card
          style={{ width: "40rem", height: "12rem" }}
          key={index}
          className="box"
          id="box-card"
        >
          <Card.Body className="card-body">
            <Card.Title>
              Device Name &nbsp;:&nbsp;&nbsp;{card.appliance}
            </Card.Title>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity &nbsp;:</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.quantity}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Suggestion &nbsp;:</Form.Label>
              <Form.Label className="suggestions">
                Change time {card.cur_time} to {card.change_time} and 
                save LKR. {card.	save_amount}
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Save Amount (LKR) &nbsp;:</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.save_amount}</Form.Label>
            </Form.Group>
          </Card.Body>
        </Card>
      );
    });

  const pageCount = Math.ceil(devices.length / devicesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect( async () => {
  
    var suggestions = await getSuggestionsDetails(calculatedBillId);
    setCardInfo(suggestions);
    console.log(suggestions);
  },[]);

  

  return (
    <div className="grid-pagnation" id="paginate-buttons">
      {displayDivices}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        priviousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default TOUSuggestions;
