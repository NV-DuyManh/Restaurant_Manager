const out = document.getElementById("icon");
const listItem = document.querySelectorAll(".item");
const menu = document.querySelector(".menu");

out.addEventListener("click", s => {
    listItem.forEach((s => {
        s.classList.toggle("d-none");
    }));
    menu.classList.toggle("menu");
});

const inter = document.getElementById("interface");
inter.addEventListener("click", (s)=>{
    s.preventDefault();
    const log = document.querySelector(".log");
    log.classList.toggle("d-none");
})


