'use client';

import { Fragment } from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { languageOptions } from '@/src/types/i18n';
import {
  getCurrentLanguage,
  handleLanguageChange,
  isMobileDevice,
} from '../../../lib/utils';

import styles from './LanguageSelector.module.css';

export default function LanguageSelector() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const isMobile = isMobileDevice();
  const currentLanguage = getCurrentLanguage(params, pathname);
  const lastLanguageOption = languageOptions[languageOptions.length - 1].code;

  const onLanguageChange = (languageCode: string) => {
    handleLanguageChange(languageCode, pathname, router);
  };

  return (
    <>
      {isMobile ? (
        <div className={styles.mobileMenu}>
          {languageOptions.map((language) => (
            <Fragment key={language.code}>
              <button
                className={`${styles.mobileLanguageOptions} ${
                  currentLanguage.code === language.code
                    ? styles.mobileSelectedLanguage
                    : ''
                }`}
                value={language.code}
                onClick={() => onLanguageChange(language.code)}
              >
                {language.code}
              </button>
              {language.code !== lastLanguageOption && <span>|</span>}
            </Fragment>
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
                onClick={() => onLanguageChange(language.code)}
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
