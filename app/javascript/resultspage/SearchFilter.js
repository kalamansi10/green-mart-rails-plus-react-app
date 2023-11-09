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
        <input type='radio' name={name} id={option} value={option} onClick={applyFilter} active='false'/>
        <label htmlFor={option}>{option}</label>
      </ span>
    )
  }

  function applyFilter(e) {
    console.log(e.target.checked)
    if (e.target.active == true) {
      e.target.active = false
      e.target.checked = false
      url.delete(e.target.name)
    } else {
      e.target.active = true
      url.delete(e.target.name)
      url.append(e.target.name, e.target.value)
    }
    setQueryString('?' + url.toString())
  }

  return (
    <>
      {mapFilters()}
    </>
  )
}
