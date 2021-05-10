import styles from "./TextInput.module.css";

type Props = {
  onChange: (e?: any) => any;
  placeholder: string;
  value: any;
};

const TextInput: React.FC<Props> = (props) => (
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
