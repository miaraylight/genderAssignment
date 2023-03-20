import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from '../UserCard'
import s from './style.module.css'


export default function AddForm() {

    // const [data, setData] = useState([])

    const dispatch = useDispatch()
    const data = useSelector(state => state)
    console.log(data);


    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, url, gender} = e.target;
        const user = {id: Date.now(),name: name.value, url: url.value, gender: gender.value}
        dispatch({type: 'ADD', payload: user})
        // setData([...data, {id: Date.now(),name: name.value, url: url.value, gender: gender.value}])
        name.value = ""
        url.value = ""
        gender.value= ""
    }


  return (
    <div>
        <div className={s.container}>
            <form className={s.form} onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Fullname' required/>
                <input type="text" name='url' placeholder='Image URL' required/>
                <input list="gender" name="gender" placeholder='Gender' required/>
                <datalist id="gender">
                    <option value="Female"></option>
                    <option value="Male"></option>
                </datalist>
                <button>Submit</button>
            </form>
        </div>
        <div className={s.wrapper}>
            <h2>Guys</h2>
           <div className={s.content}>
           {
            data.filter(({gender}) => gender === "Male").map(elem => <UserCard key={elem.id} {...elem}  />)
           }
           </div>
        </div>
        <div className={s.wrapper}>
        <h2>Girls</h2>
        <div className={s.content}>
           {
            data.filter(({gender}) => gender === "Female").map(elem => <UserCard key={elem.id} {...elem}  />)
           }
        </div>
        </div>
    </div>
  )
}
