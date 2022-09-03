import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='py-12 flex flex-col items-center gap-12 bg-slate-50'>
      <Head>
        <title>JsonBlogs - How to install any version of Node JS on Windows 7</title>
        <meta name="description" content="Free tutorial to install any version of Node JS even not supported
        as LTS v16.17.0 on Windows 7 32 and 64 bits in only 3 steps" />
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinksearchbox" />
        <meta name="og:description" content="Free tutorial to install any version of Node JS even not supported
        as LTS v16.17.0 on Windows 7 32 and 64 bits in only 3 steps" />
        <link rel="canonical" href="https://json-blogs.vercel.app/" key="canonical" />
      </Head>
      <header className='flex flex-col gap-2 items-center'>
        <h2 className='text-3xl'>Json Blog</h2>
        <h1 className='font-medium drop-shadow-sm shadow-white'>
          How to install any version of Node JS on Windows 7
        </h1>
        <Link href='#main'>
          <a className='absolute right-4 top-4 p-2 font-medium text-white
          rounded-md bg-blue-600 hover:bg-blue-700 transition-colors'>
            Get Started!
          </a>
        </Link>

      </header>
      <section className='w-[43ch] flex flex-col gap-8'>
        <h2 className='text-lg font-medium text-center'>
          Most newest versions of Node JS are not officially supported for Windows 7
        </h2>
        <article>
          <h3 className='text-lg font-medium drop-shadow-sm shadow-white'>
            Why aren&apos;t they officially supported?
          </h3>
          <p>Node JS have to be updating and upgrading, but keeping supporting old systems makes it
            harder. Also Windows 7 is flawed as Lacking of Security Updates that makes it less &quot;safe&quot;.</p>
        </article>
        <article>
          <h3 className='text-lg font-medium drop-shadow-sm shadow-white'>
            Which versions of are supported on Windows 7?
          </h3>
          <p>Officially the latest version supported on Windows 7
            is <Link href="https://nodejs.org/download/release/v13.6.0/"><a className='text-blue-800'>
              13.6.0</a></Link>, but it is possible to install the <Link href="https://nodejs.org/download/release/v13.14.0/">
              <a className='text-blue-800'>13.14.0</a></Link> as ordinary without an error.
          </p>
        </article>
      </section>
      <main id='main' className='w-[43ch] flex flex-col gap-8'>
        <h2 className='text-lg font-medium text-center'>
          How to install not officially supported versions of Node JS on Windows 7 in only 3 steps
        </h2>
        <ul className='flex flex-col gap-8'>
          <li>
            <h3 className='text-lg font-medium drop-shadow-sm shadow-white'>
              Step 1 - Install a previous .msi version
            </h3>
            <p>First of all and to make our lives easier, you have to install a version of Node JS
              perfectly supported on Windows 7 like it is the v13.14.0:
            </p>
            <ul className='mt-2 flex flex-col gap-2'>
              <li><Link href="https://nodejs.org/download/release/v13.14.0/node-v13.14.0-x64.msi">
                <a className='text-blue-800'>v13.14.0.msi 64bits</a></Link></li>
              <li><Link href="https://nodejs.org/download/release/v13.14.0/node-v13.14.0-x64.msi">
                <a className='text-blue-800'>v13.14.0.msi 32bits</a></Link></li>
            </ul>
          </li>
          <li>
            <h3 className='text-lg font-medium drop-shadow-sm shadow-white'>
              Step 2 - Replace its files with the files of a .zip newer version
            </h3>
            <p>Now comes the funniest part of this: In some sites you could find that even with tricks it is
              impossible to get upper than <Link href="https://nodejs.org/download/release/v14.16.1/">
                <a className='text-blue-800'>v14.16.1</a></Link> or <Link href="https://nodejs.org/download/release/v15.8.0/">
                <a className='text-blue-800'>v15.8.0</a></Link>, but i tried with the latest LTS version of Node JS
              that is now v16.17.0 on my Windows 7 64 bits and it worked to me very well. It seems like you&apos;ll
              be able to install whatever version you want! But there&apos;s only a thing: pick it up in .zip format.
            </p>
            <ul className='my-2 flex flex-col gap-2'>
              <li><Link href="https://nodejs.org/dist/v16.17.0/node-v16.17.0-win-x64.zip">
                <a className='text-blue-800'>v16.17.0.zip 64bits</a></Link></li>
              <li><Link href="https://nodejs.org/dist/v16.17.0/node-v16.17.0-win-x86.zip">
                <a className='text-blue-800'>v16.17.0.zip 32bits</a></Link></li>
            </ul>
            <p>When you get your version&apos;s binary, then put its contents into the Node JS installation and
              replace everything folder that usually is allocated in your program files directory: it is <i>
                C:\Program Files\nodejs\</i> for both 32 and 64 bits.
            </p>
          </li>
          <li>
            <h3 className='text-lg font-medium drop-shadow-sm shadow-white'>
              Step 3 - Create a system variable to skip platform checking
            </h3>
            <p>We are almost there! now it is just to create a system variable to skip that platform
              checking that is bothering us to get it done! you have to go to:
            </p>
            <div className='my-4 p-4 bg-gray-200'>
              <i>Control Panel &gt; System &gt; Advanced System Settings &gt; Environment Variables</i>
            </div>
            <p>or open Run and paste this:</p>
            <div className='my-4 p-4 bg-gray-200'>
              <code>&quot;C:\Windows\system32\rundll32.exe&quot; sysdm.cpl,EditEnvironmentVariables</code><br />
            </div>
            <p>
              Then create a new System variable with name <i>NODE_SKIP_PLATFORM_CHECK</i> and value <i>1</i>
            </p>
          </li>
        </ul>
        <span className='font-medium drop-shadow-sm shadow-white'>
          There you go! enjoy your new version of Node JS!!
        </span>
      </main>
      <section className='w-[43ch] flex flex-col gap-8'>
        <h2 className='text-lg font-medium text-center'>
          Post Letters
        </h2>
        <article>
          <h3 className='text-lg font-medium drop-shadow-sm shadow-white'>
            Why to still on Windows 7?
          </h3>
          <p>Even being this edition of Windows old and outdated it still being the favorite of a lot of
            people by its lower resources consumption. But in my case it is more about incompatibilities
            that newer editions of windows and newest linux distributions causes me by my old hardware.
          </p>
        </article>
      </section>
    </div>
  )
}

export default Home
