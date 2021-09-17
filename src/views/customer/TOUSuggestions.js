import React from 'react';
import '../../assets/css/TOUSuggestions.css';

import { BsSearch } from 'react-icons/bs';
import { IoMdDownload } from "react-icons/io";
import { useState } from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable';


//import {IoMdDownload} from "react-icons/io";
import TOUSuggestionsPage from './../../components/Customer/TOUSuggestions';

export default function TOUSuggestions() {

  const [suggestions, setSuggestions] = useState("");

  function downloadPdf() {
    // console.log("akkkkkk", suggestions);
    const columns = [
      { title: "Device Name", field: "Device Name" },
      { title: "Quantity", field: "Quantity" },
      { title: "Total Cost For Device", field: "Total Cost For Device" },
      { title: "Change Time", field: "Change Time" },
      { title: "Suggestion", field: "Suggestion" },
    ]
    const doc = new jsPDF();
    doc.text("Electro Suggestions", 85, 10)
    doc.text("electrosysg11@gmail.com", 75, 20)
    // doc.text("Electro Suggestions", 80, 30)

    doc.autoTable({
      margin: { top: 50 },
      columns: columns.map(col => ({ ...col, dataKey: col.field })),
      body: [
        ['David', 'david@example.com', 'Sweden', 'nnb', 'ccccc'],
        ['David', 'david@example.com', 'Sweden', 'nnb', 'ccccc'],
      ],
    })

    doc.save('suggestions.pdf')
  }

  return (
    <div>
      <div className="device-wise-title-TOU">

       TOU SUGGESTIONS
      </div>
    <input  className="download-button" type="Button" value="Download As Pdf"  />
    
        <TOUSuggestionsPage />
            TOU SUGGESTIONS
      
      <input className="download-button" type="Button" value="Download As Pdf" onClick={() => {downloadPdf() }} />
      <div className="ui search">
        <div className="ui icon1 input">
          <input className="search-bar" type="Text" placeholder="Search Device" />
          <BsSearch className="bsSearch"></BsSearch>
        </div>
      </div>

      <TOUSuggestionsPage setSuggestions={setSuggestions} />

    </div>
   



  )
}