let btn1=document.getElementById('btn1');
let content=document.getElementById('content');
let source='bbc-news';
let apiKey='b0cfc6ad04134bf9b62a8fb33e58a093';
/*function getdata(){
    //url="text.txt";
    url="https://api.github.com/users"
    fetch(url).then((response)=>{
        //return response.text();
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
getdata();*/

/*function postdata(){
    url="http://dummy.restapiexample.com/api/v1/create"
    data='	{"name":"harrjwk121","salary":"123","age":"23"}'
    params={
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:data
    }
    fetch(url,params).then((response)=>{
        return response.json();

    }).then((data)=>{
        console.log(data);

})
}
postdata();
*/
/*function postdata(){
    url="http://dummy.restapiexample.com/api/v1/create"
    data='	{"name":"harrjwk121","salary":"123","age":"23"}'
    params={
        method:'post',
        
        body:data
    }
    fetch(url,params).then (response => response.json()

    ).then(data=>console.log(data)

)
}
postdata();*/
function getdata1(){
    url="https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=b0cfc6ad04134bf9b62a8fb33e58a093";
    fetch(url).then(response=>response.json()
    ).then(data=>console.log(data)
    )
   

}
getdata1();