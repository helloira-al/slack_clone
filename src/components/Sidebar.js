import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {sidebarItemsData} from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import {sidebarChannelsData} from '../data/SidebarChannelsData'

function Sidebar() {
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    CleverProgrammer
                </Name>
                <NewMessage>
                    <AddCircleOutlineIcon />

                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ) )
                }
            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Channels
                    </div>
                    <AddIcon />
                </NewChannelContainer>
                <ChannelsList>
                    {
                        sidebarChannelsData.map(item => (
                            <Channel>
                                # {item.text}
                            </Channel>
                        ))
                    }

                </ChannelsList>
            </ChannelsContainer>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
 background: #000000;
`

const WorkspaceContainer = styled.div`
 color: white;
 height: 64px;
 display: flex;
 align-items: center;
 padding-left: 19px;
 justify-content: space-between;
 border-bottom: 1px solid #36C0CA;
 box-shadow: inset 0 0 0 1px #36C0CA;

`

const Name = styled.div`
 color: #36C0CA;
 font-weight: bold;
`

const NewMessage = styled.div`
 width: 36px;
 height: 36px;
 background: #36C0CA;
 color: #000000;
 fill: ##36C0CA;
 display: flex;
 justify-content: center;
 align-items: center;
 border-radius: 50%;
 margin-right: 20px;
 cursor: pointer;
`

const MainChannels = styled.div`
 padding-top: 20px;
`

const MainChannelItem = styled.div`
 color: #E1E1E1;
 display: grid;
 grid-template-columns: 15% auto;
 height: 28px;
 align-items: center;
 padding-left: 19px;
 cursor: pointer;
 :hover {
    background: #36C0CA;
    color: #000000;
}
`

const ChannelsContainer = styled.div`
 color: #E1E1E1;
 margin-top: 10px;
`

const NewChannelContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 height: 28px;
 padding-left: 19px;
 padding-right: 20px;
 cursor: pointer;
 color: #36C0CA;
 font-weight: bold;
`
const ChannelsList = styled.div`
`

const Channel = styled.div`
 height: 28px;
 display: flex;
 align-items: center;
 padding-left: 19px;
 cursor: pointer;
 :hover {
     background: #36C0CA;
     color: #000000;
 }
`