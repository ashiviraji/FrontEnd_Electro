import React, { useEffect, useState } from "react";
import "../../assets/css/billcompare.css";
import { FaThList } from "react-icons/fa";
import  {useHistory}  from 'react-router-dom'
import { Link, useParams } from "react-router-dom";
import Axios from 'axios';



export default function Billcomparison(props) {

  const calculatedBillId  = props.location.calculatedBillId;
  console.log("Bill id eka awaaaa" , calculatedBillId )

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



    const response = await Axios.post(`${process.env.REACT_APP_BASE_URL}/get-bill-id/${ParamsUserId}`, {
      
      bill_id:calculatedBillId
  }, {
      headers: {
          authorization: `Token ${token}`
      }
  })
  if (response.data.status){
    setCalculatedData(response.data.data)
    
  }else {
    console.log(response.data.message);
    history.push("/sign-in");
    window.location.reload();//reload browser
    deleteAllCookies();//delete all cookies
  }
        
  } 

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
    
    // const recordDetails = await DeviceBill.getAllDevices(new_bill_id);
    // if(recordDetails==null){
    //   setRecords([]);
    // }else{
    //   setRecords(recordDetails);
    // }
    
    // console.log("inside of useEffect" , recordDetails);

  },[]);


  return (
    <div>
      
    <div className="frm-billcomparison">
      <div className="grp-billcomparison">
        <div className="text-center main-title ">
          <h4> BILL COMPARISON </h4>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card1-billcomparison card border-success mb-3">
              <div className="card-body tou-billcomparison">
                <h5 className="card-title text-center">TOU MODEL</h5>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value="LKR: 4590"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card2-billcomparison card border-success mb-3">
              <div className="card-body fixed-billcomparison">
                <h5 className="card-title text-center">FIXED MODEL</h5>
                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    className="form-control my-3 text-center"
                    value="LKR: 3320"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card text-center best-model card border-success mb-3">
          <div className="card-body best">
            <h5> Best Model : Fixed </h5>
          </div>
        </div>

        <div className="card text-center card border-success mb-3">
          <div className="card-body usage-of-device">
            <h5 className="card-title">Device Wise Usage</h5>

            <Link
              className="btn btn-success btn-lg btn-tou"
              to="/tou-device-wise-seperate"
            >
              TOU Model
            </Link>

            <Link
              className="btn btn-success btn-lg btn-fixed"
              to="/device-wise-seperate"
            >
              FIXED Model
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h5> View TOU Suggestions</h5>

          <Link
            className="btn btn-info btn-lg btn-suggest"
            to="/TOU-suggestions"
          >
            <FaThList /> Suggestions
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
}
