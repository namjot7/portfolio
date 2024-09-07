// // Selectors and variables
// const customMouse = document.querySelector('.customMouse'); // own customized mouse
// const btns = document.querySelectorAll('.btns');

// const dropMenu=document.querySelector(".nav .dropdown-icon");
// const navBar=document.querySelector(".nav ul");

// console.log(navBar);

// const displayNavbar=()=>{
//     console.log("HI");
//     navBar.style.display="flex";
// }
// dropMenu.addEventListener("mouseover",displayNavbar);

// // Replicate mouse movement to our Custom mouse
// document.addEventListener('mousemove', function (e) {
//     // console.log(e)
//     let xPos = e.pageX; // position of mouse in x-axis
//     let yPos = e.pageY;
//     //    OR
//     // let xPos = e.clientX; // position of mouse in x-axis
//     // let yPos = e.clientY + window.scrollY;

//     // Add mouse coordinates to our own div element
//     customMouse.style.transform = `translate(${xPos}px, ${yPos}px)`; // Apply transform
// });

// // Changing Mouse icon
// btns.forEach(btn => {
//     btn.addEventListener('mouseenter', e => {
//         customMouse.classList.add("hidden");
//     })
//     btn.addEventListener('mouseleave', e => {
//         customMouse.classList.remove("hidden");
//     })
// })

