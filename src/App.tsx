import { Header } from "./components/Header";
import { Header as HeaderList } from "./components/list/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { EmptyTask } from "./components/list/EmptyTasks";
import { ItensTasks } from "./components/list/ItensTasks";
import { PlusCircle } from "lucide-react";

export function App() {


  return (
    <body className="bg-gray-600 text-gray-100 h-screen">
      {/* background overlay */}
      <div className="bg-gray-700 h-full max-h-[200px]" />

      {/* Container */}
      <div className="max-w-3xl mx-auto -mt-[126px] px-6">
        <main>

          <Header />

          <form className="flex gap-2">
            {/* <label htmlFor="newTask">Descrição da tarefa |</label> */}
            
            <Input />

            <Button className="p-4 text-sm font-bold leading-snug rounded-lg flex items-center gap-2 bg-blueDark hover:bg-blue transition-colors">
              Criar
              <PlusCircle size={16} />
            </Button>
          </form>

          <div className="mt-16">
            <div>
              <HeaderList />

              <EmptyTask />

              <ItensTasks />
            </div>
          </div>
        </main>
      </div>
    </body>
  )
}