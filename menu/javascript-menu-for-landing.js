window.addEventListener('DOMContentLoaded',menuFromLanding);
function menuFromLanding(){
    let menuDiv=document.createElement('div');
    menuDiv.innerHTML='menuOpen';
    document.querySelector('body').append(menuDiv);
    let menuCss=document.createElement('link');
    menuCss.setAttribute('rel','stylesheet');
    menuCss.setAttribute('href','menu/menuFromLanding.css');
    document.querySelector('head').append(menuCss);
}
// menuFromLanding();