import React from 'react'
import { Button } from 'react-bootstrap'

const CustomButton = ({onClick,type,children,...otherProps}) => {
    return <Button {...otherProps} type={type} onClick={onClick}>
             {children}
           </Button>
}

export default CustomButton
