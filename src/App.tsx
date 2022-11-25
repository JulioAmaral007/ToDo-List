import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./components/Task";
import { EmptyTask } from "./components/EmptyTask";
import { Divide, PlusCircle, Trash } from "phosphor-react";
import rocketLogo from "./assets/rocket.svg";

import "./global.css";
import styles from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState([""]);

  const [newTaskText, setNewTaskText] = useState("");

  const [countTask, setCountTask] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
    setCountTask(countTask + 1);
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function deleteTasks(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });
    setTasks(tasksWithoutDeleteOne);
    setCountTask(countTask - 1);
  }

  return (
    <div className="App">
      <header className={styles.header}>
        <img src={rocketLogo} alt="" />
        <h1>to</h1>
        <h1 className={styles.h2}>do</h1>
      </header>

      <form className={styles.addList} onSubmit={handleCreateNewTask}>
        <textarea
          name="comment"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />
        <div>
          <button type="submit">
            Criar
            <PlusCircle size={20} />
          </button>
        </div>
      </form>

      <div className={styles.list}>
        <div className={styles.topContent}>
          <div>
            {" "}
            <strong className={styles.strong1}>Tarefas criadas</strong>
            <span>{countTask}</span>
          </div>
          <div>
            {" "}
            <strong className={styles.strong2}>Concluídas</strong>
            <span>5 de {countTask}</span>
          </div>
        </div>
        <div>
          <div className={styles.list}>
            {tasks.map((task) => (
              <Task key={task} content={task} onDeleteComments={deleteTasks} />
            ))}

            {tasks.length <= 0 && <EmptyTask />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
