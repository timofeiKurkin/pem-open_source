import styled from 'styled-components'

export const AboutMain = styled.div`
  //padding: 60px 0;
`

export const AboutContent = styled.div`
  position: relative;
  // @media ${props => props.media.phone375_639} {
  //   padding: 30px 17px;
  // }
  // @media ${props => props.media.phone640_767} {
	// padding: 32px 20px;
  // }
  // @media ${props => props.media.pad768_1023} {
	// padding: 40px 20px;
  // }
  // @media ${props => props.media.desktop1024_1279} {
	// padding: 35px 20px;
  // }
  // @media ${props => props.media.desktop1280_1439} {
	// padding: 35px 25px;
  // }
  // @media ${props => props.media.desktop1440_1919} {
	// padding: 45px 50px;
  // }
  // @media ${props => props.media.desktop1920} {
	// padding: 70px 0;
  // }
`

export const AboutWrapper = styled.div`
  display: grid;
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    grid-template-areas: 'image' 
						 'content';
  }
  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: minmax(200px, auto) minmax(200px, auto);
    grid-row-gap: 15px;
    margin-top: 30px;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(450px, auto);
    grid-template-rows: minmax(200px, auto) minmax(200px, auto);
    grid-row-gap: 40px;
    margin-top: 30px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(650px, auto);
    grid-template-rows: minmax(250px, auto) minmax(200px, auto);
    grid-row-gap: 30px;
    margin-top: 35px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(350px, auto) minmax(450px, auto);
    grid-template-rows: 1fr;
    grid-template-areas: 'image content';
    grid-column-gap: 30px;
    margin-top: 35px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(450px, 600px) minmax(550px, 540px);
    grid-template-rows: 1fr;
    grid-template-areas: 'image content';
	justify-content: center;
    grid-column-gap: 30px;
    margin-top: 35px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(500px, 600px) minmax(550px, 720px);
    grid-template-rows: 1fr;
    grid-template-areas: 'image content';
	justify-content: center;
    grid-column-gap: 60px;
    margin-top: 35px;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(500px, 750px) minmax(700px, 830px);
    grid-template-rows: minmax(350px, auto);
    grid-template-areas: 'image content';
    grid-column-gap: 20px;
    margin-top: 35px;
  }
`

export const AboutImage = styled.div`
  grid-area: image;
  position: relative;
  max-height: 470px;
  @media ${props => props.media.phone375_639} {
    //margin: 0 10px;
  }
  @media ${props => props.media.phone640_767} {
	padding: 0 10px;
  }
  @media ${props => props.media.pad768_1023} {
	padding: 0 15px;
  }
`

export const AboutContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: content;
  @media ${props => props.media.phone375_639} {
    //text-align: justify;
    //text-align: center;
  }
`

export const AboutTextWrapper = styled.div`
  margin-bottom: 40px;
  @media ${props => props.media.desktop1280_1439} {
	//max-width: 540px;
  }
  @media ${props => props.media.desktop1440_1919} {
	//max-width: 630px;
  }
  @media ${props => props.media.desktop1920} {
	//max-with: 840px;
  }
`

export const AboutText = styled.p`
  @media ${props => props.media.phone640_767} {
    margin-bottom: 26px;
  }
  
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    letter-spacing: -.004rem;
    font-size: 18px;
    line-height: 125%;
  }
  @media ${props => props.media.phone640_767} {
	margin-bottom: 24px;
  }
  @media ${props => props.media.pad768_1023} {
    margin-bottom: 20px;
  }
  @media ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919} {
    letter-spacing: -.002rem;
    font-size: 17px;
	line-height: 135%;
	margin-bottom: 20px;
  }
  @media ${props => props.media.desktop1920} {
    font-size: 17px;
    line-height: 139%;
    margin-bottom: 20px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }	
`

export const AboutContentButton = styled.div`
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
	margin: 0 auto;
  }
`