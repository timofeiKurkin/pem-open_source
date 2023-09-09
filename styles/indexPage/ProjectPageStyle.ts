import styled from 'styled-components'

export const ProjectWrapper = styled.div`
  //padding: 90px 0;
  background-color: ${props => props.color.$white};
`

export const Project = styled.div`
  position: relative;
  
  display: grid;
  grid-template-columns: minmax(320px, 1720px);
  grid-template-rows: minmax(10px, auto);
  
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
	grid-row-gap: 20px;
  }
  @media ${props => props.media.pad768_1023} {
	grid-row-gap: 25px;
  }
  @media ${props => props.media.desktop1024_1279} {
	grid-row-gap: 35px;
  }
  @media ${props => props.media.desktop1280_1439} {
	grid-row-gap: 10px;
  }
  @media ${props => props.media.desktop1440_1919} {
	grid-row-gap: 25px;
  }
  @media ${props => props.media.desktop1920} {
	grid-row-gap: 30px;
  }
`

export const ProjectTitle = styled.div `
`

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, auto);
  grid-template-rows: minmax(100px, auto);
  grid-row-gap: 50px;

  @media ${props => props.media.phone375_639} {
    grid-row-gap: 20px;
  }
  @media ${props => props.media.phone640_767} {
    grid-row-gap: 30px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(100px, 800px);
	justify-content: center;
    grid-row-gap: 40px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(100px, 1080px);
    justify-content: center;
  }
  @media ${props => props.media.desktop1280_1439} {
	grid-template-columns: minmax(100px, 1200px);
    justify-content: center;
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(100px, auto) minmax(50px, auto);
	align-items: center;
    grid-column-gap: 40px;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(100px, auto) minmax(50px, auto);
    align-items: center;
    grid-column-gap: 110px;
  }
`

export const ProjectSwiper = styled.div`
`

export const ProjectButton = styled.div`
  text-align: center;
`