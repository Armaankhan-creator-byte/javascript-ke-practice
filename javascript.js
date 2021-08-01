/*document.getElementById('one').addEventListener('click',function(){
    location.href='//google.com';
   
});*/
//document.getElementById('one').addEventListener('click',function(e){
  
   
   //console.log(variable.target);
  /* console.log(e.target.className);
   console.log(e.target.classList);
   console.log(e.offsetX);
   console.log(e.offsetY);
   console.log(e.clientX);
   console.log(e.clientY);

});*/
/*document.getElementById('one').addEventListener('click',function fun(){
    console.log("function has excuted");
})
document.getElementById('one').addEventListener('mouseover',function fun2(){
    console.log("mouse is on the text");
})
document.getElementById('one').addEventListener('mouseout',function fun3(){
    console.log("mouse is out of the text");
})
document.getElementById('one').addEventListener('dblclick',function fun4(){
    console.log("button is doubleclicked");
})*/
/*document.getElementById('one').addEventListener('dblclick',function fun4(e){
    console.log("event has been submitted",e);
    //e.preventDefault();
})*/
document.querySelector('.one1').addEventListener('mousemove',function(e){
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetX},5)`;

})