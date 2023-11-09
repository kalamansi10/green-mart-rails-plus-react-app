import React from 'react'
import filterModule from './filterModule';

export default function SearchFilter({keyword, queryString, setQueryString}) {
  const {filters, options} = filterModule
  const url = new URLSearchParams(queryString)


  function mapFilters() {
    return filters.map(filter => 
      <section key={filter}>
        {mapOptions(filter)}
      </section>
    )
  }

  function mapOptions(filter) {
    let name = `filter[${filter}]`
    return options[filter].map(option => 
      <span key={option}>
        <input type='checkbox' name={name} id={option} onClick={applyFilter} value={option} />
        <label htmlFor={option}>{option}</label>
      </ span>
    )
  }

  function applyFilter(e) {
    url.delete(e.target.name)
    if (e.target.checked == true) {
      clearGroup(e.target.name)
      e.target.checked = true
      url.append(e.target.name, e.target.value)
    }
    setQueryString('?' + url.toString())
  }

  function clearGroup(name) {
    document.querySelectorAll(`input[name="${name}"]`).forEach(option => {
      option.checked = false
    })
  }


  return (
    <>
      {mapFilters()}
    </>
  )
}
