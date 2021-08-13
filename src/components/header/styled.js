import styled from 'styled-components';

export const Container = styled.header`
   display: flex;

`;
export const Input = styled.input.attrs({
    type: 'text',
    placeholder: 'digite um username para pesquisa...'
})`
    width: 100%;
    background-color: #ccc;
    border-radius: 8px;
    margin-right: 5px;
    box-shadow: 0 0 0.2em rgba(0,0,0, 0.2);
    padding-left: 10px;
    font-weight: bold;

    &:focus{
        box-shadow: 0 0 0.5em rgba(0,0,0, 0.9);
        background-color: white;
    }
`;

export const Button = styled.button.attrs({
    type: 'submit'
})`
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;

    &:hover{
        background-color: #ccc;
        color: white;
        transition: 500ms;
        box-shadow: 0 0 0.5em rgba(0,0,0, 0.9);
    }
`;