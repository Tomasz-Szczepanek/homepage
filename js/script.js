console.log("Cześć!")

let header__headerButton = document.querySelector(".header__headerButton");
let header__headers = document.querySelector(".header__headers");

let main__tableButton = document.querySelector(".main__tableButton");
let table = document.querySelector(".table");

header__headerButton.addEventListener("click", () => {
    header__headers.classList.toggle("header__hiddenHeaders");
    header__headerButton.innerText = header__headers.classList.contains("header__hiddenHeaders") ? "Pokaż nagłówek" : "Ukryj nagłówek";
});

main__tableButton.addEventListener("click", () => {
    table.classList.toggle("main__hiddenTable")
    main__tableButton.innerText = table.classList.contains("main__hiddenTable") ? "Pokaż tabele" : "Ukryj tabele";
});