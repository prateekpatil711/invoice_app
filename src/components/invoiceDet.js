import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./invoiceDet.css";

export default function InvoiceDet() {
  const [invoiceNo, setInvoiceNo] = useState("");
  const [invoiceTo, setInvoiceTo] = useState("");
  const [invoiceAmount, setInvoiceAmount] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [placeofSupply, setPlaceofSupply] = useState("");
  const [modeOfOrder, setModeOfOrder] = useState("");
  const [vehicleNo, setVehicleNo] = useState("");
  const [driverNumber, setDriverNumber] = useState("");
  const [custGST, setCustGST] = useState("");
  const [custMobile, setCustMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [kilometer, setKilometer] = useState("");

  return (
    <div className="m-3 p-2 ">
      <h3>Invoice Number</h3>
      <div className="m-6 ">
        <TextField className="textfields"
          id="invoiceNo"
          label="Invoice Number"
          type="text"
          variant="standard"
          value={invoiceNo}
          onChange={(e) => {
            setInvoiceNo(e.target.value);
          }}
        />
      </div>
      <h3>Invoice To</h3>
      <div className="m-6 ">
        <TextField className="textfields"
          id="invoiceTo"
          label="Invoice To"
          type="text"
          variant="standard"
          value={invoiceTo}
          onChange={(e) => {
            setInvoiceTo(e.target.value);
          }}
        />
      </div>
      <h3>Invoice Details</h3>
      <div className="m-6  flex flex-wrap justify-between">
        <div>
          <TextField className="textfields"
            InputLabelProps={{ shrink: true }}
            id="invoiceDate"
            label="Invoice Date"
            type="date"
            variant="standard"
            value={invoiceDate}
            onChange={(e) => {
              setInvoiceDate(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField className="textfields"
            id="placeofSupply"
            label="Place Of Supply"
            type="text"
            variant="standard"
            value={placeofSupply}
            onChange={(e) => {
              setPlaceofSupply(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField className="textfields"
            id="modeOfOrder"
            label="Mode Of Order"
            type="text"
            variant="standard"
            value={modeOfOrder}
            onChange={(e) => {
              setModeOfOrder(e.target.value);
            }}
          />
        </div>
      </div>
      <h3>Customer Details</h3>
      <div className="m-6  flex flex-wrap justify-between">
        <div>
          <TextField className="textfields"
            id="custGST"
            label="Customer GSTIN"
            type="text"
            variant="standard"
            value={custGST}
            onChange={(e) => {
              setCustGST(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField className="textfields"
            id="custMobile"
            label="Customer Mobile"
            type="text"
            variant="standard"
            value={custMobile}
            onChange={(e) => {
              setCustMobile(e.target.value);
            }}
          />
        </div>
      </div>
      <h3>Vehicle Details</h3>
      <div className="m-6 flex flex-wrap justify-between">
        <div>
          <TextField className="textfields"
            id="vehicleNo"
            label="Vehicle Number"
            type="text"
            variant="standard"
            value={vehicleNo}
            onChange={(e) => {
              setVehicleNo(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField className="textfields"
            id="driverNo"
            label="Driver Mobile"
            type="text"
            variant="standard"
            value={driverNumber}
            onChange={(e) => {
              setDriverNumber(e.target.value);
            }}
          />
        </div>
        <div>
          <TextField className="textfields"
            id="kilometers"
            label="Travelling Distance"
            type="text"
            variant="standard"
            value={kilometer}
            onChange={(e) => {
              setKilometer(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
