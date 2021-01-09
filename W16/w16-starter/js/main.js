<<<<<<< HEAD
const showMenu = function(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    console.log(toggle);
    console.log(nav);
    if (toggle && nav) {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
        });
    };
};

=======
const showMenu = function(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    console.log(toggle);
    console.log(nav);
    if (toggle && nav) {
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show');
            toggle.classList.toggle('bx-x');
        });
    };
};

>>>>>>> 593b0921856444910939747ed6139c624bc40a20
showMenu('header-toggle','nav-menu');