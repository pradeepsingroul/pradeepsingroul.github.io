let hamberger=document.querySelector(".hamberger");
let times=document.querySelector(".times");
let mobileNav= document.querySelector(".mobile-nav");


hamberger.addEventListener('click',function(){
   
   mobileNav.classList.add("open");
   
})

times.addEventListener('click',function(){
    

    mobileNav.classList.remove("open");
})
// document.querySelector("#form").addEventListener("submit",sendEmail());
function sendEmail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "pradeep.aiyuga@gmail.com",
        Password : "pradeep9340724066",
        To : 'pradeep.aiyuga@gmail.com',
        From : document.querySelector("#email").value,
        Subject : "New Contact from Portfolio",
        Body : "Name: "+document.querySelector("#f_name").value+" "+document.querySelector("#l_name").value
        +"<br>Email: "+document.querySelector("#email").value
        +"<br>Phone Number: "+document.querySelector("#phone").value
        +"<br>Message: "+document.querySelector("#msg").value
    }).then(
      message => alert("Message Sent Successfully, Thank You")
    );
}