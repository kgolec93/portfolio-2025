
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRef } from "react"

export default function Lightbox({ onSwitch, onClose, image }) {

    const startXRef = useRef(null)

    const handleTouchStart = (e) => {
        startXRef.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (startXRef.current === null) return;
        const endX = e.changedTouches[0].clientX;
        const deltaX = startXRef.current - endX;

        if (Math.abs(deltaX) > 50) {
            deltaX > 0 ? onSwitch('next') : onSwitch('prev');
        }

        startXRef.current = null;
    };

    const handleMouseDown = (e) => {
        startXRef.current = e.clientX;
    };

    const handleMouseUp = (e) => {
        if (startXRef.current === null) return;
        const deltaX = startXRef.current - e.clientX;

        if (Math.abs(deltaX) > 50) {
            deltaX > 0 ? onSwitch('next') : onSwitch('prev');
        }

        startXRef.current = null;
    };


    return (
        <div
            className="lightbox z-6 fixed top-0 left-0 w-screen h-screen bg-neutral-900/80  p-4 select-none"
            onClick={onClose}
        >
            <div
                className="relative w-full h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
            >

                <ChevronLeftIcon
                    className="text-white w-12 hover:cursor-pointer hover:scale-105 absolute top-[50%] left-2 xl:left-6 z-6"
                    onClick={() => onSwitch('prev')}
                />
                <Image src={asset(image.url)} alt={image.url} width={1920} height={1080} className="z-5 select-none" draggable="false" />
                <ChevronRightIcon
                    className="text-white w-12 hover:cursor-pointer hover:scale-105 absolute top-[50%] right-2 xl:right-6 z-6"
                    onClick={() => onSwitch('next')}
                />
                <XMarkIcon
                    className="text-white w-12 hover:cursor-pointer hover:scale-105 absolute top-6 right-6 z-6"
                    onClick={onClose}
                />
            </div>
        </div>
    )
}