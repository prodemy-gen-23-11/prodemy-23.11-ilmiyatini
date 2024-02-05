import React from 'react';

export default function NavBar() {
    return (
        <div>
            <div className='text-xs p-1 bg-amber-300 text-black text-center w-full'>
                <p>
                    <strong>Act fast!</strong> Save up to 50% on Fall Sale deals. <b>Explore Sale</b>
                </p>
            </div>
            <div className='flex text-black w-full border-b-2 border-inherit justify-between overflow-auto p-1'>
                <img className='relative w-12 md:w-16 ml-10 mr-4' src='logo-3.png' alt='logo-ilCommerce' />

                <nav className='hidden lg:block mt-2'>
                    <ul className='flex text-xs md:text-sm font-sans'>
                        <li className='mx-2'>
                            <a className='hover:text-yellow-500 hover:shadow-md transition duration-150' href='categories.html'>
                                <b>Categories</b>
                            </a>
                        </li>
                        <li className='mx-2'>
                            <a className='hover:text-yellow-500 hover:shadow-md transition duration-150' href='sale.html'>
                                <b>Sale</b>
                            </a>
                        </li>
                        <li className='mx-2'>
                            <a className='hover:text-yellow-500 hover:shadow-md transition duration-150' href='bestPrice.html'>
                                <b>Best Price</b>
                            </a>
                        </li>
                        <li className='mx-2'>
                            <a className='hover:text-yellow-500 hover:shadow-md transition duration-150' href='whatsNew.html'>
                                <b>Whats New</b>
                            </a>
                        </li>
                        <li className='mx-2'>
                            <a className='hover:text-yellow-500 hover:shadow-md transition duration-150' href='pickupDelivery.html'>
                                <b>Pickup & Delivery</b>
                            </a>
                        </li>
                    </ul>
                </nav>

                <form id='search-form'>
                    <input
                        type='text'
                        id='search-input'
                        placeholder='Search for products or brands...'
                        className='relative w-40 md:w-60 lg:w-64 xl:w-80 mt-1 p-2 text-xs border border-gray-300 rounded outline-none bg-gray-200 focus:border-yellow-500'
                    />
                </form>

                <span id='user-tools' className='flex items-center mr-10'>
                    <span className='mr-2 hover:bg-amber-300 rounded-md p-1'>
                        <button className='flex items-center'>
                            <img src='user.png' id='sign-in-icon' alt='logo user' className='w-4 mr-1' />
                            <span className='hidden md:block text-user-tools text-xs'>Sign in</span>
                        </button>
                    </span>

                    <span className='hover:bg-amber-300 rounded-md p-1'>
                        <button className='flex items-center'>
                            <img src='cart.png' id='cart-icon-' alt='logo user' className='w-5 mr-1' />
                            <span className='hidden md:block text-user-tools text-xs'>Cart</span>
                        </button>
                    </span>
                </span>
            </div>
        </div>
    );
}
