import React from "react";
import { Costos } from "./Costos";
import Conta from "./Conta";
import ButtonCost from "./ButtonCost";

export const Texts = () => {
  return (
    <div className="w-[500px] ml-[120px]">
      <h1 className="text-[12px] tracking-widest font-semibold text-gray-500 mt-[120px]">
        SNEAKER COMPANY
      </h1>
      <h1 className="text-[40px] font-bold mt-2">
        Fall Limited Edition Sneakes
      </h1>
      <p className="text-gray-500 mt-7">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <Costos /> {/* COMPONENTE DE PRIMEREACT*/}
      <div className="flex">
        <div className="mt-[50px] flex gap-3">
          <Conta simbolo="-" /> {/* COMPONENTE DE PRIMEREACT*/}
          <p className="w-[40px] place-content-center text-center font-bold">
            0
          </p>
          <Conta simbolo="+" /> {/* COMPONENTE DE PRIMEREACT*/}
        </div>
        <ButtonCost/> {/* COMPONENTE DE PRIMEREACT*/}
      </div>
    </div>
  );
};
