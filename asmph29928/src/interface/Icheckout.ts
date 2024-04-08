import { number } from "joi";

interface Icheckout {
    id?: string;
    name: string;
    email: string;
    address:string
    cty:string
    state: string;
    singlecode:number

   

    
}
export default Icheckout