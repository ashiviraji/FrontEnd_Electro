import React from 'react';
import '../../assets/css/Customer/billPlans.css';
import {RiFileAddLine} from 'react-icons/ri'
import BillPlansPage from './../../components/Customer/billPlans';

export default  function billPlans() {
    return(
        <div>
              <div id="bill-plans-title-heading">
                <label>MY BILL PLANS</label>
               
            </div>
            <button className="add-new-bill-plan"><RiFileAddLine style={{width:'25px',height:'25px'}}></RiFileAddLine><label className="new-bill-text">Add New Bill Plan</label></button>
            
      {/* <div className="container-fluid d-flex justify-content-center"> */}
      <div className="billPlan-main">
         < BillPlansPage/>
          </div>
          </div>
    //   </div>
      
    );

}