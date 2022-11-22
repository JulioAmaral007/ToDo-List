import { useState } from "react";
import { Task } from "./components/Task";
import { EmptyTask } from "./components/EmptyTask";
import { PlusCircle, Trash } from "phosphor-react";
import rocketLogo from "./assets/rocket.svg";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <header className={styles.header}>
        <img src={rocketLogo} alt="" />
        <h1>to</h1>
        <h1 className={styles.h2}>do</h1>
      </header>

      <div className={styles.addList}>
        <textarea name="comment" placeholder="Deixe um comentário" />
        <button type="submit">
          Criar
          <PlusCircle size={20} />
        </button>
      </div>

      <div className={styles.list}>
        <div className={styles.topContent}>
          <div>
            {" "}
            <strong className={styles.strong1}>Tarefas criadas</strong>
            <span>5</span>
          </div>
          <div>
            {" "}
            <strong className={styles.strong2}>Concluídas</strong>
            <span>5</span>
          </div>
        </div>
        <div className={styles.listContent}>
          <Task />
        </div>
        {/*<EmptyTask />*/}
      </div>
    </div>
  );
}

export default App;
