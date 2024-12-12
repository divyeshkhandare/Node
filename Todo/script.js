import Todo from "./Components/api.js";

let Task = [];
let id = null;
console.log(Task);
console.log(id);

const handleSubmit = async (e) => {
  e.preventDefault();
  let todo = {
    taskName: document.getElementById("taskName").value,
    description: document.getElementById("taskDescription").value,
    status: document.getElementById("taskStatus").value,
  };
  if (id) {
    await Todo.patch(id, todo);
    id = null;
    document.getElementById("addTaskBtn").innerText = "Add Task";
  } else {
    await Todo.post(todo);
  }
  GetTask();
};
document.querySelector("#addTaskBtn").addEventListener("click", handleSubmit);

const handleDelete = async (task) => {
  await Todo.delete(task._id);
  GetTask();
};
const handleUpdate = (task) => {
  document.getElementById("taskName").value = task.taskName;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskStatus").value = task.status;
  id = task._id;
  document.getElementById("addTaskBtn").innerHTML = "Update Task";
};

const Mapper = (task) => {
  document.getElementById("taskData").innerHTML = "";
  task.map((ele) => {
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = ele.taskName;
    let td2 = document.createElement("td");
    td2.innerHTML = ele.description;
    let td3 = document.createElement("td");
    td3.innerHTML = ele.status;
    let td4 = document.createElement("td");
    td4.className = "text-center";
    let btn1 = document.createElement("button");
    btn1.innerHTML = "Edit";
    btn1.addEventListener("click", () => handleUpdate(ele));
    btn1.className = "btn btn-primary me-4";
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Delete";
    btn2.addEventListener("click", () => handleDelete(ele));
    btn2.className = "btn btn-danger";
    td4.append(btn1, btn2);
    tr1.append(td1, td2, td3, td4);
    document.getElementById("taskData").append(tr1);
  });
};

const GetTask = async () => {
  Task = await Todo.get();
  Mapper(Task);
};

GetTask();
