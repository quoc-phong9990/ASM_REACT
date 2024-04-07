import { ReactNode, createContext, useContext, useEffect, useState } from "react";


type ShoppingContextProvider ={
    children:ReactNode

}
type Cartitem={
    id:number,
    name:string,
    price:number,
    image:string,
    qty:number,
   
}
type ProductItem={
    id:number,
    name:string,
    price:number,
    image:string,

}
 interface ShoppingCartContextType{
    cartQty:number,
    totolPrice:number
    cartItems: Cartitem[],
    increaseQty:(id:number)=>void
    decreaseQty:(id:number)=>void
    removeCartitem:(id:number)=>void
    addcartItem:(item:ProductItem)=>void
    clearCart:()=>void
 }

const ShoppingContext =createContext <ShoppingCartContextType>({}as ShoppingCartContextType)
 export const useShoppingContext=()=>{
    return useContext(ShoppingContext)
 }
 export const ShoppingContextProvider=({children}:ShoppingContextProvider)=>{
    const [cartItems, setcartitem] = useState<Cartitem[]>(() => {
        try {
            const jsonData = localStorage.getItem('shopping_cart');
            return jsonData ? JSON.parse(jsonData) : [];
        } catch (error) {
            console.error('Error parsing JSON data from localStorage:', error);
            return [];
        }
    });
    
    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    }, [cartItems]);
    



    const cartQty=cartItems.reduce((qty,item)=>qty+item.qty,0)
    const totolPrice=cartItems.reduce((total,item)=>total+item.qty*item.price,0)

    const increaseQty =(id:number)=>{
        console.log("increaseQty",id);
        const crurentCartitem=cartItems.find(item=>item.id===id)
        if(crurentCartitem){
            if(crurentCartitem.qty==1){
                removeCartitem(id)
            }
            const newitem=cartItems.map(item=>{
                if(item.id===id){
                    return{...item, qty:item.qty+1}
                }else{
                    return item
                }
            })
            setcartitem(newitem)
        }
        
    }


    const decreaseQty =(id:number)=>{
        console.log("decreaseQty",id);
        const crurentCartitem=cartItems.find(item=>item.id===id)
        if(crurentCartitem){
            removeCartitem(id)
        }
            const newitem=cartItems.map(item=>{
                if(item.id===id){
                    return{...item, qty:item.qty-1}
                }else{
                    return item
                }
            })
            setcartitem(newitem)
        
       
       
    
    }

    const  addcartItem=(product:ProductItem)=>{
        console.log("product=>",product);
        const crurentCartitem=cartItems.find(item=>item.id===product.id)
        if(crurentCartitem) {
            const newitem=cartItems.map(item=>{
                if(item.id===product.id){
                    return{...item, qty:item.qty+1}
                }else{
                    return item
                }
            })
            setcartitem(newitem)
            alert("Bạn đã thêm sản phẩm này vào giỏ hàng")
        }  else{
            const newitem={...product,qty:1}
            setcartitem([...cartItems, newitem])
            console.log(cartItems);
            
        }     
    }


    const removeCartitem=(id:number)=>{
        console.log("decreaseQty",id);  
        const crurentCartitemIndex=cartItems.findIndex(item=>item.id===id)
        const newItem=[...cartItems]
        newItem.splice(crurentCartitemIndex,1)
        setcartitem(newItem)
    }
    const clearCart=()=>{
        console.log("clearCart");  
        setcartitem([])
    }
    return(
        <ShoppingContext.Provider value={{ cartItems , cartQty, totolPrice,increaseQty,decreaseQty,addcartItem,removeCartitem,clearCart}}>

            {children}
        </ShoppingContext.Provider>
    )
 }