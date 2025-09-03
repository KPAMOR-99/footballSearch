import { type ChangeEvent } from "react";

interface props {
  content: string;
  renderInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;

}

const Input = ({ content, renderInput, handleFocus, }: props) => {
  return (
    <form  action="" className="flex gap-2 text-black">
      <input
        type="text"
        value={content}
        onChange={renderInput}
        onFocus={handleFocus}
        className="bg-white border rounded p-2 "
      />
    </form>
  );
};

export default Input;
