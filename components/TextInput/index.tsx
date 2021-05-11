import styles from "./TextInput.module.css";

export type TextInputProps = {
  onChange?: (e?: any) => any;
  placeholder: string;
  value: any;
};

const TextInput: React.FC<TextInputProps> = (props) => (
  <input
    autoFocus
    type="text"
    className={styles.textInput}
    onChange={props.onChange}
    placeholder={props.placeholder}
    value={props.value}
  />
);

export default TextInput;
