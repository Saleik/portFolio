import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from './Button'

const CstNav = styled.nav`
    border-bottom: 1px solid lightgrey;
    box-shadow: 0px 1px 2px lightgray;
    @media screen and (min-width: 768px){
        margin-bottom: 1rem;
    }
    `

export function Nav({ brand}) {
    return <CstNav className="navbar py-0">
        <a className="ml-2 navbar-brand" href="/test">
            <img className="img-fluid w-50" src={brand} alt="logo"/>
        </a>
        <a  className="mr-2" href="#contact"><Button>Dite Bonjour</Button></a>
    </CstNav>
}
Nav.propTypes = {
    brand: PropTypes.string
}

