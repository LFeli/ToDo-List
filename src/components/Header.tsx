import logo from '../assets/logo.svg';

export function Header() {
  return (
    <img 
    src={logo} 
    alt="ToDo - Logo" 
    className="pb-12 mx-auto"
  />
  )
}