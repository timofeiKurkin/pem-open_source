import styled from 'styled-components'

export const Work = styled.main`

  @media ${props => props.media.phone375_639} {
    margin: 100px 12px 60px 12px;
  }
  @media ${props => props.media.phone640_767} {
    margin: 100px 20px 60px 20px;
  }
  @media ${props => props.media.pad768_1023} {
    margin: 100px 50px 60px 50px;
  }
  @media ${props => props.media.desktop1024_1279} {
    margin: 110px 25px 60px 25px;
  }
  @media ${props => props.media.desktop1280_1439} {
    margin: 110px 62px 60px 62px;
  }
  @media ${props => props.media.desktop1440_1919} {
    margin: 120px 20px 60px 20px;
  }
  @media ${props => props.media.desktop1920} {
    margin: 120px 0px 60px 0px;
  }
`

export const WorkMain = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, auto);
  grid-template-rows: minmax(400px, auto);
    // @media ${props => props.media.phone375_639} {
  // }
    // @media ${props => props.media.phone640_767} {
  // }
    // @media ${props => props.media.pad768_1023} {
  // }
    // @media ${props => props.media.desktop1024_1279} {
  // }
    // @media ${props => props.media.desktop1280_1439} {
  // }
    // @media ${props => props.media.desktop1440_1919} {
  // }
    // @media ${props => props.media.desktop1920} {
  // }
`

export const WorkContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: repeat(2, minmax(20px, auto));

  @media ${props => props.media.phone375_639} {
    //grid-row-gap: 38px;
  }
  @media ${props => props.media.phone640_767} {
    //grid-row-gap: 36px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(300px, 1023px);
    //grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(300px, 1279px);
    //grid-row-gap: 50px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(300px, 1439px);
    //grid-row-gap: 55px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(300px, 1919px);
    //grid-row-gap: 55px;
  }
  @media ${props => props.media.desktop1920} {
    //grid-row-gap: 75px;
  }
`

export const WorkTitle = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1720px);
  justify-content: center;
  margin: 0 15px;
`

export const WorkWrapper = styled.div`
`

export const WorkItems = styled.div`
  display: grid;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: repeat(3, minmax(200px, auto));
  }

    // @media ${props => props.media.phone375_639} {
  //   grid-row-gap: 55px;
  // }
    // @media ${props => props.media.phone640_767} {
  //   grid-row-gap: 65px;
  // }
    // @media ${props => props.media.pad768_1023} {
  //   grid-row-gap: 65px;
  // }
    // @media ${props => props.media.desktop1024_1279} {
  //   grid-row-gap: 85px;
  // }
    // @media ${props => props.media.desktop1280_1439} {
  //   grid-row-gap: 95px;
  // }
    // @media ${props => props.media.desktop1440_1919} {
  //   grid-row-gap: 105px;
  // }
    // @media ${props => props.media.desktop1920} {
  //   grid-row-gap: 150px;
  // }
`

export const WorkItemRow = styled.div`
  background-color: ${props => props.primary ? props.color.$white_blue : ''};
`


export const WorkItem = styled.div`
  display: grid;


  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    grid-template-columns: minmax(115px, auto);
    grid-template-rows: minmax(100px, auto);
  }

  @media ${props => props.media.phone375_639} {
    grid-template-areas: 'content';
  }
  @media ${props => props.media.phone640_767} {
    grid-template-areas: 'content';
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(115px, 800px);
    grid-template-rows: minmax(100px, auto);
    grid-template-areas: 'content';
    justify-content: center;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(115px, 980px);
    grid-template-rows: minmax(100px, auto);
    grid-template-areas: 'content';
    justify-content: center;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(115px, 1190px);
    grid-template-rows: minmax(100px, auto);
    grid-template-areas: 'content';
    justify-content: center;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(50px, 110px) minmax(400px, auto);
    grid-column-gap: 115px;
    grid-template-areas: 'number content';
    //align-items: center;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(50px, 120px) minmax(400px, auto);
    grid-column-gap: 140px;
    grid-template-areas: 'number content';

      //justify-content: ${props => props.primary ? 'flex-end' : 'flex-start'};
  }
