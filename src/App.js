import styles from './App.module.scss'
import {useState} from "react";


function App() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
    <div className={styles.parent}>
   <h1 className={styles.heading}>Hello</h1>
        <input placeholder={'email'} value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type={'password'} placeholder={'Password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button className={styles.button}>
        Login
    </button>
    </div>
  );
}

export default App;
