  //simple function that highlights some of words while editing
  //it first gets text segments array
export const highlightText = (text, highlighted) => {
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
