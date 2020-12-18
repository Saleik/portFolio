import React from "react"
import PropsTypes from "prop-types"

export function Loader({ size }) {
    return <div className={"spinner-border spinner-border-" + size} role="status" />
}

Loader.propTypes = {
    size: PropsTypes.string.isRequired
}