import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CstH1 = styled.h1`
  color: ${props => props.color};
  font-family: 'Oswald-regular', sans-serif;
  font-weight: bold;
`;
export function Title({ color = "black", children }) {
  return <CstH1 color={color}>{children}</CstH1>
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string
}



