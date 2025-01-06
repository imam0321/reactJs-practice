import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <div className="m-10">
      <h1 className="text-2xl m-2">Prague itinerary</h1>
      <AddTask />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
