// This script was created to use it with a ClassName
import "./TextPrintingAnimation.scss";

export const TextPrintingAnimation = (setVisiable, setPreloading) => {
  const elems = document.querySelectorAll(".print");

  const print = (elem) => {
    let text = elem.textContent.replace(/\s+/g, " ").trim();
    let newText = "";
    let count = 0;
    let finish = false;

    const message = elem.dataset.message || "Successfully completed!";
    const remove = elem.dataset.remove || 150;
    const pouse = elem.dataset.pouse || 1300;
    const delay = elem.dataset.delay || 150;
    const cursor = elem.dataset.cursor || "_";
    const container = document.createElement("span");
    const textElement = document.createElement("span");
    const cursorElement = document.createElement("span");

    container.classList.add("print-container");
    cursorElement.classList.add("cursor");
    cursorElement.textContent = cursor;

    container.appendChild(textElement);
    container.appendChild(cursorElement);
    elem.innerHTML = "";
    elem.appendChild(container);

    const addPrint = () => {
      let interval;

      interval = setInterval(() => {
        setVisiable(1);
        newText += text[count];
        textElement.innerHTML = newText;
        count++;

        if (count === text.length) {
          clearInterval(interval);
          setTimeout(removePrint, pouse);
        }
      }, delay);
    };

    const removePrint = () => {
      let interval;

      interval = setInterval(() => {
        newText = newText.slice(0, -1);
        textElement.innerHTML = newText;

        count--;

        if (!newText.length) {
          if (finish) {
            setPreloading(false);
            clearInterval(interval);
          }
          setVisiable(0);
          text = message;
          finish = true;
          addPrint();
          clearInterval(interval);
        }
      }, remove);
    };

    addPrint();
  };

  elems.forEach((elem) => {
    print(elem);
  });
};

TextPrintingAnimation();
