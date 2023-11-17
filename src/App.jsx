import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import TaskForm from "./components/TaskForm";
import TaskDetail from "./components/TaskDetail";
import Task from "./Task";

const queryClient = new QueryClient()

export default function App() {

  const [tasks, setTasks] = useState([])
  const [showCreateTask, setShowCreateTask] = useState(false)
  const [showTaskDetail, setShowTaskDetail] = useState(false)

  useEffect(() => {
    document.title = "Task Manager"
  }, [])

  function handleNewTask(taskName, taskSteps) {
    const task = new Task(taskName, taskSteps)
    setTasks([...tasks, task])
  }

  function handleTaskDetailClick() {

    setShowTaskDetail(true)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="px-6">
        <header className="py-4 flex justify-between items-center">
          <h3 className="text-xl text-center">Task Manager</h3>
          <button onClick={() => setShowCreateTask(true)} className="px-4 py-2 bg-purple-700 text-slate-50 rounded-xl">Add New Task</button>
        </header>
        <div className="flex justify-between">
          <div className="w-4/12 relative h-screen">
            <h5 className="text-2xl font-semibold">Your Tasks</h5>
            {tasks.length ? tasks.map(task => (
              <label onClick={handleTaskDetailClick} key={task.id} className="cursor-pointer py-4 flex items-center gap-4 border-b-2 border-slate-200">
                <input type="checkbox" checked={false} className="checkbox rounded-full" />
                <span className="label-text text-lg text-left">{task.name}</span>
              </label>
            )) :
              <p className="text-xl text-center font-extralight absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">No tasks to show.<br />Enjoy your day 🥳</p>
            }
          </div>
          <div className="w-1 min-h-screen bg-slate-200"></div>
          <div className={`${!showTaskDetail && !showCreateTask ? "flex-grow flex flex-col items-center justify-center" : "flex-grow"}`}>
            {showCreateTask ? <TaskForm addNewTask={(taskName, taskSteps) => handleNewTask(taskName, taskSteps)} deleteNewTask={() => setShowCreateTask(false)} /> : showTaskDetail ? <TaskDetail tasks={tasks} /> : <p className="text-2xl text-slate-400 font-extralight">Click on a task to view details</p>}
          </div>
        </div>
      </div>
    </QueryClientProvider>
  )
}