import React from 'react'
import { Link} from 'react-router-dom'
import './TopNav.css'

const TopNav = () => {
    return (
        <div class='main-contain'>

            <div class="navBar">
                <input type="checkbox" id="navBar-check" />
                <div class="navBar-header">
                    <div class="navBar-title">
                        Logo
                    </div>
                </div>
                <div class="navBar-btn">
                    <label for="navBar-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div class="navBar-links">
                    <Link to="/Slider">Home</Link>
                    <Link to="/Home">About</Link>
                    <Link to="/Contact">Contact</Link>
                    <Link to="/Experience">Experience</Link>
                    <Link to="/Project">Project</Link>
                </div>

            </div>
          

        </div>
    )
}
export default TopNav


