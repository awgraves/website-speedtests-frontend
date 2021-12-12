import classes from './Button.module.css'

type ButtonProps = {
  text: string;
  isProcessing?: boolean;
  onClick?: ()=>any;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, isProcessing }) => {
  return <button className={classes.button} onClick={onClick} disabled={isProcessing}>
    { isProcessing ?  '...' : text }
  </button>
}

export default Button;