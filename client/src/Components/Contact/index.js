import './index.scss'
import  React ,{Component} from "react"
import Navbar from '../Nav'
import axios from 'axios'





export default class Form extends Component {
    state= {
        fname:'',
        lname:'',
        email:'',
        subject:'',
        content:'',
        sent:false
    }



    // Handle Inputs

   handleFirstName=(e) => {
        this.setState({ 
            fname:e.target.value
        })
    }
    handleLastName=(e) => {
        this.setState({ 
            lname:e.target.value
        })
    }
    handleEmail=(e) => {
        this.setState({ 
            email:e.target.value
        })
    }
    handleSubject=(e) => {
        this.setState({ 
            subject:e.target.value
        })
    }
    handleContent=(e) => {
        this.setState({ 
            content:e.target.value
        })
    }

    // End of Handle Inputs

    formSubmit=(e)=> {
        e.preventDefault();

        let data = {
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            subject:this.state.subject,
            content:this.state.content,
        }
        axios.post('/api/send-email',data)
        .then(res=>{
            console.log('I M HERE');
            this.setState({
                sent:true,
            },this.resetForm())
        }).catch(()=>{
            console.log('message not sent');
        })
    }

    // Reset values

    resetForm=() => {
        this.setState({
            fname:'',
            lname:'',
            email:'',
            subject:'',
            content:''
        })

        setTimeout(()=> {
            this.setState({
                sent:false
            })
        },3000)
    }
    

    render() {
    return (
        <>
            <Navbar/>
            <div className="contact-container">
                <div className="flex-box">
                    <div className="flex-item">
                    <p className="contact-heading">Get in touch.</p>
                    </div>
                    <div className="flex-item">
                    <form  className="contact-form" onSubmit={this.formSubmit}>
                        <div className="user-name">
                            <div className="form-div">
                                <input className="form-input first-name" 
                                type="text"  
                                id="fname" 
                                name="fname" 
                                value={this.state.fname}
                                onChange={this.handleFirstName}
                                placeholder="First name" ></input>
                                <label htmlFor="fname" className="form-label">
                                    First name
                                </label>
                                {/* Somehow display what user submits to ensure it works */}
                            </div>
                            <div className="form-div">
                                <input className="form-input last-name" 
                                type="text"  
                                id="lname" 
                                name ="lname" 
                                value={this.state.lname}
                                onChange={this.handleLastName}
                                placeholder="Last name" ></input>
                                <label htmlFor="lname" className="form-label">
                                    Last name
                                </label>
                            </div>
                        </div>
                        <div>
                            <div className="form-div">
                                <input className="form-input" 
                                placeholder="Email" 
                                name="email"
                                value={this.state.email}
                                onChange={this.handleEmail}></input>
                                <label className="form-label" >Email</label>
                            </div>
                        </div>
                        <div>
                            <div className="form-div">
                                <input className="form-input" 
                                placeholder="Subject" 
                                name="subject"
                                value={this.state.subject}
                                onChange={this.handleSubject}></input>
                                <label className="form-label" >Subject</label>
                            </div>
                        </div>
                        <div>
                            <div className="form-div">
                                <textarea className="form-text-area" 
                                placeholder="Content" 
                                name="content"
                                value={this.state.content}
                                onChange={this.handleContent}></textarea>
                                <label className="form-label-text-area">Content</label>
                            </div>
                        </div>
                        <button className="sendBtn" type="submit">Submit</button>
                        

                        
                    </form>
                    </div>
          
                </div>
            </div>

        </>
    );

}


}
