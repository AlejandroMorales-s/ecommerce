import React, {useContext} from 'react';
import { globalContext } from '../components/globalContext/GlobalContext';
//* Components
import ReactDocumentTitle from 'react-document-title';
import AccountOptionsCard from '../components/myAccount/AccountOptionsCard';
import Navbar from '../components/navbar/Navbar';
import Breadcrumb from '../components/breadcrumbTrail/Breadcrumb';
//* Icons
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsBoxSeam, BsCreditCard } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai';


export default function MyAccount() {
    const {user} = useContext(globalContext);
    const breadcrumb = [
        {
            link:'/account',
            text:'My account'
        }
    ]
    const cards = [
        {
            title: 'My Data',
            icon: <AiOutlineUser className='text-[60px] text-primary dark:text-primary-light'/>,
            desc: 'Manage your personal data.',
            link: '/account/my-data',
        },
        {
            title: 'My Orders',
            icon: <BsBoxSeam className='text-[60px] text-primary dark:text-primary-light'/>,
            desc: 'Manage your orders.',
            link: '/account/my-orders',
        },
        {
            title: 'My Addresses',
            icon: <HiOutlineLocationMarker className='text-[60px] text-primary dark:text-primary-light'/>,
            desc: 'Manage your addresses.',
            link: '/account/my-addresses',
        },
        {
            title: 'My Wishlist',
            icon: <AiOutlineHeart className='text-[60px] text-primary dark:text-primary-light'/>,
            desc: 'Manage your wishlist.',
            link: '/account/my-wishlist',
        },
        {
            title: 'My Cards',
            icon: <BsCreditCard className='text-[60px] text-primary dark:text-primary-light'/>,
            desc: 'Manage your cards.',
            link: '/account/my-cards',
        },
    ];
    return (
        <>
            <ReactDocumentTitle title='My Profile'/>
            <Navbar/>
            <Breadcrumb array={breadcrumb}/>
            <h2 className='text-center font-semibold text-title dark:text-gray m-3'>My Profile</h2>
            <div className='m-auto w-95 max-w-[1000px] flex flex-col gap-2 '>
                <div className='bg-white flex items-center gap-2 p-2 rounded shadow-containersShadow w-100 dark:bg-darkBg border-2 border-gray dark:border-gray-grayDark'>
                    <div className='h-7.5 w-7.5 bg-darkBg rounded-full border-2 border-primary dark:border-primary-light'>
                        <img src="" alt="" />
                    </div>
                    <h3 className='text-subtitle font-medium dark:text-gray'>{user.name}</h3>
                </div>
                <div className='w-100 flex flex-col sm:grid sm:grid-cols-2 gap-2'>
                    {cards.map((card, index) => (
                        <AccountOptionsCard
                            key={index}
                            title={card.title}
                            icon={card.icon}
                            link={card.link}
                            desc={card.desc}
                        />
                        ))}
                </div>
            </div>
        </>
    )
}
