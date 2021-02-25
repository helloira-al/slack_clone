import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FormatBoldOutlinedIcon from '@material-ui/icons/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@material-ui/icons/FormatItalicOutlined';
import StrikethroughSOutlinedIcon from '@material-ui/icons/StrikethroughSOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import FormatListNumberedOutlinedIcon from '@material-ui/icons/FormatListNumberedOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import FormatAlignLeftOutlinedIcon from '@material-ui/icons/FormatAlignLeftOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import InsertLinkOutlinedIcon from '@material-ui/icons/InsertLinkOutlined';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
              <form>
                  <input type="text" placeholder="Say something..." />
                  <SendButton>
                      <SendIcon />
                  </SendButton>

              </form>
              <IconsContainer>
                  <RightGroup>
                      <FormatBoldOutlinedIcon />
                      <FormatItalicOutlinedIcon />
                      <StrikethroughSOutlinedIcon />
                      <CodeOutlinedIcon />
                      <LinkOutlinedIcon />
                      <FormatListNumberedOutlinedIcon />
                      <ListOutlinedIcon />
                      <FormatAlignLeftOutlinedIcon />
                    </RightGroup>
                    <LeftGroup>
                        <SentimentSatisfiedAltOutlinedIcon />
                        <InsertLinkOutlinedIcon />
                    </LeftGroup>
              </IconsContainer>
            </InputContainer>

        </Container>
    )
}

export default ChatInput

const Container = styled.div`
 padding-left: 20px;
 padding-right: 20px;
 padding-bottom: 24px;
 
`
const InputContainer = styled.div`
border: 1px solid rgba(133,131,133,1);
border-radius: 4px;
background: #757575;

form {
    display: flex;
    height: 50px;
    align-items: center;
    padding-left: 10px;
    input {
        flex: 1;
        font-size: 14px;
        border: none;
        background: #757575;
        color: white;
        ::placeholder {
            color: white;
            font-size: 15px;
        }
    }
    input:focus {
        outline: none;
    }
}
`

const SendButton = styled.div`
 color: #36C0CA;
 border-radius: 2px;
 width: 40px;
 height: 40px;
 display: flex;
 justify-content: center;
 align-items: center;
 margin-right: 5px;
 cursor: pointer;

 .MuiSvgIcon-root {
     width: 35px;
 }

 :hover {
     color: #36C0CA;
     width: 50px;
 }
`

const IconsContainer = styled.div`
 color: #cfd8dc;
 display: flex;
 justify-content: space-between;
 height: auto;
 padding-left: 10px;
 padding-right: 10px;
`
const RightGroup = styled.div`
 
`
const LeftGroup = styled.div`
 
`