import './navbar.css'
import { useContext, useState } from 'react'
import { sideBarContext } from '../sidebar/context'
interface NavbarProps {
    onClick: () => void; // Replace 'void' with the actual return type if needed
}
const Navbar: React.FC<NavbarProps> = ({ onClick }) => {

    const [words, setWords] = useState("")
    const { display, marginLeft_, setMarginLeft, setDisplay, navbarDisplay, setNavbarDisplay, signInHeight, setSignInHeight, category, setCategory } = useContext(sideBarContext)
    const toggle = () => {
        if (display === "md:w-72 w-48") {
            setDisplay("w-0")
            setMarginLeft("md:ml-72 ml-0")
            setNavbarDisplay("block")
        }
        else if (display === "w-0") {
            setDisplay("md:w-72 w-48")
            setMarginLeft("md:ml-72 ml-0")
            setNavbarDisplay("hidden")
        }

    }
    const handleSearch = (e: any) => {
        e.preventDefault()
        if (words) {
            const formattedWords = words.replace(/\s+/g, '+');
            setCategory(formattedWords);
        }
    }
    const handleKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    }
    return (
        <div onKeyDown={(e) => handleKeyPress(e)} className="navbar md:pt-0 pt-4 z-30 fixed w-full top-0 bg-white  ">
            <div className="navbar_wrapper md:p-4 pl-2 pr-2 w-full relative flex justify-center  md:justify-between md:pl-8 md:pr-8 items-start md:items-center">
                <div className="md:flex w-32 absolute md:relative left-0   md:items-start md:justify-start items-center justify-center  md:p-3 p-2 gap-2  md:gap-8">
                    <img
                        onClick={() => toggle()}
                        className="side_bar_link"
                        src="/images/sidebar/Frame.png"
                        alt=""
                    />
                    <img className="ml-12 md:block hidden" src="/images/sidebar/YouTube.png" alt="" />
                </div>
                <div className="input_div md:mt-0 md:ml-0  ml-12 flex gap-4 items-center ">
                    <div className="input_div_boundary gap-0 flex">
                        <input value={words} autoComplete='off'
                            onChange={(e) => setWords(e.target.value)} className="input_div_ w-full" />
                        <span onClick={(e) => handleSearch(e)} className='navbar_search'>
                            <img src="/images/navbar/search.png" alt="" />
                        </span>
                    </div>
                    <span className='mice cursor-pointer'>
                        <img src="/images/navbar/mice.png" alt="" />
                    </span>
                </div>
                <div className="right flex items-center gap-8">
                    <div className=' hidden cursor-pointer'>
                        <img src="/images/navbar/more.png" alt="" />
                    </div>
                    <div onClick={() => onClick()} className="sidebar_sign_in lg:block hidden cursor-pointer">
                        <img src="/images/sidebar/person.png" alt="" />
                        <span className="sign_in_span ">Sign in</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar