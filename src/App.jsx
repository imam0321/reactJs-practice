import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

function App() {
  const [tasks, setTasks] = useState(initialTasks);

  const getNextId = (data) => {
    const maxId = data.reduce((prev, currentId) =>
      prev && prev.id > currentId ? prev.id : currentId
    );
    return maxId + 1;
  };

  // handler
  const handleAddTask = (text) => {
    
  };

  const handleChangeTask = (task) => {
    
  };

  const handleDeleteTask = (taskId) => {
    
  };

  // setTasks([
  //   ...tasks,
  //   {
  //     id: getNextId(tasks),
  //     text: text,
  //     done: false,
  //   },
  // ]);


  // const nextTask = tasks.map((t) => {
  //   if (t.id === task.id) {
  //     return task;
  //   } else {
  //     return t;
  //   }
  // });

  // setTasks(nextTask);


  // setTasks(tasks.filter((t) => t.id !== taskId));

  return (
    <div className="m-10">
      <h1 className="text-2xl m-2">Prague itinerary</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;