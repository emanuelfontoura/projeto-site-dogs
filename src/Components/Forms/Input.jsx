import React from "react";
import styles from "./Input.module.css"
import PropTypes from "prop-types"

const Input = ({type, label, id, placeholder, value, setValue, onChange, onBlur, error}) => {
    return <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>{label}</label>
        <input className={styles.input} id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur}/>
        {error && <p className={styles.error}>{error}</p>}
    </div>
}

Input.PropTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired
}

export default Input