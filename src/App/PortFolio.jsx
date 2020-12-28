import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './components/ProjectCard'
import { seinenApp } from '../ui/colorsTheme'
import { Title } from '../ui/Title'

const CstSection = styled.section`
    width:100%;
    position: relative;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 1px 2px lightgray;
     margin-top:5em;
    @media screen and (min-width: 768px){
        margin-top: -5em;
    }
    `

/* const CstDiv = styled.div`
        height: 30vh;
    ` */

export function Portfolio() {
    return <CstSection className="py-2 mb-5">
        <div className="container">
            <Title fontFamily="Hammersmith One" className="text-center">Projet récent:</Title>
            <div className="row">
                <div className="col-md-12">
                    <ProjectCard img={seinenApp}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ProjectCard>
                </div>
            </div>
        </div>
    </CstSection>
}