`

export const WorkItemNumWrapper = styled.div`
  grid-area: number;
  position: relative;
  width: 110px;
  height: 95px;
  user-select: none;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    display: none;
  }
  @media ${props => props.media.phone640_767} {
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

export const WorkItemContent = styled.div`
  grid-area: content;
  display: grid;

  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: minmax(250px, auto);
    grid-template-areas: 'image' 
						 'text';
    grid-row-gap: 12px;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(500px, auto);
    grid-template-rows: minmax(280px, auto);
    grid-template-areas: 'image' 
						 'text';
    grid-row-gap: 18px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(234px, auto) minmax(350px, auto);
    grid-template-rows: minmax(150px, auto);
    grid-template-areas: 'image text';
    grid-column-gap: 60px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(349px, auto) minmax(350px, auto);
    grid-template-rows: minmax(260px, auto);
    grid-template-areas: 'image text';
    grid-column-gap: 70px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(435px, auto) minmax(350px, auto);
    grid-template-rows: minmax(290px, auto);
    grid-template-areas: 'image text';
    grid-column-gap: 90px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(460px, 477px) minmax(527px, 720px);
    grid-template-rows: minmax(310px, auto);
    grid-template-areas: 'image text';
    grid-column-gap: 55px;
    //align-items: center;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(490px, 513px) minmax(527px, 747px);
    grid-template-rows: minmax(310px, auto);
    grid-template-areas: 'image text';
    grid-column-gap: 65px;
    //align-items: center;
  }
`

export const WorkItemImg = styled.div`
  grid-area: image;
  user-select: none;
  position: relative;

  height: 336px;

  @media ${props => props.media.pad768_1023} {
    height: 400px;
  }
  @media ${props => props.media.desktop1024_1279} {
    height: 289px;
  }
  @media ${props => props.media.desktop1280_1439} {
    height: 310px;
  }
`

export const WorkItemWrapper = styled.div`
  grid-area: text;
  align-self: center;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media ${props => props.media.phone640_767} {
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

export const WorkItemContentWrapper = styled.div `
	display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: minmax(20px, auto);
  grid-row-gap: 30px;
`

export const WorkItemTitle = styled.h2`
  letter-spacing: 0.5px;
  line-height: 125%;
  font-size: 32px;
  font-weight: 500;
  color: ${props => props.color.$black};

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    font-size: 26px;
    line-height: 120%;
    letter-spacing: 0.25px;
  }

  // padding-bottom: 4px;
  // position: relative;
  //
  // &:after {
  // content: '';
  //   position: absolute;
  // width: 100%;
  // height: 2px;
    // background-color: ${props => props.color.$dark_blue};
  // left: 0;
  // bottom: 0;
  // }
`

export const WorkItemTextWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: minmax(100px, auto);

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    grid-row-gap: 20px;
  }
  @media ${props => props.media.phone375_639} {
    //margin: 10px 0 28px 0;
  }
  @media ${props => props.media.phone640_767} {
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.pad768_1023} {
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1024_1279} {
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1280_1439} {
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1440_1919} {
    font-size: 18px;
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1920} {
    font-size: 18px;
    //margin: 12px 0 30px 0;
  }
`

export const WorkItemText = styled.p`
  color: ${props => props.color.$black};
  line-height: 145%;
  font-size: 17px;
  letter-spacing: 0.08px;
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    font-size: 18px;
  }
  @media ${props => props.media.phone375_639} {
    //margin: 10px 0 28px 0;
  }
  @media ${props => props.media.phone640_767} {
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.pad768_1023} {
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1024_1279} {
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1280_1439} {
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1440_1919} {
    font-size: 18px;
    //margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1920} {
    font-size: 18px;
    //margin: 12px 0 30px 0;
  }
`

export const WorkItemOptionWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, auto);
  grid-template-rows: minmax(20px, auto);
  grid-row-gap: 12px;
`

export const WorkItemOptionTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.color.$dark_vacancy};
  letter-spacing: 0.25px;
`

export const WorkItemOptions = styled.div`
  display: grid;
  grid-template-columns: minmax(150px, auto);
  grid-template-rows: minmax(20px, auto);
  grid-row-gap: 10px;
`

export const WorkItemOption = styled.div`
  color: ${props => props.color.$black};
  line-height: 145%;
  font-size: 17px;
`

export const FormBtn = styled.div`
  display: inline-block;
  cursor: pointer;

  margin: 40px 0 0 0;
  padding: 18px 32px;
    //border: 2px solid ${props => props.color.$blue};
  background-color: ${props => props.color.$dark_blue};
  border-radius: 3px;
  user-select: none;

  font-size: 14px;
  font-weight: 700;
  //line-height: 19.5px;
  letter-spacing: 1px;
  color: ${props => props.color.$white};
  text-align: center;

  transition: background-color 0.6s ease;

  &:hover {
      // border: 2px solid ${props => props.color.$dark_blue};
      // background: ${props => props.color.$white_cold};
      //color: ${props => props.color.$blue};
  }
`

export const WorkFormWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const WorkForm = styled.div`
  //position: fixed;
  //z-index: 99999;

  background-color: ${props => props.color.$black_background};
  border-radius: 20px;
  position: relative;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    padding: 70px 15px 20px 15px;
    margin: 0 10px;

  }
  @media ${props => props.media.phone640_767} {
    //padding: 70px 20px 20px 20px;
    //margin: 0 10px;
  }
  @media ${props => props.media.pad768_1023} {
    padding: 60px 20px 20px 20px;
  }
  @media ${props => props.media.desktop1024_1279} {
    padding: 60px 20px 20px 20px;
  }
  @media ${props => props.media.desktop1280_1439} {
    padding: 60px 30px 20px 30px;
  }
  @media ${props => props.media.desktop1440_1919} {
    padding: 60px 50px 20px 50px;
  }
  @media ${props => props.media.desktop1920} {
    padding: 60px 50px 20px 50px;
  }

  //top: 25%;
  //left: 40%;
  //width: 600px;
  //height: 100%;
`

export const CloseForm = styled.div `
  cursor: pointer;
	position: absolute;
  width: 25px;
  height: 25px;
  //background-color: ${props => props.color.$white_cold2};
  top: 20px;
  right: 15px;
  
  &:after, &:before {
	content: '';
	position: absolute;
	width: 100%;
	height: 4px;
	border-radius: 3px;
    background-color: ${props => props.color.$white_cold2};
	top: 10px;
	right: 0;
  }

  &:after {
	transform: rotate(-45deg);
  }
  &:before {
    transform: rotate(45deg);
  }
`