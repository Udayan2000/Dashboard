import React from 'react'
import { useState } from 'react'
const Faqs = ({ id, questions, Answers }) => {
  const [faqsshows, setFaqsshows] = useState(false);
  const handlefaqClick = () => {
    setFaqsshows(!faqsshows)
  }
  return (
    <>
      <div className="faqsdivbg">
        <div className='faqsquestuonandbuttopniconflx'>
          <p className='faqsquestions'>{questions}</p>
          <button className={faqsshows? "btnminus" : "btnplus"} onClick={handlefaqClick}>
            <i className="fa-solid fa-chevron-down"></i>
          </button>

        </div>
        <div className={faqsshows?"showfaws" : "hidefaqs"}>
            <p className='faqsanswers'>{Answers}</p>
        </div>
      </div>
    </>
  )
}

export default Faqs
