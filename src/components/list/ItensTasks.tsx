import { Check, Trash2 } from "lucide-react";
import { ITask } from "../interfaces";

interface ItensTasksProps {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: (id: number, value: boolean) => void
}

export function ItensTasks({ data, removeTask, toggleTaskStatus }: ItensTasksProps ) {
  function handleTaskToggle() {
    const updatedValue = !data.isChecked;
    toggleTaskStatus(data.id, updatedValue)
  }

  function handleRemove() {
    removeTask(data.id)
  }

  return (
    <div className="mt-6 grid gap-3">
      <article className="p-4 bg-gray-500 border border-gray-400 rounded-lg flex items-start justify-between gap-3">
        <label className="cursor-pointer">
          <input
            type="checkbox"
            checked={data.isChecked}
            className="hidden"
            onChange={handleTaskToggle}
            readOnly
          />

          <div
            className={`w-5 h-5 border-2 rounded-full ${
              data.isChecked ? 'bg-purpleDark border-purpleDark hover:bg-purple hover:border-purple' : 'bg-gray-600 border-blue hover:bg-gray-400'
            } flex items-center justify-center transition-colors`}>
              
            {data.isChecked && (
              <Check size={12}/>
            )}
          </div>
        </label>
        
        <p className={`w-full text-sm text-left leading-snug max-w-[632px] ${data.isChecked ? 'line-through text-gray-300' : 'no-underline'}`}>
          {data.text}
        </p>

        <button 
          className="p-2 text-gray-300 rounded hover:bg-gray-400 hover:text-danger transition-colors"
          onClick={handleRemove}
        >
          <Trash2 size={20}/>
        </button>
      </article>
    </div>
  )
}