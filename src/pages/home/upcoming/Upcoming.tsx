import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../switchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../carousel/Carousel';
import "./style.scss"

const Upcoming = () => {
  
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/upcoming`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper className="contentWrapper">
                <span className="carouselTitle">Upcoming</span>
                <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
}

export default Upcoming
