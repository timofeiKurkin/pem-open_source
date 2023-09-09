import styled from 'styled-components'

export const FooterMain = styled.footer`
  background-color: ${props => props.color.$black_background};
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    padding: 0 20px;
  }
  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    padding: 0 30px;
  }
  @media ${props => props.media.desktop1440_1919} {
	padding: 0 50px;
  }
  @media ${props => props.media.desktop1920} {
	padding: 0 170px;
  }
`

export const FooterMainContent = styled.div``

export const FooterName = styled.div`
  text-align: center;
  position: relative;
`

export const FooterNameTitle = styled.div`
  color: ${props => props.color.$white_cold2};
  font-weight: 400;
  text-transform: uppercase;
  line-height: 120%;
  letter-spacing: 2px;
  font-size: 12px;
  padding: 20px 0;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    color: #BCBCBC;
    top: 0;
    left: 0;
  }
`

export const FooterStyle = styled.div`
  display: grid;
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, minmax(100px, auto));
    grid-template-areas: 
	"footer-nav"
	"footer-services"
	"footer-logo"
  ;
    grid-row-gap: 30px;
    padding: 30px 0 20px 0;
  }

  @media ${props => props.media.phone640_767} {
    grid-row-gap: 20px;
  }
  @media ${props => props.media.pad768_1023} {
  }
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    //grid-template-columns: 1fr;
	grid-template-columns: repeat(2, minmax(500px, auto));
    grid-template-rows: repeat(2, minmax(100px, auto));
    grid-template-areas: 
	"footer-logo footer-nav"
	"footer-services"
  ;
    grid-row-gap: 40px;
    padding: 40px 0 20px 0;
  }
  
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: repeat(3, minmax(100px, auto));
    grid-template-rows: minmax(100px, auto);
    grid-template-areas: 
	"footer-logo footer-nav footer-services"
  ;
	grid-column-gap: 30px;
    padding: 35px 0 75px 0;
  }
  
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(180px, 200px) minmax(100px, 460px) minmax(250px, 360px);
    grid-template-rows: minmax(100px, auto);
    grid-template-areas: 
	"footer-logo footer-nav footer-services"
  ;
	justify-content: space-between;
    //grid-column-gap: 275px;
    padding: 40px 0 60px 0;
  }
`

export const FooterLogo = styled.div`
  grid-area: footer-logo;
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    justify-self: center;
    text-align: center;
  }
  @media ${props => props.media.pad768_1023} {
    justify-self: flex-start;
  }
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    grid-column-start: 1;
	grid-row-start: 1;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-column-start: 1;
    //grid-row-start: 1;
  }
`

export const FooterLogoImg = styled.div`
  user-select: none;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.desktop1024_1279} {
    margin-bottom: 20px;
  }
  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1280_1439} {
    margin-bottom: 25px;
  }
  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    margin-bottom: 40px;
  }
`

export const FooterLogoContacts = styled.div`
  color: ${props => props.color.$white_cold};

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919} {
    font-size: 14px;
    line-height: 130%;
  }
  
  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
	max-width: 200px;
  }
  margin-bottom: 8px;

  &:last-child {
    margin: 0;
  }
`

export const FooterNav = styled.div`
  grid-area: footer-nav;
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    grid-column-start: 2;
	grid-row-start: 1;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-column-start: 2;
    //grid-row-start: 1;
  }
`

export const FooterNavList = styled.div`
  display: grid;
  
  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279},${props => props.media.desktop1280_1439} {
    grid-template-columns: repeat(2, minmax(150px, 320px));
    grid-column-gap: 100px;
    grid-template-rows: 1fr 1fr;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns:minmax(150px, 320px);
	grid-template-rows: repeat(4, 1fr);
	grid-row-gap: 20px;
    //grid-column-gap: 100px;
    //grid-template-rows: 1fr 1fr;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns:repeat(2, minmax(100px, auto));
    grid-template-rows: repeat(3, 1fr);
    grid-row-gap: 20px;
  }
`

export const FooterNavItem = styled.div`
  color: ${props => props.color.$white};
  line-height: 130%;
  font-size: 16px;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    font-weight: 400;
    margin-bottom: 20px;
  }
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    font-weight: 400;
	margin-bottom: 15px;
  }
  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    font-weight: 500;
  }

  &:last-child {
    margin: 0;
  }
`

export const FooterServices = styled.div`
  grid-area: footer-services;
  @media ${props => props.media.desktop1024_1279},${props => props.media.desktop1280_1439} {
	grid-row-start: 2;
    grid-column-start: 2;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-column-start: 3;
    //grid-row-start: 1;
  }
`

export const FooterServicesTitle = styled.div`
  color: ${props => props.color.$white};
  line-height: 19.5px;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 20px;
`

export const FooterServicesList = styled.div`
  @media ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1280_1439} {
    display: grid;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: repeat(2, minmax(150px, 250px));
    grid-column-gap: 100px;
    grid-template-rows: repeat(3, 1fr);
  }
  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1280_1439} {
    grid-template-columns: repeat(2, minmax(150px, 320px));
    grid-column-gap: 100px;
    grid-template-rows: repeat(3, 1fr);
  }
`

export const FooterServicesItem = styled.div`
  color: ${props => props.color.$white_cold};
  line-height: 130%;
  font-weight: 400;
  font-size: 16px;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    margin-bottom: 15px;
  }
  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    margin-bottom: 20px;
  }

  &:last-child {
    margin: 0;
  }
`