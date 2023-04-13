import * as React from 'react';

export default function invoiceDetails() {
  return (
    <div className="flex flex-wrap justify-between ">
        <section className="flex items-start justify-start flex-col">
            <h4 className="font-bold">Invoice To:</h4>
        </section>

        <section className="flex items-end justify-end flex-col">
            <ul>
            <li>
                <span><p className="font-bold">Invoice date</p></span>
            </li>
            <li>
                <span><p className="font-bold">Invoice Number </p></span>
            </li>
            <li>
                <span><p className="font-bold">Place Of Supply</p></span>
            </li>
            </ul>
        </section>
    </div>
  )
}
