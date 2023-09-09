import styled from 'styled-components'

export const FormStyle = styled.div`
  width: 100%;
`

export const FormBody = styled.form`
  display: grid;
  grid-template-columns: minmax(300px, auto);
  grid-template-rows: minmax(20px, auto);
  grid-row-gap: 17px;
`

export const FormInputWrapper = styled.div`

  @media ${props => props.media.phone375_639} {
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

export const FormInputCheckbox = styled.div`
    //margin-bottom: ${props => props.primary ? '20px' : '0'};
  max-height: ${props => props.primary ? '130px' : '0px'};
  overflow: hidden;
  transition: max-height .5s ease;
`

export const FormInput = styled.input`
  border: none;
  border-radius: 3px;

  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
  }
`

export const FormTextarea = styled.textarea`
  border: none;
  border-radius: 3px;
  height: 160px;

  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
  }

  overflow: hidden;
  resize: none;
`

export const FormSelect = styled.div`
  border: none;
  //display: flex;
  margin-bottom: 40px;
  font-size: 16px;
  font-weight: 600;
  //width: 100%;
  //padding: 21px 0 19px 15px;
  //border-radius: 3px;
  color: ${props => props.color.$grey};


  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
  }
`

export const FormOption = styled.option`
  border: none;
  display: flex;
  margin-bottom: 18px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  padding: 21px 0 19px 15px;
  border-radius: 3px;
  color: ${props => props.color.$grey};


  &:active, &:hover, &:focus {
    outline: 0;
    outline-offset: 0;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const FormErrorWrapper = styled.div`
  height: ${props => props.primary ? "100%" : "0"};
`

export const FormTextError = styled.div`
  overflow: hidden;
  color: ${props => props.color.$dark_red};
  font-weight: 500;
  max-height: ${props => props.primary ? "40px" : '0'};
  margin: ${props => props.primary && '0 0 10px 5px'};
  transition: max-height .5s ease;
`

export const FormBtn = styled.button`
  //text-transform: uppercase;
    //border: 2px solid ${props => props.color.$black};

  background-color: ${props => props.color.$white};
  border: none;
  padding: 21px 0;
  font-size: 18px;
  color: ${props => props.color.$black};
  font-weight: 600;
  width: 100%;
  margin-top: 20px;
  border-radius: 3px;
  cursor: pointer;

  &:disabled {
    cursor: auto;
    background-color: ${props => props.color.$white_cold2};
  }
`

export const Success = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.color.$white_cold};
  margin: 20px 0 0 5px;
  opacity: ${props => props.primary ? 1 : 0};
  transition: opacity .5s ease;
`

export const FormLabel = styled.label`
  font-size: ${props => props.primary ? '14px' : '17px'};
  font-weight: 400;
  color: ${props => props.color.$white_cold2};
  user-select: none;
  padding: ${props => props.primary ? '10px 0 10px 10px' : '10px 200px 10px 15px'};
  width: 100%;
`

export const FormCheckboxWrapper = styled.div`
  margin: 10px 0 10px 10px;

  display: inline-block;

  > input {
    display: none;
  }

  > input + label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 11px;
      width: 17px;
      height: 17px;
      border: none;
      background: #f8f8f8;
      border-radius: 2px;
      //box-shadow: inset 0 1px 3px rgba(0, 0, 0, .3)
    }

    &:after {
      content: '';
      position: absolute;
      top: 14px;
      left: 3px;
      width: 11px;
      border-radius: 1px;
      height: 11px;
      background-color: ${props => props.color.$grey};
      transition: all .1s;
    }
  }

  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      //transform: scale(0);
    }
  }

  > input:disabled:not(:checked) + label {
    &:before {
      //box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }

  > input:checked + label {
    &:after {
      opacity: 1;
      //transform: scale(1);
    }
  }

  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }

  > input:disabled + label {
    color: #aaa;
  }

  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      //border: 1px dotted #0b0b0c;
    }
  }
`

export const FormCheckbox = styled.input`
`

export const FormPolitics = styled.div``

export const FormPoliticsWrapper = styled.p``

export const FormPoliticsLink = styled.a`
  cursor: pointer;
  border-bottom: 1px solid ${props => props.color.$white_cold2};
`