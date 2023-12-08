import React from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from './switchTabs/SwitchTabs'
import Card from './card/Card'
import "./style.scss"

const Carousel = (props) => {
    const onTabChange = (tab) => {

    }
  return (
    <div className="container">
        <ContentWrapper >
        <div className="head flex justify-between">
            {props.title}
            <SwitchTabs data={["Day","Week"]} onTabChange={onTabChange}/>
        </div>
        <div className="tail flex justify-between">
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
