import React from "react";
import { useState } from "react";

function LoginPage(){
    const [web,webservice] = useState("")
    const [des,description] = useState("")

    return(
        <div>
            <div>
                <h1>Web Service</h1>
                <p>We provide fast and secure web services to our clients.</p>
            </div>
            <div>
                <h1>Data Analyze</h1>
                <p>We help you reach your audience.</p>
            </div>
        </div>
    )


}


export default LoginPage