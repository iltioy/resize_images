const elements = [...document.querySelectorAll(".item")];

const addFlex = (el) => {
    elements.forEach((el) => {
        el.classList.remove("flex-4");
    });
    el.classList.add("flex-4");
};

elements.forEach((el) =>
    el.addEventListener("click", () => {
        addFlex(el);
    })
);
