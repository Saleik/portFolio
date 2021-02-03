import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { logo } from '../../ui/colorsTheme'

const CstP = styled.p`
    font-family: 'Avenir', sans-serif;
    color: white;
    font-style: italic;
    font-weight:500;
    `

const CstImg = styled.img`
    max-width:4rem;
    `

export const Saying = ({ children }) => {
    return <div className="row">
        <div className="col-md-12 text-center flex-column">
            <a href="/"><CstImg className="my-2 img-fluid w-25" src={logo} alt="logo" /></a>
            <CstP>{children}</CstP>
        </div>
    </div>
}

Saying.propTypes = {
    children: PropTypes.string.isRequired
}