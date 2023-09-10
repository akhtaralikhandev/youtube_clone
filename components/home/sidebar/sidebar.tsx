import "./sidebar.css";
import { useContext } from "react";
import { sideBarContext } from "./context";
const Sidebar = () => {

    const { display, marginLeft_, setMarginLeft, setDisplay, navbarDisplay, setNavbarDisplay, signInHeight, setSignInHeight, category, setCategory } = useContext(sideBarContext)
    const toggle = () => {
        if (display === "md:w-72 w-32") {
            setDisplay("w-0")
            setMarginLeft("ml-12")
            setNavbarDisplay("block")
        }
        else if (display === "md:w-72 w-32") {
            setDisplay("w-72")
            setMarginLeft("ml-72")
            setNavbarDisplay("hidden")
        }

    }
    const toggleSignInHeight = () => {
        if (signInHeight === "hidden") {
            setSignInHeight("block")
        } else {
            setSignInHeight("hidden")
        }
    }
    return (
        <div className={`sidebar  ${display}  max-h-screen overflow-x-hidden  fixed overflow-y-scroll  shadow-lg `}>
            <div className="sidebar_wrapper pt-4 flex flex-col md:gap-4 md:pl-4 md:pr-4 pl-2 pr-2  items-center justify-center">
                <div className="flex w-full flex-col gap-2">
                    <div className="flex items-center justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/home.png" alt="" />
                        <span onClick={() => setCategory("/")} className="home ">Home</span>
                    </div>
                    <div className="flex items-center justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/shorts.png" alt="" />
                        <span onClick={() => setCategory("shorts")} className="home">Shorts</span>
                    </div>
                    <div className="flex items-start justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/subscription.png" alt="" />
                        <span className="home">Subscriptions</span>
                    </div>
                </div>
                <div className="linebreak h-1 w-72 md:mt-4 md:mb-4 "></div>
                <div className="flex w-full flex-col gap-2">
                    <div className="flex items-center justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/library.png" alt="" />
                        <span className="home">Library</span>
                    </div>
                    <div className="flex items-start justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/history.png" alt="" />
                        <span className="home">History</span>
                    </div>
                </div>
                <div className="linebreak h-1 w-72 md:mt-4 md:mb-4 "></div>
                <div className="flex flex-col w-full  justify-start gap-4">
                    <div className="flex flex-col sign_in_to_subscribe">
                        <span>Sign in to like videos,</span>
                        <span> comment, and subscribe.</span>
                    </div>
                    <div onClick={() => toggleSignInHeight()} className="sidebar_sign_in cursor-pointer">
                        <img src="/images/sidebar/person.png" alt="" />
                        <span className="sign_in_span ">Sign in</span>
                    </div>
                </div>
                <div className="linebreak h-1 w-72 md:mt-4 md:mb-4 "></div>
                <span className="explore_span w-full flex items-start justify-start">
                    Explore
                </span>
                <div className="flex w-full flex-col gap-1">
                    <div onClick={() => setCategory("trending")} className="flex items-center justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/trending.png" alt="" />
                        <span className="home ">Trending</span>
                    </div>
                    <div onClick={() => setCategory("music")} className="flex items-center justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/music.png" alt="" />
                        <span className="home">Music</span>
                    </div>
                    <div onClick={() => setCategory("movies")} className="flex items-start justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/movies.png" alt="" />
                        <span className="home">Movies</span>
                    </div>
                    <div onClick={() => setCategory("lives")} className="flex items-center justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/live.png" alt="" />
                        <span className="home ">Lives</span>
                    </div>
                    <div onClick={() => setCategory("sports")} className="flex items-center justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/Sports.png" alt="" />
                        <span className="home">Sports</span>
                    </div>
                    <div onClick={() => setCategory("learning")} className="flex items-start justify-start w-full md:p-3 p-2 side_bar_link gap-4">
                        <img src="/images/sidebar/learning.png" alt="" />
                        <span className="home">Learning</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Sidebar;
