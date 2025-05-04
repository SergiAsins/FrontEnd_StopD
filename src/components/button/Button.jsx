import styles from "./Button.module.css";

const Button = ({
  text,
  variant = "primary",
  handleClick,
  disabled = false,
}) => {
  const buttonClass = disabled
    ? styles.buttonDisabled
    : variant === "primary"
    ? styles.buttonPrimary
    : styles.buttonSecondary;

  return (
    <button
      className={`${styles.button} ${buttonClass}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
