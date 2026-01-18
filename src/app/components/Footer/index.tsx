import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>{`© ${currentYear} — Maria Marta`}</p>
    </footer>
  );
};

export default Footer;
