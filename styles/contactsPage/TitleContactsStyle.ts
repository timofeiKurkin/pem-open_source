import styled from 'styled-components'
import {globalColor} from "../variables/globalColor";
import {globalMedia} from "../variables/globalMedia";

export const TitleContactsStyle = styled.div `
  position: relative;
  
  // &:after{
  //   content: '';
  //   position: absolute;
  //   width: 100%;
  //   height: 1px;
  //   background-color: ${globalColor.color.$dark_blue};
  //   bottom: 0;
  //   left: 0;
  // }
`

export const TitleContactsText = styled.h2 `
  font-size: 38px;
  letter-spacing: 0.02em;
  color: ${globalColor.color.$dark_vacancy};
  //padding-bottom: 10px;
  font-weight: 600;
  
  @media ${globalMedia.media.phone375_639} {
    font-size: 32px;
	letter-spacing: 1px;
    padding-bottom: 7px;
  }
  @media ${globalMedia.media.phone640_767} {
    font-size: 36px;
    letter-spacing: 1.2px;
    padding-bottom: 8px;
  }
  @media ${globalMedia.media.pad768_1023} {
    font-size: 38px;
    letter-spacing: 1.2px;
    padding-bottom: 7px;
  }
  @media ${globalMedia.media.desktop1024_1279} {
    font-size: 68px;
    letter-spacing: 1.7px;
    padding-bottom: 2px;
  }
  @media ${globalMedia.media.desktop1280_1439} {
    font-size: 72px;
    letter-spacing: 1.7px;
    padding-bottom: 2px;
  }
  @media ${globalMedia.media.desktop1440_1919} {
  }
  @media ${globalMedia.media.desktop1920} {
  }
`