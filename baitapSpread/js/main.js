const str = "HoverMe!";
const chars = [...str];
const span = () => {
    let content = "";
    for (const key in chars) {
        content += `<span>${chars[key]} </span>`
    }
    document.getElementsByClassName("heading")[0].innerHTML = content ;
}
span();
