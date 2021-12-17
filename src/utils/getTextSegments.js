/**
 *
 * @param {object} element react ref object's current (that is ediatble div element's current)
 * @returns array of text segments
 * we need to get text segments (to highlight some of segments)
 *
 */
export const getTextSegments = (element) => {
  const textSegments = [];
  Array.from(element.childNodes).forEach((node) => {
    switch (node.nodeType) {
      case Node.TEXT_NODE:
        textSegments.push({ text: node.nodeValue, node }); //here text node includes html elements so we need the inner text and node itself
        break;
      case Node.ELEMENT_NODE:
        textSegments.splice(textSegments.length, 0, ...getTextSegments(node));
        break;
      default:
        throw new Error(`Unexpected node type: ${node.nodeType}`);
    }
  });
  return textSegments;
};
