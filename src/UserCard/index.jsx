import React from 'react'
import s from './style.module.css'

export default function UserCard({name, url, gender}) {
    return (
        <div className={s.card}>
            <img src={url} alt="User" />
            <p>{name}</p>
        </div>
    )
}
