"use client"
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import Navbar from '../navbar/navbar'
import { sideBarContext } from '../sidebar/context'
import './main.css'
import ScrollNavbar from '../scrollingNav/scrolling'
import SignIn from '@/components/signin/signIn'
import { fetchFromAPI } from '../../utils/fetchFrom.js'


const Main = () => {
    const [videos, setVideos] = useState<any[]>([]);
    const [loading, setLoading] = useState(false)
    const { display, marginLeft_, setMarginLeft, category, setDisplay, navbarDisplay, setNavbarDisplay, signInHeight, setSignInHeight } = useContext(sideBarContext)
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
    const toggleSignInHeight = () => {
        if (signInHeight === "hidden") {
            setSignInHeight("block")
        } else {
            setSignInHeight("hidden")
        }
    }
    useEffect(() => {
        setLoading(true)
        fetchFromAPI(`search?part=snippet&q=${category}`).then((x) => {
            console.log(x?.items)
            setVideos(x?.items)
            setLoading(false)
        })
    }, [category])
    return (
        <div className={`${marginLeft_}  main mt-24`} >
            <ScrollNavbar />
            <div className="mainWrapper" onClick={() => { signInHeight === "block" ? setSignInHeight("hidden") : "" }}>
                {loading ?
                    <div className='w-full h-96 flex items-center justify-center'>
                        <Oval
                            height={90}
                            width={90}
                            color="blue"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel='oval-loading'
                            secondaryColor="white"
                            strokeWidth={2}
                            strokeWidthSecondary={2}

                        /> </div> :
                    <div className='m-8 flex flex-wrap items-start justify-center gap-4'>
                        {videos &&
                            videos.map((video) => (
                                <div key={video.id.videoId} className="video items-center justify-center  w-80 flex flex-col gap-4">
                                    <Link href={`https://www.youtube.com/watch?v=${video.id.videoId}}`}>
                                        <video className='rounded-lg' controls poster={video?.snippet?.thumbnails?.high?.url}>
                                            <source src={video.videoUrl} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </Link>
                                    <div className='flex items-start justify-start gap-4'>
                                        <img src={video.channelImageUrl} alt={video.channelName} />
                                        <div>
                                            <div className="title">
                                                <span>{video?.snippet.title}</span>
                                            </div>
                                            <span className="channel_name">
                                                {video.snippet.channelName}
                                            </span>
                                            <div className='flex items-center justify-between views'>

                                                <span>• {video.uploadDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>}



            </div>
            <div className={`signIn ${signInHeight}  overflow-hidden fixed top-20 right-4 bg-white`}>
                <SignIn />
            </div>

        </div>
    )
}

export default Main