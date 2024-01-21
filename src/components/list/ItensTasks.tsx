import { Check, Trash2 } from "lucide-react";
import { useState } from "react";

export function ItensTasks() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggleCheckButton() {
    setIsChecked(!isChecked);
  }

  return (
    <div className="mt-6 grid gap-3">
      <article className="p-4 bg-gray-500 border border-gray-400 rounded-lg flex items-start justify-between gap-3">
        <label className="cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleToggleCheckButton}
            className="hidden"
          />

          <div
            className={`w-5 h-5 border-2 rounded-full ${
              isChecked ? 'bg-purpleDark border-purpleDark hover:bg-purple hover:border-purple' : 'bg-gray-600 border-blue hover:bg-gray-400'
            } flex items-center justify-center transition-colors`}>
              
            {isChecked && (
              <Check size={12}/>
            )}
          </div>
        </label>
        
        <p className={`text-sm text-left leading-snug max-w-[632px] ${isChecked ? 'line-through text-gray-300' : 'no-underline'}`}>
          Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
        </p>

        <button className="p-2 text-gray-300 rounded hover:bg-gray-400 hover:text-danger transition-colors">
          <Trash2 size={20}/>
        </button>
      </article>
    </div>
  )
}