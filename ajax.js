let fruits=document.getElementById('fruits');
let veges=document.getElementById('veges');
fruits.addEventListener('click',buttonclickhandler)

function buttonclickhandler(){
    
    //insantiatite the xhr  object.
    const xhr = new XMLHttpRequest();
    //this function called onreadystatechange is optional.it tells about the state with different values from 0 to 4 where 
    //each value has different meaning.
        xhr.onreadystatechange=function(){
        console.log("ready code is" ,xhr.readyState);
    }
    //open the xhr object. where get is used to fetch data  only while post is used for send te data also.
    xhr.open('GET','text.txt',true);
    //what to do on progress
    xhr.onprogress=function(){
        console.log("you are in progress");
    }
    

    
    //what to do when object is ready.
    xhr.onload=function(){
        
        console.log(this.responseText);

       if(this.status===200){
            
            
           
            
            let two = document.getElementById('two');
            str = "";
           
        
                str+= `<ul class="list-group">
                <li class="list-group-item active">apple</li>
                <li class="list-group-item">banana</li>
                <li class="list-group-item">mango</li>
                <li class="list-group-item">grapes</li>
                <li class="list-group-item">lichee</li>
              </ul>`
        
            two.innerHTML = str;
            
            
        }
        else {
            console.log("some error has occured");
        }
    }

    //send the request.
        xhr.send();
        console.log("you are doneeee");
    

}

veges.addEventListener('click',buttonclickhandler1)

function buttonclickhandler1(){
    const xhr = new XMLHttpRequest();
    //for post request .
    xhr.open('POST' ,'http://dummy.restapiexample.com/api/v1/create', true);
    //it means ke me url me he bhege raha hu apna data.and xhr ke liye h ye
    //xhr.getResponseHeader('Content-type','application/x-www-form-urlencoded');

    //for json 
    xhr.getResponseHeader('Content-type','application/JSON');
   // xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true);
    xhr.onload=function(){
        
        
        if(this.status===200){
            
            console.log("data is",this.responseText);
           
            
           
        
        
            
            
            
        }
        else {
            console.log("some error has occured");
        }
        
    }
    params =	`{"name":"testr4334","salary":"123","age":"23"}`
        xhr.send(params);
        console.log("you are done");
    

}
let pophdl=document.getElementById('pophdl');
pophdl.addEventListener('click',pophandler)
function pophandler(){
    const xhr = new XMLHttpRequest();

    

 
    xhr.open('GET','http://dummy.restapiexample.com/api/v1/employees',true);
    xhr.onload=function(){
        
        
        if(this.status===200){
            
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
           
            
           
        
        
            
            
            
        }
        else {
            console.log("some error has occured");
        }
        
    }
    xhr.send();
    console.log("we are done fetching all the data");
}



