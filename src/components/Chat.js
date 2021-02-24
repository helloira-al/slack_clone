import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';

function Chat() {
    return (
        <Container>
            <Header>
                <FirstRow>
                    <ChannelName>
                        # introduce-yourself
                    </ChannelName>
                    <Details>
                        <DetailName>
                            Details
                        </DetailName>
                        <Icon>
                            <InfoIcon />
                        </Icon>
                    </Details>
                </FirstRow>
                <Description>
                    Introductions to get to know each other better. Don't be shy!
                </Description>
            </Header>
        </Container>
    )
}

export default Chat

const Container = styled.div`
 
`
const Header = styled.div`
 box-shadow: inset 1px  0 1px 1px rgba(133,131,133,1);
`
const ChannelName = styled.div`
 font-weight: bold;
 color: #36C0CA;
 font-size: 15px;
 padding-top: 10px;
`
const Details = styled.div`
 color: #E5E5E5;
 padding-right: 20px;
 padding-top: 10px;
 margin-left: 10px;
 display: flex;
 font-size: 15px;
 
`
const FirstRow = styled.div`
 display: flex;
 justify-content: space-between;
 padding-left: 10px;
`
const DetailName = styled.div`
`
const Icon = styled.div`
 margin-left: 5px;
 cursor: pointer;
`
const Description = styled.div`
 color: #E5E5E5;
 font-size: 14px;
 padding-left: 10px;
 padding-bottom: 10px;
`
