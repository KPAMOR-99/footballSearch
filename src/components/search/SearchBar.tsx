import { useState, type ChangeEvent } from "react";
import Input from "./input";
import SubmitBtn from "./SubmitBtn";
import Container from "../Container";

const SearchBar = () => {
  // had to do this in this parent component since searchbar and btn need props from same parent
  const [content, setContent] = useState<string | number>("enter text");

 
  const handleFocus = () => setContent("");
  
  const renderInput = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Container className="flex gap-2">
        <Input
          content={String(content)}
          renderInput={renderInput}
          handleFocus={handleFocus}
        
        />
        <SubmitBtn content={content} />
      </Container>
    </>
  )
}

export default SearchBar;
