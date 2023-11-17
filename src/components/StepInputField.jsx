import { useState } from "react";
import { useForm } from "react-hook-form"
import { IconContext } from "react-icons";
import { CiCircleCheck } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

export default function StepInputField({ addNewStep, deleteNewStep }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  // const [input, setInput] = useState("")

  // function handleChange(e) {
  //   setInput(e.target.value)
  // }

  const handleClick = data => {
    addNewStep(data.input)
    console.log(data)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="mt-2 mr-6 flex-grow">
        <input placeholder="Add New Step" className="border-b-2 outline-none w-full border-purple-400 p-1" {...register("input", { required: true })} />
        {errors.input && <span className="text-red-500 block mt-2">Step description required</span>}
      </div>
      <div className="flex gap-2">
        <button onClick={handleSubmit(handleClick)}>
          <IconContext.Provider value={{ size: "1.5em", color: "purple", className: "global-class-name" }}>
            <div>
              <CiCircleCheck />
            </div>
          </IconContext.Provider>
        </button>
        <button onClick={() => deleteNewStep()}>
          <IconContext.Provider value={{ size: "1.5em", color: "red", className: "global-class-name" }}>
            <div>
              <CiTrash />
            </div>
          </IconContext.Provider>
        </button>
      </div>
    </div>
  )
}