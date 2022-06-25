import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { globalContext } from '../globalContext/GlobalContext';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
//* Dropdowns
import MyAccountDropdown from './MyAccountDropdown';
import MyAccountDropdownPhone from './MyAccountDropdownPhone';
import ShoppingCartDropdown from './ShoppingCartDropdown';

export default function Navbar() {
    //* Global Context
    const {user} = useContext(globalContext);
    const {setBuyNowQuantity} = useContext(globalContext);
    const {shoppingAddress} = useContext(globalContext);

    const [showNavbar, setShowNavbar] = useState(true);

    //* Show/Hide Navbar on scroll
    let currentPosition  = window.pageYOffset;
    window.onscroll = function() {
        let scrolling = window.pageYOffset;
        if(currentPosition >= scrolling){
            setShowNavbar(true)
        }
        else{
            setShowNavbar(false)
        }
        currentPosition = scrolling;
    }

    const resetBuyNowQuantity = () => {
        setBuyNowQuantity(1);
    }

    return (
        <>
            <div className={`fixed ${showNavbar ? 'top-0' : '-top-[100px]'} bg-white z-20 shadow-containersShadow dark:bg-darkBg transition-all ease-in-out delay-100 w-100 border-b-2 border-b-gray dark:border-gray-grayDark`}>
                <div className='w-95 max-w-130 m-auto flex justify-between items-center py-1'>
                    <Link onClick={resetBuyNowQuantity} to='/feed'>
                        <h1 className='text-primary dark:text-primary-light font-semibold text-logo'>LOGO</h1>
                    </Link>
                    <Link to='/account/my-addresses'>
                        <div className='sm:flex hidden items-center gap-0.5'>
                            <FaMapMarkerAlt className='text-primary dark:text-primary-light text-[30px] hover:-translate-y-0.5 transition-all ease-in-out delay-50' />
                            <div className='flex flex-col'>
                                {shoppingAddress.directionAdded ? 
                                    <>
                                        <p className='text-text dark:text-gray'>{`Send to ${shoppingAddress.name}`}</p>
                                        <p className=' text-boldText font-semibold dark:text-white'>{`${shoppingAddress.streetAndNumber}, ${shoppingAddress.country}`}</p>
                                    </>
                                :
                                    <>
                                        <p className='text-text dark:text-gray'>{`Send to ${user.name}`}</p>
                                        <p className=' text-boldText font-semibold dark:text-white'>Add direction...</p>
                                    </>
                                }
                            </div>
                        
                        </div>
                    </Link>
                    <div className='w-90 max-w-55 mx-2 h-fit relative'>
                        <input className='relative px-1 w-100 h-4 border-2 border-primary dark:border-primary-light focus:ring-1 focus:outline-none focus:border-primary focus:ring-primary dark:focus:border-primary-light dark:focus:ring-primary-light rounded dark:bg-darkBg dark:text-gray' type="search"/>
                        <AiOutlineSearch className='absolute right-0 top-[0] cursor-pointer text-[35px] text-white dark:bg-primary-light dark:text-darkBg rounded bg-primary w-5 h-full'/>
                    </div>
                    <div className='sm:flex hidden gap-5'>
                        <MyAccountDropdown auth={user}/>
                        <ShoppingCartDropdown/>
                    </div>
                    <div className='sm:hidden block'>
                        <MyAccountDropdownPhone auth={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}
