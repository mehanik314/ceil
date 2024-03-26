import { Dispatch, SetStateAction } from "react";
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
    
`
const StyledModalContent = styled.div`
    padding: 20px;
    border-radius: 12px;
    background-color: white;
    
`

const Modal = (props : Props) => {
    return ( 
    <StyledModal active={props.active} onClick={() => props.setActive(false)}>
        <StyledModalContent onClick={e => e.stopPropagation()}>
            заявка успешно отправлена
        </StyledModalContent>
    </StyledModal>
     );
}
 
export default Modal;