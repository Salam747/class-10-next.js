import Image from "next/image";

export default function Home() {
  return (
    <div className="">
   <div className="flex justify-evenly  items-center mt-24 sm:flex flex-col  space-y-8  md:flex-row">

    <div className="flex flex-col items-center mt-8 border-2 border-black shadow-lg shadow-black bg-white rounded-md">
      <Image className="rounded-md h-[250px]" src="/assets/shampoo.jpg" alt="shampoo" height={200} width={200} ></Image>
      <p className="pt-3 font-semibold">Shampoo</p>
      <p className="pt-2">PKR: 799</p>
      <button className="items-center bg-blue-500  text-white rounded-md px-8 my-2">buy</button>
    </div> 

    <div className="flex flex-col  items-center border-2 border-black shadow-lg shadow-black bg-white rounded-md ">
      <Image className="rounded-md h-[250px]" src="/assets/laptop.png" alt="shampoo" height={200} width={200} ></Image>
      <p className="pt-3 font-semibold">Laptop</p>
      <p className="pt-2">PKR:70000</p>
      <button className="items-center bg-blue-500  text-white rounded-md px-8 my-2">buy</button>
    </div>
      
    <div className="flex flex-col items-center border-2 border-black shadow-lg shadow-black bg-white rounded-md">
      <Image className="rounded-md h-[250px]" src="/assets/jacket.png" alt="shampoo" height={200} width={200} ></Image>
      <p className="pt-3 font-semibold">Jacket</p>
      <p className="pt-2">PKR: 2700</p>
      <button className="items-center bg-blue-500 text-white rounded-md px-8 my-2">buy</button>
    </div>
    

   </div>
   </div>
  );
}
