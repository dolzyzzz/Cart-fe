import { CartItem } from "./app/cart-entity";

export const cart :CartItem[]= [
	{   
        id:'1',
        quantity: 2,
        product:{
		name: 'ssd',
		netPrice: 95,
		weight: 100,
		discount: 5
        }
	},
	{
        id:'2',
        quantity: 1,
        product:{
        name: 'motherboard',
        netPrice: 270,
        weight: 900,
        discount: 0
        }
	},
	{
        id:'3',
        quantity: 2,
        product:{
        name: 'ram',
        netPrice: 120,
        weight: 60,
        discount: 10
        }
	},
	{
        id:'4',
        quantity: 1,
        product:{
        name: 'processor',
        netPrice: 400,
        weight: 130,
        discount: 0
        }
	},
	{
        id:'5',
        quantity: 1,
        product:{
        name: 'power supply',
        netPrice: 130,
        weight: 1400,
        discount: 15}
        
	},
	{
        id:'6',
        quantity:1,
        product:{
        name: 'cpu cooler',
        netPrice: 170,
        weight: 1000,
        discount: 23}
        
	},
	{
        id:'7',
        quantity: 1,
        product:{
        name: 'gpu',
        netPrice: 1600,
        weight: 2500,
        discount: 0
        }
	},
	{
        id:'8',
        quantity: 1,
        product:{
        name: 'case',
        netPrice: 130,
        weight: 3500,
        discount: 30
        }
        
	}
];