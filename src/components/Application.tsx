import styled from "styled-components";
import emailjs from '@emailjs/browser'
import { useRef, useState } from "react";
import Modal from "./Modal";

const StyledApplication = styled.section`
    padding: 95px 0px;
    background-color: #f5f5f5;
    color: black;
`
const StyledContainer = styled.div`
    max-width: 1100px;
    margin: 0px auto;
    padding: 0px 15px;
`
const StyledWrapperForm = styled.div`
    margin: 0px auto;
    padding: 40px 30px;
    border: 5px solid rgb(161, 128, 186);
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    max-width: 730px;
    max-height: 790px;
`
const StyledTitle = styled.h1`
    font-family: OpenSans;
    font-weight: 300;
    font-style: normal;
    font-size: 36px;
    @media screen and (max-width: 820px){
        font-size: 26px;
    }
`
const StyledSale = styled.h1`
    font-family: Arial !important;
    line-height: 1.4;
    font-size: 56px;
    font-weight: 700;
    margin-top: 3%;
    @media screen and (max-width: 820px){
        font-size: 36px;
    }
`
const StyledForm = styled.form`
    max-width: 440px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`
const StyledInput = styled.input`
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
    border: 1px solid #ccc;
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
    padding: 20px 40px;
    &:hover{
        background-color:  rgb(191, 152, 221);
    }
    &:active{
        background-color:  rgb(117, 93, 136);
    }
`
const Application = () => {
    const form = useRef<HTMLFormElement>(null)
    const [modalActive, setModalActive] = useState(false)
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
    <StyledApplication id="application">
        <StyledContainer>
            <StyledWrapperForm>
                <StyledTitle>
                    ПОЗВОНИТЕ СЕЙЧАС И ПОЛУЧИТЕ
                </StyledTitle>
                <StyledSale>
                    СКИДКУ 15%!
                </StyledSale>
                <StyledForm ref={form} onSubmit={sendEmail}>
                    <StyledInput placeholder="Имя" type="text" name="name" onChange={(e) => setName(e.target.value)}>

                    </StyledInput>
                    <StyledInput placeholder="Телефон" type="tel" name="phone" onChange={(e) => setPhone(e.target.value)}>
                        
                    </StyledInput>
                    <StyledBtn type="submit">
                        Отправить заявку
                    </StyledBtn>
                </StyledForm>
                <Modal active={modalActive} setActive={setModalActive}/>
            </StyledWrapperForm>
        </StyledContainer>
    </StyledApplication> 
    );
}
 
export default Application;