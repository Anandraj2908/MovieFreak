import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from './switchTabs/SwitchTabs'
import Card from './card/Card'
import { GrFormPrevious,GrFormNext } from "react-icons/gr";
import "./style.scss"


const Carousel = (props) => {
    const onTabChange = (tab) => {

    }

  return (
    <div className="container">
        <ContentWrapper >
        <div className="head flex justify-between mb-4">
            {props.title}
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </div>
        <div className="tail mt-4">
          <GrFormPrevious className='prevBtn'/>
          <GrFormNext className='nextBtn'/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
            
        </div>
    </ContentWrapper>

    </div>
    
    
  )
}

export default Carousel
