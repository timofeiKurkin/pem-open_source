import styled from 'styled-components'

export const SearchStyle = styled.input`
  // border: 2px solid ${props => props.color.$dark_blue};
  border: none;
  //border-radius: 3px;

  font-size: 16px;
  font-weight: 600;
  width: 100%;
  padding: 16px 0 16px 17px;
  color: ${props => props.color.$dark_blue};

  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
  }
`