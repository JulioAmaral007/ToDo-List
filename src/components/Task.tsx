import { Trash } from "phosphor-react";
import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.tasks}>
      <input type="checkbox" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, similique.
      </p>
      <Trash size={24} />
    </div>
  );
}
