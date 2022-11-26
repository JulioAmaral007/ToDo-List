import rocket from "../assets/rocket.svg";
import { PlusCircle } from "phosphor-react";
import styles from "./Header.module.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Props {
  onAddTask: (taskTitle: string) => void;
}

export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function onChangeTitle(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={rocket} />

      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <textarea
          name="comment"
          placeholder="Adicione uma nova tarefa"
          value={title}
          onChange={onChangeTitle}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
