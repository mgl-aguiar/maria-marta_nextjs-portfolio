'use client';

import React from 'react';
import Image from 'next/image';
import styles from './ImageGrid.module.css';

const ImageGrid = () => {
  return (
    <div className={styles.grid}>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb01.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb02.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb03.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb04.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb05.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb06.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb07.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb08.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb05.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb06.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb07.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb03.png"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          alt=""
          src="/assets/thumb04.png"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default ImageGrid;
