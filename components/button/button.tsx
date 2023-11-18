import styles from "./button.module.scss";


type ButtonProps = {
  isLoading: boolean,
  text: string,
  loadingText: string,
}


function Button({isLoading, loadingText, text}: ButtonProps) {
  return <button className={styles.button} type="submit" aria-disabled={isLoading}
                 disabled={isLoading}>
    {isLoading ? loadingText : text}
  </button>;
}

export default Button;