import React, { useRef } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from './switchTabs/SwitchTabs'
import Card from './card/Card'
import { GrFormPrevious,GrFormNext } from "react-icons/gr";
import "./style.scss"


const Carousel = (props) => {
    const onTabChange = (tab) => {

    }
    

  return (
    <div className="contain">
        <ContentWrapper >
        <div className="head flex justify-between mb-4">
            {props.title}
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </div>
        <div className="tail">
          <div className="cardsContainer">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
          <GrFormPrevious className='prevBtn' />
          <GrFormNext className='nextBtn'/>
        </div>
    </ContentWrapper>

    </div>
    
    
  )
}

export default Carousel
