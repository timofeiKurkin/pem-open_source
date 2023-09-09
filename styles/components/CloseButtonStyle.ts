import styled from 'styled-components'
import {globalColor} from '../variables/globalColor'

export const CloseButtonWrapper = styled.div`
  cursor: pointer;
  padding: 16px 14px;

`

export const CloseButtonStyle = styled.div`
  position: relative;
  width: 23px;
  height: 23px;

  &:after, &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 3px;
    background-color: ${globalColor.color.$blue};
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