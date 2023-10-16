// check user scrolling or not
// check simple scroll
// use scroll
// window.addEventListener("scroll",function(){
//     console.log("scrolling...");
// });

window.addEventListener("scroll",function(){
   if (this.window.pageYOffset > 50) {
    this.document.body.style.background = "green";
   }if(this.window.pageYOffset > 100){
    this.document.body.style.background = "yellow";
   
   }{
    if(this.window.pageYOffset > 130){
        this.document.body.style.background = "white";
    // this.document.body.style.background = "orange";
   
    } };
});


// but find scrolling when  up and when scrolling is down
// use wheel event
// window.addEventListener("wheel",function(e){
//     // here you get variabe deltay and delta x
//     // use condtion
//     // here Note all objects pass in e parameeter
//     if(e.deltaY < 0){
    
//         console.log('scrolling up');
       
//     }else if(e.deltaY > 0){
//         console.log('scrolling down');
//     }
    
// });
