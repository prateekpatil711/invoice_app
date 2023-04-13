import React from 'react'

export default function CompanyDetails() {
  const handlePrint = () => {
    window.print();
  }; 
  return (
    <div>
        <footer>
            <ul>
                <li>Email: prananpra@gmail.com</li>
                <li>Mobile NUmber : 9980907030</li>
                <li>Fax : 514646611</li>
            </ul>
            <div>
            <ul className="flex items-center justify-center flex-wrap">
                <li><button onclick={handlePrint} className="btn btn-print m-2">Print</button></li>
                <li><button className="btn btn-download m-2">Download</button></li>
                <li><button className="btn btn-share m-2">Share</button></li>
            </ul>
            </div>
        </footer>
    </div>
  )
}
