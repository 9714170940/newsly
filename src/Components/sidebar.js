import {useState} from 'react'

const useSidebar = () => {

    const [toggle,setToggle] = useState(false)

    const toggleCollapsed = () => {
        setToggle(prev=>!prev)
    }

    return [toggle,toggleCollapsed]
}

export default useSidebar
