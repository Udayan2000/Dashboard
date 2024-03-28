import React, { useEffect, useRef, useState } from 'react'
import Faqs from '../Dashboard/Faqs'

const Home = () => {
    const[isopen,setIsopen]=useState(false);
    const[showbtn,setShowbtn]=useState(false)
const hadleClick=()=>{
    setIsopen(!isopen)
};
const ref=useRef(null)
useEffect(()=>{
    console.log("useRef" ,useRef)
    if(ref.current){
        setShowbtn(ref.current.scrollHeight !== ref.current.clientHeight) 
    }
},[showbtn])
    const faqslist = [
        {
            id: 1,
            questions: "About YourSelf",
            Answers: "I am Udayan Ghosh. I am a Frontend Developer. I Want to be a FullStack Developer"
        },
        {
            id: 2,
            questions: "What is Lorem Ipsum?",
            Answers: "This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text."
        },
        {
            id: 3,
            questions: "What is Lorem Ipsum?",
            Answers: "This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text."
        },
        {
            id: 4,
            questions: "What is Lorem Ipsum?",
            Answers: "This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text."
        },
    ]
    return (
        <>
            <section className='faqssectionmain'>
                <div className='custcontainer'>
                    <p className='faqslist'>List Of Faq's</p>
                    <div className='faqsmainflx'>
                        {faqslist.map((item, index) => {
                            return (
                                <Faqs key={index} id={item.id} {...item} />
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='blogcard'>

                <p className={isopen?"":"txt"} ref={ref}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus atque iure necessitatibus similique nobis sint, laboriosam voluptatum. Quos expedita nesciunt, possimus corporis quis odio vitae saepe magni commodi nisi ratione voluptates quasi inventore libero maxime eveniet sapiente minima hic harum adipisci porro sint. Repellat doloribus alias quae fugit assumenda voluptatem, sit, itaque omnis architecto consectetur iste cum eius quia. Ipsam quisquam quo iusto similique earum numquam voluptate placeat laborum accusamus nostrum sapiente necessitatibus rerum minima, sit eligendi magnam expedita perferendis itaque eveniet maxime quasi repellat alias? Adipisci sint suscipit eligendi sed at harum beatae perspiciatis nam, repudiandae delectus non facilis? Praesentium amet pariatur natus dignissimos! Neque, odio dolorem facere veritatis deserunt qui harum odit corrupti sequi aliquid. Fugit, incidunt eligendi nisi natus iusto provident consequatur reprehenderit nostrum asperiores! Provident rem quod, odit corporis esse explicabo dolorem optio nobis exercitationem blanditiis! Fuga, id dolore. Cum itaque explicabo ullam adipisci, repellendus illum ea minima? Dolores, architecto voluptatem! At adipisci, pariatur, a, perferendis laudantium maxime illo rem aliquam animi labore quo. Rem nesciunt modi, quia earum sequi reprehenderit assumenda perspiciatis adipisci voluptatem autem consequatur iusto maiores saepe repudiandae itaque magni sapiente. Laudantium quam, ratione quia dignissimos in quaerat. Sapiente voluptates voluptate ex sit!
                </p>
                {showbtn &&
                <button onClick={hadleClick} >{isopen?"read less":"read more"}</button>}
            </section>

        </>
    )
}

export default Home
