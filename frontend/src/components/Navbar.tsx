import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, MenuItemStyles } from 'react-pro-sidebar';
import { SidebarHeader } from './react-pro-sidebar/components/SidebarHeader.tsx';
import { SidebarFooter } from './react-pro-sidebar/components/SidebarFooter.tsx';
import { Typography } from './react-pro-sidebar/components/Typography.tsx';
import {ArrowLeftOutlined, HomeOutlined, UserOutlined, MailOutlined, UsergroupAddOutlined} from "@ant-design/icons";
import { themeColors } from '../index.js';
import { useAuth, useUser } from "@clerk/clerk-react";
import { UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import axios from "axios";

type Theme = 'light';

// hex to rgba converter
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const Playground: React.FC = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [toggled, setToggled] = React.useState(false);
  const [broken, setBroken] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [hasImage, setHasImage] = React.useState(false);
  const [theme, setTheme] = React.useState<Theme>('light');
  const { userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  const themes = {
    light: {
      sidebar: {
        backgroundColor: themeColors.background,
        color: themeColors.text,
      },
      menu: {
        menuContent: themeColors.background,
        icon: themeColors.text,
        hover: {
          backgroundColor: themeColors.accent,
          color: themeColors.text,
        },
        disabled: {
          color: '#9fb6cf',
        },
      },
    },
    dark: {
      sidebar: {
        backgroundColor: '#0b2948',
        color: '#8ba1b7',
      },
      menu: {
        menuContent: '#082440',
        icon: '#59d0ff',
        hover: {
          backgroundColor: '#00458b',
          color: '#b6c8d9',
        },
        disabled: {
          color: '#3e5e7e',
        },
      },
    },
  };


  // handle on RTL change event
  const handleRTLChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRtl(e.target.checked);
  };

  // handle on theme change event
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  // handle on image change event
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasImage(e.target.checked);
  };

  const menuItemStyles: MenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[theme].menu.icon,
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      [`&.${menuClasses.disabled}`]: {
        color: themes[theme].menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes[theme].menu.hover.color,
      },
      "transition": "ease-in-out 0.25s"
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return (
    <div style={{ display: 'flex', height: '100%', direction: rtl ? 'rtl' : 'ltr', position: "fixed"}}>
      <Sidebar
        collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        rtl={rtl}
        breakPoint="lg"
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
        className='h-screen select-none text-left break-words'
        width='200px'
      >
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <SidebarHeader rtl={rtl} style={{ marginBottom: '24px', marginTop: '16px' }} />
          <div style={{ flex: 1, marginBottom: '32px' }}>
            <div style={{ padding: '0 24px', marginBottom: '8px' }}>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
                >
                  Profile
                </Typography>
            </div>
            <Menu menuItemStyles={menuItemStyles}>
              {isSignedIn ? 
                <>
                  <Link to="/user">
                    <MenuItem icon={<UserButton/>}>{user.fullName}</MenuItem>
                  </Link>
                  
                </> :
                <>
                  <Link to="/user">
                    <MenuItem icon={<UserOutlined className='scale-125'/>}>Login/Signup</MenuItem>
                  </Link>
                </>}
            </Menu>
            <div style={{ padding: '0 24px', marginTop: '8px', marginBottom: '8px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                General
              </Typography>
            </div>

            <Menu menuItemStyles={menuItemStyles}>
              <Link to="/">
                <MenuItem icon={<HomeOutlined className='scale-125'/>}>
                  Home
                </MenuItem>
              </Link>
              
              
            
            <Link to="/communities">
              <MenuItem icon={<UsergroupAddOutlined className='scale-125'/>}>
                  Communities
              </MenuItem>
            </Link>
            {isSignedIn &&
              <>
                <Link to={`/communities/${user.username}`}>
                  <MenuItem icon={<UsergroupAddOutlined className='scale-125'/>}>
                      Your Communities
                  </MenuItem>
                </Link>
              </>
            }
            <Link to="/contactus">
              <MenuItem icon={<MailOutlined className='scale-125'/>}>
                  Contact Us
              </MenuItem>
            </Link>
            </Menu>
            
          </div>
          <SidebarFooter collapsed={collapsed} />
        </div>
      </Sidebar>
      <div className='flex justify-center items-center'>
          <ArrowLeftOutlined 
            className={`bg-gradient-to-bl from-accent to-secondary bg- p-3 rounded-full ${!collapsed ? '' : 'rotate-180'} translate-x-[-50%] z-[99] hover:scale-110 transition-all ease-in-out duration-300`}
            onClick={() => {setCollapsed(!collapsed)}}
          ></ArrowLeftOutlined>
          {/* <div onClick={() => setCollapsed(!collapsed)} className='w-[40px] h-[40px] bg-primary z-[99] rounded-full translate-x-[-50%] hover:scale-125'></div> */}
      </div>

      
    </div>
  );
};