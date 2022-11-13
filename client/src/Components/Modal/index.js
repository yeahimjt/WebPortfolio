import "./index.scss";
import {React,useEffect,useState} from "react";
import axios from "axios";

function Modal({closeModal}) {

    
   
    return (
        <>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => closeModal(false)}>&times;</span>
                <p className="modal-heading">Get in touch.</p>
                <form  >
                    <div className="user-name">
                        <div className="form-div">
                            <input className="form-input first-name" type="text" id="fname" name="fname" placeholder="First name"></input>
                            <label htmlFor="fname" className="form-label">
                                First name
                            </label>
                        </div>
                        <div className="form-div">
                            <input className="form-input last-name" type="text" id="lname" name ="lname" placeholder="Last name"></input>
                            <label htmlFor="lname" className="form-label">
                                Last name
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-div">
                            <input className="form-input" placeholder="Email" name="email"></input>
                            <label className="form-label" >Email</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-div">
                            <input className="form-input" placeholder="Subject" name="subject"></input>
                            <label className="form-label" >Subject</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-div">
                            <textarea className="form-text-area" placeholder="Content" name="content"></textarea>
                            <label className="form-label-text-area">Content</label>
                        </div>
                    </div>
                    <button className="sendBtn" type="submit"><a href="/projects"><p>Send</p></a></button>
                    

                    
                </form>
            </div>

        </div>
        </>
    );

}

export default Modal