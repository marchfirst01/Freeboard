import styled from '@emotion/styled'

export const Wrapper = styled.div`
    width: 1200px;
    /* height: 1847px; */
    border: 1px solid black;
    margin: 100px;
    padding-top: 80px;
    padding-bottom: 100px;
    padding-left: 100px;
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    box-shadow: 0px 0px 10px gray;
`

export const WriteWrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const OptionWrapper = styled.div`
    width: 996px;
`;

export const Title = styled.div`
    weight: 700px;
    font-size: 36px;
    text-align: center;
`

export const Label = styled.div`
    font-size: 16px;
`

export const Writer = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
    width: 486px;
    height: 52px;
    padding-left: 16px;
    border: 1px solid #bdbdbd;
`;

export const InputArea = styled.input`
    width: 996px;
    height: 52px;
    border: 1px solid #bdbdbd;

`

export const Content = styled.textarea`
    width: 996px;
    height: 480px;
    border: 1px solid #bdbdbd;

`

export const Address = styled.input`
    width: 77px;
    height: 52px;
    border: 1px solid #bdbdbd;

`

export const UploadButton = styled.button`
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 24px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const RadioButton = styled.input`
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  font-weight: 500;
  cursor: pointer;
`;

export const SubmitButton = styled.button`
    width: 179px;
    height: 52px;

    border: none;
    background-color: #FFD600;
`

export const ErrorInfo = styled.div`
    font-size: 12px;
    color: red;
`