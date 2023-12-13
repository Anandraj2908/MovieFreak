import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../carousel/Carousel';
import "./style.scss"

const Similar = ({mediaType,id}) => {
  

    const { data, loading, error } = useFetch(`/${mediaType}/${id}/similar`);


    return (
        <div className="carouselSection">
            <ContentWrapper className="contentWrapper">
                <span className="carouselTitle">Similar</span>
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
}

export default Similar
