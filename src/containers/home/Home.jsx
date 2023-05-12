import React from "react";
import Appointments from "../appointments/Appointments";


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome to Dent, your favorite dental clinic</h2>
      <p>
        please, book an <a src={Appointments}>appointment</a>
       
      </p>
    </div>
  );
}
