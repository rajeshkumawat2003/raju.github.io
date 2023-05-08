import React from 'react'
import './home.css';
import TopNav from './TopNav';
import logo from './images/Rajesh.jpg'; // Tell webpack this JS file uses this image

const Home = () => {
  return (
    <div>
      <TopNav />

      <div className='slider'>

        <div className="mainSlider">
          <div className='int_img'>
            <div className="main-self">
              <div className='image'>
                <img src={logo} alt="horse" />
              </div>
              <div className="mid-box"></div>
              <div className='self'>

                <h5>Name: Rajesh Jalendhra</h5>
                <h5>Profile: full stack developer</h5>
                <h5>Email: contact@example.com  </h5>
                <h5>Phone: (617) 557-0089</h5>

              </div>
            </div>

            <div className="skills">
              <h3>Skill</h3>
              <p className='skillsName'>HTML 85%</p>
              <div class="container">
                <div class="skill html">80%</div>
              </div>

              <p className='skillsName'>CSS 75%</p>
              <div class="container">
                <div class="skill php">60%</div>
              </div>
              <p className='skillsName'>PHP 75%</p>
              <div class="container">
                <div class="skill php">60%</div>
              </div>
              <p className='skillsName'>JAVASCRIPT 90%</p>
              <div class="container">
                <div class="skill html">80%</div>
              </div>
            </div>


          </div>
          <div className='intro'>
            <h3>About me </h3>
            <p className='bio'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
            <p className='bio'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
            <p className='bio'>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.</p>
          </div>
        </div>
      </div>
      <div className="serveces">

        <h1 className='servic'>SERVICES</h1>

      </div>
    </div>
  )
}

export default Home
