import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../ui/Button'
import { Title } from '../../ui/Title'

const CstFigure = styled.figure`
    border-radius: 50%;
    height: 30vh;
    width: 30vh;
    overflow: hidden;
    position: relative;
    background-color:white;
    @media screen and (max-width: 767px) and (orientation:landscape){
        height: 50vh;
        width: 50vh;
    }
    `

const CstFigcaption = styled(animated.figcaption)`
    height: 100%;
    width: 100%;
    background-color: black;
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right: 0;
    opacity:0;
    `
const CstSpan = styled.span`
        font-size:.7rem;`
export function ProjectCard({ img, children, name, state }) {
    const [isToggle, setToggle] = useState(false)

    const focus = useSpring({
        opacity: isToggle ? .8 : 0,
        config: { duration: 250 }
    })

    const scale = useSpring({
        transform: isToggle ? 'scale(1.2)' : 'scale(1)',
        config: { duration: 250 }
    })

    const handleChange = () => {
        setToggle(!isToggle)
    }


    return <>
        <CstFigure className="mx-auto text-center">
            <animated.img style={scale} className="figure-img h-100 img-fluid" src={img} alt="projet" />
            <CstFigcaption onMouseLeave={handleChange} onMouseEnter={handleChange} style={focus} className="d-flex flex-column justify-content-center p-4">
                <Title fontSize="1em" fontWeight="400" color="white">{children}</Title>
                <div className="mx-auto">
                    <Button><CstSpan>En développement</CstSpan></Button>
                </div>
            </CstFigcaption>
        </CstFigure>
    </>
}

ProjectCard.propTypes = {
    img: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    state: PropTypes.bool,
    name: PropTypes.string
}