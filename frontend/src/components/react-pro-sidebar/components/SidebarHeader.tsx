import styled from '@emotion/styled';
import React from 'react';
// import { Github } from '../icons/Github';
import { Typography } from '../components/Typography.tsx';
import { themeColors, webAppName } from '../../../App.js';
import logo from "../../../assets/img/android-chrome-192x192.png";


interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  rtl: boolean;
}



export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, rtl, ...rest }) => {

  const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  > div {
    width: 100%;
    overflow: hidden;
  }
  `;

  const StyledLogo = styled.div<{ rtl?: boolean }>`
    width: 35px;
    min-width: 35px;
    height: 35px;
    min-height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: ${themeColors.text};
    font-size: 24px;
    font-weight: 700;
    background-color: #009fdb;
    background: linear-gradient(45deg, ${themeColors.accent}  0%, ${themeColors.secondary} 100%);
    ${({ rtl }) =>
      rtl
        ? `
        margin-left: 10px;
        margin-right: 4px;
        `
        : `
        margin-right: 10px;
        margin-left: 4px;
        `}
  `;

  return (
    <StyledSidebarHeader {...rest}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: "center", gap: "10px"}}>
        <img src={logo} alt="" className='max-w-[45px] max-h-[45px]' />
        <Typography variant="subtitle1" fontWeight={500} color={themeColors.text} className='mr-2'>
          {webAppName}
        </Typography>
      </div>
    </StyledSidebarHeader>
  );
};
