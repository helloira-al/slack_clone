import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # introduce-yourself
                    </ChannelName>
                    <ChannelDescription>
                        Introductions to get to know each other better. Don't be shy!
                    </ChannelDescription>
                </Channel>
                    <Details>
                        <DetailName>
                            Details
                        </DetailName>
                        <Info />
                    </Details>
            </Header>
            <MessageContainer>
                <ChatMessage />

            </MessageContainer>
            <ChatInput />
        </Container>
    )
}

export default Chat

const Container = styled.div`
 display: grid;
 grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
 border-bottom: 1px solid rgba(133,131,133,1);
 padding-left: 20px;
 padding-right: 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`
const ChannelName = styled.div`
 font-weight: bold;
 color: #36C0CA;

`
const Details = styled.div`
 display: flex;
 align-items: center;
 color: #606060;
 font-weight: 500;
`
const Channel = styled.div`

`
const DetailName = styled.div`
`

const ChannelDescription = styled.div`
 color: #606060;
 font-size: 14px;
 font-weight: 500;
 margin-top: 8px;
`
const MessageContainer = styled.div`
 color: #E1E1E1;
`

const Info = styled(InfoIcon)`
 margin-left: 10px;
`