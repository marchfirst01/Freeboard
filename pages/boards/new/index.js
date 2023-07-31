import {
    Address,
    Content,
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
    return (
        <Wrapper>
            <Title>게시물 등록</Title>
            <WriteWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 적어주세요."/>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="password" placeholder="비밀번호를 작성해주세요"/>
                </InputWrapper>
            </WriteWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <InputArea type="text" placeholder="제목을 작성해주세요."/>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Content placeholder="내용을 작성해주세요." />
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
            <SubmitButton>등록하기</SubmitButton>
        </Wrapper>
        )
}