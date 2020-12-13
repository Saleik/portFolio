import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CstLabel = styled.label`
    font-family: 'Dosis', sans-serif;
    font-weight: 400;
    color: darkgray;`

const CstTextArea = styled.textarea`
        border-radius: .25rem;
        border-color: lightgray;
        resize: none;`

export function Field({ children, name, type, rows = "5" }) {
    return <div className="form-group">
        {children && <CstLabel htmlFor={name}>{children}</CstLabel>}
        {type === 'textarea' ?
            <CstTextArea name={name} rows={rows} className="from-control w-100"></CstTextArea> :
            <input className="form-control" type={type} name={name} />}
    </div>
}

Field.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}