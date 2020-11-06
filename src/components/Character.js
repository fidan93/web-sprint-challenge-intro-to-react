import React from 'react';
import styled from 'styled-components';

export default function Character(props){
const {hero} = props;


return (
<Dropdown>

<div className="title"><h3>{hero.name}</h3><span><i className="fa fa-angle-down"></i></span></div>
<DropdownContent>
<p>gender: {hero.gender}</p>
<p>Height: {hero.height}</p>
<p>Mass: {hero.mass}</p>
<p>Birth Year: {hero.birth_year}</p>
<p>Eye color: {hero.eye_color}</p>
<p>Hair color: {hero.hair_color}</p>
<p>Skin tone: {hero.skin_color}</p>
</DropdownContent>
</Dropdown>
)
}

const DropdownContent = styled.div`
display: none;
width: 70%;

`
const Dropdown = styled.div`
display:flex;
flex-direction:column;
width:70%;
align-items: center;
border: 1px solid sandybrown;
margin: 0 auto;
background-color: beige;
opacity: 50%;
&:hover ${DropdownContent}{
    display: flex;
    flex-direction:column;
    align-content: center;
    transition: all .4s ease-in-out;
}
transition: all .4s ease-in-out;
&:hover{
    transition: all .4s ease-in-out;
}
.title {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
  
}
`