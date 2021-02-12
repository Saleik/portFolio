import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button } from '../../ui/Button'
import { Title } from '../../ui/Title'
import { colorsTheme } from '../../ui/colorsTheme'

const CstFigure = styled.figure`
    border-radius: 50%;
    border: solid 1px ${colorsTheme.secondary};
    height: 15rem;
    width: 15rem;
    overflow: hidden;
    position: relative;
    background-color:white;
    `

const CstFigcaption = styled(animated.figcaption)`
    height: 100%;
    width: 100%;
    background-color: ${colorsTheme.primary};
    position:absolute;
    top:0;
    left:0;
    bottom:0;
    right: 0;
    opacity:0;
    `

const CstP = styled.p`
        color: white;
        font-weight:lighter;
        font-family: 'Avenir', sans-serif;
    `
export function ProjectCard({ img, children, name, link = "#", progress = "En cours" }) {
    const [isToggle, setToggle] = useState(false)

    const focus = useSpring({
        opacity: isToggle ? 1 : 0,
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
                <Title fontSize="1rem" fontWeight="400" color="white">{name}</Title>
                <CstP>{children}</CstP>
                <div className="mx-auto">
                    <a href={link}>
                        <Button>{progress}</Button>
                    </a>
                </div>
            </CstFigcaption>
        </CstFigure>
    </>
}

ProjectCard.propTypes = {
    img: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    state: PropTypes.bool,
    name: PropTypes.string.isRequired,
    progress: PropTypes.string,
    link: PropTypes.string
}