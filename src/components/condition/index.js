import { h } from 'preact'
import style from './style.css'
import externalLinkIcon from '../../assets/icons/external-link.svg'

function Condition({ condition }) {
  return (
    <li class={style.condition}>
      <a
        href={`https://www.ncbi.nlm.nih.gov/pubmed/?term=${encodeURI(
          condition.name
        )}`}
        class={style['condition-link']}
      >
        <div class={style['condition-content']}>
          <h3 class={style['condition-title']}>{condition.name}</h3>
          <span class={style['condition-dateRecorded']}>
            {condition.recordedDate ? condition.recordedDate.slice(0, 10) : '—'}
          </span>
          <img src={externalLinkIcon} class={style['condition-icon']} />
        </div>
      </a>
    </li>
  )
}

export default Condition
