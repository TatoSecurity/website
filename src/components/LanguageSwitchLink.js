import languageDetector from '../lib/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'

const LanguageSwitchLink = ({ locale, ...rest }) => {
  const router = useRouter()

  let href = rest.href || router.asPath
  let pName = router.pathname
  Object.keys(router.query).forEach(k => {
    if (k === 'locale') {
      pName = pName.replace(`[${k}]`, locale)
      return
    }
    pName = pName.replace(`[${k}]`, router.query[k])
  })
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName
  }

  let displayLocale = locale;
  // let the locale look like zh-TW or zh-CN
  if (locale.length == 4) {
    displayLocale = locale.substring(0, 2) + '-' + locale.substring(2);
  }

  return (
    <Link href={href}>
      <button
        style={{ fontSize: 'small' }}
        onClick={() => languageDetector.cache(locale)}
      >
        {displayLocale}
      </button>
    </Link>
  )
}

export default LanguageSwitchLink
