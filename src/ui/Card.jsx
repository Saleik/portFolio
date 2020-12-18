import React from 'react'
import styled from 'styled-components'
import { colorsTheme } from './colorsTheme'
const CstI = styled.i`
    font-size:5rem;
    color: ${colorsTheme.primary};`

const CstH4 = styled.h5`
    font-family:'Oswald-bold', sans-serif;
    font-weight: 800;
    `
const CstH6 = styled.h6`
        font-family: 'Oswald-bold', sans-serif;
        color: #42b7ff;`

const CstP = styled.p`
    font-family: 'Dosis', sans-serif;
    font-size: 1rem;
    font-weight:300;`

const CstUl = styled.ul`
     list-style: none;
     font-family: 'Dosis', sans-serif;
     font-weight:300;
     `
const CstDiv = styled.div`
    border: ${props => props.title !== 'Frameworks' ? 'none' : '0.5px solid lightgrey'};
    border-top: none;
    border-bottom: none;`

export const Card = props => {
    return <CstDiv title={props.title} className="col-md-4 text-center">
        <CstI className={`fas fa-${props.name} mt-2`} />
        <CstH4 className="my-2">{props.title}</CstH4>
        {props.name !== "tools" ? <>
            <CstP>{props.children}</CstP>
            <CstH6>Langages:</CstH6>
            <CstP>{props.languages}</CstP>
        </>
            :
            <CstUl className="p-0">{props.languages.map((t, k) => <li key={`tools-${k}`} > {t}</li>)}</CstUl>

        }
    </CstDiv >
}

