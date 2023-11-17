export default function TaskList({ tasks }) {
  console.log(tasks[0])
  function handleClick() { }

  function deleteNewStep() { }

  return (
    <div className="px-20">
      {
        tasks.map(task => (
          <>
            <h3 className="text-2xl">{task.name}</h3>
            <div className="mt-6">
              <h4 className="text-xl font-bold">Steps:</h4>
              {task.steps?.length ? task.steps.map(step => (
                <div key={step.id} className="form-control border-purple-200 border-2 rounded-lg p-2 my-2">
                  <label className="cursor-pointer flex items-center">
                    <input type="checkbox" checked={step.isCompleted} className="checkbox rounded-full mr-3" disabled={step.isDisabled} />
                    <span className="label-text font-bold">{step.description}</span>
                  </label>
                </div>
              )) :
                <p>No steps</p>
              }
            </div>
          </>
        ))
      }
    </div>
  )
}