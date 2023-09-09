import styled from 'styled-components'

export const Main = styled.div`
  background-color: ${props => props.color.$white_cold2};
`

export const AdvantageContent = styled.div`
  position: relative;
`

export const AdvantageWrapper = styled.div`
  display: grid;
  @media  ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279} {
    grid-template-rows: repeat(2, minmax(100px, auto));
  }
  @media ${props => props.media.phone375_639} {
    grid-row-gap: 65px;
    margin-top: 30px;
  }
  @media ${props => props.media.phone640_767} {
    grid-row-gap: 70px;
    margin-top: 30px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-row-gap: 95px;
    margin-top: 40px;
  }
  @media ${props => props.media.desktop1024_1279} {
	margin-top: 40px;
	grid-row-gap: 60px;
  }
  @media ${props => props.media.desktop1280_1439} {
	margin-top: 45px;
	grid-row-gap: 90px;
  }
  @media ${props => props.media.desktop1440_1919} {
	margin-top: 60px;
	grid-row-gap: 100px;
  }
  @media ${props => props.media.desktop1920} {
	margin-top: 45px;
    grid-row-gap: 140px;
  }

  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-template-rows: repeat(2, minmax(120px, auto));
  }
`

export const Lists = styled.div`
  display: grid;

  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(320px, auto);
    grid-template-rows: minmax(150px, 350px) minmax(200px, auto);
    grid-row-gap: 30px;
  }

  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(200px, auto);
    grid-template-rows: minmax(200px, 400px) minmax(200px, auto);
    grid-row-gap: 25px;
  }
  
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(500px, auto);
    grid-template-rows: minmax(250px, 350px) minmax(250px, auto);
    grid-row-gap: 35px;
  }
  
  @media ${props => props.media.desktop1024_1279} {
	grid-template-columns: minmax(400px, 435px) minmax(270px, 475px);
    grid-template-rows: 500px;
	grid-column-gap: 80px;
	align-items: center;
    justify-content: center;
  }
  
  @media ${props => props.media.desktop1280_1439} {
	grid-template-columns: minmax(400px, 405px) minmax(300px, 565px);
    grid-template-rows: 575px;
	grid-column-gap: 110px;
	align-items: center;
    justify-content: center;
  }
  
  @media ${props => props.media.desktop1440_1919} {
	grid-template-columns: minmax(400px, 584px) minmax(450px, 650px);
    grid-template-rows: minmax(575px, 600px);
    grid-column-gap: 120px;
    justify-content: center;
    align-items: center;
  }
  
  @media ${props => props.media.desktop1920} {
    grid-template-columns: 560px minmax(600px, 670px);
    grid-template-rows: 600px;
    grid-column-gap: 143px;
    justify-content: center;
    align-items: center;
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  @media ${props => props.media.pad768_1023} {
	max-width: 650px;
	margin: 0 auto;
  }
  position: relative;
`

export const ListsWrapper = styled.div`
  display: grid;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767},${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(200px, auto);
    grid-template-rows: repeat(5, 30px);
  }
  @media ${props => props.media.phone375_639} {
    grid-row-gap: 25px;
  }
  @media ${props => props.media.phone640_767} {
    grid-row-gap: 22px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-row-gap: 28px;
  }
  @media ${props => props.media.desktop1024_1279} {
	grid-row-gap: 32px;
  }
  @media ${props => props.media.desktop1280_1439} {
	grid-row-gap: 38px;
  }
  
  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-template-rows: repeat(5, 30px);
    grid-template-columns: minmax(500px, auto);
    grid-row-gap: 55px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-row-gap: 46px;
  }
`

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (min-width: 500px) and (max-width: 639px) {
    justify-content: center;
  }
  @media (min-width: 375px) and (max-width: 499px) {
    justify-content: center;
  }
  @media ${props => props.media.phone640_767},${props => props.media.pad768_1023} {
    justify-content: center;
  }
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
	justify-content: flex-start;
  }
`

export const ListSpan = styled.span`
  text-align: left;
  font-size: 20px;
  font-weight: 500;

  @media (min-width: 500px) and (max-width: 639px) {
  }
  @media (min-width: 375px) and (max-width: 499px) {
    margin: 0 20px 0 0;
  }
  @media ${props => props.media.phone640_767} {

  }
