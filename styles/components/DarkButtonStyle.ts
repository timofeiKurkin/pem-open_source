import styled from 'styled-components'

export const Button = styled.a `
  display: inline-block;

  padding: 19px 46px;
  cursor: pointer;
  background-color: ${props => props.color.$blue};
  border-radius: 7px;

  font-size: 16px;
  font-weight: 500;
  line-height: 19.5px;
  //letter-spacing: 1px;
  color: ${props => props.color.$white};
  text-align: center;
`