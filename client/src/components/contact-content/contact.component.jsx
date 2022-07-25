// import { useState } from "react";
import '../../sass/contact-form.style.scss'

const ContactForm = () => {
    return (
        <div className="container">
            <h1>Contact us</h1>
                <div className='formcontainer'>
                <form onSubmit={() => {}}>
                    <label>Name</label>
                    <input type='name' required placeholder="Enter your full name"/>
                    <label>Phone</label>
                    <input type='text' required placeholder="Enter your phone number"/>
                    <label>Email</label>
                    <input type='email' required placeholder="Enter your email address"/>
                    <label>Comment</label>
                    <textarea class="inputtext" name="comment" placeholder="Write us a message"></textarea>
                    <button type="submit">Submit</button>
                </form> 
            </div>
        </div>
      );
}
 
export default ContactForm;