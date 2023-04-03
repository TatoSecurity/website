import React, { useState } from "react";
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from "next/image";
import Link from "./Link";
import logo from '../../public/logo.png'

import i18nextConfig from '../../next-i18next.config'
import LanguageSwitchLink from './LanguageSwitchLink'

const Navbar = () => {

  // for language switching
  const { t } = useTranslation('navbar')
  const router = useRouter()
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  // for dropdown menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900 text-white py-3 md:py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="text-lg font-bold">
          <Image src={logo} alt="TTSec" width={50} height={50} />
        </Link>
        <button className="md:hidden" onClick={toggleDropdown}>
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
            ></path>
          </svg>
        </button>
        <div className="hidden md:flex md:items-center">
          <Link href="/" className="block md:inline-block mt-4 md:mt-0 mr-6">
            {t('navbar-home')}
          </Link>
          <Link
            href="/about"
            className="block md:inline-block mt-4 md:mt-0 mr-6"
          >
            {t('navbar-about')}
          </Link>
          <div className="relative">
            <button
              className="block md:inline-block mt-4 md:mt-0 mr-6 focus:outline-none"
              onClick={toggleDropdown}
            >
              {t('navbar-lang')}
            </button>
            {isDropdownOpen && (
              <div className="absolute z-10 top-10 right-0 bg-gray-700 py-2 rounded-md">
                <ul>
                {i18nextConfig.i18n.locales.map(locale => {
                  if (locale === currentLocale) return null
                    return (
                    <li className="block px-4 py-2 text-sm text-gray-400 hover:text-white" key={locale}>
                      <LanguageSwitchLink locale={locale} key={locale} />
                    </li>
                  )
                })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
