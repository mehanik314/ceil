import styled from "styled-components";
import Background from '../static/img/why_img.jpg'
import { HTMLInputTypeAttribute, useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import Modal from "./Modal";

const StyledCalculation = styled.div`
    background-image: linear-gradient(rgba(161, 128, 186, 0.5), rgba(161, 128, 186, 0.5)), url(${Background});
    background-size: cover;
    background-attachment: fixed;
    @media screen and (max-width: 820px) {
        h1{
            font-size: 36px;
        }
        h2{
            font-size: 24px;
        }
        form{
            width: 350px;
        }
    }
`;
const StyledColor = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #A180BA;
    opacity: 0.5;
`
const StyledTriangleWrapperUp = styled.div`
    position: relative;
    width: 100%;
`;
const StyledTriangleWrapperDown = styled.div`
    position: relative;
    width: 100%;
`;
const StyledTriangleUp = styled.div`
    svg{
        display: block;
        position: absolute;
        width: 100%;
        height: 30px;
    }
`;
const StyledTriangleDown = styled.div`
    svg{
        display: block;
        position: absolute;
        width: 100%;
        height: 30px;
    }
`;
const StyledContainer = styled.div`
  max-width: 1100px;
  margin: 0px auto;
  padding: 0px 15px;
  
`;
const StyledMain = styled.div`
    padding-top: 172px;
    padding-bottom: 139px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 820px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
const StyledDesc = styled.div`
`;
const StyledTitle = styled.h1`
    font-size: 52px;
    font-family: OpenSans;
    line-height: 140%;
    font-weight: 800;
`;
const StyledText = styled.h2`
    font-size: 36px;
    font-family: OpenSans;
    font-weight: 300;
    font-style: normal;
`;
const StyledForm = styled.form`
    margin: auto;
    width: 400px;
    text-align: center;
`;
const StyledInputName = styled.input`
    width: 430px;
    margin-bottom: 14px;
    border-color: rgba(227, 227, 227, 1);
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #ccc;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    color: rgba(145, 145, 145, 1);
    height: 40px;
    font-size: 15px;
    font-family: Arial;
    font-weight: 400;
    font-style: normal;
    padding-left: 15px;
    @media screen and (max-width: 960px){
        width: 350px;
    }
    @media screen and (max-width: 820px){
        width: 300px;
    }
    
`;

const StyledInputPhone = styled.input`
    width: 430px;
    margin-bottom: 11px;
    border-color: rgba(227, 227, 227, 1);
    background-color: rgba(255, 255, 255, 1);
    -webkit-border-radius: 30px;
    border: 1px solid #ccc;
    border-radius: 30px;
    color: rgba(145, 145, 145, 1);
    height: 40px;
    font-size: 15px;
    font-family: Open Sans, Arial;
    font-weight: 400;
    font-style: normal;
    padding-left: 15px;
    @media screen and (max-width: 960px){
        width: 350px;
    }
    @media screen and (max-width: 820px){
        width: 300px;
    }
`;
const StyledBtn = styled.button`
    font-family: Roboto;
    font-weight: 300;
    font-style: normal;
    font-size: 18px;
    background: #a180ba;
    -moz-border-radius: 30px;
    -webkit-border-radius: 30px;
    border-radius: 30px;
    border: 1px solid #a180ba;
    color: #FFFFFF;
    padding: 10px 40px;
    @media screen and (max-width: 960px){
        padding: 10px 25px;
    }
`;

const Calculation = () => {
    const form = useRef<HTMLFormElement>(null)
    const [modalActive, setModalActive] = useState(false)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    
    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (name && phone) {
            console.log("uspeh")
            setModalActive(true)
            
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
    return (
        <StyledCalculation>
            <StyledTriangleWrapperUp>
                <StyledTriangleUp>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 0 V 100 L 100 0 Z"></path></svg>
                </StyledTriangleUp>
            </StyledTriangleWrapperUp>
            <StyledContainer>
                <StyledMain>
                    <StyledDesc>
                        <StyledTitle>
                            РАССЧИТАЕМ ВАШ <br/>ЗАКАЗ
                        </StyledTitle>
                        <StyledText>
                            ВСЕГО ЗА 5 МИНУТ
                        </StyledText>
                    </StyledDesc>
                    
                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <StyledInputName placeholder="Имя" type="text" maxLength={50} name="name" onChange={(e) => setName(e.target.value)}>

                        </StyledInputName>
                        <StyledInputPhone placeholder="Телефон" maxLength={20} type="tel" name="phone" onChange={(e) => setPhone(e.target.value)}>

                        </StyledInputPhone>
                        <StyledBtn type="submit">
                            Отправить заявку
                        </StyledBtn>
                    </StyledForm>
                    <Modal active={modalActive} setActive={setModalActive}/>
                </StyledMain>
            </StyledContainer>
            <StyledTriangleWrapperDown>
                <StyledTriangleDown>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none"> <path d="M 0 100 H 100 V 0 Z"></path> </svg>
                </StyledTriangleDown>
            </StyledTriangleWrapperDown>
        </StyledCalculation>
    );
}

export default Calculation;