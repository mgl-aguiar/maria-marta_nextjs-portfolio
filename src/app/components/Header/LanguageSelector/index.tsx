'use client';

import { useRouter, usePathname } from 'next/navigation';
import { languageOptions } from '@/src/types/i18n';

import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  const isMobile =
    navigator.userAgent.includes('iPhone') ||
    navigator.userAgent.includes('iPad') ||
    navigator.userAgent.includes('Android');

  const getCurrentLanguage = () => {
    // Split the pathname and get the first segment
    const pathSegments = pathname.split('/').filter(Boolean);

    // If there's a first segment, check if it's a language code
    if (pathSegments.length > 0) {
      const firstSegment = pathSegments[0];
      const language = languageOptions.find(
        (lang) => lang.code === firstSegment
      );

      // If we found a language code, return it
      if (language) {
        return language;
      }
    }

    // If no language code found in URL, default to English
    return languageOptions[0];
  };

  const currentLanguage = getCurrentLanguage();
  const lastLanguageOption = languageOptions[languageOptions.length - 1].code;

  const handleLanguageChange = (languageCode: string) => {
    // Get the path segments and remove the language code if present
    const pathSegments = pathname.split('/').filter(Boolean);
    const hasLanguagePrefix = languageOptions.some(
      (lang) => lang.code === pathSegments[0]
    );

    // Remove language prefix if present
    const pathWithoutLanguage = hasLanguagePrefix
      ? pathSegments.slice(1)
      : pathSegments;
    const basePath =
      pathWithoutLanguage.length > 0
        ? `/${pathWithoutLanguage.join('/')}`
        : '/';

    // Construct new path
    const newPathname =
      languageCode === 'en' ? basePath : `/${languageCode}${basePath}`;

    router.push(newPathname);
  };

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileMenu}>
          {languageOptions.map((language) => (
            <>
              <button
                className={`${styles.mobileLanguageOptions} ${
                  currentLanguage.code === language.code
                    ? styles.selectedLanguage
                    : ''
                }`}
                key={language.code}
                value={language.code}
                onClick={() => handleLanguageChange(language.code)}
              >
                {language.code}
              </button>
              {language.code !== lastLanguageOption && <span>|</span>}
            </>
          ))}
        </div>
      ) : (
        <div className={styles.dropdown}>
          <div className={styles.selectedLanguage}>{currentLanguage.code}</div>
          <div className={styles.languageOptions}>
            {languageOptions.map((language) => (
              <button
                key={language.code}
                value={language.code}
                onClick={() => handleLanguageChange(language.code)}
              >
                {language.code}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
