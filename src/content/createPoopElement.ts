export const createPoopElement = (
  fontSize: number,
  left: number,
  top: number,
) => {
  const outerElement = document.createElement('div');
  outerElement.classList.add('poop-outer');
  outerElement.style.left = `${left}px`;
  outerElement.style.top = `${top}px`;

  const innerElement = document.createElement('span');
  innerElement.innerText = '💩';
  innerElement.classList.add('poop-inner');
  innerElement.style.fontSize = `${fontSize}px`;

  outerElement.appendChild(innerElement);

  return outerElement;
};