`

export const ItemLine = styled.div`
  margin: 4px 7px;
  width: 320px;
  height: 1px;
  background-color: ${props => props.color.$dark_blue};

  @media (min-width: 500px) and (max-width: 639px) {
    margin: 4px 17px;
    width: 140px;
  }
  @media (min-width: 375px) and (max-width: 499px) {
    display: none;
  }
  @media ${props => props.media.phone640_767} {
    margin: 4px 12px;
    width: 180px;
  }
  @media ${props => props.media.pad768_1023} {
	margin: 4px 12px;
	width: 200px;
  }
  @media ${props => props.media.desktop1024_1279} {
	margin: 4px 7px;
	width: 110px;
  }
  @media ${props => props.media.desktop1280_1439} {
	margin: 4px 10px;
	width: 250px;
  }
`

export const ItemText = styled.p`
  width: 275px;
  text-align: left;
  font-size: 18px;
  color: ${props => props.color.$dark};
`

export const StatisticsItemsWrapper = styled.div``

export const StatisticsItems = styled.div`
  display: grid;
  
  @media (min-width: 500px) and (max-width: 639px) {
    grid-template-columns: repeat(2, minmax(140px, auto));
    grid-template-rows: repeat(3, minmax(100px, auto));
    grid-row-gap: 20px;
    grid-column-gap: 50px;
    padding: 0 20px;
  }
  @media (min-width: 375px) and (max-width: 499px) {
    grid-template-rows: repeat(5, minmax(100px, auto));
    grid-template-columns: 225px;
    justify-content: center;
  }
  @media ${props => props.media.phone375_639} {
  }
  
  @media ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    grid-template-columns: repeat(2, minmax(140px, auto));
    grid-template-rows: repeat(3, minmax(100px, auto));
  }
  @media ${props => props.media.phone640_767} {
    grid-column-gap: 65px;
    padding: 0 25px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-column-gap: 120px;
    padding: 0 60px;
  }
  
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-template-columns: repeat(4, minmax(100px, auto)) 140px;
	grid-template-rows: minmax(100px, auto);
  }
  @media ${props => props.media.desktop1280_1439} {
	padding: 0 20px;
  }
  @media ${props => props.media.desktop1440_1919} {
	padding: 0 30px;
  }
  @media ${props => props.media.desktop1920} {
	padding: 0 50px;
  }
`

export const StatisticsItem = styled.div`
  text-align: center;

  @media (min-width: 500px) and (max-width: 639px), ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    display: flex;
    flex-direction: column;
    align-items: center;
    &:last-child {
      grid-column: 1/3;
    }
  }
  @media (min-width: 375px) and (max-width: 499px) {
  }
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    display: flex;
  }
`

export const StatisticsItemWrapper = styled.div`
  @media (min-width: 375px) and (max-width: 499px) {
    margin: 0 auto;
  }
  width: 140px;
  min-height: 100px;
  max-height: 130px;
`

export const StatisticsItemTitle = styled.h2`
  font-size: 48px;
  font-weight: 500;
  color: ${props => props.color.$black};
  margin-bottom: 25px;
`

export const StatisticsItemText = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  color: ${props => props.color.$black};
`

export const StatisticsItemLine = styled.div`
  background-color: ${props => props.color.$dark_blue};
  @media (min-width: 375px) and (max-width: 499px), (min-width: 500px) and (max-width: 639px), ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    width: 100%;
  }
  @media (min-width: 375px) and (max-width: 499px), (min-width: 500px) and (max-width: 639px) {
    height: 1px;
    margin: 40px 0;
  }
  @media ${props => props.media.phone640_767} {
    height: 1px;
    margin: 30px 0;
  }
  @media ${props => props.media.pad768_1023} {
    height: 2px;
    margin: 40px 0;
  }
  
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    width: 1px;
    height: 100%;
  }
  
  @media ${props => props.media.desktop1024_1279} {
    margin: 0 auto;
  }
  @media ${props => props.media.desktop1280_1439} {
    margin: 0 auto;
  }
  @media ${props => props.media.desktop1440_1919} {
	margin: 0 auto;
  }
  @media ${props => props.media.desktop1920} {
    //margin: 0 110px;
    margin: 0 auto;

  }
`

// @media (min-width: 500px) and (max-width: 639px) {
//
// }
// @media (min-width: 375px) and (max-width: 499px) {
//
// }