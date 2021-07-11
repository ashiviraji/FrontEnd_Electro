import React from 'react';
import '../../assets/css/TOUSuggestions.css';
import {BsSearch} from 'react-icons/bs';
import {IoMdDownload} from "react-icons/io";


import TOUSuggestionsPage from './../../components/Customer/TOUSuggestions';

export default function TOUSuggestions() {

 
  return (
    <div>
      <div className="device-wise-title-TOU">
       TOU SUGGESTIONS
    </div>
    
      
       
      
      
   
    <input  className="download-button" type="Button" value="Download As Pdf"  />
    <div className="ui search">
      <div className="ui icon1 input">
    <input  className="search-bar" type="Text" placeholder="Search Device" />
    <BsSearch className="bsSearch"></BsSearch>
    </div>
    </div>
   
    <TOUSuggestionsPage />
    </div>



  )
}