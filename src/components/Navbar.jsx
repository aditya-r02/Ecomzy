import logo from '../images/logo.png'
import {HiShoppingCart} from 'react-icons/hi'
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../index.css'

const Navbar = () => {
  const data = useSelector(state=>state.cart.value);

  return (
    <div className='w-full px-[8%] flex justify-between items-center bg-slate-900'>
      <div className='py-3'>
        <NavLink to="/">
          <img src={logo} alt='NavBar-logo' className='h-14'/>
        </NavLink>
      </div>


      <div className='flex text-white gap-5 items-center'>
        
        <div className='text-lg hover:text-green-400 ease-in duration-300'>
          <NavLink to="/">
            Home
          </NavLink>
        </div>

        <div className='text-2xl relative'>
          <NavLink to="/cart">
            <HiShoppingCart  className='hover:text-green-400 ease-in duration-300'/>
          </NavLink>
          {
            data.length>0 && 
            <div className='text-white absolute w-5 h-5 rounded-full bg-green-600 text-xs flex justify-center items-center
            -right-2 -top-3 ball'>{data.length}</div>
          }
        </div>

      </div>
    </div>
  );
};

export default Navbar;
