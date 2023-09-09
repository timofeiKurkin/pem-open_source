import styled from "styled-components"

export const Sticky = styled.div`
  width: 100%;
  //padding: 17px 0 17px 0;
  height: 70px;

  background-color: ${props => props.color.$white};
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${props => props.color.$grey};
    left: 0;
    right: 0;
    bottom: 0;
  }
`

export const Nav = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const NavBody = styled.div``

export const NavGrid = styled.div``

export const NavBodyContainer = styled.div`
  position: relative;
  display: grid;
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    margin: 0 12px;
    grid-template: minmax(20px, 35px) / minmax(10px, auto);
    justify-content: flex-end;
  }
  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279} {
    margin: 0 20px;
    grid-template: minmax(20px, 35px) / minmax(10px, auto);
    justify-content: flex-end;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template: minmax(20px, 35px) / minmax(10px, 720px);
    //margin: 0 25px;
    //grid-column-gap: 120px;
	margin-right: 50px;
    justify-content: flex-end;
  }
  @media ${props => props.media.desktop1280_1439} {
    //grid-column-gap: 200px;
    grid-template: minmax(20px, 35px) / minmax(75px, 750px);
    justify-content: flex-end;
	margin-right: 62px;
  }
  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    //grid-column-gap: 450px;
    grid-template: minmax(20px, 35px) / minmax(100px, 850px); // minmax(20px, 35px)
    justify-content: flex-end;
    margin: 0 110px;
  }
  align-items: center;
`

export const NavLogoWrapper = styled.div`
  
  position: fixed;
  width: 102px;
  height: 36px;
  left: 90px;
  top: 13px;
  z-index: 999;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    left: 5px;
  }
  @media ${props => props.media.phone640_767} {
  }
  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279} {
    left: 15px
  }
  @media ${props => props.media.desktop1024_1279} {
  }
  @media ${props => props.media.desktop1280_1439} {
  }
  @media ${props => props.media.desktop1440_1919} {
  }
  @media ${props => props.media.desktop1920} {
  }
`

export const NavLogo = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 4px 10px;
  cursor: pointer;
`

export const NavLogoA = styled.a`
`

export const NavLinks = styled.nav`
  margin: 4px 0;
  //max-width: 730px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavLink = styled.div`
  user-select: none;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.color.$dark};
  cursor: pointer;

  &:hover {
    color: ${props => props.color.$black};
  }
`

export const LinkA = styled.a`
  //padding: 5px 20px;

`