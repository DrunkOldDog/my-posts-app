import styles from "./PostForm.module.scss";

export default function PostForm() {
  return (
    <form>
      <textarea className={styles.formContent}></textarea>
      <button className={styles.formButton}>Add New Post</button>
    </form>
  );
}
