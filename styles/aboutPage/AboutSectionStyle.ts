import styled from 'styled-components'

export const AboutMain = styled.main`
  display: grid;
  grid-template-rows: minmax(200px, auto);
  grid-template-columns: minmax(300px, auto);

  @media ${props => props.media.phone375_639} {
    grid-row-gap: 80px;
    padding: 80px 0 30px 0;
  }
  @media ${props => props.media.phone640_767} {
    grid-row-gap: 80px;
    padding: 80px 0 30px 0;
  }
  @media ${props => props.media.pad768_1023} {
    grid-row-gap: 60px;
    padding: 50px 0 30px 0;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-row-gap: 50px;
    padding: 50px 0 10px 0;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-row-gap: 50px;
    padding: 30px 0 0 0;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-row-gap: 80px;
    padding: 30px 0 0 0;
  }
  @media ${props => props.media.desktop1920} {
    grid-row-gap: 110px;
    padding: 60px 0 30px 0;
  }
`

export const AboutCompanyInfo = styled.div``

export const Subdivisions = styled.div``

export const AboutMainWrapper = styled.div`
  display: grid;
  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(360px, auto);
    grid-template-rows: repeat(2, minmax(300px, auto));
    justify-content: center;
    grid-template-areas:'image' 'content' ;
	grid-row-gap: 20px;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(360px, auto);
    grid-template-rows: repeat(2, minmax(300px, auto));
    justify-content: center;
    grid-template-areas:'image' 'content' ;
    grid-row-gap: 20px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(360px, auto);
    grid-template-rows: repeat(2, minmax(300px, auto));
    justify-content: center;
    grid-template-areas:'image' 'content' ;
    grid-row-gap: 20px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(400px, auto);
    grid-template-areas: 'content';
    grid-template-rows: minmax(300px, auto);
    align-items: center;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(300px, 315px) minmax(500px, auto);
    grid-template-areas: 'image content';
    grid-template-rows: minmax(300px, auto);
    grid-column-gap: 70px;
    align-items: center;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(300px, 375px) minmax(500px, 1020px);
    grid-template-areas: 'image content';
    grid-template-rows: minmax(300px, auto);
	grid-column-gap: 40px;
    justify-content: space-between;
    align-items: center;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(360px, 375px) minmax(700px, 1080px);
    grid-template-areas: 'image content';
    grid-template-rows: minmax(300px, auto);
    justify-content: space-between;
    align-items: center;
  }
`

export const AboutImg = styled.div`
  position: relative;
  height: 340px;
  user-select: none;
  grid-area: image;
  @media ${props => props.media.phone640_767} {
	margin: 0 auto;
    width: 375px;
  }
  @media ${props => props.media.desktop1024_1279} {
	display: none;
  }
`

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, minmax(20px, auto));
  grid-row-gap: 35px;
  grid-area: content;
`

export const AboutContentTextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(16px, auto);
  grid-row-gap: 16px;
`

export const AboutContentText = styled.p`
  font-size: 17px;
  line-height: 140%;
  font-weight: 400;
  color: ${props => props.color.$black};
`

export const AboutSubdivisionsWrapper = styled.div``

export const AboutSubdivisions = styled.div`
  display: grid;

  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(300px, 639px);
    grid-template-rows: minmax(200px, auto) minmax(200px, auto);
    grid-row-gap: 40px;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: minmax(200px, auto) minmax(150px, auto);
    grid-row-gap: 40px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: minmax(200px, auto) minmax(150px, auto);
    grid-row-gap: 40px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: minmax(200px, auto) minmax(150px, auto);
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: minmax(180px, auto) minmax(130px, auto);
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: minmax(180px, auto) minmax(130px, auto);
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(300px, 1030px) minmax(200px, auto);
    grid-template-rows: minmax(15px, 55px) minmax(200px, auto);
    grid-column-gap: 80px;
    grid-row-gap: 20px;
  }
`

export const AboutSubdivisionsTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.025rem;
  color: ${props => props.color.$dark};
`

export const AboutSubdivisionsText = styled.div`
  display: grid;
  //grid-template-rows: minmax(15px, 30px) minmax(200px, auto);
  grid-row-gap: 16px;
`

export const AboutSubdivisionsListOption = styled.div`
  display: grid;
  grid-row-gap: 12px;
`

export const AboutSubdivisionsOption = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: ${props => props.color.$black};
`