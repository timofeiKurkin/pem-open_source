import styled from 'styled-components'
import {globalColor} from '../variables/globalColor'

export const ButtonStyleWrapper = styled.a `
  display: inline-block;

  padding: 16px 32px;
  border: 2px solid ${globalColor.color.$blue};
  cursor: pointer;
  background: none;
  border-radius: 3px;
  user-select: none;

  font-size: 14px;
  font-weight: 700;
  //line-height: 19.5px;
  letter-spacing: 1px;
  color: ${globalColor.color.$dark_blue};
  text-align: center;

  transition: background-color 0.6s ease;
  &:hover{
	border: 2px solid ${globalColor.color.$dark_blue};
    background: ${globalColor.color.$white_cold2};
    color: ${globalColor.color.$blue};
  }
`