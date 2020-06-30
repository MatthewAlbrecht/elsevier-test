import { h } from 'preact'
import style from './style.css'
import Conditions from '../conditions'

function Patient({ userData }) {
  return (
    <div class={style.patient}>
      <h1 class={style['patient-name']}>
        {userData.firstName} {userData.lastName}
      </h1>
      <div>
        <p>
          <span class={style['patient-property']}>Gender:</span>
          <span class={style['patient-value']}>{userData.gender}</span>
        </p>
        <p>
          <span class={style['patient-property']}>Date of Birth:</span>
          <span class={style['patient-value']}>{userData.dob}</span>
        </p>
      </div>
      <Conditions conditions={userData.conditions} />
    </div>
  )
}

export default Patient
