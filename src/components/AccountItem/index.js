import React from 'react'
import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const cx = classNames.bind(styles)

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
        <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/d9c4c0cffb770f1379fd809edb94b1de.jpeg?lk3s=a5d48078&nonce=91195&refresh_token=bbfce4ae21359327f5825533f9523451&x-expires=1737252000&x-signature=fzHaGwfQehn3oOFfVcjw4Ww0tiY%3D&shp=a5d48078&shcp=81f88b70' alt='Hoa'/>
        <div className={cx('info')}>
          <h4 className={cx('name')}>
            <span>Nguyen Van A</span>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
          </h4>
          <span className={cx('username')}>nguyenavna</span>
        </div>
    </div>
  )
}

export default AccountItem