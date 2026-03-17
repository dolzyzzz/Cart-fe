export type CartItem = {
id:string,
quantity:number,
product:{
name:string,
netPrice:number,
weight:number,
discount:number
}
}