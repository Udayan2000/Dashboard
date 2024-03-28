import React from 'react'

const Blogcard = ({ text,image }) => {

    return (
        <>
            <div className='blogmain'>
                <div className='blogmaintop'>
                    <div className='blogmainimage'>
                        <img src={image} alt="..." />
                    </div>
                </div>
                <div className='blogmainbottom'>
                    <p className='blogtextown'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default Blogcard

