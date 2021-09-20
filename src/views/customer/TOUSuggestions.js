import React from "react";
import "../../assets/css/TOUSuggestions.css";

import { IoMdDownload } from "react-icons/io";
import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link_ from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

//import {IoMdDownload} from "react-icons/io";
import TOUSuggestionsPage from "./../../components/Customer/TOUSuggestions";

export default function TOUSuggestions() {
  const [suggestions, setSuggestions] = useState([]);
  const [billPlanName, setBillId] = useState("");
  const [currentDate, setDate] = useState("");
  const [buttonState, setButtonState] = useState("");

  function downloadPdf() {
    var customerName = document.cookie
      .split(";")
      .map((cookie) => cookie.split("="))
      .reduce(
        (accumulator, [key, value]) => ({
          ...accumulator,
          [key.trim()]: decodeURIComponent(value),
        }),
        {}
      ).name;

    const doc = new jsPDF();
    doc.text("Electro Suggestions", 85, 10);
    doc.text("electrosysg11@gmail.com", 75, 20);

    var custName = "Customer Name : " + customerName;
    doc.text(custName, 20, 40);

    var plan = "Name of Your Plan : Bill Plan" + billPlanName;
    doc.text(plan, 20, 50);

    

    var newdate = "Date Printed : " + currentDate;
    doc.text(20, 60, newdate);
    var rows = [];
    var col = [
      "Device Name",
      "Quantity",
      "Total Cost For Device",
      "Save Amount",
      "Current Time",
      "Change Time",
    ];

    suggestions.forEach((element) => {
      var temp = [
        element.appliance,
        element.quantity,
        element.total_cost_TOU,
        element.save_amount,
        element.cur_time,
        element.change_time,
      ];

      rows.push(temp);
    });

    doc.autoTable(col, rows, {
      startY: 80,
      columnStyles: {
        0: { cellPadding: 8 },
        1: { cellPadding: 8 },
        2: { cellPadding: 8 },
        3: { cellPadding: 8 },
        4: { cellPadding: 8 },
        5: { cellPadding: 8 },
      },
    });

    doc.save("suggestions.pdf");
  }

  return (
    
    <div>
      <Breadcrumbs aria-label="breadcrumb" style={{marginTop: '2rem',marginLeft: '2rem'}} separator={<NavigateNextIcon fontSize="small" />}>
        <Link_ underline="hover" color="blue" href="/my-bill-plans">
          My Bill Plans
        </Link_ >
        <Link_ underline="hover" color="blue" href={`/bill-comparison?bill_id=${billPlanName}`}>
          More Details
        </Link_ >
        <Typography color="text.primary">Suggestions</Typography>
      </Breadcrumbs>
      <div className="device-wise-title-TOU">
        <h2>
          <b>TOU SUGGESTIONS</b>
        </h2>
      </div>

      {/* <input className="download-button" type="button" value="Download As Pdf" onClick={() => { downloadPdf() }} /> */}

      <button
        type="button"
        className="btn download-button"
        onClick={() => {
          downloadPdf();
        }}
        disabled={buttonState}
      >
        Download As Pdf
      </button>
     

      <TOUSuggestionsPage setSuggestions={setSuggestions} setBillId={setBillId} setButtonState={setButtonState} setDate={setDate} />

   
    </div>
  );
}
