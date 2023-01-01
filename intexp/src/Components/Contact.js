import React from 'react'
import './Contact.css'
const Contact = () => {
    return (
        <div className='Contact' >
            <h1 className='contact-title'>CONTACT US</h1>
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

            {/* <iframe src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3911838730146!2d77.25891821508361!3d28.677942682399962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5e54e6b163%3A0x523ae20fe007eccc!2sDr.%20Akhilesh%20Das%20Gupta%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1672492649230!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

        </div>
    )
}

export default Contact