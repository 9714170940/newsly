import React from 'react'
import { Menu } from 'antd';
import {makeStyles} from "@material-ui/core";
import {
  AiOutlineAppstore,
  AiOutlinePieChart,
  AiOutlineDesktop,
  AiOutlineContainer,
  AiOutlineMail,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    customMenu:{
        fontSize:'16px'
    },
    customMenuIcon:{
        fontSize:'24px'
    }
}))

const Sidebar = ({toggle}) => {

    const classes = useStyles()

    return (
        <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="light"
          className={classes.customMenu}
          inlineCollapsed={toggle}
        >
          <Menu.Item key="1" icon={<AiOutlinePieChart style={{fontSize:'1.3rem'}} />}>
            <NavLink to='/option1' > Option 1 </NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<AiOutlineDesktop style={{fontSize:'1.3rem'}} />}>
            <NavLink to='/option2' > Option 2 </NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<AiOutlineContainer style={{fontSize:'1.3rem'}} />}>
            <NavLink to='/option3' > Option 3 </NavLink>
          </Menu.Item>
          <Menu.Item key="4" icon={<AiOutlineMail style={{fontSize:'1.3rem'}} />}>
            <NavLink to='/option4' > Option 4 </NavLink>
          </Menu.Item>
          <Menu.Item key="5" icon={<AiOutlineAppstore style={{fontSize:'1.3rem'}} />}>
            <NavLink to='/option5' > Option 5 </NavLink>
          </Menu.Item>
          <Menu.Item key="6" icon={<AiOutlineContainer style={{fontSize:'1.3rem'}} />}>
            <NavLink to='/option6' > Option 6 </NavLink>
          </Menu.Item>
          <Menu.Item key="7" icon={<AiOutlineContainer style={{fontSize:'1.3rem'}} />}>
            <NavLink to='/option7' > Option 7 </NavLink>
          </Menu.Item>
          <Menu.Item key="8" icon={<AiOutlineContainer style={{fontSize:'1.3rem'}} />}>
            <NavLink to='/option8' > Option 8 </NavLink>
          </Menu.Item>
        </Menu>
      </div>
    )
}

export default Sidebar
