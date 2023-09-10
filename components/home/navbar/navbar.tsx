import './navbar.css'
import { useContext, useState } from 'react'
import { sideBarContext } from '../sidebar/context'
const Navbar = ({ onClick }) => {
    const [words, setWords] = useState("")
    const { display, marginLeft_, setMarginLeft, setDisplay, navbarDisplay, setNavbarDisplay, signInHeight, setSignInHeight, category, setCategory } = useContext(sideBarContext)
    const toggle = () => {
        if (display === "w-72") {
            setDisplay("w-0")
            setMarginLeft("ml-12")
            setNavbarDisplay("block")
        }
        else if (display === "w-0") {
            setDisplay("w-72")
            setMarginLeft("ml-72")
            setNavbarDisplay("hidden")
        }

    }
    const handleSearch = (e) => {
        e.preventDefault()
        if (words) {
            const formattedWords = words.replace(/\s+/g, '+');
            setCategory(formattedWords);
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch(e);
        }
    }
    return (
        <div onKeyDown={(e) => handleKeyPress(e)} className="navbar fixed w-full top-0 bg-white  ">
            <div className="navbar_wrapper md:p-4 flex justify-between md:pl-8 md:pr-8 items-center">
                <div className="flex items-start justify-start w-full md:p-3 p-2  gap-8">
                    <img
                        onClick={() => toggle()}
                        className="side_bar_link"
                        src="/images/sidebar/Frame.png"
                        alt=""
                    />
                    <img className="ml-12" src="/images/sidebar/YouTube.png" alt="" />
                </div>
                <div className="input_div flex gap-4 items-center ">
                    <div className="input_div_boundary gap-0 flex">
                        <input onChange={(e) => setWords(e.target.value)} className="input_div_" type="text" />
                        <span className='navbar_search'>
                            <img src="/images/navbar/search.png" alt="" />
                        </span>
                    </div>
                    <span className='mice cursor-pointer'>
                        <img src="/images/navbar/mice.png" alt="" />
                    </span>
                </div>
                <div className="right flex items-center gap-8">
                    <div className=' cursor-pointer'>
                        <img src="/images/navbar/more.png" alt="" />
                    </div>
                    <div onClick={() => onClick()} className="sidebar_sign_in cursor-pointer">
                        <img src="/images/sidebar/person.png" alt="" />
                        <span className="sign_in_span ">Sign in</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar