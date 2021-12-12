import classes from './Button.module.css'

type ButtonProps = {
  text: string;
  onClick?: ()=>any;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button className={classes.button} onClick={onClick}>{text}</button>
}

export default Button;