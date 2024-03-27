import { useState, useRef} from "react";
import styled from "styled-components";
import Modal from "./Modal";

interface Props{
    activeCall: boolean,
    setActiveCall: React.Dispatch<React.SetStateAction<boolean>>,
}
const StyledModalCall = styled.div<{activeCall : boolean}>`
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
    transform:  ${props => props.activeCall? 'scale(1)' : 'scale(0)'};
    z-index: 1000;
`
const StyledModalContent = styled.div``
const StyledModelForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const StyledInputName = styled.input`
    border-color: rgba(227, 227, 227, 1);
    background-color: rgba(255, 255, 255, 1);
    -webkit-border-radius: 30px;
    border-radius: 30px;
    color: rgba(145, 145, 145, 1);
    height: 40px;
    font-size: 14px;
    font-family: Arial;
    font-weight: 400;
    font-style: normal;
    padding-left: 10px;
    border: 1px solid #ccc;`
const StyledInputPhone = styled.input`
    border-color: rgba(227, 227, 227, 1);
    background-color: rgba(255, 255, 255, 1);
    -webkit-border-radius: 30px;
    border-radius: 30px;
    color: rgba(145, 145, 145, 1);
    height: 40px;
    font-size: 14px;
    font-family: Arial;
    font-weight: 400;
    font-style: normal;
    padding-left: 10px;
    border: 1px solid #ccc;`
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
    padding: 15px 30px;`

const ModalCall = (props: Props) => {
    const [modalActive, setModalActive] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (name && phone) {
            console.log("uspeh")
            
            // emailjs
            // .sendForm('service_rppxrhg', 'template_cr5dmvv', form.current!, {
            //     publicKey: '7iWSvhwl7VJJkVkb-',
            // })
            // .then(
            //     () => {
            //         console.log('SUCCESS!');
            //         setModalActive(true)
            //     },
            //     (error) => {
            //     console.log('FAILED...', error.text);
            //     },
            // );
        }else{
            alert("поля не заполнены")
        }
        
      };
      const valid = () => {
        setModalActive(true)
        return setModalActive
      }
    return ( 
        <StyledModalCall activeCall={props.activeCall} onClick={() => props.setActiveCall(false)}>
            <StyledModalContent onClick={e => e.stopPropagation()}>
                <StyledModelForm ref={form} onSubmit={sendEmail}>
                    <StyledInputName placeholder="Имя" type="text" name="name" onChange={(e) => setName(e.target.value)}>

                    </StyledInputName>
                    <StyledInputPhone placeholder="Телефон" type="tel" name="phone" onChange={(e) => setPhone(e.target.value)}>

                    </StyledInputPhone>
                    <StyledBtn type="submit">
                        Отправить
                    </StyledBtn>
                    {modalActive && <Modal active={modalActive} setActive={setModalActive} />}
                </StyledModelForm>
                
            </StyledModalContent>
            
        </StyledModalCall>
     );
}
 
export default ModalCall;



