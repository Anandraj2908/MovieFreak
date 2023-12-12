import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../carousel/Carousel';
import "./style.scss"

const Popular = () => {
  
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/popular`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movie" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper className="contentWrapper">
                <span className="carouselTitle">Popular</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
}

export default Popular
