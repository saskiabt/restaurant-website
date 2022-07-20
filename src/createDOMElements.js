const createDivs = (parent, idName, textContent, className) => {
    const elem = document.createElement('div');
    parent.appendChild(elem);
    elem.setAttribute('id', idName);
    elem.textContent = textContent;
    if (className !== undefined) elem.classList.add(className);
    return elem;
};

const addImage = (parent, id, className, src) => {
    const image = new Image();
    image.id = id;
    image.classList.add(className);
    parent.appendChild(image);
    image.src = src;
    return image;
};

const createPara = (parent,textContent,className) => {
    const para = document.createElement('p'); 
    if (className !== undefined) para.classList.add(className);
    parent.appendChild(para);
    para.textContent = textContent;
};

export { createDivs, addImage, createPara };
