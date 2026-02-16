import React from "react";
import Form from "./form/Form";
import bgImage from "../../assets/form-background.avif";


const Homemain = () => {
  return (
    <>
     
     <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Form />
    </div>
    </>
  );
};

export default Homemain;
