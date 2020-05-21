const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const path = require('path')
const nodeoutlook = require('nodejs-nodemailer-outlook')

const PORT = process.env.PORT || 5000

var app = express()

app.use('/', express.static('build'))

const connection = mysql.createConnection({
	host: 'host_name',
	user: 'user_name',
	password: 'password_for_db',
	database: 'database_name'
});

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
    console.log("is it")
})


app.get('/api/get', function (req, res, next) 
{     
    // res.end(JSON.stringify(fetcher.data))
    connection.query('SELECT * FROM comments',function(err, result){
        if (err) 
        {
            console.log(err);
            res.status(500).end();
        } else 
        {
            res.end(JSON.stringify(result))
        }
    });
    
    // console.log("requested "+req.url)
})

app.post('/api/post', function(req, res, next)
{
    console.log("Data recieved people!")
    let content = req.body
    // adder.inserter(req.body)
    var sql = `INSERT INTO comments (name, email, body, time) VALUES ('${content.namae}', '${content.emailId}', '${content.body}', '${content.time}')`;
        connection.query(sql, function (err, result)
        {
            if (err)
                console.log(err)

            // console.log("1 record inserted");
            
        });
})

app.post('/api/mailsend', function (req, res, next) 
{
    nodeoutlook.sendEmail({
        auth: {
            user: "email_id",
            pass: "password_for_emailid"
        },

        from: 'from address',   //have to be same as auth.user
        to: 'to address',
        subject: `${req.body.subject}`,
        html: `<h2>A mail from ${req.body.namae} of E-mail ID ${req.body.emailId}</h2>
                <p>${req.body.body}<p>`,
        
        onError: (e) => console.log(e),
        onSuccess: (i) => {
            console.log(i)
            nodeoutlook.close()
        } 
    });
})
 
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))