import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Button({ to, href, primary = false, outline = false, text = false, disabled = false, rounded = false, small = false, large = false, children, className, leftIcon, rightIcon, onClick, ...passProps }) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    // Remove event listener when btn is dissabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className, // dua gia tri 'custom-login' vao [className]
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    )
}

export default Button