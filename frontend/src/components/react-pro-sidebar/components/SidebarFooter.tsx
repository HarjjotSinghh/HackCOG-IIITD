import styled from '@emotion/styled';
import React from 'react';
import { Github } from '../icons/Github.tsx';
import { Typography } from '../components/Typography.tsx';
import { themeColors, webAppName } from '../../../App.js';


interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
}



export const SidebarFooter: React.FC<SidebarFooterProps> = ({ children, collapsed, ...rest }) => {

  const StyledButton = styled.a`
  padding: 5px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  color: #484848;
  text-decoration: none;
  `;

  const StyledSidebarFooter = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 8px;
    color: white;
    background: linear-gradient(45deg, ${themeColors.accent}  0%, ${themeColors.secondary} 100%);
    /* background: #0098e5; */
  `;

  const StyledCollapsedSidebarFooter = styled.a`
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    color: white;
    background: linear-gradient(45deg, ${themeColors.accent}  0%, ${themeColors.secondary} 100%);
    /* background: #0098e5; */
  `;

  const codeUrl =
    'https://github.com/HarjjotSinghh/HackCOG-IIITD';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
      }}
    >
      {collapsed ? (
        <StyledCollapsedSidebarFooter href={codeUrl} target="_blank">
          <Github size={28} />
        </StyledCollapsedSidebarFooter>
      ) : (
        <StyledSidebarFooter {...rest}>
          <div style={{ marginBottom: '12px' }}>
            <Github size={30} />
          </div>
          <Typography fontWeight={500} color='black'>{webAppName}</Typography>
          <Typography variant="caption" style={{ letterSpacing: 1, opacity: 0.7 }}>
          </Typography>

        </StyledSidebarFooter>
      )}
    </div>
  );
};
