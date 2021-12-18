import React, { useRef } from "react";

const TextArea = ({ highlighted, ...rest }) => {
  const editorRef = useRef();

  //onInputChnage callback function
  const handleInputChange = (_) => {
    const editor = editorRef.current;
    console.log(editor.innerText);
  };

  return (
    <div
      className="textarea"
      contentEditable
      placeholder="Enter your text here"
      ref={editorRef}
      onInput={handleInputChange}
      spellCheck={false}
      {...rest}
    />
  );
};

export default TextArea;
