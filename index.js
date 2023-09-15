import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
var allTodayTasks = [];
var workTasks = [];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { myNewTask: allTodayTasks });
});

app.post("/allTodayTasks", (req, res) => {
  const newTask = req.body["myNewTask"];

  
  if (!allTodayTasks.includes(newTask)) {
    allTodayTasks.push(newTask);
  }

  res.render('index.ejs', { myNewTask: allTodayTasks });
});



app.get("/WorkTasks", (req, res) => {
  res.render('workTasks.ejs', { myNewTask: workTasks } )
});

app.post("/allWorkTasks", (req, res) => {
  const newWorkTask = req.body["myNewTask"];
  
  if (!workTasks.includes(newWorkTask)) {
    workTasks.push(newWorkTask);
  }

  res.render('workTasks.ejs', { myNewTask: workTasks })
});


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
