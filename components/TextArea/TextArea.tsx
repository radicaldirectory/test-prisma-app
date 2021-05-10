type Props = {
  cols: number;
  rows: number;
  onChange: (e?: any) => any;
  placeholder: string;
  value: any;
};

const TextArea: React.FC<Props> = (props) => (
  <textarea
    cols={props.cols}
    rows={props.rows}
    onChange={props.onChange}
    placeholder={props.placeholder}
    value={props.value}
  />
);

export default TextArea;
