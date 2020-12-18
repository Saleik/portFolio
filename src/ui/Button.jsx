import React from "react"
import propTypes from "prop-types"
import styled from 'styled-components'
import { colorsTheme } from './colorsTheme'
import { Loader } from "./Loader"

const CstButton = styled.button`
        color:${colorsTheme.secondary};
        border-color:${colorsTheme.secondary};
        border-radius:20px;
        font-family: 'Dosis', sans-serif;
        font-weight:400;
        &:hover{
            background-color:${colorsTheme.secondary}!important;
            border-color:${colorsTheme.secondary}!important;
        };
        &:focus{
            box-shadow: 0 0 0 0.2rem rgba(236, 177, 89,.5);
        }
        &:active{
            background-color:${colorsTheme.secondary}!important;
            box-shadow: 0 0 0 0.2rem rgba(236, 177, 89,.5)!important;
            border-color:${colorsTheme.secondary}!important;
        };`

export function Button({ children, type = 'outline-primary', loading = false, ...props }) {
    let className = 'btn '
    let htmlType = null
    if (type === 'submit') {
        className += 'btn-outline-primary'
    } else {
        className += 'btn-' + type
    }

    if (type === 'submit') {
        htmlType = 'submit'
    }
    return <CstButton className={className} type={htmlType} disabled={loading}{...props}>
        {loading ? <><Loader size="sm" /> envoi...</> : children}
    </CstButton>
}

Button.propTypes = {
    children: propTypes.node.isRequired,
    type: propTypes.string,
}