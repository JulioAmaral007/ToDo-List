import clipboard from "../assets/Clipboard.png";
import styles from "./EmptyTask.module.css";

export function EmptyTask() {
  return (
    <div className={styles.emptyContent}>
      <img src={clipboard} alt="" />
      <strong className={styles.strong3}>
        Você ainda não tem tarefas cadastradas
      </strong>
      <p className={styles.strong4}>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
