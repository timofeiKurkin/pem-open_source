import styled from 'styled-components'

export const QuestionMain = styled.div`
    //background-color: ${props => props.color.$white_blue};
  background-color: ${props => props.color.$black_background};
`

export const QuestionGrid = styled.div`
  //width: 1760px;
  //padding: 20px 0;
  //margin: 0 auto;

  @media ${props => props.media.phone375_639} {
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

export const Question = styled.div`
  display: grid;
  grid-template-rows: minmax(100px, auto);;
  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(320px, 590px);
    justify-content: center;
    grid-template-areas: 'form';
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(500px, 620px);
    justify-content: center;
    grid-template-areas: 'form';
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(500px, auto);
    grid-template-rows: minmax(320px, auto) minmax(250px, auto);
    grid-template-areas: 'map'
						 'form'
  ;
    grid-row-gap: 40px;

  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(535px, 540px) minmax(350px, auto);
    grid-template-rows: minmax(320px, auto);
    grid-template-areas: 'form map';
    grid-column-gap: 46px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(535px, 540px) minmax(350px, auto);
    grid-template-rows: minmax(320px, auto);
    grid-template-areas: 'form map';
    grid-column-gap: 72px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(535px, 540px) 720px;
    grid-template-rows: minmax(320px, auto);
    grid-template-areas: 'form map';
    justify-content: space-between;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(420px, 520px) minmax(100px, 750px);
    grid-template-rows: minmax(100px, 680px);
    grid-template-areas: 'form map';
    justify-content: space-between;
	align-items: center;
  }
`

export const QuestionContent = styled.div`
  //position: relative;
  //width: 500px;
  grid-area: form;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(100px, auto));
  grid-row-gap: 26px;
  
  @media ${props => props.media.phone375_639} {
  }
  @media ${props => props.media.phone640_767} {
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(500px, 720px);
	justify-content: center;
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

export const QuestionContentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(20px, auto));
  grid-row-gap: 12px;

  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(320px, 470px);
    justify-content: center;
    text-align: center;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(320px, 540px);
    justify-content: center;
    text-align: center;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(320px, auto);
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

export const QuestionTitleWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${props => props.color.$white_blue};
    bottom: 0;
    right: 0;
    left: 0;
  }

  //margin-bottom: 20px;

`

export const QuestionTitle = styled.h2`
  font-size: 26px;
  line-height: 110%;
  color: ${props => props.color.$white};
  font-weight: 500;
  padding-bottom: 8px;
`

export const QuestionText = styled.p`
  font-size: 18px;
  line-height: 135%;
  color: ${props => props.color.$white_cold};
  //margin-bottom: 34px;
`

export const QuestionMap = styled.div`
  width: 100%;
  height: 100%;
  grid-area: map;

  @media ${props => props.media.phone375_639} {
    display: none;
  }
  @media ${props => props.media.phone640_767} {
    display: none;
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
	max-height: 650px;
  }
`