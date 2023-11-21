


    const openNavbar = document.querySelector(".open-navbar");
    const closeNavbar = document.querySelector(".close-navbar");
    const navbar = document.querySelector(".navbar");

    openNavbar.addEventListener("click", openNav);
    function openNav() {
        if (navbar.classList.contains("close")){
            navbar.classList.toggle("close")
        };
        navbar.classList.toggle("open");
    }
    closeNavbar.addEventListener("click", closeNav);
    function closeNav() {
        if (navbar.classList.contains("open")){
            navbar.classList.toggle("open")
        };
        navbar.classList.toggle("close");
    }



