import { useState } from 'react'
import logo from '../assets/logo.png'
import ArrowButton from '../components/ArrowButton'
import Button from '../components/Button'
import './Navbar.css'

const NavBar = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);

    const toggleNav = () => {
        setIsNavbarVisible(!isNavbarVisible);
    }

    return (
        <header className=' z-50 w-full fixed h-[100px] bg-[#e7effa] opacity-100'>
            <div className={`mt-5 justify-between px-[120px] lg:hidden
            ${isNavbarVisible ? 'hidden' : 'flex'}`}>
                <img src={logo} alt="logo image" className='' width={150} />
                <i class="fa-solid fa-bars fa-2xl mt-7" onClick={toggleNav}></i>
            </div>
            <nav className={`lg:hidden bg-[#02033b] h-screen px-10 md:px-[120px] py-[24px] flex-col ${isNavbarVisible ? 'flex' : 'hidden'}`}>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="logo image" className='' width={150} />
                    <i class="fa-solid fa-xmark fa-2xl cursor-pointer" style={{ color: "#ffffff" }} onClick={toggleNav}></i>
                </div>

                <div className='flex flex-col pt-10 gap-10'>
                    <ArrowButton text="iPhone" textColor='text-yellow-custom' />
                    <ArrowButton text="Android" textColor='text-yellow-custom' />
                    <ArrowButton text="Help" textColor='text-yellow-custom' />
                    <ArrowButton text="Company" textColor='text-yellow-custom' />
                    <ArrowButton text="About" textColor='text-yellow-custom' />
                    <ArrowButton text="Insight" textColor='text-yellow-custom' />
                    <ArrowButton text="Affiliate" textColor='text-yellow-custom' />
                </div>
            </nav>
            <nav className='hidden lg:flex items-center justify-between py-[24px] px-[120px]'>

                <img src={logo} alt="logo image" className='' width={150} />

                <div className='flex flex-row gap-[48px] font-nav items-center'>
                    <ul className='flex flex-row gap-10 font-l font-bold'>
                        <li className='cursor-pointer'>iPhone</li>
                        <li className='cursor-pointer'>Android</li>
                        <li className='cursor-pointer'>Help</li>
                        <li className='cursor-pointer'>
                            <form className=' bg-inherit'>
                                <select className='bg-inherit'>
                                    <option value="">Company</option>
                                    <option value="">About</option>
                                    <option value="">Insight</option>
                                    <option value="">Affiliate</option>
                                </select>
                            </form>
                        </li>
                    </ul>

                    <Button text='Sign in' borderColor='border-none' bgColor='bg-purple-custom' textColor='text-white' />
                </div>

            </nav>



        </header>
    )
}

export default NavBar
