import styles from "./TextArea.module.css";

export type TextAreaProps = {
  cols: number;
  rows: number;
  onChange?: (e?: any) => any;
  placeholder: string;
  value: string;
};

const TextArea: React.FC<TextAreaProps> = (props) => (
  <textarea
    className={styles.textArea}
    cols={props.cols}
    rows={props.rows}
    onChange={props.onChange}
    placeholder={props.placeholder}
    value={props.value}
  />
);

export default TextArea;
