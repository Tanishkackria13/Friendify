import React from 'react'
import "./navbar.scss"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left">
            <Link to={"/"} style={{textDecoration:"none"}}>
            <span>Social</span>
            </Link>
            <HomeOutlinedIcon/>
            <NightlightOutlinedIcon/>
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
                <img src="" alt="" />
                <span>Tanish</span>
            </div>
        </div>
    </div>
  )
}
