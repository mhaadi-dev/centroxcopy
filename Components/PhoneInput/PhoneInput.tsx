"use client"
import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

interface PropsI{
getValue:(val:string)=>void
}
export const PhoneNumber = ({getValue}:PropsI) => {
  const [phone, setPhone] = useState('');


  return (
    <div>
      <PhoneInput
        defaultCountry=""
        value={phone}
        onChange={(phone) =>{ setPhone(phone)
            getValue(phone)}

        }
      />
    </div>
  );
};