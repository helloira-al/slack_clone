import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..."/>
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />

            </Main>
            <UserContainer>
                <Name>
                    Irida B.
                </Name>
                <UserImage>
                    <img src="https://i1.sndcdn.com/avatars-000084565212-4ugj8l-t500x500.jpg"/>
                </UserImage>

            </UserContainer>
        </Container>
    )
}

export default Header

const Container = styled.div`
 background: #000000;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 box-shadow: inset 0 0 0 1px #36C0CA;
`

const Main = styled.div`
 display: flex;
 margin-left: 20px;
 margin-right: 20px;
`

const SearchContainer = styled.div`
 min-width: 400px;
 margin-left: 20px;
 margin-right: 20px;
`

const Search = styled.div`
 width: 100%;
 box-shadow: inset 0 0 0 1px #36C0CA;
 border-radius: 7px;
 display: flex;
 align-items: center;
 color: #E1E1E1;

 input {
     background-color: transparent;
     border: none;
     padding-left: 8px;
     padding-right: 8px;
     color: #E1E1E1;
     padding-top: 4px;
     padding-bottom: 4px;
 }

 input:focus {
     outline: none;
 }
`

const UserContainer = styled.div`
 display: flex;
 align-items: center;
 padding-right: 16px;
 position: absolute;
 right: 0;

`

const Name = styled.div`
 padding-right: 16px;
 cursor: pointer;
 font-weight: bold;
`

const UserImage = styled.div`
 width: 28px;
 height: 28px;
 border: 2px solid white;
 border-radius: 3px;
 cursor: pointer;

 img {
     width: 100%;
 }
 
`