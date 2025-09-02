import { type ChangeEvent } from "react";


interface props {
  content: string
  renderInput: (e: ChangeEvent<HTMLInputElement>)=> void,
  handleFocus: ()=> void
}


const SearchBar = ({ content, renderInput, handleFocus}: props) => {

  return (
    <div className="mt-15">
      <form action="" className="flex gap-2">
        <input
          type="text"
          value={content}
          onChange={renderInput}
          onFocus={ handleFocus}
          
          className="bg-white border rounded p-2 "
        />
       
      </form>
    </div>
  );
};

export default SearchBar;
