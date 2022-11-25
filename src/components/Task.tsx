import { Trash, Check } from "phosphor-react";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  onDeleteComments: (task: string) => void;
}

export function Task({ content, onDeleteComments }: TaskProps) {
  function handleDeleteComment() {
    onDeleteComments(content);
  }

  return (
    <div className={styles.tasks}>
      <label className={styles.check}>
        {" "}
        <input type="checkbox" name="check" />
        <span>
          <Check />
        </span>
      </label>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <button onClick={handleDeleteComment} title="Deletar comentário">
        {" "}
        <Trash size={24} />
      </button>
    </div>
  );
}
