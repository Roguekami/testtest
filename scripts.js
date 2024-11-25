const nav_span = document.querySelector(".span_nav");
const nav_list =  document.querySelector(".list");
const nav_btn = document.querySelector(".btn");

nav_span.addEventListener( "click", ()=> {
    nav_span.classList.toggle("active")
    nav_list.classList.toggle("active")
    nav_btn.classList.toggle("active")
}

)