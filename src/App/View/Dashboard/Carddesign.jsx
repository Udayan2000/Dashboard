
import React, { useState } from 'react'

const Carddesign = ({ image, description, text }) => {
    const [verified, setVerified] = useState(false)
    const handleverifiedClick = () => {
        setVerified(!verified)
    }
    const [texticonverified, setTexticonverified] = useState();
    const [texticonnotverified, setTexticonnotverified] = useState(false);
    return (
        <>
            <div className='cardsectiommain'>
                <div className='cardsectiondivimg'>
                    <img src={image} alt="..." />
                </div>
                <div className='carddetilasdiv'>
                    <div className=''>
                        <p className='carddescriptiontxt'>{description}</p>
                    </div>




                    <div className=''>

                        {texticonverified=== texticonnotverified &&
                            
                                <button className='verifddivbtn' onClick={handleverifiedClick}>verified</button>

                        }

                        { texticonverified!== texticonnotverified &&
                                <button className='verifddivbtnn'>Unverified</button>
                            
                        }

                        {texticonnotverified ?
                            <>
                              <div className='crstxtdivflx'>
                                    <div className=''>
                                        <i className="fa-solid fa-chevron-up"></i>
                                    </div>
                                    <p className='cardsectiontxt'>{text}</p>
                                </div>

                            

                            </> :
                            <>
                                  <div className='crstxtdivflx'>
                                    <div className=''>
                                        <i className="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <p className='cardsectiontxt'>{text}</p>
                                </div>
                            </>

                        }
                    </div>






                </div>
            </div>
        </>
    )
}

export default Carddesign
