import styled from 'styled-components'
import {globalColor} from "../variables/globalColor";

export const TitleWrapper = styled.div `
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${globalColor.color.$dark_blue};
    bottom: 0;
	right: 0;
    left: 0;
  }
`

export const TitleText = styled.h2 `
  font-size: 26px;
  line-height: 110%;
  color: ${globalColor.color.$dark};
  font-weight: 500;
  //letter-spacing: 1px;
  padding-bottom: 8px;
  //text-transform: uppercase;
`