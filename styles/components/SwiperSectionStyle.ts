import styled from 'styled-components'

export const Arrow = styled.div`
  cursor: pointer;
  //padding: 5px 15px;
  //height: 100%;
  
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
	padding: 100px 10px;
  }
  @media ${props => props.media.pad768_1023} {
	padding: 50px 15px;
  }
  @media ${props => props.media.desktop1024_1279} {
	padding: 30px 25px;
  }
  @media ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919} {
	padding: 50px 35px;
  }
  @media ${props => props.media.desktop1920} {
	padding: 30px 20px;
  }
`

export const ArrowBody = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${props => props.media.phone375_639} {
  }
  @media ${props => props.media.phone640_767} {
  }
  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
  }
`

export const SwiperBody = styled.div`
  @media ${props => props.media.phone375_639} {
	padding: 0 10px;
  }
  @media ${props => props.media.phone640_767} {
	padding: 0 10px;
  }
  @media ${props => props.media.pad768_1023} {
    padding: 0 10px
  }
  @media ${props => props.media.desktop1024_1279} {
    padding: 0 10px;
  }
  @media ${props => props.media.desktop1280_1439} {
	padding: 0 15px;
  }
  @media ${props => props.media.desktop1440_1919} {
	padding: 0 20px;
  }
  @media ${props => props.media.desktop1920} {
	padding: 0 25px;
  }
`

export const SwiperTitleWrapper = styled.div`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${props => props.color.$dark_blue};
    bottom: -8px;
    left: 0;
  }
  @media ${props => props.media.phone375_639} {
    margin-bottom: 20px;
  }
  @media ${props => props.media.phone640_767}, ${props => props.media.desktop1024_1279} {
    margin-bottom: 25px;
  }
  @media ${props => props.media.pad768_1023}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919},${props => props.media.desktop1920}  {
    margin-bottom: 30px;
  }
`

export const SwiperTitle = styled.h2`

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439} {
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
  }

  @media ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    font-size: 32px;
    font-weight: 500;
    line-height: 44px;
  }
`

export const SwiperDescription = styled.div``

export const SwiperDescriptionText = styled.p`
  font-size: 16px;
  line-height: 130%;
`