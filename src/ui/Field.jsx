import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colorsTheme } from './colorsTheme'

const CstLabel = styled.label`
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    color: darkgray;`

const CstTextArea = styled.textarea`
        border-radius: .25rem;
        border-color: lightgray;`

export function Field({ children, name, type, rows = "4" }) {
    return <div className="form-group">
        {children && <CstLabel htmlFor={name}>{children}</CstLabel>}
        {type === 'textarea' ?
            <CstTextArea style={{ resize: 'none' }} rows={rows} name={name} className="from-control w-100"></CstTextArea> :
            <input className="form-control" type={type} name={name} />}
    </div>
}

Field.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}