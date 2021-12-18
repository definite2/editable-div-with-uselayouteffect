import React, { useRef, useState } from "react";
import { getTextSegments, highlightText } from "../utils";
const TextArea = ({ highlighted, ...rest }) => {
  const editorRef = useRef();
  const [lastHtml, setLastHtml] = useState();
  //onInputChnage callback function
  const handleInputChange = (_) => {
    const editor = editorRef.current;
    const textSegments = getTextSegments(editor);
    const textContent = textSegments.map(({ text }) => text).join("");
    let html = highlightText(textContent, highlighted); //returns texts with highlighted words
    setLastHtml(html);
  };
  return (
    <div
      className="textarea"
      contentEditable
      placeholder="Enter your text here"
      ref={editorRef}
      onInput={handleInputChange}
      spellCheck={false}
      dangerouslySetInnerHTML={{ __html: lastHtml }}
      {...rest}
    />
  );
};

export default TextArea;
