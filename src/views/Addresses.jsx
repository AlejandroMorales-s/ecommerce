import React, {useContext} from 'react';
import ReactDocumentTitle from 'react-document-title';
import { Link } from 'react-router-dom';
import { BsPlusCircle } from 'react-icons/bs';
//* Global Context
import { globalContext } from '../components/globalContext/GlobalContext';
//* Components
import Navbar from '../components/navbar/Navbar';
import AddressCard from '../components/address/AddressCard';

export default function Addresses() {
    const {addresses} = useContext(globalContext);
    return (
        <>
            <ReactDocumentTitle title='Addresses'/>
            <Navbar/>
            <h2 className='text-center font-semibold text-title dark:text-gray m-3'>Addresses</h2>
            <div className='w-95 max-w-[1000px] m-auto rounded border-2 border-white grid grid-cols-3 p-2 gap-2 shadow-containersShadow bg-white dark:bg-darkBg dark:border-gray-grayDark'>
                <Link to='/my-addresses/add-address'>
                        <div className='border-2 h-[400px] w-100 rounded flex flex-col gap-3 justify-center items-center border-ligthBg p-2 hover:shadow-containersShadow bg-ligthBg hover:border-primary dark:hover:border-primary-ligth hover:-translate-y-0.5 transition-all ease-in-out delay-50'>
                                <BsPlusCircle className='text-[150px] text-[#bababa] mx-auto'/>
                                <h3 className='text-[#bababa] text-subtitle text-center font-medium'>Add Address</h3>
                        </div>
                </Link>
                {addresses.map((address, index) => (
                    <AddressCard 
                        key={index}
                        currentAddress={address}
                    />
                ))}
            </div>
        </>
    )
}