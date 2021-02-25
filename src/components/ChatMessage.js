import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF6Q4ZsmHtHgw/profile-displayphoto-shrink_200_200/0/1603559892570?e=1619654400&v=beta&t=C7itJ7-QzHB7cPQB7wcjN7zccq7dYUktCah3wc83O8A"/>
            </UserAvatar>
            <MessageContent>
                <Name>
                    Irida B.
                    <span>2/24/2021 4:27:04 PM</span>
                </Name>
                <Text>
                    So glad I'm here!!
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
 padding: 8px 20px;
 display: flex;
 align-items: center;
 :hover {
     background: #263238;
 }
`
const UserAvatar = styled.div`
 width: 36px;
 height: 36px;
 border-radius: 2px;
 overflow: hidden;
 margin-right: 8px;

 img {
     width: 100%;
 }
`
const MessageContent = styled.div`
 display: flex;
 flex-direction: column;
`
const Name = styled.span`
 font-weight: 600;
 font-size: 15px;
 line-height: 1.4;
 span {
     font-weight: 500;
     color: #757575;
     margin-left: 8px;
     font-size: 13px;
 }
`
const Text = styled.span`
 
`
