import React from 'react'

import facebook from '../assets/facebook-square-social-logo-svgrepo-com.svg';
import youtube from '../assets/youtube-rounded-svgrepo-com.svg';
import ArrowButton from '../components/ArrowButton';

const Footer = () => {
    return (
        <section className='bg-[#02033B] h-[90vh]'>
            <div className='flex flex-col justify-evenly mx-10 md:mx-[100px] lg:mx-[230px]'>

                <div className='flex flex-row '>
                    {/* Left */}
                    <div className='flex pt-20 gap-5 lg:justify-end'>
                        <div className='flex flex-col justify-start basis-1/2 '>
                            <h3 className='text-white font-extrabold text-2xl'>Scan.Detect.<br />Remove</h3>
                            <div className='flex gap-x-10 py-10'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1buBHyZzE__MESNeeqvz3PZ_FmnhxnxV5zA&usqp=CAU' alt="X logo" className='rounded-md' width={40} height={40} />
                                <img src={facebook} alt="facebook logo" width={40} height={40} />
                                <img src={youtube} alt="youtube logo" width={40} height={40} />
                            </div>
                            <div className='flex flex-row gap-10 pb-10'>
                                <p className='text-white text-xs underline'>Privacy policy</p>
                                <p className='text-white text-xs underline'>Terms of service</p>
                            </div>
                            <div className='text-xs'>
                                <p className='text-white'>Copyright © 2024 Certo Software Limited |<br />
                                    Registered in England & Wales...</p>
                                <p className='text-white'><br />Designed & Develiped by <span className='underline'>Bigger Picture</span></p>
                            </div>
                        </div>


                        <div className='flex flex-col items-center basis-1/2 '>
                            <h2 className='text-white font-bold text-4xl mb-2'>Certo</h2>

                            <ul className='flex flex-col gap-2'>
                                <li><ArrowButton text="iPhone" textColor="text-yellow-custom" hoverColor="yellow-custom" /></li>
                                <li><ArrowButton text="Android" textColor="text-yellow-custom" hoverColor="yellow-custom" /></li>
                                <li><ArrowButton text="Help" textColor="text-yellow-custom" hoverColor="yellow-custom" /></li>
                                <li><ArrowButton text="About" textColor="text-yellow-custom" hoverColor="yellow-custom" /></li>
                                <li><ArrowButton text="Insights" textColor="text-yellow-custom" hoverColor="yellow-custom" /></li>
                                <li><ArrowButton text="Affiliates" textColor="text-yellow-custom" hoverColor="yellow-custom" /></li>
                            </ul>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='hidden lg:flex lg:basis-1/2 pt-20 justify-end items-center'>
                        <div className='bg-yellow-custom flex flex-col py-10 px-10 rounded-[50px] w-[30vw] h-[40vh] justify-center items-center'>
                            <div className='flex flex-col pb-5 gap-5'>
                                <h1 className='font-extrabold text-4xl text-[#02033b] '>Sign up to our<br />newsletter</h1>
                                <p className='text-sm text-balance'>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                            </div>

                            <form className='flex  w-full justify-center '>
                                <input placeholder='Email address' className='px-3 py-2 rounded-l-lg basis-4/5'></input>
                                <button className='bg-[#02033B] text-white font-bold px-3 py-2 rounded-r-lg basis-1/5'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center flex-col lg:flex-row mt-10 gap-3'>
                    <div className='grid basis-1/2 justify-start items-center'>
                        <img src="https://certo-software.imgix.net/app/uploads/2021/12/coalition_against_stalkerware_logo.png" alt="coalition logo" width={150} />
                        <p className='text-white text-xs mt-28'>Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC.</p>
                    </div>
                    <div className='flex basis-1/2 justify-center lg:justify-end '>
                        <div className='grid grid-flow-col gap-5 bg-white p-5 rounded-2xl justify-center h-fit'>
                            <img src="https://certo-software.imgix.net/app/uploads/2023/12/Globee-Award-2023.webp" alt="cyberlogo" width={60} />
                            <img src="https://certo-software.imgix.net/app/uploads/2023/12/Cybersecurity-Excellence-Gold-2023.webp" alt="cyber logo 2" width={40} />
                            <img src="https://certo-software.imgix.net/app/uploads/2024/05/Global-InfoSec-Awards-Winner-for-2024-250px.png" alt="cyber logo 3" width={70} />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer
