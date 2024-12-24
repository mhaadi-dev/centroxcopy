"use client"
import IndustryBanner from '@/Components/common/IndustryBanner'
import SearchResultComponent from '@/Components/common/SearchResultComponent'
import { useRouter } from 'next/navigation'
 import React, { useEffect, useState } from 'react'
import LandingLayout from '../../layout'
import SubnavBar from '@/Components/Navbar/SubnavBar'
 
 const page = () => {

    const [showSearchComponent,setShowSearchComponent]=useState(true)
    const router=useRouter()
    

    const toggleSearchComponent=(val:boolean)=>{
        setShowSearchComponent(val)
      }
      useEffect(()=>{
          if(showSearchComponent==false){
               router.push("/blogs")
          }
      },[showSearchComponent])
      const navItems = [
        {
          subNavTitle: "Artificial Intelligence",
          subItems: [
            { subTitle: "AI ethics and bias", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Machine Learning",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "ML Ops",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Generative AI",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        },
        {
          subNavTitle: "Data Annotation",
          subItems: [
            { subTitle: "item 1", link: "" },
            { subTitle: "item 2", link: "" },
            { subTitle: "item 3", link: "" }
          ]
        }
      ];
      
   return (
    
      <>
      <SubnavBar title='Blogs' navItems={[]}/> 
      <SearchResultComponent setShowSearch={toggleSearchComponent} />
       <IndustryBanner heading="Good Stuff is all here" description="We will help you develope what ever you desire in your AI developement. This is a place holder" isBooking btnText="Talk to Our AI Expert" />
      </>
      

    
   )
 }
 
 export default page
 