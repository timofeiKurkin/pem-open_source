import styled from 'styled-components'

export const PoliticsMain = styled.main`

  @media ${props => props.media.phone375_639} {
    padding: 80px 0 30px 0;
  }
  @media ${props => props.media.phone640_767} {
    padding: 80px 0 30px 0;
  }
  @media ${props => props.media.pad768_1023} {
    padding: 50px 0 30px 0;
  }
  @media ${props => props.media.desktop1024_1279} {
    padding: 50px 0 10px 0;
  }
  @media ${props => props.media.desktop1280_1439} {
    padding: 30px 0 0 0;
  }
  @media ${props => props.media.desktop1440_1919} {
    padding: 30px 0 0 0;
  }
  @media ${props => props.media.desktop1920} {
    padding: 60px 0 30px 0;
  }
`

export const PoliticsPointsWrapper = styled.div``

export const PoliticsPointsList = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, 1350px);
  grid-template-rows: minmax(50px, auto);
  grid-row-gap: 35px;
  padding: 20px 0 0 0;
`

export const PoliticsPointsItem = styled.div``

export const PointItem = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: minmax(10px, auto);
  grid-row-gap: 15px;
`

export const PointItemTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.01rem;
`

export const PointItemDescriptionLevelOne = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: minmax(10px, auto);
  grid-row-gap: 12px;
`

export const PointItemDescriptionLevelTwo = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: minmax(10px, auto);
  grid-row-gap: 12px;
`

export const PointItemDescriptionLevelThree = styled.div`
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: minmax(10px, auto);
  grid-row-gap: 15px;
`

export const PointTitle = styled.h4`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.01rem;
`

export const PointTextWrapper = styled.div`
`

export const PointItemText = styled.p`
  font-size: 17px;
  line-height: 140%;
  color: ${props => props.color.$black};
`

export const PointItemTextPointWrapper = styled.div`
`

export const PointItemTextPoint = styled.p`
  padding-left: 15px;
  font-size: 17px;
  color: ${props => props.color.$black};
  margin-bottom: 10px;

  &:last-child {
    margin-bottom: 15px;
  }
`