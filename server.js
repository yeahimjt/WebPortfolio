const express = require('express');
const app = express();
const port = process.env.port || 6000;
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());


var nodemailer = require('nodemailer')
app.post('/api/send-email', (req,res)=> {
    let data = req.body

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
            <h3>Contact Information</h3>
              <ul>
                <li>Name: ${data.fname} ${data.lname}</li>
                <li>Email: ${data.email}</li>
              </ul>
            <h3>Message</h3>
              <ul>
                <li>${data.subject}</li>
                <li>${data.content}</li>
              </ul>
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