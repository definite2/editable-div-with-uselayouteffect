import React, { useRef } from "react";
import { getTextSegments } from "../utils/getTextSegments";
const TextArea = ({ highlighted, ...rest }) => {
  const editorRef = useRef();
  //simple function that highlights some of words while editing
  //it first gets text segments array
  const highlightText = (text) => {
    const words = text.split(/(\s+)/);
    const output = words.map((word) => {
      if (highlighted.includes(word)) {
        return `<span style="text-decoration: line-through; color:red">${word}</span>`;
      } else {
        return word;
      }
    });
    return output.join("");
  };

  //onInputChnage callback function
  const handleInputChange = (_) => {
    const editor = editorRef.current;
    const textSegments = getTextSegments(editor);
    const textContent = textSegments.map(({ text }) => text).join("");
    highlightText(textContent);
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
