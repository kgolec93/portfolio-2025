'use client'
import Lightbox from "../ui/lightbox";
import { MagnifyingGlassPlusIcon } from '@heroicons/react/24/outline'
import { useState } from "react"
import Image from "next/image"

export default function ImageGallery({projectData}) {
    const [lightboxImage, setLightboxImage] = useState({ show: false, url: '', index: 0 })

    const openImage = (item, i) => {
        setLightboxImage({
            show: true,
            url: item.url,
            index: i
        })
    }

    const switchImage = (direction) => {
            const id = lightboxImage.index
            if (direction === 'next') {
                if (id === projectData.data.screenshots.length - 1) {
                    setLightboxImage({
                        show: true,
                        url: projectData.data.screenshots[0].url,
                        index: 0
                    })
                }
                else {
                    setLightboxImage({
                        show: true,
                        url: projectData.data.screenshots[id + 1].url,
                        index: id + 1
                    })
                }
            }
            else {
                if (id === 0) {
                    setLightboxImage({
                        show: true,
                        url: projectData.data.screenshots[projectData.data.screenshots.length - 1].url,
                        index: projectData.data.screenshots.length - 1
                    })
                }
                else {
                    setLightboxImage({
                        show: true,
                        url: projectData.data.screenshots[id - 1].url,
                        index: id - 1
                    })
                }
            }
        }

    return (
        <>
            {/* IMAGE GALLERY */}
            <div className="imageGallery p-3 flex flex-wrap justify-start">
                {
                    projectData.data.screenshots.length > 0 && projectData.data.screenshots.map((item, i) => {
                        if (item.url != '') {
                            return (
                                <div className="imageContainer aspect-video w-full md:w-1/3 p-1 " key={i}>
                                    <div className="w-full h-full overflow-hidden relative">
                                        <Image
                                            src={item.url}
                                            alt={item.url}
                                            width={192 * 4}
                                            height={108 * 4}
                                            className="w-full h-full object-cover hover:scale-110 hover:z-5 transition"

                                        />
                                        <div
                                            className="flex items-center justify-center hover:cursor-pointer opacity-0 hover:opacity-100 transition w-full h-full bg-neutral-900/60 z-5 absolute top-0 left-0"
                                            onClick={() => openImage(item, i)}
                                        >
                                            <MagnifyingGlassPlusIcon className="text-white h-12" />
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
            {
                lightboxImage.show &&
                <Lightbox
                    onClose={() => { setLightboxImage({ ...lightboxImage, show: false }) }}
                    onSwitch={(dir) => switchImage(dir)}
                    image={lightboxImage}
                />
            }
        </>
    )
}