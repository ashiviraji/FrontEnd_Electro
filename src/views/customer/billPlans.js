import React from 'react';
import '../../assets/css/Customer/billPlans.css';

import BillPlansPage from './../../components/Customer/billPlans';

export default  function billPlans() {
    return(
        <div>
              <div id="bill-plans-title-heading">
                <label>My bill Plans</label>
            </div>
      {/* <div className="container-fluid d-flex justify-content-center"> */}
      <div className="billPlan-main">
         < BillPlansPage/>
          </div>
          </div>
    //   </div>
      
    );

}