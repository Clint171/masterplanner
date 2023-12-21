let stylesheet = document.querySelector("#stylesheet");
let themeSelector = document.querySelector("#theme");

setTheme(localStorage.getItem('theme'));

themeSelector.addEventListener('click' , ()=>{
    themeSelector.icon = changeTheme() === 'dark' ? "ri:moon-fill" : "mingcute:sun-fill";
});

function changeStylesheet(stylesheet , href){
    stylesheet.href = href;
}

function setTheme(theme){
    if(theme === null){
        theme = dark;
    }
    if(theme === "light"){
        changeStylesheet(stylesheet , "css/light.css");
    }
    else{
        changeStylesheet(stylesheet , "css/dark.css");
    }
}

function changeTheme(){
    let theme = localStorage.getItem('theme');
    if(theme === "light"){
        theme = 'dark';
    }
    else{
        theme = 'light';
    }
    setTheme(theme);
    localStorage.setItem("theme" , theme);
    return theme;
}