import { useState } from "react"
import { useForm } from "react-hook-form"
import { IconContext } from "react-icons";
import { CiCircleCheck } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import StepInputField from "./StepInputField";
import Step from "../Step";

export default function TaskForm({ addNewTask, deleteNewTask }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const [taskName, setTaskName] = useState("")
  const [stepsList, setStepsList] = useState([])
  const [stepInput, setStepInput] = useState("")
  const [showStepInput, setShowStepInput] = useState(false)

  function handleNewStep() {
    if (stepInput.trim().length) {
      setStepsList([...stepsList, stepInput])
    } else {
      setShowStepInput(true)
    }
  }

  function handleAddStep(value) {
    const stepId = stepsList.length ? stepsList[0].id + 1 : 1
    const step = new Step(stepId, value, false, false)

    if (stepsList.length != 0) { stepsList[0].isDisabled = true }
    setStepsList([step, ...stepsList])
  }

  const onSubmit = data => {
    addNewTask(data.taskName, data.stepsList)
    setTaskName("")
    deleteNewTask()
  }

  return (
    <div className="flex-grow px-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-center justify-between">
          <h3 className="text-lg mb-3">Create New Task</h3>
          <div className="flex gap-2">
            <button type="submit">
              <IconContext.Provider value={{ size: "1.5em", color: "purple", className: "global-class-name" }}>
                <div>
                  <CiCircleCheck />
                </div>
              </IconContext.Provider>
            </button>
            <button onClick={() => deleteNewTask()}>
              <IconContext.Provider value={{ size: "1.5em", color: "red", className: "global-class-name" }}>
                <div>
                  <CiTrash />
                </div>
              </IconContext.Provider>
            </button>
          </div>
        </div>
        <input placeholder="Enter Task name" className="input input-bordered w-full max-w-xs block" {...register("taskName", { required: true })} />
        {errors.taskName && <span className="text-red-500 inline-block mt-2">Task Name required</span>}

        <div className="ml-7">
          {stepsList.map(step => (
            <div key={step.id} className="form-control border-purple-200 border-2 rounded-lg p-2 my-2">
              <label className="cursor-pointer flex items-center">
                <input type="checkbox" checked={step.isCompleted} className="checkbox rounded-full mr-3" disabled={step.isDisabled} />
                <span className="label-text font-bold">{step.description}</span>
              </label>
            </div>
          ))}
        </div>
        {showStepInput && <StepInputField addNewStep={value => handleAddStep(value)} deleteNewStep={() => setShowStepInput(false)} />}
      </form>
      <button className="text-purple-700 inline-block my-2" onClick={handleNewStep}>+ Add Steps</button>
    </div>
  )
}