let stylesheet = document.querySelector("#stylesheet");
let themeSelector = document.querySelector("#theme");

setTheme(localStorage.getItem('theme')|| 'dark');

themeSelector.addEventListener('click' , ()=>{
    changeTheme();
});

function changeStylesheet(stylesheet , href){
    stylesheet.href = href;
}

function setTheme(theme){
    if(theme === null || theme === undefined){
        theme = dark;
    }
    if(theme === "light"){
        changeStylesheet(stylesheet , "css/light.css");
    }
    else{
        changeStylesheet(stylesheet , "css/dark.css");
    }
    themeSelector.icon = theme === 'dark' ? "ri:moon-fill" : "mingcute:sun-fill";
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