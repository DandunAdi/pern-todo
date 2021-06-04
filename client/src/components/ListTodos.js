import { useEffect, useState } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/todos/${id}`, { method: "DELETE" });
    setTodos(todos.filter((todo) => todo.todo_id !== id));
  };

  const getTodos = async () => {
    try {
      const res = await fetch("http://localhost:5000/todos");
      const data = await res.json();

      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo) => (
              <tr key={todo.todo_id}>
                <td>{todo.description}</td>
                <td>edit</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(todo.todo_id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
