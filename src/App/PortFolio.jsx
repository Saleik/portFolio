import React from 'react'
import styled from 'styled-components'
import { ProjectCard } from './components/ProjectCard'
import { colorsTheme, seinenApp } from '../ui/colorsTheme'

const CstSection = styled.section`
    min-height:auto;
    min-width:100%;
    position: relative;
    border-top: 1px solid lightgray;
    border-bottom: 1px solid lightgray;
    box-shadow: 0px 1px 2px lightgray;
    `

const CstDiv = styled.div`
        height: 30vh;
    `

export function Portfolio() {
    return <CstSection className="mt-n5 py-2 mb-5">
        <div className="container">
            <CstDiv className="row align-items-center">
                <div className="col-md-12">
                    <ProjectCard img={seinenApp}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</ProjectCard>
                </div>
            </CstDiv>
        </div>
    </CstSection>
}