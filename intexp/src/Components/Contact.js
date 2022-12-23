import React from 'react'

const Contact = () => {
    return (
        <div className='Contact' >
            <h1 className='contact-title'>Contact Us</h1>
            <h2 className='contact-add'>Address</h2>
            <p className='contact-addr'>Dr. Akhilesh Das Gupta Institute of Technology & Management FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park, Shahdara, New Delhi, Delhi 110053</p>
            <form className='contact-form'>
                <h2>Feedback Form</h2>
                <label for="">Query Title</label>
                <input type="text" placeholder='Type Here'/>
                <label for="">Email</label>
                <input type="text" placeholder='Type Here'/>
                <label for="">Contact Number</label>
                <input type="text" placeholder='Type Here'/>
                <label for="">Drop Your Suggestions</label>
                <textarea rows="10" cols="50"></textarea>
                <button type="submit">Submit</button>
            </form> 
        </div>
    )
}

export default Contact