const prevButton = document.querySelector('[data-js="button-prev]');
const nextButton = document.querySelector('[data-js="button-next"]');
const navigation = document.querySelector('[ data-js="navigation"]');


function previousButton() {
    const button = document.createElement("button");
    button.classList.add("button");
    button.classList.add("button--prev");
    button.textContent = "PREVIOUS";
    navigation.append(button);
    console.log(button);
}

/* function nexxtButton() {
    const button = document.createElement("button");
    button.classList.add("button");
    button.classList.add("button--next");
    button.textContent = "NEXT";
    navigation.append(button);
    console.log(button);
} */

export { previousButton };
/* export { nexxtButton }; */