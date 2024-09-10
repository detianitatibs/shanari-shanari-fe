interface Props {
  text: string;
}

const Buttons = ({ text }: Props) => {
  return (
    <button
      type="button"
      className="text-zinc-100 bg-indigo-400 hover:bg-indigo-500 text-size5 rounded-lg py-1 px-2"
    >
      {text}
    </button>
  );
};

export default Buttons;
