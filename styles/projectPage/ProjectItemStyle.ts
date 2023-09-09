import styled from 'styled-components'
import {globalColor} from "../variables/globalColor";

export const ProjectItemWrapper = styled.div`
  margin-top: 70px;
`

export const ProjectItemMain = styled.div``

export const ProjectMainPhoto = styled.div`
  position: relative;
  user-select: none;
  width: 100%;
  height: 680px;
`

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(1450px, 1560px);
  justify-content: center;
`

export const ProjectTitle = styled.div`
  background-color: ${globalColor.color.$white_blue};
  border-top: 1px solid ${globalColor.color.$dark_vacancy};
  border-bottom: 1px solid ${globalColor.color.$dark_vacancy};
`

export const ProjectItemTitleWrapper = styled.div`
  display: grid;
  grid-template-rows: 160px;
`

export const ProjectItemTitleBox = styled.div`
  display: grid;
  grid-template-columns: 420px 890px;
  align-items: center;
  justify-content: space-between;
`

export const ProjectItemTitle = styled.div``

export const ProjectItemTitleListOptionWrapper = styled.div``

export const ProjectItemTitleListOption = styled.ul`
  display: grid;
  grid-row-gap: 7px;
`

export const ProjectItemTitleOptionWrapper = styled.li``

export const ProjectItemTitleOption = styled.div`
  font-size: 18px;
`

export const ProjectItemTitleOptionItemText = styled.p``

export const ProjectItemTitleOptionItemTextStrong = styled.span`
  font-weight: 500;
`

export const ProjectBody = styled.div`
  margin-top: 70px;
  margin-bottom: 130px;
`

export const ProjectDescriptionBody = styled.div`
  margin-bottom: 100px;
`

export const ProjectDescriptionTitle = styled.div``

export const ProjectDescriptionText = styled.p`
  margin-top: 25px;
  margin-bottom: 95px;
  max-width: 1023px;
  font-size: 18px;
  line-height: 142%;
`

export const ProjectDescriptionOptionWrapper = styled.div``

export const ProjectDescriptionOptionList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  grid-column-gap: 144px;
  justify-content: center;
`

export const ProjectDescriptionOptionItem = styled.li`
  text-align: center;
`

export const ProjectDescriptionOptionItemTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  line-height: 142%;
`

export const ProjectDescriptionOptionItemLine = styled.div`
  margin: 18px 0;
  width: 100%;
  height: 2px;
  background-color: ${globalColor.color.$black};
`

export const ProjectDescriptionOptionItemDescription = styled.div``

export const ProjectOptionBody = styled.div``

export const ProjectOptionBodyList = styled.ul``

export const ProjectOptionBodyItem = styled.li``

export const ProjectOptionTitleWrapper = styled.div`
    display: grid;
  cursor: pointer;
  grid-template-columns: 1fr 32px;
  grid-template-rows: 1fr 22px;
  grid-template-areas: "option-title plus"
                       "option-description plus";
  align-items: center;
`

export const ProjectOptionBodyItemTitle = styled.div`
  margin-bottom: 10px;
  grid-area: option-title;
`

export const ProjectOptionBodyItemDescription = styled.p`
  font-size: 18px;
  line-height: 22px;
  grid-area: option-description;
`

export const ProjectOptionBodyItemPlus = styled.div`
  position: relative;
  grid-area: plus;
  transform: rotate(45deg);

  &:before {
    content: '';
    position: absolute;
    width: 41px;
    height: 3px;
    background-color: ${globalColor.color.$black};
    top: 0;
    right: 0;
  }
  &:after {
    content: '';
    position: absolute;
    width: 41px;
    height: 3px;
    background-color: ${globalColor.color.$black};
    transform: rotate(90deg);
    top: 0;
    right: 0;
  }
`

export const ProjectOptionBodyItemPhotos = styled.ul`
  height: 0;
  //height: ${props => props.primary ? "820px" : 0};
  
`

export const ProjectOptionBodyItemPhotoFirst = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  grid-area: first;
`

export const ProjectOptionBodyItemPhotoSecond = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  grid-area: second;
`
export const ProjectOptionBodyItemPhotoThird = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  grid-area: third;
`