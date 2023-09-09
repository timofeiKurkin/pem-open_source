import styled from 'styled-components'

export const ProjectMain = styled.main`
  display: grid;
  grid-template-columns: minmax(300px, 1460px);
  justify-content: center;

  @media ${props => props.media.phone375_639} {
    margin: 100px 12px 60px 12px;
    grid-row-gap: 30px;
  }
  @media ${props => props.media.phone640_767} {
    margin: 100px 20px 60px 20px;
    grid-row-gap: 30px;
  }
  @media ${props => props.media.pad768_1023} {
    margin: 100px 50px 60px 50px;
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1024_1279} {
    margin: 110px 25px 60px 25px;
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1280_1439} {
    margin: 110px 62px 60px 62px;
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1440_1919} {
    margin: 120px 0px 60px 0px;
    grid-row-gap: 40px;
  }
  @media ${props => props.media.desktop1920} {
    margin: 120px 0px 100px 0px;
    grid-row-gap: 45px;
  }
`

export const ProjectTitle = styled.div``

export const ProjectPagination = styled.div`
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    justify-self: center;
  }

  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    justify-self: flex-end;
  }
`

export const ProjectItems = styled.div`
  display: grid;
  grid-template-columns: minmax(330px, 1390px);
  grid-template-rows: minmax(100px, auto);
  grid-row-gap: 50px;
  justify-content: center;
`

export const ProjectItem = styled.div`
  overflow: hidden;
  display: grid;
  border-radius: 15px;
  border: 2px solid ${props => props.color.$dark_blue};
  background-color: ${props => props.color.$white};

  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(250px, auto);
    grid-template-rows: repeat(2, minmax(20px, auto));
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(250px, auto);
    grid-template-rows: repeat(2, minmax(20px, auto));
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(250px, auto) minmax(120px, 140px);
    grid-template-rows: repeat(2, minmax(20px, auto));
    grid-column-gap: 40px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(250px, auto) minmax(120px, 140px);
    grid-template-rows: repeat(2, minmax(20px, auto));
    grid-column-gap: 50px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(250px, auto) minmax(120px, 140px);
    grid-template-rows: repeat(2, minmax(20px, auto));
    grid-column-gap: 70px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(250px, auto) minmax(120px, 140px);
    grid-template-rows: repeat(2, minmax(20px, auto));
    grid-column-gap: 60px;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(1000px, auto) 140px;
    grid-template-rows: minmax(330px, auto);
  }
  transition: .4s ease;
  
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 14px 10px #DBE2EF;
  }
`

export const ProjectItemContent = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1000px);
  grid-row-gap: 5px;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    padding: 30px 15px;
    text-align: center;
    grid-row-gap: 10px;
  }
  @media ${props => props.media.pad768_1023} {
    padding: 30px 0 30px 30px;
    grid-row-gap: 10px;
  }
  @media ${props => props.media.desktop1024_1279} {
    padding: 30px 0 30px 30px;
    grid-row-gap: 15px;
  }
  @media ${props => props.media.desktop1280_1439} {
    padding: 30px 0 30px 30px;
    grid-row-gap: 15px;
  }
  @media ${props => props.media.desktop1440_1919} {
    padding: 38px 0 38px 40px;
  }
  @media ${props => props.media.desktop1920} {
    padding: 38px 0 38px 40px;
  }
`

export const ProjectItemTitleWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, auto);
  grid-template-rows: repeat(2, minmax(10px, auto));
  grid-row-gap: 7px;
`

export const ProjectItemTitle = styled.h3`
  font-size: 28px;
  line-height: 130%;
  color: ${props => props.color.$black};
  font-weight: 600;
  letter-spacing: 0.025em;

  @media ${props => props.media.phone375_639} {
    font-size: 24px;
  }
  @media ${props => props.media.phone640_767} {
    font-size: 24px;
  }
  @media ${props => props.media.pad768_1023} {
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

export const ProjectItemTitleLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${props => props.color.$dark_blue};
  //margin-top: 10px;
  //margin-bottom: 2px;
`

export const ProjectItemYear = styled.div`
  background-color: ${props => props.color.$dark_blue};
  color: ${props => props.color.$white};
  padding: 27px 10px;
  max-height: 85px;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  letter-spacing: 0.02em;
  font-weight: 600;
`

export const ProjectItemWrapper = styled.div`
  grid-column: 1/2;
`

export const ProjectItemOption = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 145%;
  color: ${props => props.color.$black};
  margin-bottom: 6px;

  &:last-child {
    margin: 0;
  }
`

export const ProjectGuide = styled.div`
  display: grid;
  grid-template-columns: minmax(730px, 980px) minmax(300px, auto);
  grid-template-rows: minmax(20px, 50px);
  align-items: center;
  
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, minmax(20px, auto));
	grid-row-gap: 30px;
  } 
  
  @media ${props => props.media.pad768_1023} {
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