import { ClipboardList } from "lucide-react";

export function EmptyTask() {
  return (
    <div className="mt-6 py-16 flex flex-col items-center justify-center gap-4 border-t border-gray-400 rounded-lg">
      <ClipboardList size={96} className="text-gray-400"/>

      <p className="text-gray-300 text-base text-center leading-snug flex flex-col">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}