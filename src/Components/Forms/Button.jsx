import React from "react";
import styles from "./Button.module.css"
import PropTypes from "prop-types"

const Button = ({contentText, ...props}) => {
    return <button {...props} className={styles.button}>{contentText}</button>
}

Button.PropTypes = {
    contentText: PropTypes.string.isRequired
}

export default Button