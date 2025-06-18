import { useRouter, usePathname } from '@/src/i18n/routing';
import { languageOptions } from '@/src/types/i18n';
import styles from './LanguageSelector.module.css';

// TODO: Implement language selector
export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  console.log('Current pathname:', pathname);

  // Get current language from the URL path
  const currentLanguage =
    languageOptions.find((lang) => pathname.startsWith(`/${lang.code}`)) ||
    languageOptions[0];

  const handleLanguageChange = (languageCode: string) => {
    console.log('languageCode', languageCode);

    // Get the base path without any locale prefix
    const basePath = pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');

    // For non-default locale, add the prefix
    const newPathname =
      languageCode === 'pt' ? basePath : `/${languageCode}${basePath}`;

    console.log('New pathname:', newPathname);
    router.replace(newPathname);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownButton}>{currentLanguage.code}</div>
      <div className={styles.dropdownContent}>
        {languageOptions.map((language) => (
          <button
            className={styles.dropdownContentButton}
            key={language.code}
            value={language.code}
            onClick={() => handleLanguageChange(language.code)}
          >
            {language.name}
          </button>
        ))}
      </div>
    </div>
  );
}
