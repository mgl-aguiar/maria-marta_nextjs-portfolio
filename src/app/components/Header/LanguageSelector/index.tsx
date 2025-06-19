'use client';

import { useRouter, usePathname } from 'next/navigation';
import { languageOptions } from '@/src/types/i18n';

import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();

  // Get current language from the URL path
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
            {language.code}
          </button>
        ))}
      </div>
    </div>
  );
}
