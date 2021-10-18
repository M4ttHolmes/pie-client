import React from "react";
import "./navbar.css";
import piePic from "../../assets/pie.png";
import Logout from "../Logout/Logout"

const Navbar = (props) => {
    return(
        <div>
            <nav>
                <img id="piePic" alt="pie picture" src={piePic} />
                <Logout />
            </nav>
        </div>
    )
}

export default Navbar;