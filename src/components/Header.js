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
                    Irida Balliu
                </Name>
                <UserImage>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF6Q4ZsmHtHgw/profile-displayphoto-shrink_200_200/0/1603559892570?e=1619654400&v=beta&t=C7itJ7-QzHB7cPQB7wcjN7zccq7dYUktCah3wc83O8A"/>
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
 box-shadow: inset 0 0 0 1px rgba(133,131,133,1);
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
 box-shadow: inset 0 0 0 1px rgba(133,131,133,1);
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