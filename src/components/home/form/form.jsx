import React from 'react'
import FormLeft from './formleft'
import FormRight from './formright'
const Form = () => {
   return (
    <div className="flex w-full">
      <div className="w-2/5">
        <FormLeft />
      </div>

      <div className="w-3/5">
        <FormRight />
      </div>
    </div>
  )
}

export default Form
