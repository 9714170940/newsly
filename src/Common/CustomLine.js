import React from 'react'

const CustomLine = ({children,...otherProps}) => {
    return <p {...otherProps} >{children}</p>
}

export default CustomLine
