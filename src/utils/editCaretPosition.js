/**
 * 
 * @param {*} element 
 * This function places the caret at the end of the element
 */
export const editCaretPosition = (element) => {
  const target = document.createTextNode("");
  element.appendChild(target);
  const isTargetFocused = document.activeElement === element;
  if (target !== null && target.nodeValue !== null && isTargetFocused) {
    var sel = window.getSelection();
    if (sel !== null) {
      var range = document.createRange();
      range.setStart(target, target.nodeValue.length);
      range.collapse(true);
      sel.removeAllRanges();
      sel.addRange(range);
    }
    if (element instanceof HTMLElement) element.focus(); //event if this sub element focus
  }
};
