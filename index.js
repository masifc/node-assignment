var express = require('express');
var app = express();
var dbConn = require('./config/db_config');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: false
 }));
 app.use(bodyParser.json());

app.get('/', function (req, res) {
    // query to the database and get the records
    dbConn.query('select * from userTable', function (err, recordset) {

        if (err) {
            console.log(err)
            res.send("Query error");
        }

        // send records as a response
        res.send(recordset);

    });

});


app.post(('/', function(req,res){
    console.log("Post")
    // query to the database to add the records
    var queryText = `INSERT INTO userTable (id,username, password,email) Values(${req.id,req.username,request.password,req.email}) returning *`;
    dbConn.query(queryText, (err, response) =>{
        if( err) {
            console.log(err)
            res.send("Query error");
        }
        res.send(response);
    });
}));


var server = app.listen(5000, function () {
    console.log('Server is running..');
});