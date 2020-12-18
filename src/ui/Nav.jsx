import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from './Button'

const CstNav = styled.nav`
    border-bottom: 1px solid lightgrey;
    box-shadow: 0px 1px 2px lightgray;`

export function Nav({ brand = "test" }) {
    return <CstNav className="navbar">
        <a className="navbar-brand" href="/test">
            <h4>
                {brand}
            </h4>
        </a>
        <a href="#contact"><Button>Dite Bonjour</Button></a>
    </CstNav>
}
Nav.propTypes = {
    brand: PropTypes.string
}

