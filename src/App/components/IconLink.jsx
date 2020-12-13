import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CstI = styled.i`
        margin: 2px 0 2px 0;
        font-size: ${props => props.size};
        color: black;
        &:hover{
           color: ${props => props.color};
           transition: 0.5;
        }`

export function IconLink({ name, link, hoverColor = 'white', size = "1rem" }) {
    return <a className="mx-2" aria-label={name} href={link}>
        <CstI size={size} color={hoverColor} className={`fab fa-${name}`} aria-hidden="true" />
    </a>
}

IconLink.propTypes = {
    name: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    hoverColor: PropTypes.string,
    size: PropTypes.string

}