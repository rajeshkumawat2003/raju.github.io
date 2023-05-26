// import React from 'react'
import './Contact.css';
import React, { useState } from 'react';

export const Contact = () => {
    const [name, SetName] = useState('');
    const [ocup_type, SetOcuptype] = useState('');
    const [OrgName, SetOrgname] = useState('');
    const [email, Setemail] = useState('');
    const [msg, Setmsg] = useState('');


    const onContact = () => {
        console.log(name,ocup_type, OrgName, email, msg);
    }
    return (
        <div>
            <div class="containers">
                <div class="form-container">
                    <div class="left-container">
                        <div class="left-inner-container">
                            <h2>Let's Chat</h2>
                            <p>Whether you have a question, want to start a project or simply want to connect.</p>
                            <br/>
                                <p>Feel free to send me a message in the contact form</p>
                        </div>
                    </div>
                    <div class="right-container">
                        <div class="right-inner-container">
                            {/* <form action="#"> */}
                                <h2 class="lg-view">Contact</h2>
                                <h2 class="sm-view">Let's Chat</h2>
                                <p>* Required</p>
                                <div class="social-container">
                                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                                <input type="text" name="name" id="name" value={name} onChange={(e) => SetName(e.target.value)} placeholder="Name *" />
                                <input type="text" name="ocup_type" id="ocup_type" value={ocup_type} onChange={(e) => SetOcuptype(e.target.value)} placeholder="Ocuption Type *" />
                                <input type="text" name="Org_name" id="Org_name" value={OrgName} onChange={(e) => SetOrgname(e.target.value)} placeholder="Organization/InstuteName" />
                                <input type="email" email="email" id="email" value={email} onChange={(e) => Setemail(e.target.value)} placeholder="Email" />
                                <textarea rows="4" name="msg" id="msg" value={msg} onChange={(e) => Setmsg(e.target.value)}  placeholder="Message"></textarea>
                                <button type='submit' onClick={onContact}>Submit</button>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
