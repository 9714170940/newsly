import React from 'react'
import {FormLabel} from 'react-bootstrap'

const CustomLabel = ({label, ...otherProps}) => {
    return <FormLabel {...otherProps} aria-label={label}>{label}</FormLabel>
}

export default CustomLabel
