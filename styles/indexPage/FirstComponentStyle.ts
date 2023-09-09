import styled from "styled-components"

export const Main = styled.div`
  background-color: ${props => props.color.$white_cold2};
  @media ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    height: 98vh;
  }
`

export const MainRow = styled.div`
  display: grid;
  //grid-template-rows: 1fr;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(360px, auto);
    grid-template-rows: minmax(500px, auto) minmax(10px, auto);
    //grid-row-gap: 40px;
    grid-template-areas: "request" 
						 "projects"
  ;
  }

  // @media ${props => props.media.desktop1024_1279} {
  //   grid-template-columns: minmax(460px, auto) minmax(200px, auto);
  //   grid-column-gap: 50px;
  //   grid-template-areas: "request projects"
  // ;
  //   grid-template-rows: 1fr;
  // }

  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(500px, auto) minmax(200px, auto);
    //grid-column-gap: 50px;
    //grid-template-areas: "request" "projects";
    grid-template-areas: "request projects";
    grid-template-rows: 1fr;
  }

  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(700px, auto) minmax(500px, auto);
    grid-column-gap: 40px;
    grid-template-areas: "request projects";
    grid-template-rows: 1fr;
  }

  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(1100px, 1150px) minmax(550px, 750px);
    //grid-column-gap: 50px;
    grid-template-areas: "request projects";
    grid-template-rows: 1fr;
  }

`

export const Request = styled.div`
  grid-area: request;
`

export const Projects = styled.div`
  grid-area: projects;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    padding: 25px 0px;
	justify-self: center;
  }
  @media ${props => props.media.desktop1024_1279} {
    margin: 0 25px;
  }

  @media ${props => props.media.desktop1280_1439} {
    height: 86vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  @media ${props => props.media.desktop1440_1919} {
    height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  @media ${props => props.media.desktop1920} {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(20px, auto));
  justify-content: center;
  
  @media ${props => props.media.phone375_639} {
    grid-row-gap: 20px;
    padding-bottom: 30px;
    grid-template-columns: minmax(300px, 639px);

  }
  @media ${props => props.media.pad768_1023} {
    grid-row-gap: 40px;
    padding-bottom: 40px;
    grid-template-columns: minmax(600px, 1023px);
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-row-gap: 45px;
    padding: 45px 0;
    grid-template-columns: minmax(200px, auto);
	justify-self: center;
  }

  @media ${props => props.media.desktop1280_1439} {
    grid-row-gap: 10px;
    padding: 0 10px;
    grid-template-columns: minmax(450px, auto);
  }

  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-row-gap: 20px;
    //padding: 0 10px;
    //grid-template-columns: minmax(540px, auto);
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${props => props.media.phone375_639} {
    padding: 0 10px;
    height: 89vh;
  }

  @media ${props => props.media.phone640_767} {
    padding: 0 20px;
    max-width: 640px;
    height: 90vh;
  }

  @media ${props => props.media.pad768_1023} {
    padding: 0 30px;
    max-width: 700px;
    height: 92vh;
  }

  @media ${props => props.media.desktop1024_1279} {
    padding: 0 30px;
    max-width: 940px;
    height: 90vh;
  }

  @media ${props => props.media.desktop1280_1439} {
    padding: 0 30px;
    max-width: 675px;
    height: 90vh;
  }

  @media ${props => props.media.desktop1440_1919} {
    padding: 0 20px 0 50px;
    max-width: 830px;
    height: 92vh;
  }

  @media ${props => props.media.desktop1920} {
    padding: 0 20px 0 85px;
    max-width: 880px;
    height: 89vh;
  }
`

export const MainTitle = styled.h2`
  color: ${props => props.color.$dark_vacancy};
  font-weight: 700;

  @media ${props => props.media.phone375_639} {
    font-size: 32px;
    line-height: 120%;
    margin-bottom: 19px;
  }

  @media ${props => props.media.phone640_767} {
    font-size: 40px;
    line-height: 120%;
    margin-bottom: 15px;
  }

  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    font-size: 38px;
    line-height: 120%;
    margin-bottom: 15px;
  }

  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    font-size: 46px;
    line-height: 54px;
    margin-bottom: 19px;
  }
`

export const MainDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 130%;
  color: ${props => props.color.$dark_vacancy};

  @media ${props => props.media.phone640_767} {
    max-width: 460px;
  }

  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279} {
    max-width: 700px;
  }
  @media ${props => props.media.desktop1440_1919} {
    max-width: 680px;
  }
  @media ${props => props.media.desktop1920} {
    max-width: 775px;
  }
`

export const MainButton = styled.div`
  @media ${props => props.media.phone375_639} {
    margin-top: 20px
  }
  @media ${props => props.media.phone640_767} {
    margin-top: 30px;
  }
  @media ${props => props.media.pad768_1023} {
    margin-top: 35px;
  }
  @media ${props => props.media.desktop1024_1279} {
    margin-top: 30px;
  }
  @media ${props => props.media.desktop1280_1439} {
    margin-top: 20px;
  }
  @media ${props => props.media.desktop1440_1919} {
    margin-top: 40px;
  }
  @media ${props => props.media.desktop1920} {
    margin-top: 30px;
  }
`

export const Swiper = styled.div`
`

export const ToProjects = styled.div`
  display: inline-block;
  
  @media ${props => props.media.phone375_639} {
	//margin-left: 25px;
  }
  @media ${props => props.media.pad768_1023} {
    //margin-left: 55px;
  }
  @media ${props => props.media.desktop1024_1279} {
    //margin-left: 75px;
  }
`