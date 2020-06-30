import { h } from 'preact'
import { useState } from 'preact/hooks'
import style from './style.css'
import cn from 'classnames'
import Condition from '../condition'
import chevron from '../../assets/icons/chevron-down.svg'

const SORT = {
  NAME: 'name',
  RECORDED_DATE: 'recordedDate',
}

function Conditions({ conditions }) {
  const [sort, setSort] = useState(SORT.NAME)

  const compare = (a, b) => {
    let property = sort
    let desc = false
    if (sort.indexOf('-') === 0) {
      property = sort.slice(1)
      desc = true
    }

    let comparison = 0

    if (a[property] > b[property]) {
      comparison = 1
    } else if (a[property] < b[property]) {
      comparison = -1
    }

    return desc ? comparison * -1 : comparison
  }

  const handleSortClick = value => {
    if (sort.indexOf(value) === 0) {
      setSort(`-${value}`)
    } else {
      setSort(value)
    }
  }

  const nameHeaderIconClasses = cn(
    style['conditions-icon'],
    sort.indexOf(SORT.NAME) >= 0 && style['conditions-icon--active'],
    sort.indexOf(SORT.NAME) === 1 && style['conditions-icon--activeDesc']
  )
  const recordedDateHeaderIconClasses = cn(
    style['conditions-icon'],
    sort.indexOf(SORT.RECORDED_DATE) >= 0 && style['conditions-icon--active'],
    sort.indexOf(SORT.RECORDED_DATE) === 1 &&
      style['conditions-icon--activeDesc']
  )

  console.log('sort ==='.toUpperCase(), sort)

  return (
    <div class={style.conditions}>
      <h2 class={style['conditions-title']}>Active Conditions</h2>
      <div class={style['conditions-header']}>
        <button
          class={style['conditions-headerItem']}
          onClick={() => handleSortClick(SORT.NAME)}
        >
          Name
          <img src={chevron} class={nameHeaderIconClasses} />
        </button>
        <button
          class={cn(
            style['conditions-headerItem'],
            style['conditions-headerItemRecorded']
          )}
          onClick={() => handleSortClick(SORT.RECORDED_DATE)}
        >
          Date Recorded
          <img src={chevron} class={recordedDateHeaderIconClasses} />
        </button>
      </div>
      <ul class={style['conditions-list']}>
        {conditions.sort(compare).map((condition, i) => (
          <Condition key={i} condition={condition} />
        ))}
      </ul>
    </div>
  )
}

export default Conditions
