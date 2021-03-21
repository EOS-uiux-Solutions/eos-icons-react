import React from 'react'
import PropTypes from 'prop-types'
import './styles.module.css'
import 'eos-icons/dist/css/eos-icons.css'

export const EosIcon = ({ name, size }) => {
  return (
    <i className='eos-icons test' style={{ fontSize: `${size}px` }}>
      {name}
    </i>
  )
}

EosIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number
}
