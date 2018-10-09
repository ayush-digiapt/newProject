var express = require('express');
var db = require('../db/db');
var router = express.Router();

// create users
exports.createUsers = function(req, res) {
    
    console.log("entering into createUsers");
    
    // print inputs
    console.log("request body: ", req.body);

    dbConnection = db.getDbConnection();
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
    
    var queryStatement = "select first_name, last_name, email, mobile, address from users where email='"+req.body.email+"' and is_archived=0";

    console.log("query to be exectuted:: ",queryStatement);

    dbConnection.query(queryStatement,function(err,result){
		if(err) {
			console.log("error: ",err);
			res.status(500).send(err);		
		} else{
            console.log("success: ",result);
            if(result.length === 0){
                res.status(204).send("no user found");
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
                res.status(204).send("no user found");
            } else {
                res.status(200).send(result);
            }
        }
        // else{
        //     console.log("no user found");
        //     res.status(204).send('no user found');
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
                res.status(204).send("users is not found");		
                
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
    
    var queryStatement = "select first_name, last_name, email, password, mobile, address from users where email='"+req.body.email+"' and is_archived=0";

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
                res.status(204).send("no user found");
            } else {
                res.status(200).send(result);
            }
        }
        // else{
        //     console.log("no user found");
        //     res.status(204).send('no user found');
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
    var queryStatement = "update users set first_name='"+req.body.first_name+"', last_name='"+req.body.last_name+"', password='"+req.body.password+"', mobile="+req.body.mobile+", address='"+req.body.address+"', updated= now() where email='"+req.body.email+"' and is_archived=0";

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
                res.status(200).send("users has been edited successfully",result);	
            }
             else{
               console.log("email is wrong");
                res.status(204).send("Users is not found");		
                
         }
        }
        console.log("exiting from editUsers");
    });
}





