window.onload= function(){
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector("#mobile-nav-toggle");

    if(navToggle){
    navToggle.addEventListener("click", () => {
        const visiblity = nav.getAttribute("data-visible");
        if(visiblity === "false"){
            nav.setAttribute("data-visible", true);
            navToggle.setAttribute("aria-expanded", true);
        }else{
            nav.setAttribute("data-visible", false);
            navToggle.setAttribute("aria-expanded", false);
        }
    
    });
    }
    }//end of window.onload

/* ----------------------------------------------------------------- */


window.addEventListener("DOMContentLoaded", () =>{
    const tabLists = document.querySelector('[role="tablist"]');
    if (!tabLists) {
        console.error("Element with [role='tablist'] not found.");
        return;
    }

    const tabs = tabLists.querySelectorAll('[role="tab"]');
    if (tabs.length === 0) {
        console.error("No tabs found inside the [role='tablist'] element.");
        return;
    }

    tabLists.addEventListener('keydown', (e) => {
        changeTabFocus(e, tabs);
    });

    tabs.forEach((tab) => {
        tab.addEventListener('click', (e) => {
            changeTabPanel(e);
        });
    });
});


let tabFocus = 0;
function changeTabFocus(e, tabs){
    const keydownLeft = 37;
    const keydownRight = 39;


    if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
        tabs[tabFocus].setAttribute("aria-selected", false);

        if (e.keyCode === keydownRight) {
            tabFocus++;
            if(tabFocus >= tabs.length){
                tabFocus = 0
            }
        }else{
            tabFocus--;
            if(tabFocus < 0){
                tabFocus = tabs.length -1
            }
        }
    
        tabs[tabFocus].setAttribute("aria-selected", true)
        tabs[tabFocus].focus();
        
    }

}

function changeTabPanel(e){
    const targetTab = e.target;
    const targetPanel = targetTab.getAttribute("aria-controls")
    const targetImage = targetTab.getAttribute("data-image")

    const tabContainer = targetTab.parentNode;
    const mainContainer = tabContainer.parentNode;

    tabContainer.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", true);

    mainContainer.querySelectorAll('[role="tabpanel"]').forEach((panel) =>
        panel.setAttribute("hidden", true)
    );
    mainContainer.querySelector(`#${targetPanel}`).removeAttribute('hidden');

    mainContainer.querySelectorAll('picture').forEach((picture) => {
        picture.setAttribute("style", "display:none");
    });

    mainContainer.querySelector(`#${targetImage}`).setAttribute("style", "display:block");
}


