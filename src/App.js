import styles from './App.module.scss'


function App() {
  return (
    <div className={styles.parent}>
   <h1 className={styles.heading}>Hello</h1>
    <button className={styles.button}>
        Login
    </button>
    </div>
  );
}

export default App;
