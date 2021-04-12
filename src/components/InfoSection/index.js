import React from 'react'
import {Button} from '../Button'
import {InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img} from './InfoElements'


function InfoSection({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,img,alt}) {
    return (
        <div>

            <InfoContainer lightBg = {lightBg} id={id} >
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText = {darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button primary='true' to='home'>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>

            
        </div>
    )
}

export default InfoSection
