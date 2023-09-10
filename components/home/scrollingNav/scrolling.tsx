import { categories } from '../../utils/constant'
import React, { useRef, useState } from 'react';
import { useContext } from 'react';
import { sideBarContext } from '../sidebar/context';
import './scrolling.css';

const ScrollNavbar = () => {
    const scrollContainerRef = useRef<HTMLUListElement | null>(null);
    const [isGrabbing, setIsGrabbing] = useState(false);
    const [startX, setStartX] = useState(0);
    const { setCategory } = useContext(sideBarContext)
    const [scrollLeft, setScrollLeft] = useState(0);
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsGrabbing(true);
        setStartX(e.clientX);
        setScrollLeft(scrollContainerRef.current?.scrollLeft || 0);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isGrabbing) return;

        const deltaX = e.clientX - startX;
        scrollContainerRef.current!.scrollLeft = scrollLeft - deltaX;
    };

    const handleMouseUp = () => {
        setIsGrabbing(false);
    };

    return (
        <div className="scrollNavbar">
            <div className={`scrollNavbarWrapper ${isGrabbing ? 'grabbing' : ''}`}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}>
                {/* Add your left arrow */}

                <ul style={{ width: "900px" }} ref={scrollContainerRef} className='flex cursor-pointer ml-8 overflow-hidden items-center gap-4 justify-between'>
                    {categories.map((x, y) => (
                        <li onClick={() => setCategory(x?.name)} key={y} className='category_li p-2 pl-3 pr-3 flex'>
                            {x.name}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
};

export default ScrollNavbar;
