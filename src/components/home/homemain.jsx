import React from "react";
import Form from "./form/form";
import bgImage from "../../assets/form-background.avif";


const Homemain = () => {
  return (
    <>
     
     <div
      className="min-h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Form />
    </div>
    </>
  );
};

export default Homemain;
