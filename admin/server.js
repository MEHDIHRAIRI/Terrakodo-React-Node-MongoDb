const mysql = require("mysql");
const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const router = require("./routes/tasks");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'terrakodo'
});

db.connect((err)=>{
    if(err){
        console.log(err);
    }
})

app.listen('5000', () => {
    console.log("server listening on Port 5000");
})

app.get("/Task/Add", (req,res)=>{
        let task = req.body
        console.log("body: ",req.body);
        let sql = 'INSERT INTO tasks SET ?'
        let query = db.query(sql, task, (err, result)=>{
            if(err) {console.log(err);}
            console.log(result);
            res.send('task added')
        }) 
})

app.get("/Tasks", (req,res)=>{
        let sql = 'SELECT * FROM tasks'
        let query = db.query(sql, (err, result)=>{
            if(err) {console.log(err);}
            console.log(result);
            res.send('List of tasks')
    })
})

app.get("/Task/:id", (req,res)=>{
    let sql = `SELECT * FROM tasks WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result)=>{
        if(err) {console.log(err);}
        console.log(result);
        res.send('task with id: '+ req.params.id)
    })
})

app.get("/Task/Update/:id", (req,res)=>{
    let newTask = req.body;
    let sql = `UPDATE tasks SET ? WHERE id = ${req.params.id}`
    let query = db.query(sql, newTask, (err, result)=>{
        if(err) {console.log(err);}
        console.log(result);
        res.send('task with id: '+ req.params.id + ' updated')
    })
})

app.get("/Task/Delete/:id", (req,res)=>{
    let sql = `DELETE FROM tasks WHERE id = ${req.params.id}`
    let query = db.query(sql, (err, result)=>{
        if(err) {console.log(err);}
        console.log(result);
        res.send('task with id: '+ req.params.id + ' deleted')
    })
})