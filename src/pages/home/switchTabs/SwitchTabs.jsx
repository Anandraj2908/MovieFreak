import React from 'react'
import { useState, useEffect } from 'react'
import "./style.scss"

const SwitchTabs = ({data,onTabChange}) => {
    const [selectedTab,setSelectedTab] = useState(0);
    const [left,setLeft] =useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const activeTab = (tab,index) => {
        const transitionDistance = windowWidth > 450 ? 100 : 50;
        setLeft(index * transitionDistance);
        setTimeout(() => {
            setSelectedTab(index);
        }, 300);
        onTabChange(tab, index);
    }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab,index) => (
            <span key={index} 
                className={`tabItem ${selectedTab === index ? "active":""}`}
                onClick={()=> activeTab(tab,index)}>
                {tab}
            </span>
        ))}
        <span className='movingBg' style={{left}}/>
      </div>
    </div>
  )
}

export default SwitchTabs
