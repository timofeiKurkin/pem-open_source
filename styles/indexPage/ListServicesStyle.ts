import styled from 'styled-components';

export const ListMain = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, auto);
  grid-template-rows: minmax(400px, auto);
  // @media ${props => props.media.phone375_639} {
  // }
  // @media ${props => props.media.phone640_767} {
  // }
  // @media ${props => props.media.pad768_1023} {
  // }
  // @media ${props => props.media.desktop1024_1279} {
  // }
  // @media ${props => props.media.desktop1280_1439} {
  // }
  // @media ${props => props.media.desktop1440_1919} {
  // }
  // @media ${props => props.media.desktop1920} {
  // }
`

export const ListContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: repeat(2, minmax(20px, auto));
  
  @media ${props => props.media.phone375_639} {
    grid-row-gap: 38px;
  }
  @media ${props => props.media.phone640_767} {
    grid-row-gap: 36px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(300px, 1023px);
    grid-row-gap: 30px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(300px, 1279px);
    grid-row-gap: 50px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(300px, 1439px);
    grid-row-gap: 55px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(300px, 1919px);
    grid-row-gap: 50px;
  }
  @media ${props => props.media.desktop1920} {
    grid-row-gap: 55px;
  }
`

export const ListWrapper = styled.div`
`

export const ListBtn = styled.div`
  display: flex;
  justify-content: center;
`

export const ListItems = styled.div`
  display: grid;
  
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}, ${props => props.media.desktop1440_1919}, ${props => props.media.desktop1920} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: repeat(3, minmax(200px, auto));
  }
  
  @media ${props => props.media.phone375_639} {
    grid-row-gap: 55px;
  }
  @media ${props => props.media.phone640_767} {
    grid-row-gap: 65px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-row-gap: 65px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-row-gap: 85px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-row-gap: 95px;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-row-gap: 105px;
  }
  @media ${props => props.media.desktop1920} {
    grid-row-gap: 130px;
  }

`

export const ListItem = styled.div`
  display: grid;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767} {
    grid-template-columns: minmax(115px, auto);
    grid-template-rows: minmax(100px, auto);
  }
  
  @media ${props => props.media.phone375_639} {
    grid-template-areas: 'content';
  }
  @media ${props => props.media.phone640_767} {
    grid-template-areas: 'content';
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(115px, 800px);
    grid-template-rows: minmax(100px, auto);
    grid-template-areas: 'content';
	justify-content: center;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(115px, 980px);
    grid-template-rows: minmax(100px, auto);
    grid-template-areas: 'content';
    justify-content: center;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(115px, 1190px);
    grid-template-rows: minmax(100px, auto);
    grid-template-areas: 'content';
    justify-content: center;
  }
  @media ${props => props.media.desktop1440_1919} {
    grid-template-columns: minmax(50px, 110px) minmax(400px, auto);
    grid-column-gap: 45px;
    grid-template-areas: 'number content';
    align-items: center;
    &:nth-child(2) {
      justify-content: flex-end;
    }
  }
  @media ${props => props.media.desktop1920} {
    grid-template-columns: minmax(50px, 120px) minmax(400px, auto);
    grid-column-gap: 75px;
    grid-template-areas: 'number content';
    align-items: center;
    //&:nth-child(2) {
    //  justify-content: flex-end;
    //}
	
	justify-content: ${props => props.primary ? 'flex-end' : 'flex-start'};
  }
`

export const ItemNumWrapper = styled.div`
  grid-area: number;
  position: relative;
  width: 110px;
  height: 95px;
  user-select: none;

  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023}, ${props => props.media.desktop1024_1279}, ${props => props.media.desktop1280_1439}  {
	display: none;
  }
  @media ${props => props.media.phone640_767} {
  }
  @media ${props => props.media.pad768_1023} {
  }
  @media ${props => props.media.desktop1024_1279} {
  }
  @media ${props => props.media.desktop1280_1439} {
  }
  @media ${props => props.media.desktop1440_1919} {
  }
  @media ${props => props.media.desktop1920} {
  }
`

