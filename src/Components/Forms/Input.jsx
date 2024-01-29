import React from "react";
import styles from "./Input.module.css"

const Input = ({type, label, id, placeholder, value, setValue, onChange, onBlur, error}) => {
    return <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <input className={styles.input} id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}/>
        {error && <p className={styles.error}>{error}</p>}
    </div>
}

export default Input