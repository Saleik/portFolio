import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CstH1 = styled.h1`
  color: ${props => props.color};
  font-family: ${props => props.fontFamily ? props.fontFamily : 'Oswald'}, sans-serif;
  font-weight: ${props => props.fontWeight ? props.fontWeight : '800'};
  font-size: ${props => parseFloat(props.fontSize) > 1.38 || props.fontSize === undefined ? '1.38rem' : props.fontSize};
  white-space: normal;
  word-wrap: break-word;
  @media (min-width:768px){
   font-size: ${props => props.fontSize ? props.fontSize : '1.38rem'};
  }`

export function Title({ color = "black", children, fontFamily, fontSize, fontWeight, ...props }) {
  return <CstH1 fontSize={fontSize} fontFamily={fontFamily} fontWeight={fontWeight} color={color} {...props}>{children}</CstH1>
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string
}



