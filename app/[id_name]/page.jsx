// 'use client'
import { sourceCodePro } from "@/app/ui/fonts";
import { nunitosans } from "@/app/ui/fonts";
// import { useParams } from "next/navigation"
import { projectsList, placeholderProject } from "@/app/data/projects"
import Image from "next/image"
import Link from "next/link";
import ImageGallery from "./ImageGallery";

export function generateStaticParams() {
    return projectsList.map((project) => ({
        id_name: project.idName,
    }));
}

export default function ProjectPage({ params }) {

    // params = useParams()
    // const [loading, setLoading] = useState(true)
    // const [projectData, setProjectData] = useState({ placeholderProject })

    // useEffect(() => {
    //     try {
    //         const project = projectsList.find(obj => obj.idName === params.id_name)
    //         document.title = `Kamil Golec // Portfolio // ${project.name}`;
    //         setProjectData(project)
    //     }
    //     catch (error) {
    //         console.error(err)
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }, [])

    const projectData = projectsList.find(
        p => p.idName === params.id_name
    );

    const subtitleClass = `text-xl md:text-3xl mb-4 font-bold ${sourceCodePro.className}`
    const sectionClass = 'max-w-[1024px] bg-neutral-200/70 mb-4 md:mb-12  p-2 md:p-6'
    const sectionContentClass = `${nunitosans.className}`
    const buttonClass = " w-full h-full bg-blue-400 px-8 py-1 rounded-md flex items-center font-bold text-white justify-center"
    const buttonClassDisabled = buttonClass + ' !bg-neutral-500 opacity-50 hover:cursor-not-allowed'
    const buttonClassActive = buttonClass + " hover:cursor-pointer hover:bg-blue-600 transition"
    const buttonContainer = 'w-full lg:w-1/3 py-1 px-4 lg:p-4 flex'

    const iconSize = 32 

    


    return (
        <div className="projectContainer pl-6 lg:p-0">
            <div className="jumbo overflow-hidden w-full h-[256px] md:h-[512px] bg-neutral-900 relative flex items-end justify-start">
                <Image
                    width={2560}
                    height={1280}
                    priority={true}
                    alt={projectData.name}
                    src={projectData.heroImageUrl}
                    className="w-full h-full object-cover absolute top-0 left-0 blur-sm"
                />
                <div className="flex items-end justify-start z-5 bg-neutral-900/40 w-full h-full p-4 md:p-12">
                    <div className="flex items-center max-w-[70vw] md:w-auto">
                        <Image
                            width={128}
                            height={128}
                            priority={true}
                            alt={`${projectData.name}_logo`}
                            src={projectData.icon}
                            className="w-auto h-[15vw] md:h-[128px] mr-2 md:mr-6 object-fit"
                        />
                        <h1 className="text-2xl md:text-7xl font-black text-white">{projectData.name}</h1>
                    </div>
                </div>
            </div>
            <main className="max-w-[1024px] mr-auto">

                <div className="linksContainer flex flex-col items-stretch lg:flex-row">
                    <div className={buttonContainer}>
                        <button className={buttonClass}>
                            {
                                projectData.isCommercial ?
                                    <>
                                        <Image className="mr-4" src='/icons/dollar_icon.png' width={iconSize} height={iconSize} alt={'dollar'} />
                                        <p>Commercial Project</p>
                                    </>
                                    :
                                    <>
                                        {
                                            projectData.isPrivate ?
                                                <>
                                                    <Image className="mr-4" src='/icons/user_icon.png' width={iconSize} height={iconSize} alt={'personal'} />
                                                    <p>Personal Project</p>
                                                </>
                                                :
                                                <>
                                                    <Image className="mr-4" src='/icons/education_icon.png' width={iconSize} height={iconSize} alt={'edu'} />
                                                    <p>Educational Project</p>
                                                </>

                                        }
                                    </>
                            }


                        </button>
                    </div>
                    {
                        projectData.linkButton.projectUrl != '' &&
                        <div className={buttonContainer}>
                            <Link href={projectData.linkButton.projectUrl} className="w-full" target="_blank">
                                <button className={buttonClassActive}>
                                    <Image className="mr-4" src='/icons/link_icon.png' width={iconSize} height={iconSize} alt={'url'} />
                                    <p>{projectData.linkButton.buttonText}</p>
                                </button>
                            </Link>
                        </div>
                    }
                    <div className={buttonContainer}>
                        {
                            projectData.projectGithubUrl != '' ?
                                <Link href={projectData.projectGithubUrl} className="w-full" target="_blank">
                                    <button className={buttonClassActive}>
                                        <Image className="mr-4" src='/icons/github_icon.png' width={iconSize} height={iconSize} alt={'gh'} />
                                        <p>GitHub Repository</p>
                                    </button>
                                </Link>
                                :
                                <button className={buttonClassDisabled}>
                                    <Image className="mr-4" src='/icons/github_icon.png' width={iconSize} height={iconSize} alt={'gh'} />
                                    <p>GitHub Repository</p>
                                </button>
                        }
                    </div>
                </div>
                <div className="textContainer p-4">
                    <section className={sectionClass + ' flex items-center justify-between'}>
                        <h3 className={subtitleClass + ' !m-0'}>{projectData.data.date}</h3>
                    </section>
                    <section className={sectionClass}>
                        <h3 className={subtitleClass}>description</h3>
                        <p className={sectionContentClass} dangerouslySetInnerHTML={{ __html: projectData.data.description }}>
                        </p>
                    </section>
                    <section className={sectionClass}>
                        <h3 className={subtitleClass}>stack</h3>
                        <ul className={"list-disc pl-8 " + sectionContentClass}>
                            {
                                projectData.data.stack.map((item, i) => {
                                    return (
                                        <li key={i}>
                                            <span className="font-black">{item.main}</span> {item.additional != '' && ` // ${item.additional}`}
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </section>
                    {
                        projectData.ytOverview &&
                        <iframe
                            src={projectData.ytOverview} title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="mx-auto w-full  !aspect-video"
                        >
                        </iframe>
                    }
                </div>
                <ImageGallery projectData={projectData} />
            </main>
        </div>
    )

}