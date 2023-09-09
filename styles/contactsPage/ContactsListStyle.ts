import styled from 'styled-components'

export const ContactsListWrapper = styled.div`
  position: relative;
`

export const Contact = styled.div`
  display: grid;
  
  @media ${props => props.media.phone375_639} {
  }
  @media ${props => props.media.phone640_767} {
  }
  @media ${props => props.media.pad768_1023} {
  }
  @media ${props => props.media.desktop1024_1279} {
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: minmax(300px, auto);
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(300px, auto);
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: minmax(300px, auto);
  }
`

export const ContactWrapper = styled.div`
  @media ${props => props.media.desktop1280_1439} {
    grid-column: 2/4;
  }
  @media ${props => props.media.desktop1920}, ${props => props.media.desktop1440_1919} {
    grid-column: 2/3;
  }
  
`

export const ContactList = styled.div`
  display: grid;
  
  @media ${props => props.media.phone375_639} {
	padding-top: 30px;
    grid-row-gap: 30px;
  }
  @media ${props => props.media.phone640_767} {
    padding-top: 34px;
    grid-row-gap: 34px;
  }
  @media ${props => props.media.pad768_1023} {
    padding-top: 36px;
    grid-row-gap: 36px;
  }
  @media ${props => props.media.desktop1024_1279} {
    padding-top: 44px;
	padding-right: 50px;
    grid-row-gap: 44px;
  }
  @media ${props => props.media.desktop1280_1439} {
    padding-top: 30px;
    //padding-right: 50px;
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1440_1919} {
    padding-top: 50px;
    //padding-right: 50px;
    grid-row-gap: 50px;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(100px, auto);
    grid-template-rows: repeat(4, minmax(20px, auto));
    grid-row-gap: 25px;
    padding-top: 25px;
  }
`

export const ContactItem = styled.div`
  position: relative;
  
  @media ${props => props.media.phone375_639} {
    padding-bottom: 10px;
  }
  @media ${props => props.media.phone640_767} {
    padding-bottom: 10px;
  }
  @media ${props => props.media.pad768_1023} {
    padding-bottom: 10px;
  }
  @media ${props => props.media.desktop1024_1279} {
	padding-bottom: 16px;
  }
  @media ${props => props.media.desktop1280_1439} {
    padding-bottom: 20px;
  }
  @media ${props => props.media.desktop1440_1919} {
    padding-bottom: 15px;
  }
  @media ${props => props.media.desktop1920} {
    padding-bottom: 40px;
  }
`

export const ContactItemBody = styled.div`
  display: grid;
  

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: ${props => props.color.$black};
    bottom: 0;
	left: 0;
  }
  
  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(40px, auto);
	grid-template-rows: repeat(2, minmax(20px, auto));
	grid-row-gap: 7px;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(40px, auto);
    grid-template-rows: repeat(2, minmax(20px, auto));
    grid-row-gap: 5px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(40px, auto);
    grid-template-rows: repeat(2, minmax(20px, auto));
    grid-row-gap: 5px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(20px, 130px) minmax(20px, auto);
    grid-template-rows: 1fr;
    grid-column-gap: 120px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(20px, 130px) minmax(20px, auto);
    grid-template-rows: 1fr;
    grid-column-gap: 120px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(20px, 160px) minmax(20px, auto);
    grid-template-rows: 1fr;
    grid-column-gap: 120px;
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(20px, 130px) minmax(20px, auto);
    grid-template-rows: 1fr;
    grid-column-gap: 120px;
  }
`

export const ContactItemTitle = styled.h2`
  color: ${props => props.color.$greyForContacts};
  
  font-size: 16px;
  font-weight: 400;
  line-height: 22.08px;
  letter-spacing: .8px;
`

export const ContactItemDescription = styled.p`
  color: ${props => props.color.$black};
  
  font-size: 16px;
  font-weight: 400;
  line-height: 22.08px;
  letter-spacing: .8px;
`