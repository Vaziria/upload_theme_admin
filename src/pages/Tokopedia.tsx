import React from 'react'


export default function Tokopedia(){
    return <div>
        <iframe
            src='http://localhost:5000/tokopedia/'
            // allowFullScreen={true}
            // seamless={true}
            style={{
                display: "block"  ,     /* iframes are inline by default */
                background: "#000",
                border: "none",         /* Reset default border */
                height: "100vh",        /* Viewport-relative units */
                width: "83vw",
            }}
        ></iframe>
    </div> 
}