import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CstH1 = styled.h1`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Oswald'}, sans-serif;
  font-weight: 800;`;
export function Title({ color = "black", children, fontFamily }) {
  return <CstH1 fontFamily={fontFamily} color={color}>{children}</CstH1>
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontStyle: PropTypes.string
}



