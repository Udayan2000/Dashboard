// import React from 'react'
import Faqs from './Faqs'
import "./Dashboard.css"
import Blogcard from './Blogcard';
import srvc1 from "../../Images/srvc1.jpg";
import srvc2 from "../../Images/srvc2.jpg";
import srvc3 from "../../Images/srvc3.jpg";
import trainingmain2 from "../../Images/trainingmain2.png";
import Carddesign from './Carddesign';

const Dashbord = () => {

    const faqslist = [
        {
            id: 1,
            questions: "What is Lorem Ipsum?",
            Answers: "This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text."
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
    const blogdetails = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam exercitationem. Cum impedit repellat modi deleniti fugiat laboriosam magni animi?",
            image: srvc1,
        },
        {
            id: 2,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam exercitationem. Cum impedit repellat modi deleniti fugiat laboriosam magni animi?",
            image: srvc2,
        },
        {
            id: 3,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam exercitationem. Cum impedit repellat modi deleniti fugiat laboriosam magni animi?",
            image: srvc3,
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, laboriosam exercitationem. Cum impedit repellat modi deleniti fugiat laboriosam magni animi?",
            image: trainingmain2,
        },
    ]

    const cardslist =[
        {
            image:srvc1,
            description:"This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.",
            text:"I am a Udayan Ghosh",
        },
        {
            image:srvc2,
            description:"This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.",
            text:"I am a Udayan Ghosh",
        },
        {
            image:srvc3,
            description:"This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.",
            text:"I am a Uday Ghosh",
        },
        {
            image:srvc2,
            description:"This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.",
            text:"I am a Udayan Ghosh",
        },
        {
            image:srvc3,
            description:"This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.This is a dummy text.",
            text:"I am a Uday Ghosh",
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
                <div className='custcontainer'>
                    <p className='blogtext'>Blog Section</p>
                    <div className='blogsmaingrd'>
                        {blogdetails.map((item, index) => {
                            return (
                                <Blogcard key={index} id={item.id} {...item} />
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className='cardsectiondesignmain'>
                <div className='custcontainer'>
                    <p className='blogtext'>Card Section</p>
                    <div className='faqsmainflx'>
                        {cardslist.map((item, index) => {
                            return (

                                <Carddesign key={index} id={item.id} {...item} />

                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Dashbord
