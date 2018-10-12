var express = require('express');
var db = require('../db/db');
var router = express.Router();
var url = require('url');
// var url_parts = url.parse(request.url, true);
// var query = url_parts.query;

// create users
exports.createUsers = function(req, res) {
    
    console.log("entering into createUsers");
    
    // print inputs
    console.log("request body: ", req.body);

    dbConnection = db.getDbConnection();
   
    if(req.body.last_name===undefined )
    {
        req.body.last_name='';
    }
    if(req.body.address===undefined )
    {
        req.body.address='';
    }
    // if(req.body.mobile===undefined )
    // {
    //     req.body.mobile= null;

   
   
    var queryStatement = "insert into users values('"+req.body.first_name+"','"+req.body.last_name+"','"+req.body.email+"','"+req.body.password+"',"+req.body.mobile+",'"+req.body.address+"',0,now(),now())";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
            res.status(500).send(err);	
            	
        } 
        else {
            console.log("success: ",result);
            if(result.affectedRows === 1 ) {
                
                console.log("successfull createUsers");
                res.status(201).send("user has been created successfully");		
            }
        }
        console.log("exiting from createUsers");
    });
}
// get users
exports.getUsers = function (req, res) {

    console.log('req',req);
    console.log("entering into getUsers");
    // var users;
    // users = [{
    //     name:"refrigerator",
    //     price:"22000 INR"
    // },
    // {
    //     name:"iPhone X",
    //     age:"30000 INR"
    // }]
    
    dbConnection = db.getDbConnection();
   
        
//    var adr = 'http://localhost:3000/default.htm?year=2017&email= "+req.query.email+"';

 
//     var q = url.parse(adr, true);
//     console.log(q.search); 
//     var qdata = q.query;
  
//    console.log(qdata.email);


// Task.findById(req.params.email, function(err, result) {
//     if (err)
//       res.send(err);
//     res.json(result);
//   });

    //  var url_parts = url.parse(req.url, true);
    //  var query = url_parts.query;
     var email = req.params.email;
    
    var queryStatement = "select first_name, last_name, email, mobile, address from users where email='"+email+"' and is_archived=0";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
			res.status(500).send(err);		
		} else{
            console.log("success: ",result);
            if(result.length === 0){
                res.status(401).send("no user found");
            } else {
                res.status(200).send(result);
            }
        }
        // else{
        //     console.log("no user found");
        //     res.status(200).send("no user found");
        // }
        console.log("exiting from getUsers");
    });
}

// get users
exports.getAllUsers = function (req, res) {
    console.log("entering into getAllUsers");
    // var users;
    // users = [{
    //     name:"refrigerator",
    //     price:"22000 INR"
    // },
    // {
    //     name:"iPhone X",
    //     age:"30000 INR"
    // }]
    
    dbConnection = db.getDbConnection();
    
    var queryStatement = "select first_name, last_name, email, mobile from users where is_archived=0";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
            res.status(500).send(err);	
        }	
		//  else  {
        //     console.log("success: ",result);
        //     res.status(200).send(result);
        // }
        else{
            console.log("success: ",result);
            if(result.length === 0){
                res.status(401).send("no user found");
            } else {
                res.status(200).send(result);
            }
        }
        // else{
        //     console.log("no user found");
        //     res.status(401).send('no user found');
        // }
        console.log("exiting from getAllUsers");
    });
}

// delete users
exports.deleteUsers = function(req, res) {
    
    console.log("entering into deleteUsers");
    
    // print inputs
    console.log("request body: ", req.body);

    dbConnection = db.getDbConnection();
    var queryStatement = "update users set is_archived=1, updated = now() where email = '"+req.body.email+"' And is_archived=0";
    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
			res.status(500).send(err);		
        } 
        else 
        {
            console.log("in else condition");
            if(result.affectedRows === 1 ) {
                console.log("successfull deleteUsers");
                res.status(200).send("users has been deleted successfully");		
            }
             else{
               console.log("users is not exist");
                res.status(401).send("users is not found");		
                
         }
        }
        console.log("exiting from deleteUsers");
    });
}

// get users for edit
exports.getUsersForEdit = function (req, res) {
    console.log("entering into getUsersForEdit");
    // var users;
    // users = [{
    //     name:"refrigerator",
    //     price:"22000 INR"
    // },
    // {
    //     name:"iPhone X",
    //     age:"30000 INR"
    // }]
    
    dbConnection = db.getDbConnection();
    
    var queryStatement = "select first_name, last_name, email, mobile, address from users where email='"+req.body.email+"' and is_archived=0";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
            res.status(500).send(err);	
        }	
		//  else {
        //     console.log("success: ",result);
        //     res.status(200).send(result);
           
        // }
        else{
            console.log("success: ",result);
            if(result.length === 0){
                res.status(401).send("no user found");
            } else {
                res.status(200).send(result);
            }
        }
        // else{
        //     console.log("no user found");
        //     res.status(401).send('no user found');
        // }
        console.log("exiting from getUsersForEdit");
    });
}


// edit users
exports.editUsers = function(req, res) {
    
    console.log("entering into editUsers");
    
    // print inputs
    console.log("request body: ", req.body);

    dbConnection = db.getDbConnection();
   var queryStatement = "update users set first_name='"+req.body.first_name+"', last_name='"+req.body.last_name+"', mobile="+req.body.mobile+", address='"+req.body.address+"', updated= now() where email='"+req.body.email+"' and is_archived=0";
  // var queryStatement = "update users set first_name='"+req.body.first_name+"', last_name='"+req.body.last_name+"', mobile="+req.body.mobile+", address='"+req.body.address+"', updated= now() where first_name='"+req.body.first_name+"' and is_archived=0";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
			res.status(500).send(err);		
        } 
        else 
        {
            console.log("in else condition");
            if(result.affectedRows === 1 ) {
                console.log("successfull editedUsers");
                res.status(200).send("users has been edited successfully");	
            }
             else{
               console.log("email is wrong");
                res.status(401).send("Users is not found");		
                
         }
        }
        console.log("exiting from editUsers");
    });
}





