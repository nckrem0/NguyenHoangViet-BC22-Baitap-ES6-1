const colorList = [
    "pallet active",
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
];

const colorButton = () => {
    let content = "";
    for (const index in colorList) {
        content += `<button class="color-button ${colorList[index]}"></button>`;
    }
    document.getElementById("colorContainer").innerHTML = content;
};
colorButton();

const house = document.getElementById("house");
const pickColors = document.getElementsByClassName("color-button");
for (let index = 0; index < pickColors.length; index++) {
    pickColors[index].addEventListener("click", () => {
        changeColor(colorList[index], index);
    });
}

const changeColor = (off, on) => {
    for (let index = 0; index < pickColors.length; index++) {
        pickColors[index].classList.remove("active");
        pickColors[on].classList.add("active");
    }
    house.className = "house " + off;
};
