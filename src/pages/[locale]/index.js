import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import styles from '@/styles/Home.module.css'

import Navbar from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import background from '../../../public/background.png'
import { getStaticPaths, makeStaticProps } from '../../lib/getStatic'

export default function Home() {
  // for i8next translations
  const { t, u18n, ready } = useTranslation(['common', 'navbar', 'footer']);

  // for my services object in translations
  const services = t('services', { returnObjects: true });

  return (
    <>
      <Head>
        <title>TTSec</title>
        <meta name="description" content="TTSecurity" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className='relative'>
          {/* For the image & title */}
          <div className="relative h-screen">
            <Image src={background} alt="background" fill style={{objectFit:"cover"}} className="" />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
              <h1 className="text-4xl text-white font-bold">{t('title')}</h1>
              <p className="text-lg text-white">{t('title-blurb')}</p>
            </div>
          </div>

          {/* For actual content */}
          <div id="services" className="relative container mx-auto px-4 py-3">
            <h1 className="pb-10 text-5xl font-extrabold dark:text-white">{t('services-title')}
              <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">{t('services-title-2')}</small>
            </h1>

            {services.map((service) => {
              return (<div key={service['title']}>
                      <h2 className="text-4xl font-bold dark:text-white pb-3">{service['title']}</h2>
                      <p className='pb-5'>{service['description']}</p>
                      </div>)
            })}

          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

const getStaticProps = makeStaticProps(['common', 'navbar', 'footer'])
export { getStaticPaths, getStaticProps }
