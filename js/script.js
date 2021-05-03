{

    const header__headerButton = document.querySelector(".header__headerButton");
    const main__tableButton = document.querySelector(".main__tableButton");

    const welcome = () => {
        console.log("Witam wszystkich developerów, którzy tutaj zaglądają :)")
    }

    const onHideMainHeaderClick = () => {
        const header__headers = document.querySelector(".header__headers");
        header__headers.classList.toggle("header__hiddenHeaders");
        header__headerButton.innerText = header__headers.classList.contains("header__hiddenHeaders") ? "Pokaż nagłówek" : "Ukryj nagłówek";
    };

    const onHideTableClick = () => {
        const table = document.querySelector(".table");
        table.classList.toggle("main__hiddenTable")
        main__tableButton.innerText = table.classList.contains("main__hiddenTable") ? "Pokaż tabele" : "Ukryj tabele";
    };

    const init = () => {
        header__headerButton.addEventListener("click", onHideMainHeaderClick);
        main__tableButton.addEventListener("click", onHideTableClick);

        welcome();
    };

    init();

}
