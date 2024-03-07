import React from 'react'


export default function Tokopedia(): JSX.Element {
    return <div>
        <iframe
            src='http://localhost:5000/tokopedia/'
            // allowFullScreen={true}
            // seamless={true}
            style={{     /* iframes are inline by default */
                background: "#000",
                border: "none",         /* Reset default border */
                height: "calc(100vh - 70px)",        /* Viewport-relative units */
                width: "calc(100% + 28px)",
                marginLeft: -14
            }}
        ></iframe>
    </div> 
}