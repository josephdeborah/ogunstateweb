const menu = document.querySelector("#menu");
const navBar = document.querySelector("#navBar");
const  stateKeyImageOverlay = document.querySelector(".stateKeyImageOverlayPara")
const  stateKeyImage = document.querySelector(".stateKeyImage")
const image = document.querySelectorAll(".img")
const eventsPics = document.querySelector("#eventsPics")
const header = document.querySelector("header")
let search = document.querySelector("#searchIconClick")
const stateKeyImageOverlayParagraph = document.querySelectorAll(".stateKeyImageOverlayParagraph1")
const img_position = document.querySelectorAll(".img1")
// ======================nav Func==================
menu.addEventListener("click",menuFunc)
function  menuFunc() {
    navBar.style.transition="all .8s ease-in-out"
    navBar.style.left="0";
}


const close = document.querySelector("#closeIcon")
close.addEventListener("click",closeFunc)
function closeFunc() {
    navBar.style.left="-1000px";

    
}



// =================beforeload function=======================

// window.onbeforeunload=()=>{
//     setTimeout(() => {
//    window.location.href="home.html" 
// }, 10000);
// }


// =================search function=====================
console.log(search);


search.addEventListener("click", searchFunc)
function searchFunc() {
        let searchInput = document.querySelector(".inputGroup") 

         
       
        searchInput.classList.toggle( 'searchInputBorder')
}


    // ====================scroll function========================
    // window.addEventListener("scroll",()=>{
    //     let y=window.pageYOffset
       
        
    //         if (y===0) {
    //             header.style.width="94%"
    //             header.style.marginLeft="45px"
    //         }else{
    //             header.style.width="100%"
    //             header.style.margin="0px"
    //         }
    // })


    




//     const element = document.querySelector('.executiveLink ');
// element.classList.add('animate__animated', 'animate__bounceOut');

// element.addEventListener('animationend', () => {
//     element.classList.remove('animate__animated', 'animate__bounceOutLeft')
//   });



    // ===================img function=================
    // const arrayImages = [images/Frame1.png, ]
    // console.log(image);
    
    // ===================preloader====================
    // document.addEventListener('readystatechange',()=>{

        // if(document.readyState==='loading'){
        //     console.log("ghhyju");
            
        //     window.location.href="loader.html"
            
        // }  


        // ============================hover effects===================
        let navLink = document.querySelectorAll(".navBar_items")
          console.log(navLink);
          
        console.log(navLink);
        navLink.forEach((e)=>{
            console.log(e);
            
           e.addEventListener('mouseover',()=>{
            navLink.forEach((e)=>{
                console.log(e);
                
                e.classList.remove("active")
            })
           })

            
        })




        navLink.forEach((e)=>{
            e.addEventListener('mouseout',()=>{
                navLink.forEach((e)=>{
                    if (e.classList.contains("real")) {
                        e.style.transition="all .8s ease-in-out"
                        e.classList.add("active")
                    }
                    
                })
               })
        })
        

        // navLink.addEventListener('mouseover', ()=>{
        //     navLink.classList.remove("active")
        // })