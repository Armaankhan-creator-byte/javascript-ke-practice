class employee{
    //all the parameters are given to the constructor only.
    constructor(name,experince,division){
        this.name=name;
        this.experince=experince;
        this.division=division;
    }
    slogan(){
        return `hello i am ${this.name} and this company is the best`;
    }
    //function defined with static keyword are called without creating object of the class.
    static add(a,b){
        return a+b;

    }
}
//inheritance take plae with the help of extends keyword.
class programmer extends employee{
    //constructor are created with the help of constructor keyword and inherited with the help of super keyword.
    constructor(name,experince,division,language)
    {
        super(name,experince,division);
        this.language=language;

    }
    favratelanguage(){
        if(this.language=="python"){
            return "Pa";

        }
        else{
            return "javascript";
        }
    }
    static multiply(a,b,c){
        return a*b*c;
    }
}
class activity extends programmer{
    constructor(name,experince,division,language,work)
    {
        super(name,experince,division,language);
        this.work=work;

    }
}
/*let armaan=new employee("armaan",2,"A");
console.log(armaan);
console.log(armaan.slogan());
console.log(employee.add(4,8));*/
let gulnaz=new programmer("gulnaz",1,"b","python");
console.log(gulnaz);
console.log(gulnaz.favratelanguage());
console.log(programmer.multiply(3,5,6));
let cricket=new activity("farmaan",3,"f","c++","cricket");
console.log(cricket.favratelanguage());
console.log(cricket.slogan())
console.log(activity.add(8,9));

