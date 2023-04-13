import "./App.css";
import Company from "./components/company.js";
import CompanyDetails from "./components/companyDetails.js";
import Customer from "./components/customer.js";
import InvoiceDetails from "./components/invoiceDetails.js";
import Products from "./components/products.js";
import InvoiceGenerator from "./components/invoiceGenerator.js";
import InvoiceDet from "./components/invoiceDet.js";
import { useState } from "react";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);

  return (
    <div className="m-5 p-5 rounded shadow  appComp">
      {showInvoice ? (
        <div>
          <InvoiceGenerator />
          <Company />
          <InvoiceDetails />
          <Customer />
          <Products />
          <CompanyDetails />

          <div>
            <button
              onClick={() => setShowInvoice(false)}
              className="m-2 w-80 bg-blue-500 text-white py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-trasparent hover:text-black-500 transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col flex-wrap bg-white justify-between">
            <InvoiceDet />
        </div>
      )}
    </div>
  );
}

export default App;
