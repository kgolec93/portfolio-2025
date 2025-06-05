export const projectCategories = [
    {
        name: 'Next.JS',
        icon: '/icons/nextjs_logo.png'
    },
    {
        name: 'Python',
        icon: '/icons/python_logo.png'
    },
    {
        name: 'JavaScript',
        icon: '/icons/js_logo.png'
    },
    {
        name: 'React',
        icon: '/icons/react_logo.png'
    },
    {
        name: 'WordPress',
        icon: '/icons/wp_logo.png'
    },
]

export const placeholderProject = {
    id: 0, // id_number - for ordering
    projectCategory: 'Python', // or Next.JS or JavaScript + jQuery or React
    name: 'Project Name', // project name
    idName: 'project_idname', // project id name - for app routing
    icon: '/icons/project_icon.svg', // project icon - scalable
    heroImageUrl: '/', // url to banner image
    isCommercial: true, // if true - commercial project, if false - educational project
    projectUrl: '', // url to live version of the project
    projectGithubUrl: '', // url to github of the project, button will be disabled if blank
    data: {
        description: 'Lorem Ipsum', // detailed description of the project
        stack: [
            { main: 'NextJS 15', additional: ('Frontend and Backend') } /// main will be stronger font, additional will be regular
        ],
        screenshots: [
            {
                url: '',
                alt: ''
            }
        ]
    },
    tags: ['Next.JS']
}

export const projectsList = [
    ////////// polyspaace ///////////
    {
        id: 0,
        projectCategory: 'Next.JS',
        name: 'polyspaace.com',
        idName: 'polyspaace',
        icon: '/icons/psp_logo.png',
        heroImageUrl: '/projects/polyspaace/psp-banner.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://polyspaace.com',
            buttonText: 'Visit website'
        },
        projectUrl: 'https://polyspaace.com',
        projectGithubUrl: '',
        data: {
            date: '2024 - now',
            description: `
            A full-featured commercial fullstack web application, fully developed from scratch by me — from UX & UI design to database architecture. The platform is live and operational, serving users with free and paid 3D assets and addons for Blender.
            <br/><br/>
            Key features and technical highlights:
            <br/><br/>
            <ul class='pl-6 list-disc'>
                
                <li><strong>User management</strong> – complete user registration and authentication system, including custom email verification via code-based confirmation. Authentication is handled with Firebase, which securely manages user sessions using custom auth tokens. Firebase’s security rules are configured to depend on the authenticated user's UID and token claims, ensuring safe access control to the database.</li><br/>
                
                <li><strong>Payments integration</strong> – integration with the FastSpring payment system, which handles purchases, subscriptions, renewals, and cancellations via webhook communication. Payment-related data is processed securely on the backend. The platform is communicating with the FastSpring system via API calls to retrieve products pricing and data dynamically, including retrieving the price in the users currency, basing on his IP location.</li><br/>
                
                <li><strong>File and image hosting</strong> – assets are hosted on Cloudflare R2, chosen for its simplicity and lack of egress fees — an important factor considering potential high data transfer volumes. Images are served via Cloudflare Images, which offers flexible transformations and delivery. When a file is requested for download, the user's access rights and subscription plan are verified on the backend, ensuring that only authorized users can access specific resources.</li><br/>
                
                <li><strong>Cookie and privacy compliance</strong> – full compliance with GDPR and cookie regulations. A cookie consent mechanism ensures that services like Google Analytics and Meta Pixel are only enabled once user consent is explicitly given.</li><br/>
                
                <li><strong>Marketing tools integration</strong> – the platform includes full integration with Google Tag Manager, allowing flexible and scalable tracking setup. Within GTM, both Google Analytics 4 (GA4) and Meta Pixel are configured to monitor user behavior and support marketing activities. Tracking scripts are only activated after user consent, in compliance with privacy regulations.</li><br/>
                
                <li><strong>Mailing system</strong> – two separate mailing providers are used:</li>
                <ul class='pl-6 list-disc'>
                
                    <li>SendGrid for marketing communication (optional signup during account creation or later)</li>
                    <li>Amazon SES for transactional emails, with templates built using React Email</li>
                </ul><br/>
                <li><strong>User and Admin dashboards</strong> – both protected by backend logic and Firestore security rules. The Admin panel includes a custom asset management system for uploading, categorizing, and editing assets directly into the database and storage.</li><br/>
                
                <li><strong>Addon integration</strong> – the database is tightly coupled with my custom-built Blender addon Flow, which allows creators to prepare assets and export metadata in JSON format. The website reads this metadata during upload and inserts appropriate database entries (e.g., category, dimensions, Blender version, technical properties, etc.).</li><br/>
            </ul>
            This was my first fullstack project at this scale. It significantly expanded my experience in backend logic, application security, API integration, hosting, and performance optimization. I made critical decisions regarding technology stack, database architecture, and third-party services not only to ensure scalability and maintainability, but also to optimize the long-term operational costs of running the platform. The process challenged me to work far beyond my original frontend comfort zone — and that’s what made it especially rewarding.
            <br/><br/>
            As this is a live commercial project, the GitHub repository is not publicly available.
            `,
            stack: [
                { main: 'NextJS 15', additional: 'Frontend and Backend' },
                { main: 'FastSpring', additional: 'Payments & subscriptions provider' },
                { main: 'Firebase Authentication', additional: '' },
                { main: 'Firebase Firestore Database', additional: '' },
                { main: 'Google Analytics 4 & Google Tag Manager', additional: '' },
                { main: 'Cloudflare R2', additional: '' },
                { main: 'Cloudflare Images', additional: 'CDN' },
                { main: 'Amazon SES', additional: 'Transactional Mailing' },
                { main: 'Sendgrid', additional: 'Marketing Mailing' },
                { main: 'Tailwind CSS', additional: '' }
            ],
            screenshots: [
                {
                    url: '/projects/polyspaace/psp-screen-1.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-2.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-3.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-4.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-5.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-6.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-7.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-8.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-9.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-10.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace/psp-screen-11.jpg',
                    alt: 'polyspaace'
                },
            ]
        },
        tags: ['Next.JS']
    },
    //////// portfolio ////////
    {
        id: 0,
        projectCategory: 'Next.JS',
        name: 'About this portfolio',
        idName: 'portfolio',
        icon: '/icons/nextjs_logo.png',
        heroImageUrl: '/projects/polyspaace/psp-banner.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: '',
            buttonText: ''
        },
        projectUrl: '',
        projectGithubUrl: '',
        data: {
            date: '2025',
            description: `
            To take advantage of my recent experience with Next.js, I chose this framework to build my personal portfolio. The project is intentionally simple and lightweight, focused on clarity and performance.
            <br/><br/>
            The portfolio features dynamic routing for individual project pages, which improves scalability and maintainability. All project data is stored in a local JavaScript array of objects — a practical and efficient choice for the current scale of the site, where using an external database would be unnecessary overhead.
            `,
            stack: [
                { main: 'NextJS 15', additional: '' },
                { main: 'Tailwind CSS', additional: '' }
            ],
            screenshots: []
        },
        tags: ['Next.JS']
    },
    /////////// Flow ///////////
    {
        id: 1,
        projectCategory: 'Python',
        name: 'Flow',
        idName: 'flow',
        icon: '/icons/flow_logo.png',
        heroImageUrl: '/projects/flow/Flow_Featured_2024_sml.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://superhivemarket.com/products/flow-manager',
            buttonText: 'Addon page'
        },
        projectUrl: 'https://superhivemarket.com/products/flow-manager',
        projectGithubUrl: 'https://github.com/kgolec93/flow-basic',
        ytOverview: 'https://www.youtube.com/embed/kTedOXzEAdk?si=Ag1XrE5qmpE3XT5w',
        data: {
            date: '2020 - now',
            description: `
                Flow is my first fully authorial addon for Blender. It began as a simple asset-spawning script for the initial release of my 3D asset library, but has since evolved into a powerful workflow-enhancing tool with a broad range of automation features.
                <br/><br/>
                <strong>The core functionality of Flow includes:</strong>
                <ul class='pl-6 list-disc'>
                    <li>Appending 3d assets in a predefined format directly in the Blender scene</li>
                    <li>Adding new assets to the library via an automated pipeline: generating thumbnails, extracting metadata, categorizing files, and placing them in the proper directory structure</li>
                    <li>Includes a multi-format asset management system designed to handle various 3D scene components — not only models, but also materials, textures, HDR environments, and worlds. Each asset type required a dedicated structural and functional approach in both UX and backend logic</li>
                    <li>Equipped with a set of workflow-enhancing tools to streamline working with added assets — including utilities for alignment, material assignment, and batch processing</li>
                    <li>Features Asset Painter — an intuitive tool that mimics a "painting" workflow, allowing users to scatter assets interactively in the 3D viewport using a ray casting–based system, greatly improving speed and precision in scene composition. This tool also supports the usage of graphic tablets</li>
                </ul>
                <br/>
                <strong>Technical and Development Highlights:</strong>
                <ul class='pl-6 list-disc'>
                    <li>Developed before the rise of tools like ChatGPT, Flow required deep engagement with Blender’s Python API documentation, Blender Stack Exchange, and community forums to solve highly specific problems.</li>
                    <li>Taught me to work with complex data structures, API integrations, and to build solutions for niche use cases.</li>
                    <li>The addon has undergone a near-complete rewrite at one point, improving performance and structure as the complexity of the Python codebase grew.</li>
                    <li>Maintained with regular updates to stay aligned with Blender’s evolving Python API.</li>
                    <li>Includes user support, bug fixes, and feature updates based on community feedback.</li>
                    <li>Distributed in two versions: Flow Basic – free version with limited functionality and Flow Pro – full-featured version with complete automation support</li>
                </ul>
                <br/>
                <strong>Additional Features and Roadmap:</strong>
                <ul class='pl-6 list-disc'>
                    <li>The addon’s documentation is written using MkDocs for clear, developer-grade reference.</li>
                    <li>Future plans include integration with Polyspaace.com, allowing users to download and install assets directly from the online service through the addon.</li>
                </ul>
                <br/><br/>
                GitHub repository is available for Flow Basic (Free) version 
            `,
            stack: [
                { main: 'Python', additional: ('+ Blender Python API') },
                { main: 'MkDocs', additional: ('documentation') },
            ],
            screenshots: [
                {
                    url: '',
                    alt: ''
                }
            ]
        },
        tags: ['Python']
    },
    ////////// Polyviews ///////////
    {
        id: 2,
        projectCategory: 'Python',
        name: 'PolyViews',
        idName: 'polyviews',
        icon: '/icons/pv_logo.png',
        heroImageUrl: '/projects/polyviews/Polyviews_featured_v1.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://superhivemarket.com/products/polyviews',
            buttonText: 'Addon page'
        },
        projectUrl: 'https://superhivemarket.com/products/polyviews',
        projectGithubUrl: '',
        ytOverview:'https://www.youtube.com/embed/GXiz2zyVLmc?si=NtVEXbNukyzS35I8',
        data: {
            date: '2023 - now',
            description: `
            PolyViews is a commercial Blender addon I developed to streamline and enhance the process of saving, managing, and rendering multiple views — a crucial task in architectural visualization workflows.
            <br/><br/>
            <strong>Key Features:</strong>
            <ul class='pl-6 list-disc'>
                <li>Flexible view saving and management, allowing users to quickly switch between predefined camera angles or viewport positions</li>
                <li>Automated batch and queue rendering of saved views — a feature not available in vanilla Blender, eliminating the need for time-consuming manual rendering setups</li>
                <li>Designed with a highly user-friendly interface, tailored for efficiency in real-world production environments</li>
                <li>Created as a direct response to limitations encountered during actual archviz work, solving real pain points in Blender’s native workflow</li>
            </ul>
            <br/>
            <strong>Development & Maintenance:</strong>
            <ul class='pl-6 list-disc'>
                <li>As with my other Blender addons, PolyViews is actively maintained, updated for compatibility with new versions of Blender and its evolving Python API</li>
                <li>Includes customer support and regular feature improvements based on user feedback</li>
                <li>The addon’s documentation was developed using MkDocs</li>
            </ul>

            `,
            stack: [
                { main: 'Python', additional: ('Blender Python API') },
                { main: 'MkDocs', additional: ('documentation') },
            ],
            screenshots: [
                {
                    url: '',
                    alt: ''
                }
            ]
        },
        tags: ['Python']
    },
    {
        id: 3,
        projectCategory: 'Python',
        name: 'Surface Painter',
        idName: 'surface-painter',
        icon: '/icons/sp_logo.png',
        heroImageUrl: '/projects/surface-painter/SurfacePainter_Bazaar_Featured.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://superhivemarket.com/products/surface-painter',
            buttonText: 'Addon page'
        },
        projectUrl: 'https://superhivemarket.com/products/surface-painter',
        projectGithubUrl: '',
        ytOverview: 'https://www.youtube.com/embed/mxKTQq8m2to?si=Dtv63_RiimfomHEV',
        data: {
            date: '2022 - now',
            description: `
            Surface Painter is a lightweight Blender addon that simplifies the creation and application of procedural or semi-procedural materials based on user-defined colors. With a single mouse click, users can apply a newly generated material with the specified color to a selected area of a 3D object — automating a typically repetitive and manual process.
            <br/><br/>
            <strong>Key Features:</strong>
            <ul class='pl-6 list-disc'>
                <li>One-click creation and assignment of procedural and semi-procedural materials based on selected colors</li>
                <li>Streamlines the workflow for artists and designers who frequently need to generate new variations of base materials</li>
                <li>Supports saving and reusing favorite colors, enhancing speed and consistency in scene building</li>
                <li>Particularly useful in my own asset creation and architecutral visualization workflow, where it allows for quick texturing of typical surface types when developing large sets of custom 3D assets</li>
            </ul>
            <br/>
            <strong>Development & Maintenance:</strong>
            <ul class='pl-6 list-disc'>
                <li>Though simple in scope, the addon presented several technical challenges</li>
                <li>Required custom RGB-to-HEX conversion workflows, including color management calculations specific to Blender’s internal color spaces</li>
                <li>Implemented bidirectional color space transformations to support accurate color saving, loading, and application</li>
                <li>Built with attention to UX simplicity and fast execution, while solving problems that could interrupt creative flow</li>
            </ul>
            `,
            stack: [
                { main: 'Python', additional: ('Blender Python API') },
                { main: 'MkDocs', additional: ('documentation') },
            ],
            screenshots: [
                {
                    url: '',
                    alt: ''
                }
            ]
        },
        tags: ['Python']
    },
    {
        id: 5,
        projectCategory: 'Python',
        name: 'PolyOps',
        idName: 'polyops',
        icon: '/icons/pops_logo.png',
        heroImageUrl: '/projects/polyops/pops-banner.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://polyspaace.com/addons/polyops',
            buttonText: 'Addon page'
        },
        projectUrl: 'https://polyspaace.com/addons/polyops',
        projectGithubUrl: 'https://github.com/kgolec93/polyops',
        data: {
            date: '2024 - now',
            description: `
                PolyOps is a free, lightweight productivity addon designed to simplify and automate a wide range of repetitive tasks in Blender. It was born out of real-world needs during asset creation and architectural visualization workflows, where default Blender functionality often required tedious manual steps.
                <br/>
                The addon consolidates numerous commonly used operations into a single, easy-to-access menu — significantly improving speed and comfort when working on large scenes or asset libraries.
                <br/>
                Among its core capabilities, PolyOps enables batch operations on selected objects such as renaming, toggling render visibility, and creating or scaling UV maps. It also includes small but practical tools like alignment utilities for precise object positioning and a Deform on Curve tool that allows for flexible, non-destructive mesh shaping.
                <br/><br/>
                PolyOps is a pure example of practical problem-solving through scripting. It was created as a response to Blender’s native limitations — particularly around bulk editing and scene setup — and reflects my approach to improving my personal workflow through automation.
                <br/>
                I regularly use PolyOps in my day-to-day work on architectural visualizations and 3D asset creation, where it helps me avoid repetitive tasks and stay focused on the creative aspects of the process.

            `,
            stack: [
                { main: 'Python', additional: ('Blender Python API') },
            ],
            screenshots: [
                {
                    url: '',
                    alt: ''
                }
            ]
        },
        tags: ['Python']
    },
    {
        id: 6,
        projectCategory: 'JavaScript',
        name: 'Polyspaace (legacy version)',
        idName: 'polyspaace-legacy',
        icon: '/icons/psp_logo.png',
        heroImageUrl: '/projects/polyspaace-old/psp-old-banner.jpg',
        isCommercial: true,
        projectUrl: 'https://polyspaace-archive.kamilgolec.pl/',
        linkButton: {
            projectUrl: 'https://polyspaace-archive.kamilgolec.pl/',
            buttonText: 'Live project'
        },
        projectGithubUrl: 'https://github.com/kgolec93/polyspaace-legacy',
        data: {
            date: '2023 - 2024',
            description: `
            The previous version of the Polyspaace website was developed using HTML and vanilla JavaScript. Its primary purpose was to serve as a lightweight marketing platform and asset browser for 3D bundles offered at the time. Although mostly static in nature, the site utilized dynamic JavaScript rendering to manage reusable components such as the header, footer, product listings, and the 3D asset browser. A randomized banner image was also implemented to add a fresh visual touch on each page load.

            This version was hosted under the subdomain 3d.polyspaace.com, while the main domain was temporarily reserved for an early, unfinished version of the full asset platform — unrelated to the production version currently in use. The current polyspaace.com website is a completely new and separate implementation. However, selected legacy elements — particularly the 3D asset browsers — are still being used in the marketplace.

            The 3D assets list displayed on the site was generated using a custom Python script I developed. The script recursively scanned specific folders, extracted relevant metadata, and output it as a JavaScript array of objects — ready to embed directly into the frontend code.
            `,
            stack: [
                { main: 'HTML + CSS', additional: '' },
                { main: 'JavaScript', additional: '' },
            ],
            screenshots: [
                {
                    url: '/projects/polyspaace-old/psp-old-banner.jpg',
                    alt: 'Polyspaace (legacy)'
                },
                {
                    url: '/projects/polyspaace-old/psp-legacy-1.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace-old/psp-legacy-2.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace-old/psp-legacy-3.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace-old/psp-legacy-4.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace-old/psp-legacy-5.jpg',
                    alt: 'polyspaace'
                },
                {
                    url: '/projects/polyspaace-old/psp-legacy-6.jpg',
                    alt: 'polyspaace'
                },
            ]
        },
        tags: ['JavaScript']
    },
    {
        id: 7,
        projectCategory: 'JavaScript',
        name: 'digitalARCH.pl',
        idName: 'digitalarch',
        icon: '/icons/digitalarch_logo.png',
        heroImageUrl: '/projects/digitalarch/digitalarch-banner.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://digitalarch.pl',
            buttonText: 'Visit website'
        },
        projectUrl: 'https://digitalarch.pl',
        projectGithubUrl: 'https://github.com/kgolec93/digitalarch-js',
        data: {
            date: '2019 - 2020',
            description: `digitalarch.pl is the official portfolio website for my architectural visualization studio, digital.ARCH, based in Wrocław, Poland. The site was developed using HTML and vanilla JavaScript, focusing on performance, clarity, and a seamless user experience. It showcases a curated selection of photorealistic 3D visualizations, highlighting the studio's unique style and technical expertise.
            <br /><br />
            Key features of the website include a dynamic image gallery managed with a custom JavaScript state system, enabling smooth transitions and an interactive lightbox experience. Reusable components such as the navigation bar and footer are rendered dynamically to ensure consistency across pages and facilitate easier maintenance.
            <br /><br />
            The website also presented our proprietary 3D asset libraries—Interior Essentials and Architecture Elements — which are integrated with our custom Flow Asset Manager for Blender. These libraries provide users with optimized, photorealistic assets to enhance their own visualization projects.
            <br /><br />
            Designed with responsiveness in mind, the site ensures optimal viewing across various devices. Its minimalist design and intuitive navigation reflect the studio's commitment to quality and user-centric design. 
            `,
            stack: [
                { main: 'HTML + CSS', additional: '' },
                { main: 'JavaScript', additional: '' },
            ],
            screenshots: [
                {
                    url: '/projects/digitalarch/digitalarch-banner.jpg',
                    alt: 'digital.ARCH'
                },
                {
                    url: '/projects/digitalarch/da-1.jpg',
                    alt: 'digital.ARCH'
                },
                {
                    url: '/projects/digitalarch/da-2.jpg',
                    alt: 'digital.ARCH'
                },
                {
                    url: '/projects/digitalarch/da-3.jpg',
                    alt: 'digital.ARCH'
                },
                {
                    url: '/projects/digitalarch/da-4.jpg',
                    alt: 'digital.ARCH'
                },
                {
                    url: '/projects/digitalarch/da-5.jpg',
                    alt: 'digital.ARCH'
                },
                {
                    url: '/projects/digitalarch/da-6.jpg',
                    alt: 'digital.ARCH'
                },
                {
                    url: '/projects/digitalarch/da-7.jpg',
                    alt: 'digital.ARCH'
                }
            ]
        },
        tags: ['JavaScript']
    },
    {
        id: 8,
        projectCategory: 'React',
        name: 'Webble',
        idName: 'webble',
        icon: '/icons/webble_logo.png',
        heroImageUrl: '/projects/webble/webble-banner.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'http://webble.kamilgolec.pl',
            buttonText: 'Live project page'
        },
        projectUrl: 'https://webble.kamilgolec.pl',
        projectGithubUrl: 'https://github.com/kgolec93/webble',
        data: {
            date: '2019 - 2020',
            description: `Webble is a personal branding website I developed at the beginning of my freelance career in web development. Built using React, the site showcases my skills and services in creating modern, responsive websites. It features a variety of animated elements, including parallax scrolling effects and interactive components, to engage visitors and demonstrate my proficiency in front-end development.
            <br/><br/>
            The website is currently not accessible at it's original URL, but the live version is uploaded to subdomain of this portolio. While it represents an earlier stage of my development journey, it remains a testament to my foundational skills in building dynamic and visually appealing web interfaces.`,
            stack: [
                { main: 'React', additional: '' },
            ],
            screenshots: [
                {
                    url: '/projects/webble/webble-banner.jpg',
                    alt: 'Webble'
                },
                {
                    url: '/projects/webble/webble-scr-01.jpg',
                    alt: 'Webble'
                },
                {
                    url: '/projects/webble/webble-scr-02.jpg',
                    alt: 'Webble'
                },
                {
                    url: '/projects/webble/webble-scr-03.jpg',
                    alt: 'Webble'
                },
                {
                    url: '/projects/webble/webble-scr-04.jpg',
                    alt: 'Webble'
                },
                {
                    url: '/projects/webble/webble-scr-05.jpg',
                    alt: 'Webble'
                },
            ]
        },
        tags: ['React']
    },
    {
        id: 9,
        projectCategory: 'React',
        name: 'IGM Arch',
        idName: 'igm-arch',
        icon: '/icons/igm_logo.png',
        heroImageUrl: '/projects/igm/igm-banner.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://igm.kamilgolec.pl/',
            buttonText: 'Live project'
        },
        projectUrl: 'https://igm.kamilgolec.pl/',
        projectGithubUrl: 'https://github.com/kgolec93/igm-website',
        data: {
            date: '2020',
            description: `
            The portfolio website I developed for an architectural studio based in Wrocław - IGM Arch. Built using React, the site was designed to present the studio’s work in a modern and engaging way, with a strong focus on dynamic content and smooth user experience.
            <br/><br/>
            The site features dynamic project pages with scrollable image carousels, category-based filtering for easier navigation on the main portfolio page and numerous animated UI elements enhancing visual interaction, including the animated SVG outlined logo.
            <br/><br/>
            A planned addition was a "News" section, built on a simple custom CMS for easy updates. Unfortunately, the project was never fully completed due to communication issues and missing content from the client’s side. Eventually, the client decided to abandon the project. However, the core functionality of the website is complete and fully operational.
            `,
            stack: [
                { main: 'React', additional: '' },
            ],
            screenshots: [
                {
                    url: '/projects/igm/igm-banner.jpg',
                    alt: 'igm',
                },
                {
                    url: '/projects/igm/igm-screen-1.jpg',
                    alt: 'igm',
                },
                {
                    url: '/projects/igm/igm-screen-2.jpg',
                    alt: 'igm',
                },
                {
                    url: '/projects/igm/igm-screen-3.jpg',
                    alt: 'igm',
                },
            ]
        },
        tags: ['React']
    },
    {
        id: 10,
        projectCategory: 'React',
        name: 'Arche',
        idName: 'arche',
        icon: '/icons/arche_logo.png',
        heroImageUrl: '/projects/arche/arche-banner.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://arche.kamilgolec.pl/',
            buttonText: 'Visit live project'
        },
        projectUrl: 'https://arche.kamilgolec.pl/',
        projectGithubUrl: 'https://github.com/kgolec93/arche-website',
        data: {
            date: '2020',
            description: `
            Arche is a portfolio website I designed and developed for an architectural company from Wrocław. Built entirely in React, the project includes both UX & UI design created from scratch.
            <br/><br/>
            The site features dynamic project pages with individual content and portfolio section with animated category filtering, implemented using React Flip Move for smooth transitions.
            <br/><br/>
            Although the site was never fully finalized or officially deployed due to a lack of final materials and eventual disengagement from the client, the core functionality is complete and operational. The project showcases a clean architecture-focused design and a performant front-end structure ready for production.`,
            stack: [
                { main: 'React', additional: '' },
            ],
            screenshots: [
                {
                    url: '/projects/arche/arche-screen-0.jpg',
                    alt: 'arche'
                },
                {
                    url: '/projects/arche/arche-screen-1.jpg',
                    alt: 'arche'
                },
                {
                    url: '/projects/arche/arche-screen-2.jpg',
                    alt: 'arche'
                },
                {
                    url: '/projects/arche/arche-screen-3.jpg',
                    alt: 'arche'
                },
            ]
        },
        tags: ['React']
    },
    {
        id: 11,
        projectCategory: 'React',
        name: 'Projectizer',
        idName: 'projectizer',
        icon: '/icons/projectizer_logo.png',
        heroImageUrl: '/projects/projectizer/prj-screen-6.jpg',
        isCommercial: false,
        linkButton: {
            projectUrl: 'https://wsb-final.web.app/',
            buttonText: 'Live project'
        },
        projectUrl: 'https://wsb-final.web.app/',
        projectGithubUrl: 'https://github.com/kgolec93/projectizer',
        data: {
            date: '2019',
            description: `
            This project was developed as the final assignment for my postgraduate studies in frontend development. Built using React, and supported by Firebase Authentication and Firebase Realtime Database, it’s a project and task management application originally designed to meet the internal workflow needs I experienced while working at an architectural company.
            <br/><br/>
            <strong>The app allows for:</strong>
            <ul class='pl-6 list-disc'>
                <li> Managing multiple projects, each with its own set of participants, tasks, and status comments </li>
                <li> A separate task list for general, non-project-specific tasks </li>
                <li> User authentication system including account creation, password reset, and account deletion </li>
            </ul>
            <br/>
            All project data is stored in Firebase Realtime Database, with real-time editing capabilities and security rules ensuring that only authenticated users can read or write to their data entries based on their UID.
            <br/><br/>
            The goal of this project was not only to demonstrate frontend proficiency but also to solve real-world workflow issues through a clean and responsive UI paired with live data sync.
            <br/><br/>
            The project can be tested by using the cretentials for the sample account: testaccount@polyspaace.com, pass: testaccount1234`,
            stack: [
                { main: 'React', additional: '' },
                { main: 'Firebase Authentication', additional: '' },
                { main: 'Firebase Realtime Database', additional: '' },
            ],
            screenshots: [
                {
                    url: '/projects/projectizer/prj-screen-1.jpg',
                    alt: 'projectizer'
                },
                {
                    url: '/projects/projectizer/prj-screen-2.jpg',
                    alt: 'projectizer'
                },
                {
                    url: '/projects/projectizer/prj-screen-3.jpg',
                    alt: 'projectizer'
                },
                {
                    url: '/projects/projectizer/prj-screen-4.jpg',
                    alt: 'projectizer'
                },
                {
                    url: '/projects/projectizer/prj-screen-5.jpg',
                    alt: 'projectizer'
                },
                {
                    url: '/projects/projectizer/prj-screen-6.jpg',
                    alt: 'projectizer'
                },
            ]
        },
        tags: ['jQuery']
    },
    {
        id: 12,
        projectCategory: 'WordPress',
        name: 'Kamil Golec Photography',
        idName: 'kg-photography',
        icon: '/icons/kgphoto_logo.png',
        heroImageUrl: '/projects/kg-photography/kgphoto-banner.jpg',
        isCommercial: false,
        isPrivate: true,
        linkButton: {
            projectUrl: 'https://kg-photography.pl',
            buttonText: 'Visit website'
        },
        projectUrl: 'https://kg-photography.pl',
        projectGithubUrl: '',
        data: {
            date: '2024',
            description: `
            A personal photography portfolio showcasing my work in portrait, landscape, and lifestyle photography. The website was developed using WordPress with the Elementor builder, allowing for fast prototyping and full control over layout and content updates.
            <br/><br/>
            Although based on pre-built tools, I approached this project as a design-focused task, treating it as an exercise in visual storytelling and user experience. The site reflects my dual role as both photographer and designer, with attention to:
            <ul class='pl-6 list-disc'>
                <li>Consistent typography and visual hierarchy that puts the photos front and center.</li>
                <li>A clean and minimal UI/UX layout, fully responsive and optimized for both mobile and desktop.</li>
                <li>Carefully designed navigation and image galleries aimed at maintaining immersion without overwhelming the user.</li>
            </ul>
            <br/>
            While Elementor accelerated the development process, I also implemented several custom CSS tweaks and performance optimizations, such as lazy-loading galleries and image compression techniques to ensure fast loading times without compromising visual quality.
            <br/><br/>
            The site not only serves as a photography portfolio but also as an example of content-driven design, where imagery and subtle interface decisions work together to deliver a professional and personal brand experience.
`,
            stack: [
                { main: 'WordPress', additional: '' },
                { main: 'Elementor', additional: 'Theme & Functionality' },
            ],
            screenshots: [
                {
                    url: '/projects/kg-photography/kgphoto-banner.jpg',
                    alt: 'KG Photography'
                },
                {
                    url: '/projects/kg-photography/kgphoto-scr-1.jpg',
                    alt: 'KG Photography'
                },
                {
                    url: '/projects/kg-photography/kgphoto-scr-2.jpg',
                    alt: 'KG Photography'
                },
                {
                    url: '/projects/kg-photography/kgphoto-scr-3.jpg',
                    alt: 'KG Photography'
                },
                {
                    url: '/projects/kg-photography/kgphoto-scr-4.jpg',
                    alt: 'KG Photography'
                },
            ]
        },
        tags: ['WordPress']
    },
    {
        id: 13,
        projectCategory: 'WordPress',
        name: 'blog.polyspaace.com',
        idName: 'polyspaace-blog',
        icon: '/icons/psp_logo.png',
        heroImageUrl: '/projects/polyspaace-blog/blog-psp-01.jpg',
        isCommercial: true,
        linkButton: {
            projectUrl: 'https://blog.polyspaace.com',
            buttonText: 'Visit website'
        },
        projectUrl: 'https://blog.polyspaace.com',
        projectGithubUrl: '',
        data: {
            date: '2023',
            description: `
            A content-focused commercial blog developed for Polyspaace, created as an extension to the previous marketing site. The blog was implemented using clean WordPress installation without any external UI builders or visual page editors like Elementor – this choice ensured better control over performance, codebase, and design consistency.
            <br/><br/>
            The layout and styling were heavily adjusted using custom CSS, allowing the blog to visually integrate with the existing branding of Polyspaace. Key modifications included:

            <ul class='pl-6 list-disc'>
                <li>Custom typography and color palette matching the main website</li>
                <li>Tailored blog post layouts, including featured images, metadata, and spacing</li>
                <li>Minimal, content-first design optimized for clarity and technical readability</li>
            </ul>
            <br/>
            This blog serves as a knowledge base, updates channel, and SEO tool for the Polyspaace platform, featuring technical articles, changelogs, and announcements related to the 3D asset ecosystem.
            <br/><br/>
            Even though the blog runs on WordPress, it reflects a manual approach to frontend customization, where no reliance on visual builders was used, making it both lightweight and well-integrated with the broader design language of my Polyspaace brand. Although the blog is currently not actively updated, it still remains an important part of the overall marketing and communication strategy of Polyspaace.
            `,
            stack: [
                { main: 'WordPress', additional: '' },
                { main: 'ReCaptcha', additional: 'Contact form bot prevention' },
            ],
            screenshots: [
                {
                    url: '/projects/polyspaace-blog/blog-psp-01.jpg',
                    alt: 'Polyspaace Blog'
                },
                {
                    url: '/projects/polyspaace-blog/blog-psp-02.jpg',
                    alt: 'Polyspaace Blog'
                },
                {
                    url: '/projects/polyspaace-blog/blog-psp-03.jpg',
                    alt: 'Polyspaace Blog'
                },
            ]
        },
        tags: ['WordPress']
    },

]