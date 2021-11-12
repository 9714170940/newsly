import React from 'react'
import {FormControl} from 'react-bootstrap'

const CustomInput = ({label,type,name,value,onChange,...otherProps}) => {
    return <FormControl {...otherProps}
            type={type}
            aria-label={label} 
            name={name} 
            value={value}
            onChange={onChange}/> 
}

export default CustomInput
