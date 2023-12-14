import React,{useState, useRef} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useSelector } from 'react-redux';
import noImage from "../../../assets/noImage.svg"
import Card from './card/Card';
import "./style.scss"
import { useNavigate } from 'react-router-dom';

const Carousel = ({ data, loading, endpoint}) => {
  
  const {url} = useSelector((state) => state.home);

  const navigate = useNavigate();
  const carouselContainer = useRef();
  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
        dir === "left"
            ? container.scrollLeft - (container.offsetWidth + 20)
            : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
    });
  };

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
        <BsFillArrowLeftCircleFill className='prevBtn' onClick={() => navigation("left")}/>
        <BsFillArrowRightCircleFill className='nextBtn' onClick={() => navigation("right")}/>
        {loading ? (
          <div className="loadingSkeleton">
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
      </div>
        ) : (
          <div className="carouselItems" ref={carouselContainer}>
              {
              data?.map((item) => {
                const posterUrl = item.poster_path? url.poster + item.poster_path:noImage ;
                return(
                <Card className="carouselItem"  key={item.id} imageUrl={posterUrl} item={item} endpoint={endpoint}/>);
              })}
          </div>
          )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel