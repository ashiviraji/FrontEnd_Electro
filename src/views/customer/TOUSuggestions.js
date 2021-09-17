import React from 'react';
import '../../assets/css/TOUSuggestions.css';

//import {IoMdDownload} from "react-icons/io";
import TOUSuggestionsPage from './../../components/Customer/TOUSuggestions';

export default function TOUSuggestions() {

 
  return (
    <div>
      <div className="device-wise-title-TOU">
       TOU SUGGESTIONS
    </div>
    <input  className="download-button" type="Button" value="Download As Pdf"  />
    
   
    <TOUSuggestionsPage />
    </div>



  )
}