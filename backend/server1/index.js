const express = require('express')
const app = express()
const axios = require('axios')
const { v4 } = require('uuid')
var mysql = require('mysql2');
app.use(express.json());


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
    database : 'studentdataset',
    port: 3307
  });
   
  connection.connect();


app.get('/', function (req, res) {
    return res.json({
        message: "Let's Begin!"
    })
});

app.post('/students', async(req, res)=>{
    let body = req.body;
    connection.query(
        `SELECT * FROM student`,
        function(err, results, fields) {
            let theIDs = []
            for(let i=0; i<results.length; i++)
            {
                theIDs.push(results[i].STUDENT_ID)
            }
            let newID = Math.max(theIDs) + 1
          connection.query(
            `INSERT INTO student VALUES (
                ${newID},
                "${body['salutation']}",
                "${body['fName']}",
                "${body['lName']}",
                "${body['address']}",
                "${body['zip']}",
                "${body['phone']}",
                "${body['employer']}",
                STR_TO_DATE("January 22 2017", "%M %d %Y"),
                'BROSENZWEIG',
                STR_TO_DATE("August 15 2017", "%M %d %Y"),
                'BROSENZW',
                STR_TO_DATE("August 15 2017", "%M %d %Y"));`,
            function(err, results, fields) {
                console.log(err)
              res.status(201)
              return res.json({
                message: "Student Added Successfully!"
                })
            }
        );
      }
    );
})

app.get('/students', async(req, res)=>{
    connection.query(
        `SELECT * FROM student`,
        function(err, results, fields) {
          return res.json(results)
        }
    );
})

app.get('/student/:id', async(req, res)=>{
    connection.query(
        `SELECT * FROM student where student_id = ${req.params.id}`,
        function(err, results, fields) {
            if(results.length == 0)
            {
                res.status = 404
                return res.json({
                    message: "Invalid ID"
                });
            }
          return res.json(results[0])
        }
    );
})

app.put('/student/:id', async(req, res)=>{

})

app.delete('/student/:id', async(req, res)=>{
    connection.query(
        `Delete FROM student where student_id = ${req.params.id}`,
        function(err, results, fields) {
            res.status(201)
          return res.json({
              message: "Deleted Successfully!"
          })
        }
    );
})

app.listen(5000)