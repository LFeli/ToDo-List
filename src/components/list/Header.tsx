export function Header() {
  return (
    <header className="flex items-center justify-between">
      <aside className="flex items-center gap-2">
        <p className="text-sm font-bold leading-snug text-blue ">Tarefas criadas</p>
        <span className="text-xs text-gray-100 py-[2px] px-2 bg-gray-400 rounded-full">0</span>
      </aside>

      <aside className="flex items-center gap-2">
        <p className="text-sm font-bold leading-snug text-purple">Concluídas</p>
        <span className="text-xs text-gray-100 py-[2px] px-2 bg-gray-400 rounded-full">0</span>
      </aside>
    </header>
  )
}