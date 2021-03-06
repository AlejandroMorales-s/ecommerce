import React from 'react';
import { Link } from 'react-router-dom';
import { del, put } from '../../api';

export default function OrderCard({item, setShowingModal, setModalMessage}) {
    let {_id, name, price, amount, images} = item;

    const modifyAmount = (e) => {
        put('/api/cart/changeAmount', {
            "idProduct": _id,
            "amount": e.target.value
        })
        .then(res => console.log(res))
        .catch(err => console.log(err)); 
    };

    const deleteItem = () => {
        del('/api/cart/remove', {
            "idProduct": _id,
        })
        .then(res => {
            setShowingModal(true);
            setModalMessage({
                title: `${name} deleted`,
                isShowing: true,
                message: "Item has been deleted from shopping cart successfully"
            });
        })
        .catch(error => console.log(error)); 
    }
    //let price = item.price * item.quantity;
    return (
        <div className='h-[150px] border-2 p-2 flex gap-2 border-gray rounded dark:border-gray-grayDark dark:bg-darkBg'>
            <div className='overflow-hidden w-[12.5%] rounded'>
                <img src={images[0]} alt={name} className='w-full h-full object-cover'/>
            </div>
            <div className='w-[57.5%] h-full flex flex-col justify-evenly'>
                <h2 className='font-semibold text-title dark:text-gray'>{name}</h2>
                <div className='flex gap-2'>
                    <p onClick={deleteItem} className='text-bold font-medium text-red cursor-pointer'>Delete</p>
                    <Link to={`/${_id}/buy-product`}>
                        <p className='text-bold font-medium text-primary'>Buy now</p>
                    </Link>
                </div>
            </div>
            <div className='w-[15%] gap-1 flex justify-center items-center'>
                <input 
                    className='border-2 rounded pl-0.5 w-[40px] border-gray dark:border-gray-grayDark text-[20px] dark:bg-darkBg dark:text-gray' 
                    type="number" min='1' max='50' 
                    onClick={(e) => modifyAmount(e)} 
                    onInput={(e) => amount = e.target.value} 
                    defaultValue={amount}
                />
            </div>
            <div className='w-[15%] flex items-center justify-center'>
                <p className='text-bold font-medium dark:text-gray'>${price * amount} MXN</p>
            </div>
        </div>
    )
}