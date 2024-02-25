import React from 'react'
import {useContext} from "react";
import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import { DarkModeContext } from "../../context/darkmodecontext";
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/authContext';
export const Navbar = () => {

  const {darkMode,toggle}=useContext(DarkModeContext)
  const {currentUser}=useContext(AuthContext)
  return (
    <div className="navbar">
        <div className="left">
            <Link to={"/"} style={{textDecoration:"none"}}>
            <span>Friendify</span>
            </Link>
            <HomeOutlinedIcon/>
            { !darkMode ? <NightlightOutlinedIcon onClick={toggle} /> : <LightModeOutlinedIcon onClick={toggle}/>}
            <AppsOutlinedIcon/>
            <div className="search">
            <SearchOutlinedIcon/>
            <input type="text" placeholder='Search' />
            </div>
        </div>
        <div className="right">
            <PermIdentityOutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsNoneOutlinedIcon/>

            <div className="user">
                <img src={currentUser.profilePic} alt="" />
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}
