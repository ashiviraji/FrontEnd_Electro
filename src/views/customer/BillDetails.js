// import React, {useState} from 'react';
// import { Paper, makeStyles } from "@material-ui/core";
// import UseTable from "../../components/Customer/UseTable";
// import { TableBody } from "@material-ui/core";
// import { TableCell } from "@material-ui/core";
// import { TableRow } from "@material-ui/core";
// import { InputAdornment } from "@material-ui/core";
// import { TextField } from "@material-ui/core";
// import { Search } from "@material-ui/icons";

// // const useStyles = makeStyles((theme) => ({
// //     pageContent: {
// //       margin: theme.spacing(5),
// //       padding: theme.spacing(3),
// //     }
// //   }));



//   const headCells = [
//     { id: "appliance", label: "Appliance" },
//     { id: "quantity", label: "Quantity" },
//     { id: "power", label: "Power" },
//     { id: "priority", label: "Priority" },
    
//   ];

//   const records = [
//     { appliance:"TV", quantity:"2", power:"400", priority:"mid" },
//     { appliance:"TV", quantity:"2", power:"400", priority:"mid" },
//     { appliance:"TV", quantity:"2", power:"400", priority:"mid" },
//     { appliance:"TV", quantity:"2", power:"400", priority:"mid" },
//     { appliance:"TV", quantity:"2", power:"400", priority:"mid" },
//     { appliance:"TV", quantity:"2", power:"400", priority:"mid" }
    
//   ];
  

  

// export default function BillDetails() {
//     const { TblContainer, TblHead, TblPagination, recordsAfterPagingAndSorting } = UseTable(records, headCells,filterFn);
//     const [filterFn, setFilterFn] = useState({
//         fn: (items) => {
//           return items;
//         },
//       });

//       const handleSearch = (e) => {
//         let target = e.target;
//         setFilterFn({
//           fn: (items) => {
//             if (target.value == "") return items;
//             else
//               return items.filter((x) =>
//                 x.appliance.toLowerCase().includes(target.value)
//               );
//           },
//         });
//       };
//     // const classes = useStyles();
//     return (
//         <div>
//             <h1>Bill details</h1>
//             <Paper>

//             <TextField
//             label="Search Device"
//             className = "Search-bar-in-form"
//             onChange={handleSearch}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="start">
//                   <Search />
//                 </InputAdornment>
//               ),
//             }}
//           />

//             <TblContainer>
//           <TblHead />
//           <TableBody>
//             {recordsAfterPagingAndSorting().map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell>{item.appliance}</TableCell>
//                 <TableCell>{item.quantity}</TableCell>
//                 <TableCell>{item.power}</TableCell>
//                 <TableCell>{item.priority}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </TblContainer>
//         <TblPagination />
//             </Paper>
//         </div>
//     )
// }
