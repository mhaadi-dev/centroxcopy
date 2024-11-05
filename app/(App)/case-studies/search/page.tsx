 "use client"
import IndustryBanner from '@/Components/common/IndustryBanner'
import SearchResultComponent from '@/Components/common/SearchResultComponent'
import { useRouter } from 'next/navigation'
 import React, { useEffect, useState } from 'react'
import LandingLayout from '../../layoutPage'
 
 const page = () => {
    const [showSearchComponent,setShowSearchComponent]=useState(true)
    const router=useRouter()
    const toggleSearchComponent=(val:boolean)=>{
        setShowSearchComponent(val)
      }
      useEffect(()=>{
          if(showSearchComponent==false){
               router.push("/case-studies")
          }
      },[showSearchComponent])
   return (
     <LandingLayout subNav>
       <SearchResultComponent setShowSearch={toggleSearchComponent} />
       <IndustryBanner heading="Good Stuff is all here" description="We will help you develope what ever you desire in your AI developement. This is a place holder" isBooking btnText="Talk to Our AI Expert" />

     </LandingLayout>
   )
 }
 
 export default page
 