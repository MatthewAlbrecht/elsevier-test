import get from 'lodash.get'

export default function normalizeResults(results) {
  const [patient, conditionSearch] = results
  const gender = get(patient, 'gender')
  const dob = get(patient, 'birthDate')
  const lastName = get(patient, 'name[0].family')
  const firstName = get(patient, 'name[0].given[0]')

  const conditions =
    conditionSearch.entry &&
    conditionSearch.entry
      .map(condition => condition.resource)
      .filter(condition => condition)
      .filter(
        condition =>
          get(condition, 'clinicalStatus.coding[0].code') === 'active'
      )
      .map(condition => ({
        onsetDateTime: condition.onsetDateTime,
        abatementDateTime: condition.abatementDateTime,
        recordedDate: condition.recordedDate,
        name: get(condition, 'code.text'),
      }))

  let userData = {
    gender,
    dob,
    firstName,
    lastName,
    conditions,
  }

  return userData
}
