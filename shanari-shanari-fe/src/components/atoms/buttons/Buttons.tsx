interface Props {
  text: string;
}

const Buttons = ({ text }: Props) => {
  return (
    <button
      type="button"
      className="text-zinc-100 bg-indigo-400 hover:bg-indigo-500 text-size5 rounded-lg p-1"
    >
      {text}
    </button>
  );
};

export default Buttons;
