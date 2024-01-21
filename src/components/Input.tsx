export function Input({ ...rest }
  : React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement>
  ) {
  return (
    <input 
      type="text" 
      placeholder="Adicione uma nova tarefa" 
      className="rounded-lg p-4 flex-1 bg-gray-500 placeholder:text-gray-300"
      {...rest}
    />
  )
}