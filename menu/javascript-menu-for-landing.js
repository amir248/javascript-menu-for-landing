window.addEventListener('DOMContentLoaded',menuFromLanding);
function menuFromLanding(){
    let menuDiv=document.createElement('div'); /* maybe NAV */
    // menuDiv.innerHTML='menuOpen';
    menuDiv.setAttribute('id','menuDiv');
    document.querySelector('body').prepend(menuDiv); /* body tag in which the menu is inserted. If you put main, then the menu wil be in the main tag or you can put it in the nav tag. */
    let menuCss=document.createElement('link');
    menuCss.setAttribute('rel','stylesheet');
    menuCss.setAttribute('href','menu/menuFromLanding.css');
    document.querySelector('head').append(menuCss);

    let stickOne=document.createElement('span');
    stickOne.classList.add('lineMenu');
    document.querySelector('#menuDiv').append(stickOne);
    let stickTwo=document.createElement('span');
    stickTwo.classList.add('lineMenu');
    document.querySelector('#menuDiv').append(stickTwo);
    let stickThree=document.createElement('span');
    document.querySelector('#menuDiv').append(stickThree);
    stickThree.classList.add('lineMenu');

    let sheetsMenu=document.createElement('div');
    sheetsMenu.classList.add('openMenu');
    document.querySelector('body').prepend(sheetsMenu);
    document.querySelector('#menuDiv').addEventListener('click',openMenu);
    function openMenu(){
        console.log('open');
            document.querySelector('.openMenu').style.background="green";
            // document.querySelector('sheetsMenu').classList.add('openMenu');
        setTimeout(()=>{
            document.querySelector('.openMenu').style.height="100vh;";
        },100)
    }
}
// menuFromLanding();
