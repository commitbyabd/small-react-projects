import React, { useState, useEffect } from "react";
import FormLeft from "./FormLeft";
import FormRight from "./FormRight";

const Form = () => {
  return (
    <div className="grid md:grid-cols-2 w-full min-h-screen">
      <div className=" animate-slideDown">
        <FormLeft />
      </div>

      <div className=" animate-fadeIn">
        <FormRight />
      </div>
    </div>
  );
};

export default Form;
