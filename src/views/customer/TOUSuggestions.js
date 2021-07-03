import React from 'react';
import '../../assets/css/TOUSuggestions.css';



import TOUSuggestionsPage from './../../components/Customer/TOUSuggestions';




export default function TOUSuggestions() {
  return (
    <div>
      <div className="device-wise-title-TOU">
       TOU SUGGESTIONS
    </div>
    <div>
      
       
      
      
   
    <input  className="download-button" type="Button" value="Download As Pdf"  />
      
    </div>
     



      <TOUSuggestionsPage />
    </div>



  )
}