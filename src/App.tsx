import "./App.css";
import { useState, type ChangeEvent } from "react";

import Container from "./components/Container";
import Header from "./components/Header";
import SearchBar from "./components/search/SearchBar";
import Suggestions from "./components/search/Suggestions";
import SubmitBtn from "./components/search/SubmitBtn";
import Rowcontainer from "./components/Rowcontainer";

function App() {
  // had to do this in this parent app since searchbar and btn need props from same parent
  const [content, setContent] = useState<string | number>("enter text");

  const handleFocus = () => setContent("");
  const renderInput = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <>
      <Container>
        <Header />

        <Rowcontainer>
          <SearchBar 
          content={String(content)}
          renderInput={renderInput}
          handleFocus={handleFocus} />
          <SubmitBtn 
          content={content} />
        </Rowcontainer>

        <Suggestions />
      </Container>
    </>
  );
}

export default App;
