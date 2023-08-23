import React from 'react';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { themeColors } from '../App';
import { theme } from 'antd';
import { SvgIcon } from '@mui/material';
import {Icon} from '@mui/material';
import {
  HomeFilled,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons';

export const pages  = ["Home", "Products", "Blog", "About US"];
export const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
    return(
        <> 
            <Sidebar
                rootStyles={{
                    [`.${sidebarClasses.container}`]: {
                      backgroundColor: themeColors.primary,
                    },
                    
                  }}
                transitionDuration={400}
                className='h-screen'
            >
                <Menu
                    menuItemStyles={{
                        button: {
                          [`&.active`]: {
                            backgroundColor: themeColors.secondary,
                            color: themeColors.primary,
                          },
                        },
                      }}
                >
                    <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                    </SubMenu>
                    <MenuItem icon={<HomeFilled></HomeFilled>}>Documentation</MenuItem>
                    <MenuItem icon={<HomeFilled></HomeFilled>}> Calendar</MenuItem>
                    <MenuItem icon={<HomeFilled></HomeFilled>}> E-commerce</MenuItem>
                    <MenuItem icon={<HomeFilled></HomeFilled>}> Examples</MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}


export default Navbar;