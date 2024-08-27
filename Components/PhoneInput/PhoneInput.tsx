"use client"
import { useEffect, useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface PropsI{
  phoneValue?:any
getValue:(val:string)=>void
}
export const PhoneNumber = ({getValue,phoneValue}:PropsI) => {
  const [phone, setPhone] = useState(phoneValue || "");

  
  useEffect(()=>{
    setPhone(phoneValue)
  },[phoneValue])

  return (
    <div>
      <PhoneInput
      placeholder='Phone'
        defaultCountry=""
        value={phone}
        onChange={(phone) =>{ setPhone(phone)
            getValue(phone)}

        }
      />
    </div>
  );
};