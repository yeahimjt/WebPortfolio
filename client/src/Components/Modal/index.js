import "./index.scss";
import {React,useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Modal({closeModal}) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current=>!current)
    }

    return (
        <>
        <div id="myModal" className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => closeModal(false)}>&times;</span>
                <p className="modal-heading">Get in touch.</p>
                <form>
                    <div className="user-name">
                        <div className="form-div">
                            <input className="form-input first-name" type="text" id="fname" placeholder="First name"></input>
                            <label htmlFor="fname" className="form-label">
                                First name
                            </label>
                        </div>
                        <div className="form-div">
                            <input className="form-input last-name" type="text" id="lname" placeholder="Last name"></input>
                            <label htmlFor="lname" className="form-label">
                                Last name
                            </label>
                        </div>
                    </div>
                    <div>
                        <div className="form-div">
                            <input className="form-input" placeholder="Email"></input>
                            <label className="form-label">Email</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-div">
                            <input className="form-input" placeholder="Subject"></input>
                            <label className="form-label">Subject</label>
                        </div>
                    </div>
                    <div>
                        <div className="form-div">
                            <textarea className="form-text-area" placeholder="Content"></textarea>
                            <label className="form-label-text-area">Content</label>
                        </div>
                    </div>
                    <button className="sendBtn" type="submit"><p>Send</p></button>
                </form>
            </div>
        </div>
        </>
    );

}

export default Modal