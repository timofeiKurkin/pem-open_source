import styled from 'styled-components'

export const ArrowMain = styled.div `
  display: flex;
  cursor: pointer;
  align-items: flex-end;

  max-height: 50px;
`

export const ArrowText = styled.a `
  position: relative;
  margin-right: 8px;

  //letter-spacing: 1px;
  line-height: 19.5px;
  color: ${props => props.color.$black};
  font-weight: 600;
  font-size: 16px;

  text-transform: uppercase;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    height: 2px;
    width: 100%;
    background-color: ${props => props.color.$dark};
  }
`

export const ArrowSize = styled.div `
  width: 21px;
  height: 19px;
  fill: ${props => props.color.$dark_blue};
`