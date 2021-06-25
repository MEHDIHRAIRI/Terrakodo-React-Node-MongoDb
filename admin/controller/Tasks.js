const express = require("express");
const mysql = require("mysql")

const getTask = async (req, res) => {
  
};

const createTask = async (req, res) => {
    let task = req.body;
    let sql = 'INSERT INTO tasks SET ?'
    let query = db.query(sql, task, (err, result)=>{
        if(err) {console.log(err);}
        console.log(result);
        res.send('task added')
    }) 
};

const updateTask = async (req, res) => {
  
};

const DeleteTask = async (req, res) => {
  
};

module.exports = { getTask, createTask, updateTask, DeleteTask };
