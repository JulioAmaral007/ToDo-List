import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import rocketLogo from "./assets/rocket.svg";
import clipboard from "./assets/Clipboard.png";

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
        <div className={styles.emptyContent}>
          <img src={clipboard} alt="" />
          <strong className={styles.strong1}>
            Você ainda não tem tarefas cadastradas
          </strong>
          <strong className={styles.strong2}>
            Crie tarefas e organize seus itens a fazer
          </strong>
        </div>
      </div>
    </div>
  );
}

export default App;
