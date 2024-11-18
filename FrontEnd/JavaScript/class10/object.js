
let product ={
    id:1,
    pro_Name: 'phone',
    stock :30, //60
    restock(n){
        this.stock += n
    }
}
product.restock(30)
console.log(
    product
);

//IIFE= immediately invoked function expression
//API= Application Programming Interface
// server -  appn (connection establish - API) 
// json -local storage (save) = stringify
// json.stringify()
// Object -> JSON

// JSON => Object   -   JSON.parse