
import styled from "styled-components";

interface Props{
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
}
const StyledModal = styled.div<{active : boolean}>`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.4);
    position: fixed;
    top:0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
    transform:  ${props => props.active ? 'scale(1)' : 'scale(0)'};
    z-index: 1000;
    
`
const StyledModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    font-size: 20px;
    font-family: Arial;
    font-weight: 800;
    text-align: center;
    color: black;
    
`
const StyledBtn = styled.button`
    font-family: Roboto, Arial;
    font-weight: 300;
    font-style: normal;
    font-size: 18px;
    background: #a180ba;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    border: 1px solid #a180ba;
    color: #FFFFFF;
    padding: 15px 30px;
    &:hover{
        background-color:  rgb(191, 152, 221);
    }
    &:active{
        background-color:  rgb(117, 93, 136);
    }
`;

const Modal = (props : Props) => {
    return ( 
    <StyledModal active={props.active} onClick={() => props.setActive(false)}>
        <StyledModalContent onClick={e => e.stopPropagation()}>
        Спасибо за обращение! 
        <br/>Мы свяжемся с вами в ближайшее время.
        <StyledBtn onClick={() => {
            props.setActive(false)
        }}>
            Закрыть
        </StyledBtn>
        </StyledModalContent>

    </StyledModal>
     );
}
 
export default Modal;