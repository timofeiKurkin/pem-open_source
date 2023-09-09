import styled from 'styled-components'

export const VacanciesMain = styled.div`
  padding-top: 60px;
`

export const VacanciesContent = styled.div``

export const VacanciesStyle = styled.div``

export const VacanciesWrapper = styled.div``

export const VacanciesList = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: repeat(3, minmax(150px, auto));

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

export const VacanciesItem = styled.div``

export const VacanciesRow = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: repeat(2, minmax(20px, auto));

  @media ${props => props.media.phone375_639} {
    grid-row-gap: 25px;
    padding: 20px 0;
  }
  @media ${props => props.media.phone640_767} {
    grid-row-gap: 25px;
    padding: 20px 0;
  }
  @media ${props => props.media.pad768_1023} {
    grid-row-gap: 25px;
    padding: 20px 0;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-row-gap: 23px;
    padding: 30px 0;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(100px, 400px) minmax(100px, 740px);
    grid-template-rows: minmax(20px, auto);
    justify-content: space-between;
    padding: 32px 0;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(100px, 400px) minmax(100px, 740px);
    grid-template-rows: minmax(20px, auto);
    justify-content: space-between;
    padding: 32px 0;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(300px, 700px) minmax(100px, 700px);
    grid-template-rows: minmax(20px, auto);
    justify-content: space-between;
    padding: 55px 0;
  }
`

export const VacanciesLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${props => props.color.$dark_blue};
`

export const VacanciesTitleBody = styled.div``

export const VacanciesTitle = styled.h2`
  font-size: 48px;
  letter-spacing: 2px;
  font-weight: 400;
  line-height: 130%;
  color: ${props => props.color.$dark_vacancy};

  position: relative;
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    // &:after {
    //   content: '';
    //   position: absolute;
    //   width: 100%;
    //   height: 1px;
    //   left: 0;
    //   bottom: 0;
      //   background-color: ${props => props.color.$dark_blue};
    // }
  }


  @media ${props => props.media.phone375_639} {
    font-size: 42px;
    line-height: 120%;
    letter-spacing: 1.2px;
  }
  @media ${props => props.media.phone640_767} {
    font-size: 42px;
    line-height: 120%;
    letter-spacing: 1.2px;
  }
  @media ${props => props.media.pad768_1023} {
    font-size: 42px;
    line-height: 115%;
    letter-spacing: 1.2px;
  }
  @media ${props => props.media.desktop1024_1279} {
    font-size: 44px;
    line-height: 115%;
    letter-spacing: 1.2px;
  }
  @media ${props => props.media.desktop1280_1439} {
    font-size: 44px;
    line-height: 115%;
    letter-spacing: 1.2px;
  }
  @media ${props => props.media.desktop1440_1919} {
    font-size: 46px;
    line-height: 115%;
    letter-spacing: 1.4px;
  }
  @media ${props => props.media.desktop1920} {
	
  }
`

export const Vacancy = styled.div`
  display: grid;
  grid-template-columns: minmax(50px, auto);
  grid-template-rows: minmax(20px, auto);

  @media ${props => props.media.phone375_639} {
    grid-row-gap: 20px;
  }
  @media ${props => props.media.phone640_767} {
    grid-row-gap: 25px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-row-gap: 20px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-row-gap: 20px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-row-gap: 35px;
  }
  @media ${props => props.media.desktop1920} {
    grid-row-gap: 40px;
  }
`

export const VacancyWrapper = styled.div``

export const VacancyTitle = styled.h3`
  font-size: 20px;
  
  @media ${props => props.media.phone375_639} {
    margin-bottom: 10px;
  }
  @media ${props => props.media.phone640_767} {
    margin-bottom: 9px;
  }
  @media ${props => props.media.pad768_1023} {
    margin-bottom: 10px;
  }
  @media ${props => props.media.desktop1024_1279} {
    margin-bottom: 10px;
  }
  @media ${props => props.media.desktop1280_1439} {
    margin-bottom: 10px;
  }
  @media ${props => props.media.desktop1440_1919} {
    margin-bottom: 10px;
  }
  @media ${props => props.media.desktop1920} {
    margin-bottom: 12px;
  }
`

export const VacancyOption = styled.div`
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
    display: flex;
  }
  @media ${props => props.media.desktop1920} {
    display: flex;
  }
`

export const VacancyDescription = styled.div`
  font-size: 16px;

  @media ${props => props.media.phone375_639} {
    margin-bottom: 3px;
  }
  @media ${props => props.media.phone640_767} {
    margin-bottom: 6px;
  }
  @media ${props => props.media.pad768_1023} {
    margin-bottom: 6px;
  }
  @media ${props => props.media.desktop1024_1279} {
    margin-bottom: 5px;
  }
  @media ${props => props.media.desktop1280_1439} {
    margin-bottom: 5px;
  }
  @media ${props => props.media.desktop1440_1919} {
	margin-right: 30px;
  }
  @media ${props => props.media.desktop1920} {
    margin-right: 40px;
  }
`

export const VacancyDescriptionTitle = styled.div`
  color: ${props => props.color.$black};
`

export const VacancyDescriptionStrong = styled.span`
  font-weight: 500;
`