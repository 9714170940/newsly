import React from 'react'
import { Form } from 'react-bootstrap'

const CustomForm = ({onSubmit,children,...otherProps}) => {
    return (
        <Form {...otherProps} onSubmit={onSubmit} >{children}</Form>
    )
}

export default CustomForm
