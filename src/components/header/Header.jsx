import React, {useState, useEffect} from 'react'
import "./style.scss"
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { useNavigate, useLocation } from 'react-router-dom';

//icons
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [show, setShow] = useState("top");
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showSearch, setShowSearch] = useState("");
    const navigate = useNavigate();

    const openSearch = () => {
      setMobileMenu(false)
      setShowSearch(true)
    }

    const openMobileMenu = () => {
      setMobileMenu(true)
      setShowSearch(false)
    }

    const [searchInput, setSearchInput] = useState('');
    const handelSubmit = () => {
      if(searchInput.length>0){
        navigate(`/search/${searchInput}`)
      }
    }

    const navigationHandler = (type) => {
      if (type === "movie") {
          navigate("/explore/movie");
      } else {
          navigate("/explore/tv");
      }
      setMobileMenu(false);
    };

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src='movieLogo.jpeg' onClick={() => navigate("/")} />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={()=>{navigationHandler("movie")}}>Movies</li>
          <li className="menuItem" onClick={() => {navigationHandler("tv")}}>TV Shows</li>
          <li className="menuItem"><HiOutlineSearch onClick={openSearch}/></li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
        </div>

      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <form className='searchInput' onSubmit={handelSubmit}>
            <input
            type='text'
            onChange={(e)=>{setSearchInput(e.target.value)}}
            placeholder='Search for a movie or tv show....'
            />
            <VscChromeClose onClick={() => setShowSearch(false)}/>

          </form>
          </ContentWrapper>
        </div>
      )}

    </header>
  )
}

export default Header
