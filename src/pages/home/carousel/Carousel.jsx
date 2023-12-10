import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from 'react-redux';
import noImage from "../../../assets/noImage.svg"
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';
import Card from './card/Card';
import "./style.scss"

const Carousel = ({ data, loading, endpoint, title }) => {

  const {url} = useSelector((state) => state.home);

  const skItem = () => {
    return (
        <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    );
};
  
  return (
    <div className="carouselContainer">
      <ContentWrapper className="contentWrapper">
        <BsFillArrowLeftCircleFill className='prevBtn'/>
        <BsFillArrowRightCircleFill className='nextBtn'/>
        {loading ? (
          <div className="loadingSkeleton">
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
      </div>
        ) : (
          <div className="carouselItems">
              {
              data?.map((item) => {
                const posterUrl = item.poster_path? url.poster + item.poster_path:noImage ;
                return(<Card className="carouselItem" key={item.id} imageUrl={posterUrl} item={item}/>);
                
              })}
          </div>
          )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel