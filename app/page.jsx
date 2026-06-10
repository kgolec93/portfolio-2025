import { sourceCodePro } from "./ui/fonts"
import Image from "next/image"
import Link from "next/link"
import { asset } from "./utils/AssetPath"

const socialIconsSize = 64

export default function Home() {
  return (
    <div className="flex xl:flex-row flex-col items-center max-w-[1500px] min-h-screen pl-12 mt-24 xl:mt-0 lg:pl-0 p-4">
      <div className="textContainer w-full xl:w-3/5 flex items-center justify-center">
        <div className="textBox max-w-[420px]">
          <div className="flex items-center">
            <h1 className={sourceCodePro.className + ' text-7xl font-black'}>Kamil Golec</h1>
            <Image src='/android-chrome-192x192.png' width={144} height={144} alt='logo' />
          </div>
          <h2 className="text-3xl text-right font-light">Web Developer Portfolio</h2>
          <p className="mt-6">
            I'm a self-taught and passionate developer with over five rewarding years of hands-on experience working with JavaScript, React, and Python. Throughout this time, I’ve completed numerous commercial and personal projects.
            I enjoy tackling complex challenges and puzzles that require creative, non-standard solutions - they push me to expand my skills and constantly grow.
            Building commercial projects independently has taught me a lot about designing application architecture, writing and optimizing code, as well as identifying and fixing bugs. Most importantly, it has shaped me into a highly problem-solving-oriented person.
            <br /><br />
            I'm currently developing and maintaining my <Link target='_blank' href='https://polyspaace.com' className='font-bold text-blue-500 hover:text-blue-700'>Polyspaace.com</Link> website, <Link target='_blank' href='https://superhivemarket.com/products/flow-manager' className='font-bold text-blue-500 hover:text-blue-700'>Flow Addon for Blender</Link> and many more interesting projects described in this portfolio.
          </p>
          <div className="socials flex mt-6 *:mr-2 *:hover:scale-110 *:transition">
            <Link href='https://github.com/kgolec93' target="_blank">
              <Image
                src={asset('/icons/github-142-svgrepo-com.svg')}
                width={socialIconsSize}
                height={socialIconsSize}
                alt='GH'
              />
            </Link>
            <Link href='https://www.linkedin.com/in/kgolec93/' target="_blank">
              <Image
                src={'/icons/linkedin-rounded-svgrepo-com.svg'}
                width={socialIconsSize}
                height={socialIconsSize}
                alt='LI'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="imageContainer max-w-[420px] xl:max-w-full w-full xl:w-2/5 mt-8 xl:m-0 flex items-center justify-start">
        <Image
          width={1080}
          height={1920}
          priority
          alt='kg'
          src={asset('/images/photo.jpg')}
          className="w-full xl:w-[80%] h-auto drop-shadow-xl "
        />
      </div>
    </div>
  )
}

// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
