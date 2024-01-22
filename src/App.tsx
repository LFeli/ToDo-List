import { useEffect, useState } from "react";
import { PlusCircle } from "lucide-react";
import { ITask } from "./components/interfaces";

import { Header } from "./components/Header";
import { Header as HeaderList } from "./components/list/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { EmptyTask } from "./components/list/EmptyTasks";
import { ItensTasks } from "./components/list/ItensTasks";


export function App() {
  const [tasks, setTasks] = useState<ITask[]>(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const checkedTasksCounter = tasks.filter((task) => task.isChecked).length;

  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state) => [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const confirmDelete = window.confirm("Deseja mesmo apagar essa tarefa?");
    if (!confirmDelete) {
      return;
    }

    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  }

  function handleToggleTask(id: number, value: boolean) {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isChecked: value } : { ...task }
    );

    setTasks(updatedTasks);
  }

  return (
    <body className="bg-gray-600 text-gray-100 h-screen">
      {/* background overlay */}
      <div className="bg-gray-700 h-full max-h-[200px]" />

      {/* Container */}
      <div className="max-w-3xl mx-auto -mt-[126px] px-6">
        <main>

          <Header />
          <article className="flex gap-2">
            <Input 
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />

            <Button 
              className="p-4 text-sm font-bold leading-snug rounded-lg flex items-center gap-2 bg-blueDark hover:bg-blue transition-colors"
              onClick={handleAddTask}
            >
              Criar
              <PlusCircle size={16} />
            </Button>
          </article>
            

          <div className="mt-16">
            <div>
              <HeaderList 
                tasksCounter={tasks.length}
                checkedTasksCounter={checkedTasksCounter}
              />

              {tasks.length > 0 ? (
                <>
                  {tasks.map((task) => (
                    <ItensTasks
                      key={task.id}
                      data={task}
                      removeTask={handleRemoveTask}
                      toggleTaskStatus={handleToggleTask}
                    />
                  ))}
                </>
              ) : (
                <EmptyTask />
              )}
            </div>
          </div>
        </main>
      </div>
    </body>
  )
}