import { h } from 'preact'
import { useState } from 'preact/hooks'
import normalizeResults from './normalizer.js'
import Loader from '../../components/loader'
import Patient from '../../components/patient'
import style from './style'

const Home = () => {
  const [id, setId] = useState('155d3d80-f3f0-4b39-9207-0d122cf94a11')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [userData, setUserData] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setUserData(null)

    const userDataRequest = getUserData()
    const userConditionsRequest = getUserConditions()

    const results = await Promise.all([
      userDataRequest,
      userConditionsRequest,
    ]).catch(error => {
      console.log('error ==='.toUpperCase(), error)
      setError(error)
      setIsLoading(false)
    })

    if (results) {
      setUserData(normalizeResults(results))
    }

    setIsLoading(false)
  }

  const getUserData = () =>
    fetch(`https://r4.smarthealthit.org/Patient/${id}`).then(handleResponse)
  const getUserConditions = () =>
    fetch(`https://r4.smarthealthit.org/Condition?patient=${id}`).then(
      handleResponse
    )

  const handleResponse = response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response.json()
  }

  return (
    <div class={style.home}>
      <form
        class={style.searchContainer}
        onSubmit={e => handleSubmit(e)}
        id="search-form"
      >
        <input
          class={style.search}
          type="search"
          value={id}
          onInput={e => setId(e.target.value)}
          placeholder="Patient ID..."
        />
        <input
          class={style.searchButton}
          type="submit"
          value="Search"
          disabled={isLoading}
        />
      </form>
      {error && <h2>ERROR</h2>}
      {isLoading && <Loader />}
      {userData && <Patient userData={userData} />}
    </div>
  )
}

export default Home

// 155d3d80-f3f0-4b39-9207-0d122cf94a11
