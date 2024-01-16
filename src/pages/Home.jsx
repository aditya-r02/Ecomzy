import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import { products } from "../data";
import Product from '../components/Product'

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [data, setData] = useState(products);
  const [load, setLoad] = useState(false);

  // useEffect(()=>{
  //   async function generateData(){
  //     try{
  //       setLoad(true);
  //       const output = await axios.get(API_URL);
  //       if (output.length===0) throw new Error("Not FOund");
        
  //       setData(output.data);
        
  //       setLoad(false);
  //     }catch(error){
  //       console.log(error);
  //     }
  //   }
  //   generateData();
  // }, [])


  return (
    <div className="flex justify-center">
      {
        load?
        (<Loading/>):
        (<div className="w-[1150px] grid grid-cols-4  gap-y-8 my-6">
        {
          
            data.length>0 &&
            data.map((card)=>
            <Product key={card.id} data={card} />)
        }
      </div>)
      }

      

    </div>
  );
};

export default Home;
