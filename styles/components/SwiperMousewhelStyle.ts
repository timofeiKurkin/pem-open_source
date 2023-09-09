import styled from 'styled-components'

export const Body = styled.div`
  max-width: 550px;
  height: 200px;
`

export const SwiperTitleWrapper = styled.div`
  margin-bottom: 20px;
`

export const SwiperTitle = styled.h2`
  line-height: 31px;
  color: ${props => props.color.$dark_vacancy};
  font-size: 26px;
  font-weight: 500;
`

export const SwiperText = styled.p`
  color: ${props => props.color.$black};
  line-height: 20px;
  font-size: 14px;
`

export const SwiperBody = styled.div`
  padding-right: 50px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`