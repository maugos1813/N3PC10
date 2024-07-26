
import React from 'react'; 
import { Button } from 'primereact/button';

export default function Conta({simbolo}) {
    return (
        <div className="card flex flex-wrap justify-content-center gap-3 border-[1px] rounded-md w-[50px] place-content-center text-orange-500 font-bold text-[30px] bg-transparent border-none">
            <Button label={simbolo} text raised />
        </div>
    )
}
        