type Props = {
  onChange: (e?: any) => any;
  placeholder: string;
  value: any;
};

const TextInput: React.FC<Props> = (props) => (
  <input
    autoFocus
    type="text"
    onChange={props.onChange}
    placeholder={props.placeholder}
    value={props.value}
  />
);

export default TextInput;
