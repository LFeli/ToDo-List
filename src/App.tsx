import { useState } from "react";
import { Check, ClipboardList, PlusCircle, Trash2 } from "lucide-react";
import logo from './assets/logo.svg';

export function App() {
  const [isChecked, setIsChecked] = useState(false);

  function handleToggleCheckButton() {
    setIsChecked(!isChecked);
  }

  return (
    <body className="bg-gray-600 text-gray-100 h-screen">
      {/* background overlay */}
      <div className="bg-gray-700 h-full max-h-[200px]" />

      {/* Container */}
      <div className="max-w-3xl mx-auto -mt-[126px] px-6">
        <main>
          <img 
            src={logo} 
            alt="ToDo - Logo" 
            className="pb-12 mx-auto"
          />

          <form className="flex gap-2">
            {/* <label htmlFor="newTask">Descrição da tarefa |</label> */}
            
            <input 
              type="text"
              id="newTask"
              placeholder="Adicione uma nova tarefa" 
              className="rounded-lg p-4 flex-1 bg-gray-500 placeholder:text-gray-300"
            />

            <button className="p-4 text-sm font-bold leading-snug rounded-lg flex items-center gap-2 bg-blueDark hover:bg-blue transition-colors">
              Criar
              <PlusCircle size={16} />
            </button>
          </form>

          <div className="mt-16">
            <div>
              <div className="flex items-center justify-between">
                <span 
                  className="text-sm font-bold leading-snug text-blue flex items-center gap-2">
                    Tarefas criadas 
                    <span className="text-xs text-gray-100 py-[2px] px-2 bg-gray-400 rounded-full">
                      0
                    </span> 
                </span>

                <span 
                  className="text-sm font-bold leading-snug text-purple flex items-center gap-2">
                    Concluídas
                    <span className="text-xs text-gray-100 py-[2px] px-2 bg-gray-400 rounded-full">
                      0
                    </span> 
                </span>
              </div>

              {/* <div className="mt-6 py-16 flex flex-col items-center justify-center gap-4 border-t border-gray-400 rounded-lg">
                <ClipboardList size={96} className="text-gray-400"/>

                <p className="text-gray-300 text-base text-center leading-snug flex flex-col">
                  <span className="font-bold">Você ainda não tem tarefas cadastradas</span>
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div> */}

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
                        isChecked ? 'bg-purpleDark border-purpleDark' : 'bg-gray-600 border-blue'
                      } flex items-center justify-center`}>
                        
                      {isChecked && (
                        <Check size={12}/>
                      )}
                    </div>
                  </label>
                  
                  <p className={`text-sm text-left leading-snug max-w-[632px] ${isChecked ? 'line-through text-gray-300' : 'no-underline'}`}>
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

                  <button className="p-1 text-gray-300 rounded hover:bg-gray-400 hover:text-danger transition-colors">
                    <Trash2 size={24}/>
                  </button>
                </article>

              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  )
}