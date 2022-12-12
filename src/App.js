import Header from "./components/Header";
import "./styles.css";
import Tasks from "./components/Tasks";
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      day: "saturday",
      text: "Shopping",
      alarm: false
    },
    {
      id: 2,
      day: "monday",
      text: "waking up",
      alarm: true
    }
  ]);

  function deleteTask(id) {
   setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
