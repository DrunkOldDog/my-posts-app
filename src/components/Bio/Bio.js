import styles from "./Bio.module.scss";

export default function Bio({ headshot, name, tagline, role }) {
  return (
    <div className={styles.bio}>
      <div className={styles.bioImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={headshot} alt={`Headshot of ${name}`} />
      </div>
      <div className={styles.bioContent}>
        <p className={styles.bioContentName}>{name}</p>
        <p className={styles.bioContentHeadline}>{tagline}</p>
        <p className={styles.bioContentRole}>{role}</p>
      </div>
    </div>
  );
}
