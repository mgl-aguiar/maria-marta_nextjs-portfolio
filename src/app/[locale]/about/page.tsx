import styles from './page.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.aboutTitle}>About</h1>
      <div className={styles.aboutTextWrapper}>
        <p className={styles.aboutTextParagraph}>
          As a multidisciplinary artist combining a decade of experience in
          production design within the film industry and a solid background in
          fine arts, I explore connections between materiality and meaning
          through personal narratives and collective memory.
        </p>

        <p className={styles.aboutTextParagraph}>
          Born in Brazil and based in the Netherlands, my practice reflects
          cultural and political transitions, examining belonging through
          memory's unreliable nature and identity's shifting terrain. Working
          across video art, photography, and mixed media, I investigate the
          dialogue between ephemeral and tangible forms.
        </p>

        <p className={styles.aboutTextParagraph}>
          My artistic process often begins with the physicality of materials —
          be it the grain of film, the fluidity of watercolour, or the layered
          aspects of collage. These elements tell stories, connecting the past
          and the present, the seen and the imagined.
        </p>

        <p className={styles.aboutTextParagraph}>
          I approach each project with a focus on visual storytelling, light,
          composition, and movement to evoke emotion and provoke thought.
          Lately, I'm exploring how images can shift our connection to memory,
          space, and time - inviting fresh ways of seeing our world.
        </p>
      </div>
    </div>
  );
}
