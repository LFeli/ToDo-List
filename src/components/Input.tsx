export function Input({ ...rest }
  : React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>
  ) {
  return (
    <input 
      type="text" 
      placeholder="Adicionar nova tarefa" 
      className="w-full rounded-lg px-4 py-3 bg-gray-500 placeholder:text-gray-300 placeholder:truncate"
      {...rest}
    />
  )
}