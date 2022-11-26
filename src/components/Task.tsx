import { Trash, CheckCircle } from "phosphor-react";

import styles from "./Task.module.css";
import { ITask } from "./../App";

interface Props {
  task: ITask;
  onComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Task({ task, onComplete, onDelete }: Props) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => onComplete(task.id)}
      >
        {task.isCompleted ? <CheckCircle /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>

      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash size={20} />
      </button>
    </div>
  );
}
