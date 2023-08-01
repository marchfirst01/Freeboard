import { useState } from "react"
import {
    Address,
    Content,
    ErrorInfo,
    ImgWrapper,
    InputArea,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SubmitButton,
    Title,
    UploadButton,
    Wrapper,
    WriteWrapper,
    Writer
} from "../../../styles/emotion"

export default function NewPage() {

    const [writer, setWriter] = useState("")
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const [writerError, setWriterError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [titleError, setTitleError] = useState("")
    const [contentError, setContentError] = useState("")

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
        if(event.target.value !== ""){
            setWriterError("")
        }
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
        if(event.target.value !== ""){
            setPasswordError("")
        }
    }

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
        if(event.target.value !== ""){
            setTitleError("")
        }
    }

    const onChangeContent = (event) => {
        setContent(event.target.value)
        if(event.target.value !== ""){
            setContentError("")
        }
    }

    function onClickSubmit(){
        if(!writer) {
            setWriterError("작성자를 입력해주세요")
        }
        if(!password) {
            setPasswordError("비밀번호를 입력해주세요")
        }
        if(!title) {
            setTitleError("제목을 입력해주세요")
        }
        if(!content) {
            setContentError("내용을 입력해주세요")
        }

        if( writer && password && title && content ){
            //백엔드에 api 전송
            alert("게시물 등록 완료")
        }
    }

    return (
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriteWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 적어주세요." onChange={onChangeWriter} />
                    <ErrorInfo>{writerError}</ErrorInfo>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="password" placeholder="비밀번호를 작성해주세요" onChange={onChangePassword} />
                    <ErrorInfo>{passwordError}</ErrorInfo>
                </InputWrapper>
            </WriteWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <InputArea type="text" placeholder="제목을 작성해주세요." onChange={onChangeTitle} />
                <ErrorInfo>{titleError}</ErrorInfo>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Content placeholder="내용을 작성해주세요." onChange={onChangeContent} />
                <ErrorInfo>{contentError}</ErrorInfo>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <Address type="number" placeholder="07250" />
                <InputArea />
                <InputArea />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <InputArea type="text" placeholder="링크를 복사해주세요."/>
            </InputWrapper>
            <InputWrapper>
                <Label>사진 첨부</Label>
                <ImgWrapper>
                    <UploadButton>+</UploadButton>
                    <UploadButton>+</UploadButton>
                    <UploadButton>+</UploadButton>
                </ImgWrapper>
            </InputWrapper>
            <OptionWrapper>
                <Label>메인설정</Label>
                <RadioButton type="radio" id="youtube" name="radio-button" />
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button" />
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            <SubmitButton onClick={onClickSubmit}>등록하기</SubmitButton>
        </Wrapper>
        )
}