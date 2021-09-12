import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../../assets/css/TOUSuggestions.css";
import Axios from 'axios';


const cardInfo = [
  {
    Applicance: "Television",
    Quantity: "2",
    Suggestion1: "Transfer time from peak to off-peak",
    Save: "200",
  },
  {
    Applicance: "Television",
    Quantity: "2",
    Suggestion1: "Transfer  time  from peak to day",
    Save: "100",
  },
  {
    Applicance: "Celling Fan",
    Quantity: "3",
    Suggestion1: "Transfer time from Day to off-peak",
    Save: "150",
  },
  {
    Applicance: "Washing Machine",
    Quantity: "1",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "400",
  },
  {
    Applicance: "Radio",
    Quantity: "1",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Computer",
    Quantity: "2",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Printer",
    Quantity: "2",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Bulb",
    Quantity: "10",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Table Fan",
    Quantity: "4",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Table Fan",
    Quantity: "4",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Table Fan",
    Quantity: "4",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Table Fan",
    Quantity: "4",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Celling Fan",
    Quantity: "3",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Celling Fan",
    Quantity: "3",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Celling Fan",
    Quantity: "3",
    Suggestion1: "Transfer  time  from peak to off-peak",
    Save: "300",
  },
  {
    Applicance: "Celling Fan",
    Quantity: "3",
    Suggestion1: "Transfer  time from peak to off-peak",
    Save: "300",
  },
];

const TOUSuggestions = (props) => {
  console.log(props);

  const params = new URLSearchParams(window.location.search);
  const calculatedBillId = params.get("bill_id");
  console.log(params.get("bill_id"));

  // const cardInfo = [
  //     { Applicance: "Television", Quantity: "2", Suggestion1: "Transfer time from peak to off-peak", Save: "200" },
  //     { Applicance: "Television", Quantity: "2", Suggestion1: "Transfer  time  from peak to day", Save: "100" },
  //     { Applicance: "Celling Fan", Quantity: "3", Suggestion1: "Transfer time from Day to off-peak", Save: "150" },
  //     { Applicance: "Washing Machine", Quantity: "1", Suggestion1: "Transfer  time from peak to off-peak", Save: "400" },
  //     { Applicance: "Radio", Quantity: "1", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Computer", Quantity: "2", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Printer", Quantity: "2", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Bulb", Quantity: "10", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Table Fan", Quantity: "4", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Table Fan", Quantity: "4", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Table Fan", Quantity: "4", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Table Fan", Quantity: "4", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Celling Fan", Quantity: "3", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Celling Fan", Quantity: "3", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },
  //     { Applicance: "Celling Fan", Quantity: "3", Suggestion1: "Transfer  time  from peak to off-peak", Save: "300" },
  //     { Applicance: "Celling Fan", Quantity: "3", Suggestion1: "Transfer  time from peak to off-peak", Save: "300" },

  // ];

  // const renderCard =(card,index) =>{

  //     return(

  //     <Card style={{ width: '40rem' }} key={index} className="box">

  //      <Card.Body  className="card-body">
  //         <Card.Title>Device Name &nbsp;:&nbsp;&nbsp;{card.Applicance}</Card.Title>
  //         <Form.Group className="mb-3" controlId="formBasicPassword">
  //          <Form.Label>Quantity &nbsp;:</Form.Label>
  //          <Form.Label>&nbsp;&nbsp;{card.Quantity}</Form.Label>
  //          </Form.Group>

  //         <Form.Group className="mb-3" controlId="formBasicPassword">
  //          <Form.Label>Suggestion 1 &nbsp;:</Form.Label>
  //          <Form.Label className="suggestions">{card.Suggestion1}</Form.Label>
  //          </Form.Group>

  //          <Form.Group className="mb-3" controlId="formBasicPassword">
  //          <Form.Label>Save Amount (LKR) &nbsp;:</Form.Label>
  //          <Form.Label>&nbsp;&nbsp;{card.Save}</Form.Label>
  //          </Form.Group>

  //      </Card.Body>
  // </Card>

  //     );
  // };

  const [devices, setDevices] = useState(cardInfo.slice(0, 15));
  const [pageNumber, setPageNumber] = useState(0);
  const devicesPerPage = 4;
  const pagesVisited = pageNumber * devicesPerPage;

  async function getDeviceDetailsFixed(newBillId) {

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
  
      console.log(response.data.data);
      return response.data.data;
  
  }

  const displayDivices = devices
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
              Device Name &nbsp;:&nbsp;&nbsp;{card.Applicance}
            </Card.Title>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity &nbsp;:</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.Quantity}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Suggestion 1 &nbsp;:</Form.Label>
              <Form.Label className="suggestions">
                assss {card.Suggestion1}
              </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Save Amount (LKR) &nbsp;:</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.Save}</Form.Label>
            </Form.Group>
          </Card.Body>
        </Card>
      );
    });

  const pageCount = Math.ceil(devices.length / devicesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

//   useEffect( async () => {
  
//     var devices_data_fixed = await getDeviceDetailsFixed(calculatedBillId);
//     setDevices(devices_data_fixed);
//   },[]);

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
