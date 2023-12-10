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

const Carousel = ({title}) => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
      setEndpoint(tab === "Day" ? "day" : "week");
  };

  const {url} = useSelector((state) => state.home)
  
  return (
    <div className="carouselContainer">
      <ContentWrapper>
      <BsFillArrowLeftCircleFill className='prevBtn'/>
        <BsFillArrowRightCircleFill className='nextBtn'/>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className="carouselItems">
              {
              data?.results?.map((item) => {
                const posterUrl = item.poster_path? url.poster + item.poster_path:noImage ;
                return(<Card className="carouselItem" key={item.id} image={posterUrl}/>);
                
              })}
          </div>
          )}
        
      </ContentWrapper>
    </div>
  )
}

export default Carousel


// {data?.map((item)=>{
//   const posterUrl = item.poster_path? url.poster + item.poster_path:noImage ;
//   return(
//       <Card imageUrl={posterUrl}/>
//   );

// })}