console.log("this is prototype2");
let aman=
{
    name:"armaan",
    course:"javascript",
    duration:"4 hours",
};


function amans (time){
    this.tim=time;
}
let time = new amans("1");
amans.prototype.gettime=function(time){
     this.tim=time;
}
amans.prototype.settime=function(time){
     this.tim=time;
}
time.settime("3");
//console.log(time);
// creating object without using contaructor.
let pa={
    name:'armaan',
    class:'b.tech',
    la:function(language)
    {
        this.language=language;
    },

    kya:function(){
        return `your kya function has been exceuted`;
    }

};
/*let ba=Object.create(pa);
ba.la("c++");
ba.name="khan";
ba.kya();
console.log(ba);
*/
//another way of creating object is:
let ba=Object.create(pa,{
    name:{value:'khan boy',writable:true},
    class:{value:'IT'}
});
//console.log(ba.la('b.com'));

//console.log(ba.class);
//inheritance in prototype.
function employee(name,salary,experience){
    this.name=name;
    this.salary=salary;
    this.experience=experience;

}
//sologan function.
employee.prototype.sologan=function(){
return `this company is the best .regards ${this.name}`;

}
let abe=new employee("armaan",120000,1);
//console.log(abe);
//console.log(abe.sologan());
//programmer constructor.
function programmer(name,salary,experience,language){

    employee.call(this,name,salary,experience);
    this.language=language;
}
//inheritance the prototype
programmer.prototype=Object.create(employee.prototype);
//manually set the constructor.
programmer.prototype.constructor=programmer;
let rohan=new programmer("khan",100,0,"c++");
console.log(rohan.sologan());
//another example of prototype inheritance
function flour(type,rate){
    this.type=type;
    this.rate=rate;
}
flour.prototype.time=function(){
    return `${this.type} cake takes 3 hours to cook`;
}
let a=new flour("juaare",120);
//console.log(a);
function flavours(type,rate,flavour){
    flour.call(this,type,rate);
    this.flavour=flavour;
}
flavours.prototype=Object.create(flour.prototype);
flavours.prototype.constructor=flavours;
let b=new flavours("wheat",1130,"chocolate");
console.log(b.time());

