import React from 'react'
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
import Icon1 from '../../images/Image4.svg'
import Icon2 from '../../images/Image5.svg'
import Icon3 from '../../images/Image6.svg'
function Services() {
    return (
        <ServicesContainer id="services">
            <ServicesH1> Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>첫째</ServicesH2>
                    <ServicesP>정말 만들기 힘들다</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>둘째</ServicesH2>
                    <ServicesP>장사 밑천이 되겠지</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>셋째</ServicesH2>
                    <ServicesP>화이팅</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
