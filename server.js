const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'task_manager'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database with connection id ' + connection.threadId);
});

app.get('/tasks', (req, res) => {
  const sql = 'SELECT * FROM tasks';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.post('/task', (req, res) => {
  const { title, description, completed } = req.body;
  const sql = 'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?)';
  connection.query(sql, [title, description, completed], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'SELECT * FROM tasks WHERE id = ?';
  connection.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.send(results[0]);
  });
});

app.patch('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const { title, description, completed } = req.body;
  const sql = 'UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?';
  connection.query(sql, [title, description, completed, id], (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.delete('/tasks/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM tasks WHERE id = ?';
  connection.query(sql, [id], (error, results) => {
    if (error) throw error;
    res.send(results
