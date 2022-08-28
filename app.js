// let icon = document.querySelector(".icon");
// let link = document.querySelector(".nav-link");
// icon.addEventListener("click",function () {
//         link.classList.toggle("show-nav");
//     })
//     let TextArea = document.querySelector(".text-center");
//     TextArea.classList.toggle(text-area-hide);

    let button = document.querySelector(".arrow"),
    links = document.querySelector(".gnav-links");
    let TextArea = document.querySelector(".text-center");
    button.addEventListener("click",()=>{
        links.classList.toggle("display");
        button.children[0].classList.toggle("toggle1");
        button.children[1].classList.toggle("toggle2");
        button.children[2].classList.toggle("toggle3");
        TextArea.classList.toggle("textareahide");
        })
