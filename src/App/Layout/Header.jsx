import React, { useState } from 'react'
const Header = () => {
  const [headersticky, setheadersticky] = useState(false)

  function setFixed() {
    if (window.scrollY > 100) {
      setheadersticky(true);
    } else {
      setheadersticky(false);
    }
  }
  window.addEventListener("scroll", setFixed);



  return (
    <>
      <section className={headersticky ? "heasdermainactv" : "heasdermain"}>
        <div className='custcontainer'>
          <div className='headerdivmain'>
            <div className='headerbarsearch'>
              <div className='barheader'>
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className='inputdivheader'>
                <input type="text" placeholder='Search Here...' />
                <div className='inputsearch'>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
            </div>

            <div className='headerotherdetails'>
                <div className=''>

                </div>
            </div>

          </div>
        </div>
      </section>



    </>
  )
}

export default Header
