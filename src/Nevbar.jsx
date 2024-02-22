import React from "react";
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import { NavLink } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Navbar=()=>{
    return(
        <>
            <div className="navcon">
                <div className="logocon">
                    <ThreeDRotationIcon style={{fontSize:"30px",marginRight:"10px",marginTop:"4px"}}/><p className="texts"><span style={{color:"#4aabff"}}>RK</span> Thechinal</p><ThreeDRotationIcon style={{fontSize:"30px",marginLeft:"10px",marginTop:"4px"}}/>
                </div>
                <div className="hiddenover">
                        <ul className="navlist">
                            <li><NavLink to="/" className="navlistele">Home</NavLink></li>
                            <li><NavLink to="/services" className="navlistele">Services</NavLink></li>
                            <li><NavLink to="/about" className="navlistele">About</NavLink></li>
                            <li><NavLink to="/contact" className="navlistele">Contact</NavLink></li>
                        </ul>
                        <DropdownButton id="dropdown-dropdown-button-drop-2" title="Nav Element" className="s_nav" size="sm" style={{fontSize:"13px", background:"#00fff3"}} autoClose="inside">
                            <Dropdown.Item ><NavLink to="/" className="navlistele_s">Home</NavLink></Dropdown.Item>
                            <Dropdown.Item ><NavLink to="/services" className="navlistele_s">Services</NavLink></Dropdown.Item>
                            <Dropdown.Item ><NavLink to="/about" className="navlistele_s">About</NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to="/contact" className="navlistele_s">Contact</NavLink></Dropdown.Item>
                        </DropdownButton>
                </div>
            </div>

        </>
    )
}

export default Navbar;