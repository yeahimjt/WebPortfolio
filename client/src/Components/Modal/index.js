import "./index.scss";
import {React,useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExpand} from "@fortawesome/free-solid-svg-icons";

function Modal({closeModal}) {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(current=>!current)
    }

    return (
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close" onClick={() => closeModal(false)}>&times;</span>
                <p className="modal-heading">Fill out an e-mail to send to me</p>
                <hr></hr>
                <form>
                    <div className="user-name">
                        <label for="fname">
                            First name
                        <input type="text" id="fname"></input>
                        </label>
                        <label for="lname">
                            Last name
                        <input type="text" id="lname"></input>
                        </label>
                    </div>
                    <div className="user-email">
                        <label for="email">
                            Email<br/>
                        <input type="text" id="email"></input>
                        </label>
                    </div>
                    <div className="user-subject">
                        <label for="subject">
                            Subject<br/>
                        <input type="text" id="subject"></input>
                        </label>
                    </div>
                    <div className="user-content">
                        <label for="content">
                            Content<br/>
                        <div className="inside-textarea" style={{
                                    width: isActive ? '60%' : '100%',
                                    position: isActive ? 'absolute' : 'relative',
                                    top: isActive ? '16%' : '', 
                                    left: isActive ? '20%' : '',
                            }}> 
                            <textarea type="freeform" id="content" 
                                style={{
                                    height: isActive ? '565px' : '290px',
                                }}>

                            </textarea>
                            <div className="divBtn" onClick={handleClick}><FontAwesomeIcon className="expand"icon={faExpand}/></div>
                        </div>   
                        </label>
                    </div>
                    <button className="sendBtn"><p>Send</p></button>
                    
                </form>
            </div>
        </div>
    );

}

export default Modal