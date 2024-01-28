import React, { useState } from 'react'
import user from "../../src/Images/user.png"
const Header = () => {
  const [searchclick, setSearchclick] = useState()
  const handlesearchClick = () => {
    setSearchclick(!searchclick)
  }
  const handlesearchdefaultClick = (e) => {
    e.stopPropagation(e)
  }
  return (
    <section className='mainheader'>
      <div className='Custcontainer'>
        <div className='headermaincontent'>
          <div className='header_bar_search'>
            <div className='handbar'>
              <i className="fa-solid fa-bars"></i>
            </div>
            <div className='inputsearchborder' onClick={handlesearchClick}>
              <input type='search' className={searchclick ? "serchdiv " : "divseach"} onClick={(e) => handlesearchdefaultClick(e)} />
              <div className={searchclick ? "searchformicondiv" : "searchformicon"}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
          </div>
          <div className='headerspecialicon'>
            <div className='bell_icon'>
              <i className="fa-regular fa-bell"></i>
              <div className='dot'></div>
            </div>
            <div className='list_icon'>
              <i className="fa-solid fa-list"></i>
              <div className='dot'></div>
            </div>
            <div className='envelope_open'>
              <i className="fa-regular fa-envelope-open"></i>
              <div className='dot'></div>
            </div>
            <div className='profile_border'>
              <div className='profile_main_image'>
                <img src={user} alt="..." />
              </div>
              <div className='dot_green'></div>
            </div>
            <div className='braille_icon'>
              <i className="fa-solid fa-braille"></i>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Header
