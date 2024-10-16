const Todo = {
  post: async (tasktodo) => {
    let response = await fetch("http://localhost:6091/task",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasktodo),
      }
    );
  },
  get: async () => {
    let response = await fetch("http://localhost:6091/task"
    );
    let data = await response.json();
    return data;
  },
  patch: async (id, tasktodo) => {
    let response = await fetch(`http://localhost:6091/task/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasktodo),
      }
    );
  },
  delete: async (id) => {
    await fetch(`http://localhost:6091/task/${id}`,
      {
        method: "DELETE",
      }
    );
  },
};

export default Todo;
