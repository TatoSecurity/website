import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import LanguageSwitchLink from './LanguageSwitchLink'

import i18nextConfig from '../../next-i18next.config'

export const Footer = () => {
  const router = useRouter()
  const { t } = useTranslation('footer')
  const currentLocale =
    router.query.locale || i18nextConfig.i18n.defaultLocale

  return (
    <footer>
      <p>{t('footer-description')}</p>
        <span style={{ fontSize: 'small', lineHeight: '4.65em' }}>
          {t('footer-change-locale')}
        </span>

        <ul>
        {i18nextConfig.i18n.locales.map(locale => {
          if (locale === currentLocale) return null
            return (
            <li key={locale}>
              <LanguageSwitchLink locale={locale} key={locale} />
            </li>
          )
        })}
        </ul>
    </footer>
  )
}
