import React from 'react';
import {Link} from 'react-router-dom';
import '../stylesheets/Buttons.scss';

const Button = (props) => {
    const {to, classes, text} = props;

    // Mens/Womens Button
    if (classes.includes("Button_Mens-Womens")) {
        return (<Link to={to} class={classes}>{text}</Link>);
    }
    // Animated Button
    if (classes.includes("Button_Animated")) {
        return (<Link to={to} class={classes}>{text}</Link>);
    }
};

export default Button;