// Selectors and variables
// const customMouse = document.querySelector('.customMouse'); // own customized mouse
// const btns = document.querySelectorAll('.btns');

// const dropMenu = document.querySelector(".nav .dropdown-icon");
// const navBar = document.querySelector(".nav ul");
const videos = document.querySelectorAll(".video-container video")

console.log(videos);


// console.log(navBar);

// Functions
// const displayNavbar = () => {
//     console.log("HI");
//     navBar.style.display = "flex";
// }

videos.forEach(video => {
    if (!video.controls) {
        // video.style.padding = "0px" // unwanted padding when exiting the video from top of the window screen
        video.addEventListener("click", e => {
            e.preventDefault() // prevent default "PAUSE" event
            video.requestFullscreen()
            video.controls = true;
            video.play()
        })
    }
})
// Events
// dropMenu.addEventListener("mouseover", displayNavbar);



// Replicate mouse movement to our Custom mouse
// document.addEventListener('mousemove', e => {
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

// Email JS Logic

// Self executing function to intiliaze EmailJS with PUBLIC_KEY (NOT WORking)
// (function () {
//     emailjs.init({
//         publicKey: "bCJ_3r-18NL1e-4rB",  // https://dashboard.emailjs.com/admin/account
//     });
// })();
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init({
        publicKey: "bCJ_3r-18NL1e-4rB",  // https://dashboard.emailjs.com/admin/account
    });
})

// Logic for send the data to EmailJS
const sendMail = () => {
    var formData = {
        from_name: document.querySelector("#name").value,
        email_id: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    }
    console.log(formData);
    emailjs.send("service_spcsdu6", "template_aozu3fr", formData) // serviceId, templateId, data
        .then(result => alert("Thank you for reaching out! Your message has been successfully delivered to Namjot. I will respond to you shortly", result))
        .catch(err => alert(err))
}


// Submit Event
document.getElementById('form').addEventListener('submit', event => {
    event.preventDefault(); // preventing default form behaviour
    sendMail();
})