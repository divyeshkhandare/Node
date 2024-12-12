const express = require("express");

const app = express();

let initialTodo = [
  { title: "HTML", isCompleted: true, id: 1 },
  { title: "javascript", isCompleted: true, id: 2 },
  { title: "React", isCompleted: false, id: 3 },
];
let ids = initialTodo.length +1;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to the todo api");
});

app.get("/todos", (req, res) => {
  res.send(initialTodo);
});

app.post("/addtodo", (req, res) => {
  const { title, isCompleted } = req.body;
  if (!title || isCompleted === "undefined") {
    return res.status(400).send("Title and isCompleted are required");
  }
  const todoid = {
    title,
    isCompleted,
    id: ids++,
  }; 
  initialTodo.push(todoid);
  res.send(todoid);
});

app.patch("/update/:id", (req, res) => {
  let { id } = req.params;
  const data = initialTodo.map((ele) =>
    ele.id == id ? { ...ele, ...req.body } : ele
  );
  initialTodo = data;
  const updatedTodo = initialTodo.find((todo) => todo.id == id);
  res.status(200).send(updatedTodo);
});

app.delete("/delete/:id", (req, res) => {
  let { id } = req.params;
  const index = initialTodo.findIndex((todo) => todo.id == id);
  if (index !== -1) {
    let remove = initialTodo.splice(index, 1)[0];
    res.send({ deletedTodo: remove, todos: initialTodo });
  } else {
    res.send("error");
  }
});

app.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  const todo = initialTodo.find((ele) => ele.id == id);
  if (!todo) {
    return res.status(404).send("not found");
  } else {
    res.send(todo);
  }
});

app.get("/findbystatus", (req, res) => {
  const { isCompleted } = req.query;
  if (isCompleted === "undefined") {
    return res.status(400).send("error");
  }
  const filteredTodos = initialTodo.filter(
    (todo) => todo.isCompleted === true && todo.isCompleted === false
  );
  res.send(filteredTodos);
});

app.listen(8090, () => {
  console.log("Server is running on port 8090");
});