export const ItemContent = styled.div`
  grid-area: content;
  display: grid;
  
  @media ${props => props.media.phone375_639} {
    grid-template-columns: minmax(300px, auto);
    grid-template-rows: minmax(250px, auto);
    grid-template-areas: 'image' 
						 'text';
    grid-row-gap: 12px;
  }
  @media ${props => props.media.phone640_767} {
    grid-template-columns: minmax(500px, auto);
    grid-template-rows: minmax(280px, auto);
    grid-template-areas: 'image' 
						 'text';
    grid-row-gap: 18px;
  }
  @media ${props => props.media.pad768_1023} {
    grid-template-columns: minmax(234px, auto) minmax(350px, auto);
    grid-template-rows: minmax(150px, 400px);
    grid-template-areas: 'image text';
    grid-column-gap: 60px;
  }
  @media ${props => props.media.desktop1024_1279} {
    grid-template-columns: minmax(349px, auto) minmax(350px, auto);
    grid-template-rows: minmax(260px, 289px);
    grid-template-areas: 'image text';
    grid-column-gap: 70px;
  }
  @media ${props => props.media.desktop1280_1439} {
    grid-template-columns: minmax(435px, auto) minmax(350px, auto);
    grid-template-rows: minmax(290px, 310px);
    grid-template-areas: 'image text';
    grid-column-gap: 90px;
  }
  @media ${props => props.media.desktop1440_1919} {
    display: grid;
    grid-template-columns: minmax(460px, 477px) minmax(527px, 530px);
    grid-template-rows: minmax(310px, 336px);
    grid-template-areas: 'image text';
    grid-column-gap: 70px;
  }
  @media ${props => props.media.desktop1920} {
    display: grid;
    grid-template-columns: minmax(490px, 513px) minmax(527px, 530px);
    grid-template-rows: minmax(310px, 336px);
    grid-template-areas: 'image text';
    grid-column-gap: 70px;
  }
`

export const ItemImg = styled.div`
  grid-area: image;
  user-select: none;
  position: relative;
  //display: none;
`

export const ItemWrapper = styled.div`
  grid-area: text;
  align-self: center;

  @media ${props => props.media.phone375_639},${props => props.media.phone640_767} {
    display: flex;
    flex-direction: column;
    align-items: center;
	text-align: center;
  }
  @media ${props => props.media.phone640_767} {
  }
  @media ${props => props.media.pad768_1023} {
  }
  @media ${props => props.media.desktop1024_1279} {
  }
  @media ${props => props.media.desktop1280_1439} {
  }
  @media ${props => props.media.desktop1440_1919} {
  }
  @media ${props => props.media.desktop1920} {
  }
`

export const ItemTitle = styled.h2`
  letter-spacing: 0.5px;
  line-height: 125%;
  font-size: 28px;
  font-weight: 500;
  color: ${props => props.color.$black};
`

export const ItemText = styled.p`
  color: ${props => props.color.$black};
  line-height: 145%;
  font-size: 16px;
  letter-spacing: 0.08px;
  @media ${props => props.media.phone375_639}, ${props => props.media.phone640_767}, ${props => props.media.pad768_1023} {
    font-size: 18px;
  }
  @media ${props => props.media.phone375_639} {
    margin: 10px 0 28px 0;
  }
  @media ${props => props.media.phone640_767} {
    margin: 12px 0 28px 0;
  }
  @media ${props => props.media.pad768_1023} {
    margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1024_1279} {
    margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1280_1439} {
    margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1440_1919} {
    font-size: 18px;
    margin: 12px 0 28px 0;
  }
  @media ${props => props.media.desktop1920} {
    font-size: 18px;
    margin: 14px 0 34px 0;
  }
`

export const ListButton = styled.a`
  display: inline-block;
  width: 100%;
  padding: 22px 0;
  border: 1px solid ${props => props.color.$dark_blue};
  cursor: pointer;
  background: none;

  font-size: 14px;
  font-weight: 700;
  //line-height: 19.5px;
  letter-spacing: 1px;
  color: ${props => props.color.$dark_blue};
  text-align: center;

  transition: background-color 0.6s ease;

  &:hover {
    background: ${props => props.color.$dark_blue};
    color: white;
  }
`