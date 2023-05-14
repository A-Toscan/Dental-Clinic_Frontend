import React from "react";
import Appointments from "../appointments/Appointments";
import "../home/Home.scss";


export default function Home() {
  return (
    <div className="Home">
      <div>
      <h1>Welcome to Dent</h1>
      <h2>your favorite dental clinic</h2>
      </div>
      {/* <p>
        please, book an <a src={Appointments}>appointment</a>
       
      </p> */}
    </div>
  );
}
