"use client"
import useAuth from '@/hooks/useAuth'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import axiosInstance from '@/utils/axiosInstance';
import { GoogleLogin } from '@react-oauth/google';


const OUTSIDERROLE = 'outsider'; // DEFAULT ROLE
const ADMINROLE = 'admin';
const EXPERTROLE = 'expert';
const TEACHERROLE = 'teacher';
const STUDENTROLE = 'student';
const NotLoggedINUser = 'anonymous'
const LayoutComponent = ({ children }) => {

    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
    return (

        <>

            <div className="h-screen flex flex-col relative">

                <Header isMenuBarOpen={isMenuBarOpen} setIsMenuBarOpen={setIsMenuBarOpen} />
                {!isMenuBarOpen && <div className=' h-[100%]  overflow-auto'>

                    {children}
                </div>}

                {!isMenuBarOpen && <Footer />}

                {process.env.NEXT_PUBLIC_ENV == 'local' && <LocalRoleChanger />}
            </div>
        </>
    )
}


const LocalRoleChanger = () => {

    const { login, logout, userRole, setuserRole } = useAuth();
    const handleChange = (e) => {
        login('localtestingtoken')
        if (e.target.value == NotLoggedINUser) {
            logout()
        }
        setuserRole(e.target.value)
    }
    return (<>
        <div className='absolute bottom-4 left-4 rounded shadow-lg '>
            <select onChange={handleChange} defaultValue={userRole} className='py-2 px-2'>
            {/* <select onChange={handleChange} value={userRole} className='py-2 px-2'> */}
                <option value={NotLoggedINUser}> {NotLoggedINUser}</option>
                <option value={ADMINROLE}> {ADMINROLE}</option>
                <option value={TEACHERROLE}> {TEACHERROLE}</option>
                <option value={STUDENTROLE}> {STUDENTROLE}</option>
                <option value={EXPERTROLE}> {EXPERTROLE} </option>
                <option value={OUTSIDERROLE}> {OUTSIDERROLE}</option>
            </select>
        </div>


    </>);
};

export default LayoutComponent



const Header = ({ setIsMenuBarOpen, isMenuBarOpen }) => {


    const pathname = usePathname()


    useEffect(() => {
        if (isMenuBarOpen == true) {
            setIsMenuBarOpen(false)
        }

    }, [pathname])
    return (<>

        <div className='flex flex-col sticky top-0'>
            <div className='border-2 shadow  py-4 px-2 flex  justify-between items-center'>

                <div>
                    {/* logo */}
                    <p className='text-2xl font-extrabold text-blue-500 '> KITS SPARK </p>
                </div>


                <div className='hidden md:flex gap-5 '>
                    <PrimaryNavbar />

                </div>

                <div className='hidden md:flex gap-5  overflow-hidden'>
                    <SecundaryNavbar />
                </div>

                <div className=' md:hidden font-black text-2xl  ml-auto '>
                    <button onClick={() => { setIsMenuBarOpen((prev) => !prev) }}>   {isMenuBarOpen ? <span> &#x274C;</span> : <span>&#x2630;</span>}  </button>
                </div>
            </div>

            {isMenuBarOpen && <div className={`md:hidden h-[90Vh]  items-center flex flex-col gap-5 justify-around transition-opacity transition-max-h ease-linear duration-1000 `}>

                <PrimaryNavbar />
                <SecundaryNavbar />
            </div>
            }

        </div>
    </>)
}

const PrimaryNavbar = () => {

    return (<>
        <button className='our-button'>
            <Link href={'/'}>  Home</Link>
        </button>
    </>)
}

const SecundaryNavbar = () => {


    const { userToken: token, logout, login } = useAuth()


    const handleLogin = async (credentialResponse) => {

        // No handle case where id Token from google is missing...
        let tokenData = await loginAPICALL(credentialResponse);
        login(tokenData.token)
    };




    if (token) {

        return (

            <>
                <button className='our-button'> <Link href={`/dashboard`}> Dashboard</Link>  </button>
                <button className='our-button' onClick={() => logout()}> logout</button>
            </>
        )
    }
    return (<>

        <GoogleLogin
            onSuccess={handleLogin}
            onError={() => {
                console.log('Login Failed');
            }}

            width='200px'

        />

    </>)
}

const Footer = () => {


    // I DON't think, it is need     
    return (

        <div className='bg-gray-100'>

            <p className=' text-center '>

                {/* <span className='text-red-500'>&#10084;</span> */}

                {/* Made   by <Link href={'/https://www.linkedin.com/in/siva-ramireddy-baram-1269261aa/'}> Siva Rami reddy</Link> */}

            </p>
        </div>
    )
}

const loginAPICALL = async (credentialResponse) => {


    let response = await axiosInstance.post("/apis/user/login", credentialResponse);

    return response.data;
}