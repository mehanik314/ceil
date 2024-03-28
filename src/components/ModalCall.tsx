import { useState, useRef} from "react";
import styled from "styled-components";
import Modal from "./Modal";
import emailjs from "@emailjs/browser"

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
const StyledModalContent = styled.div`
    background-color:white;
    padding: 50px;
    border-radius: 30px;
`
const StyledModelForm = styled.form`
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    color: black;
    font-size: 16px;
    font-weight: 600;
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
    width: 280px;
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
const StyledBtnClose = styled.button`
    margin-top: 20px;
    width: 100%;
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
    `

const ModalCall = (props: Props) => {
    const [modalActive, setModalActive] = useState(false);
    const form = useRef<HTMLFormElement>(null);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (name && phone) {
            emailjs
            .sendForm('service_rtsk1kf', 'template_gxt3ove', form.current!, {
                publicKey: 'nOwIRXh6s_HmvQPOu',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setModalActive(true)
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );

        }else{
            alert("поля не заполнены")
        }
        
      };
    return ( 
        <StyledModalCall activeCall={props.activeCall} onClick={() => props.setActiveCall(false)}>
            <StyledModalContent onClick={e => e.stopPropagation()}>
                <StyledModelForm ref={form} onSubmit={sendEmail}>
                    Заказать звонок
                    <StyledInputName placeholder="Имя" type="text" name="name" onChange={(e) => setName(e.target.value)}>

                    </StyledInputName>
                    <StyledInputPhone placeholder="Телефон" type="tel" name="phone" onChange={(e) => setPhone(e.target.value)}>

                    </StyledInputPhone>
                    <StyledBtn type="submit">
                        Отправить
                    </StyledBtn>
                    {modalActive && <Modal active={modalActive} setActive={setModalActive} />}
                </StyledModelForm>
                <StyledBtnClose onClick={() => props.setActiveCall(false)}>
                        Закрыть
                </StyledBtnClose>
                
            </StyledModalContent>
            
        </StyledModalCall>
     );
}
 
export default ModalCall;



