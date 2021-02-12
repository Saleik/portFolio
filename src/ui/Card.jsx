import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { colorsTheme } from './colorsTheme'
import { Title } from './Title'

const CstI = styled.i`
    font-size:5rem;
    color: ${colorsTheme.primary};`

const CstP = styled.p`
        font-family: 'Avenir', sans-serif;
        font-weight:300;
    `

const CstUl = styled.ul`
        list-style: none;
        font-family: 'Avenir', sans-serif;
        font-weight:300;
     `
const CstDiv = styled.div`
        border: ${props => props.title !== 'Frameworks' ? 'none' : '0.5px solid lightgrey'};
        border-right: none;
        border-left: none; 
        padding: 50px 30px;
        @media screen and (min-width: 768px){
            border: ${props => props.title !== 'Frameworks' ? 'none' : '0.5px solid lightgrey'};
            border-top: none;
            border-bottom: none;
    }
    `

export const Card = ({ title, icon, children, languages, subtitle }) => {

    return <CstDiv title={title} className="col-md-4 text-center">
        <CstI className={`fas fa-${icon}`} />
        <Title className="my-2">{title}</Title>
        {icon !== "tools" ? <>
            <CstP>{children}</CstP>
            <Title fontSize="1rem" fontWeight="400" color="#42b7ff">{subtitle + ':'}</Title>
            <CstP>{languages.map((l, k) => k < (languages.length - 1) ? `${l}, ` : `${l}`)}</CstP>
        </>
            :
            <CstUl className="p-0">{languages.map((t, k) => <li key={`tools-${k}`} > {t}</li>)}</CstUl>

        }
    </CstDiv >
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string,
    icon: PropTypes.string.isRequired,
    languages: PropTypes.array.isRequired,
    subtitle: PropTypes.string
}