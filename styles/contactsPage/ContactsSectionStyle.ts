import styled from 'styled-components'

export const MainContacts = styled.div `
  display: grid;
  grid-template-columns: minmax(100px, auto);
  grid-template-rows: repeat(3, minmax(450px, auto));
	//padding-top: 50px;
  
  @media ${props => props.media.phone375_639} {
    grid-row-gap: 40px;
    margin-top: 60px;
  }
  @media ${props => props.media.phone640_767} {
	grid-row-gap: 40px;
    margin-top: 60px;
  }
  @media ${props => props.media.pad768_1023} {
	grid-row-gap: 60px;
    margin-top: 30px;
  }
  @media ${props => props.media.desktop1024_1279} {
	grid-row-gap: 50px;
    margin-top: 30px;
  }
  @media ${props => props.media.desktop1280_1439} {
	grid-row-gap: 50px;
    margin-top: 20px;
  }
  @media ${props => props.media.desktop1440_1919} {
	grid-row-gap: 30px;
    margin-top: 10px;
  }
  @media ${props => props.media.desktop1920} {
    grid-row-gap: 100px;
    margin-top: 30px;
  }
`