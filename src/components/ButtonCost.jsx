import React from 'react'; 
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css'

export default function ButtonCost() {
    return (
        <div className="card flex justify-content-center font-semibold text-[14px] place-content-center h-[50px] mt-[50px] ml-[20px] w-[250px] rounded-lg bg-orange-500 active:bg-orange-400">
            <Button label="Add to cart" icon='pi pi-shopping-cart' className='gap-4'/>
        </div>
    )
}