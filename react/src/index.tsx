import "./styles/globals.css";

interface ButtonProps {
  children: React.ReactNode
}

export const Button = ({ children }: ButtonProps) => {
  return <button className="bg-ignite500 rounded-md py-2 px-4 text-white font-bold" >
    {children}
  </button>
};
