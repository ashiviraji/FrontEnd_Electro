import React, { useEffect, useState } from "react";
import "../../assets/css/billcompare.css";
import { FaThList } from "react-icons/fa";
import  {useHistory}  from 'react-router-dom'
import { Link, useParams } from "react-router-dom";
import Axios from 'axios';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link_ from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


export default function Billcomparison(props) {


  const params = new URLSearchParams(window.location.search)
  const calculatedBillId  = params.get('bill_id');
  console.log(params.get('bill_id'));


  const [calculatedData, setCalculatedData] = useState(" ");


  let history = useHistory();


  async  function getCalculatedData(){

    var token = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).token;


var ParamsUserId = document.cookie
    .split(';')
    .map(cookie => cookie.split('='))
    .reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {}).userId;



    const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-calculated-main-bill/${ParamsUserId}`, {
      
      bill_id:calculatedBillId
  }, {
      headers: {
          authorization: `Token ${token}`
      }
  })
  // console.log(response.data);
  if (response.data.status){
    setCalculatedData(response.data.data)
    
    
  }else {
    console.log(response.data.message);
    history.push("/sign-in");
    window.location.reload();//reload browser
    deleteAllCookies();//delete all cookies
  }
        
  } 

//  console.log("Get calculated data for front end");
    var TOU_cost = "LKR " + calculatedData[0].TOU_bill_cost;
    var fixed_cost = "LKR " + calculatedData[0].fixed_bill_cost;
    var best_model ;
    var fixed_className;
    var TOU_className;
  // console.log(calculatedData[0].TotalUnits);

  if(calculatedData[0].fixed_bill_cost > calculatedData[0].TOU_bill_cost){
    console.log("best = TOU");
    best_model = "TOU";
    TOU_className = "best_model";
    fixed_className = "bad_model";
  }else if(calculatedData[0].fixed_bill_cost == calculatedData[0].TOU_bill_cost){
    console.log("best = Both");
    best_model = "Both";
    TOU_className = "best_model";
    fixed_className = "best_model";
  }else{
    console.log("best = Fixed");
    best_model = "Fixed";
    TOU_className = "bad_model";
    fixed_className = "best_model";
  }
  
  // console.log(calculatedData);

  function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}




  useEffect( async () => {

     await getCalculatedData();
    
    

  },[]);
  console.log("front end bill comparison");
  console.log(calculatedData);

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '2rem',marginLeft: '2rem'}} separator={<NavigateNextIcon fontSize="small" />}>
        <Link_ underline="hover" color="blue" href="/my-bill-plans">
          My Bill Plans
        </Link_ >
        <Typography color="text.primary">More Details</Typography>
      </Breadcrumbs>
      
    <div className="frm-billcomparison">
    <h3 style={{marginLeft: '18%', marginTop: '2rem', marginBottom: '2rem'}}> <b>BILL COMPARISON</b> </h3>
      <div className="grp-billcomparison">
        <div className="text-center main-title ">
          
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className=" card border-success mb-3">
              <div className={TOU_className}> 
              <div className="card-body tou-billcomparison">
                <h5 className="card-title text-center">TOU MODEL</h5>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value= {TOU_cost}
                    required
                    disabled
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className=" card border-success mb-3">
            <div className={fixed_className}>
              <div className="card-body fixed-billcomparison">
                <h5 className="card-title text-center">FIXED MODEL</h5>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value={fixed_cost}
                    required
                    disabled
                  />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-center border-success best-model card mb-3">
          <div className="card-body best">
            <h5> Best Model : {best_model} </h5>
          </div>
        </div>

        <div className="card text-center card border-success device-wise mb-3">
          <div className="card-body usage-of-device">
            <h5 className="card-title">Device Wise Usage</h5>

            <Link
              className="btn btn-success btn-lg btn-tou"
              to={`/tou-device-wise-seperate?bill_id=${calculatedBillId}`}
            >
              TOU Model
            </Link>

            <Link
              className="btn btn-success btn-lg btn-fixed"
              to={`/device-wise-seperate?bill_id=${calculatedBillId}`}
            >
              FIXED Model
            </Link>
          </div>
        </div>

        <div className="card border-success suggestion text-center ">
          <h5> View TOU Suggestions</h5>

          <Link style={{ width:"60%", marginLeft:"19%" }}
            className="btn btn-warning btn-lg btn-suggest"
            to={`/TOU-suggestions?bill_id=${calculatedBillId}`}
          >
            <FaThList /> Suggestions
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
