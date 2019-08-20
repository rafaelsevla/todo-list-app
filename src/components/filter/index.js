'use strict'

import React from 'react'
import * as actions from 'reducers/visibility-filter/actions'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../redux-flow/reducers/visibility-filter/action-creators'
import FilterLink from './filter-link'

const Filter = ({ activeFilter, handleFilter }) => {
  return (
    <div>
      <h3>Mostrar</h3>
      {filterItems.map(item => (
        <FilterLink
          key={item.action}
          action={item.action}
          activeFilter={activeFilter}
          onClick={handleFilter(item.action)}
        >
          {item.label}
        </FilterLink>
      ))}
    </div>
  )
}

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A Fazer', action: actions.SHOW_ACTIVE }
]

const mapStateToProps = state => ({
  activeFilter: state.visibilityFilter
})

const mapDispatchToProps = dispatch => ({
  handleFilter: filter => e => {
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
