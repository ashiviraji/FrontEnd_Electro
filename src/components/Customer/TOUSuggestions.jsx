import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "../../assets/css/TOUSuggestions.css";
import {BsSearch} from 'react-icons/bs';
import Axios from 'axios';
import SearchBar from "material-ui-search-bar";
import { Link } from "react-router-dom";



const TOUSuggestions = (props) => {
  console.log(props);

  const params = new URLSearchParams(window.location.search);
  const calculatedBillId = params.get("bill_id");
  console.log(params.get("bill_id"));

  const [cardInfo, setCardInfo] = useState([]);
  const [devices, setDevices] = useState(cardInfo.slice(0, 10));
  const [pageNumber, setPageNumber] = useState(0);
  const devicesPerPage = 4;
  const pagesVisited = pageNumber * devicesPerPage;
  const [searched,setSearched] = useState("");
  const[searchRecords,setSearchRecords] = useState([]);
  
  
  const requestSearch =  (searchVal) =>{
    console.log("The searsearchVal",searchVal);
    
    const filteredRows =  searchRecords.filter((card) =>{
      console.log("TOU suggestions:",searchRecords);
      return card.appliance.toLowerCase().includes(searchVal.toLowerCase());
    });
    console.log("The filter Row",filteredRows);
    
    
  }

  const cancelSearch = () =>{
    setSearched("");
    requestSearch(searched);
  };

  async function editBillPlan(sugestDetails) {
    var ParamsUserId = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;
  
  
    var token = document.cookie
      .split(';')
      .map(cookie => cookie.split('='))
      .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;
  
      console.log("call sugestions function");

      const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/apply-suggestions/${ParamsUserId}`, {
        sugestDetails: sugestDetails
    }, {
        headers: {
            authorization: `Token ${token}`
        }
    })

    console.log(response.data.data);
    if(response.data.data){
      setCardInfo(response.data.data);
      
     
    }else{
      setCardInfo([]);
      
      
    }
    
  }


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
          style={{ width: "40rem", height: "16.5rem" }}
          key={index + card.suggest_id}
          className="box"
          id={card.suggest_id}
        >
          <Card.Body className="card-body">
          {/* <Link style={{ float:"right" }}  > */}
          <button style={{ float:"right" }} type="button"  className="btn btn-success btn-lg btn-tou" onClick ={ ()  => editBillPlan(card)}>
            Apply
          </button> 
            {/* </Link> */}

            <Card.Title  style={{ height: "2.2rem" }}>
              Device Name &nbsp;:&nbsp;&nbsp;{card.appliance}
            </Card.Title>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Quantity &nbsp;:</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.quantity}</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Total Cost for the Device (LKR) &nbsp;:</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.total_cost_TOU}</Form.Label>
              {/* <Form.Label>&nbsp;&nbsp;{card.can_change_hours}Hours</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.can_change_minutes}Minutes</Form.Label> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Change Time&nbsp;:</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.can_change_hours}Hours&nbsp;&nbsp;&</Form.Label>
              <Form.Label>&nbsp;&nbsp;{card.can_change_minutes}Minutes</Form.Label>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Suggestion &nbsp;:</Form.Label>
              <Form.Label className="suggestions">
                Change time {card.cur_time} to {card.change_time} and 
                save LKR. {card.save_amount}
              </Form.Label>
            </Form.Group>

          </Card.Body>
        </Card>
      );
    });

  const pageCount = Math.ceil(cardInfo.length / devicesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect( async () => {
  
    var suggestions = await getSuggestionsDetails(calculatedBillId);
    console.log(suggestions);
    if(suggestions){
      setCardInfo(suggestions);
      setSearchRecords(suggestions);
    }else{
      setCardInfo([]);
      setSearchRecords([]);
    }
    //console.log(suggestions);
  },[]);

  

  return (
    <div>
  
     <SearchBar className="search-bar"
           value={searched}
           onChange={(searchVal) => requestSearch(searchVal)}
           onCancelSearch={() => cancelSearch()}
            />
    
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
    </div>
  );
};

export default TOUSuggestions;
