const express = require('express');
const app = express();
const port = process.env.port || 5000
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


var nodemailer = require('nodemailer')
app.post('/api/send-email', (req,res)=> {
    let data = req.body
    console.log("HERE")
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port:465,
        auth: {
          user: 'jonathanandrewtrevino@gmail.com',
          pass: 'alfhcmtrkdxkltju'
        }
      });
      
      var mailOptions = {
        from: data.email,
        to: 'jonathanandrewtrevino@gmail.com',
        subject: "WEB-CONTACT " + data.subject,
        html: `
            <h3>${data.fname} ${data.lname}</h3>
            <h1>${data.email}</h1>
            <h1>Message</h1>
            <p>${data.content}</p>
        `
        
        
        
      };
    
      transporter.sendMail(mailOptions, (error, response)=>{
        if (error) {
          res.send(error)
        } else {
          res.send("Success")
        }
      });
      transporter.close();
  })



  app.listen(port, () => console.log(`Listening on port ${port}`));