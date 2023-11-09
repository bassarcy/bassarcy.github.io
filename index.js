function offcanvasScroll() {
    document.getElementById("navbarOffcanvas").setAttribute("class", "offcanvas offcanvas-end");
    document.body.setAttribute("style","");
    const backdropElement = document.getElementsByClassName("offcanvas-backdrop");
    while(backdropElement.length > 0) {
        backdropElement[0].parentNode.removeChild(backdropElement[0]);
    };
};