import React from 'react'
import useSidebar from '../Components/sidebar'
import Sidebar from './Sidebar'
import { TopNav } from './TopNav'

const Dashboard = () => {

    const [toggle, toggleCollapsed] = useSidebar()

    return (
        <div>
            <TopNav toggle={toggle} toggleCollapsed={toggleCollapsed} />
            <Sidebar toggle={toggle} />
        </div>
    )
}

export default Dashboard
