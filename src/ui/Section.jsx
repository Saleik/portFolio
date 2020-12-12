import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CstSection = styled.section`
    position: relative;
    height: 100%;
    width: 100%;
    min-height: 100vh;
    background: url(${props => props.background}) no-repeat center;
    background-size: cover;`

export function Section({ id, background, children }) {
    return <CstSection id={id} background={background}>
        {children}
    </CstSection>

}

Section.propTypes = {
    id: PropTypes.string,
    background: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}