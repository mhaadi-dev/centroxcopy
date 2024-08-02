"use client"
import { useEffect } from 'react';
export default function HubSpotForm() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(script);
 
      script.addEventListener('load', () => {
         if(window.hbspt) {
            window.hbspt.forms.create({
               portalId: '46946787',
               formId: '14afa6bc-ac3b-4980-9de2-a7874fa6b1f5',
               target: '#hubspotForm'
            });
         }
      });
      console.log("asdad")
    }, []);
 
    return (
       <div id="hubspotForm" className="hubspotForm">





         <div className='text-white '>sadsadsad</div>
       </div>
    );
 }