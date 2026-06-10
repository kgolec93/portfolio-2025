'use client'

import { sourceCodePro } from "@/app/ui/fonts";
import { projectCategories, projectsList } from "@/app/data/projects";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from "@heroicons/react/24/outline";
import { asset } from "@/app/utils/AssetPath";

export default function Sidenav() {
    const [projects, setProjects] = useState([{ name: 'project', idName: '', category: '', icon: '' }]);
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname();

    useEffect(() => {
        const projectsListSimplified = projectsList.map((item, i) => {
            return (
                {
                    name: item.name,
                    idName: item.idName,
                    category: item.projectCategory,
                    icon: item.icon
                }
            )
        })
        setProjects(projectsListSimplified)
    }, [])

    return (
        <nav className={clsx("w-[512px] bg-[#050505] text-white z-6 transition-all flex flex-shrink-0 lg:static left-[-92vw] sm:left-[-480px] top-0 absolute lg:h-auto h-full max-w-screen", {'!left-[0px]' : isMenuOpen })}>
            <div className="p-4 flex flex-col w-full">
                <Link href='/'>
                    <Image
                        width={24}
                        height={24}
                        src={asset('/icons/home-icon.png')}
                        alt='home'
                        className="hover:scale-110 transition"
                        onClick={()=>setIsMenuOpen(false)}
                    />
                </Link>
                <h1 className={`${sourceCodePro.className} text-3xl sm:text-5xl mt-12`}>Projects</h1>
                {
                    projectCategories.map((item, i) => {
                        return (
                            <React.Fragment key={i}>
                                <div className="my-5">

                                    <div key={i} className="flex items-center">
                                        <Image src={asset(item.icon)} height={12} width={12} alt={item.name} className="text-white mr-3 !h-10 !w-10 sm:h-auto sm:w-auto" />
                                        <h2 className="font-black text-3xl">
                                            {item.name}
                                        </h2>
                                    </div>
                                    <div>
                                        {
                                            projects.map((prj, i1) => {
                                                if (prj.category === item.name) {
                                                    return (
                                                        <Link href={prj.idName} key={i1} onClick={()=>setIsMenuOpen(false)}>
                                                            <div
                                                                className={clsx("transition flex items-center ml-[55px] my-1 hover:bg-neutral-800 p-1 rounded-md", { '!bg-blue-400': pathname === `/${prj.idName}` })}
                                                            >
                                                                <div className="h-[24px] w-[24px] sm:h-[32px] sm:h-[32px]w-[32px] mr-4 flex items-center">
                                                                    <Image src={asset(prj.icon)} height={64} width={64} alt={prj.name} className="text-white mx-auto h-auto w-full" />
                                                                </div>
                                                                <h3 className={`${sourceCodePro.className}`}>{prj.name}</h3>
                                                            </div>
                                                        </Link>
                                                    )
                                                }
                                            })
                                        }
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
            <div className="w-[24px] relative lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {
                    isMenuOpen ?
                        <ChevronDoubleLeftIcon
                            className="text-white absolute top-[50vh] right-1 w-6 h-6"
                            
                        />
                        :
                        <ChevronDoubleRightIcon
                            className="text-white absolute top-[50vh] right-1 w-6 h-6"
                        />
                }

            </div>
        </nav>
    )
}