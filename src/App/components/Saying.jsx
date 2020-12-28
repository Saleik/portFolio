import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { logo } from '../../ui/colorsTheme'

const CstP = styled.p`
    font-family: 'Dosis', sans-serif;
    color: white;
    font-style: italic;`

const CstImg = styled.img`
    max-width:15%;
    `

export const Saying = ({ children }) => {
    return <div className="row">
        <div className="col-md-12 text-center flex-column">
            <a href="/"><CstImg className="mb-1 img-fluid w-25" src={logo} alt="logo" /></a>
            <CstP>{children}</CstP>
        </div>
    </div>
}

Saying.propTypes = {
    children: PropTypes.string.isRequired
}