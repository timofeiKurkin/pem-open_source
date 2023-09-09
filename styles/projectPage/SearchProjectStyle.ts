import styled from 'styled-components'

export const ProjectSearchWrapper = styled.div `
  //padding: 2px;
  padding-right: 20px;
  border: 2px solid ${props => props.color.$dark_blue};
  border-radius: 6px;
  //max-width: 980px;
  
  display: grid;
  grid-template-columns: 730px 50px;
  grid-template-rows: auto;
  justify-content: space-between;
  //grid-column-gap: 30px;
  align-items: center;
  
`

export const CloseButtonClick = styled.div `
  margin-right: 20px;
`