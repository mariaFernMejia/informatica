import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { alpha } from "@mui/material";
import { Button } from "@mui/material";
import { Radio } from "@mui/material";
import RadioGroup from '@mui/material/RadioGroup';
import Swal from 'sweetalert2';
import { Score } from './Score';

const styles = makeStyles({
    container: {
        width: 500,
        backgroundColor: alpha("#394079", 0.5),
        height: 500,
        margin: "5% auto auto auto",
        border: "none",
        borderRadius: "10px",
        boxShadow: "-2px 7px 16px -2px",
        display: "flex",
        flexDirection: "column",
        transition: "0.3s",
    },
    title: {
        textAlign: "center",
        color: "white",
        marginBottom: 5
    },
    text: {
        color: "#040405",
        fontWeight: "bold",
        fontSize: "20px",
    }
})

const correctResponse = () => {
    Swal.fire({
        icon: 'success',
        title: '¡Has Acertado!',
        text: 'Ve por el puntaje perfecto',
        confirmButtonText: 'Siguiente pregunta'
    })
}

const wrongAnswer = () => {
    Swal.fire({
        icon: 'error',
        title: 'Has fallado',
        text: 'Siempre lo puedes volver a intentar',
        confirmButtonText: 'Continuar'
    })
}

export const Game = ({ restart, data }) => {
    const classes = styles();
    const arrayNumber = [...data];
    console.log(arrayNumber)
    const questions = [
        {
            Question: "¿En que año cristobal Colon desembarco por primera vez en América?",
            firstResponse: "1496",
            secondResponse: "1492",
            thirdResponse: "1564",
            fourResponse: "1542",
            correct: "1496"
        },
        {
            Question: "Que nombre recibe la moneda oficial de reino unido?",
            firstResponse: "Libra Esterlina",
            secondResponse: "Dolar",
            thirdResponse: "Peso",
            fourResponse: "Yen",
            correct: "Libra Esterlina"
        },
        {
            Question: "Cuál es el animal que más humanos mata al año?",
            firstResponse: "La sepiente",
            secondResponse: "El mosquito",
            thirdResponse: "La mosca",
            fourResponse: "El alacran",
            correct: "El mosquito"
        },
        {
            Question: "En que ciudad de ucrania ocurrió un desastre nuclear?",
            firstResponse: "Neak",
            secondResponse: "Hiroshima",
            thirdResponse: "Nagasaki",
            fourResponse: "Chernobyl",
            correct: "Chernobyl"
        },
        {
            Question: "Actualmente cúal es el país más grande del mundo?",
            firstResponse: "Londres",
            secondResponse: "China",
            thirdResponse: "Rusia",
            fourResponse: "New York",
            correct: "Rusia"
        },
        {
            Question: "Cual es el nombre de la lengua oficial de la República popular de China",
            firstResponse: "Chino",
            secondResponse: "Madarin Estándar",
            thirdResponse: "Japonés",
            fourResponse: "Coreano",
            correct: "Madarin Estándar"
        },
        {
            Question: "Como se llama la civilización que construyó la pirámides de guiza?",
            firstResponse: "EL pueblo del antiguo imperio egipcio",
            secondResponse: "El Imperio Romano",
            thirdResponse: "Los incas",
            fourResponse: "Los Mayas",
            correct: "EL pueblo del antiguo imperio egipcio"
        },
        {
            Question: "Cuál es el planeta más grande del sistema solar?",
            firstResponse: "Neptuno",
            secondResponse: "Saturno",
            thirdResponse: "Marte",
            fourResponse: "Jupiter",
            correct: "Jupiter"
        },
        {
            Question: "Como se llama la religión que considera el coran como su libro sagrado?",
            firstResponse: "EL islam",
            secondResponse: "Judaismo",
            thirdResponse: "Budaismo",
            fourResponse: "Hinduismo",
            correct: "EL islam"
        },
        {
            Question: "Cuantos huesos tiene el cuerpo humano adulto?",
            firstResponse: "201",
            secondResponse: "244",
            thirdResponse: "180",
            fourResponse: "206",
            correct: "206"
        },
        {
            Question: "Cuantás estrellas tiene la bandera de los Estados Unidos?",
            firstResponse: "50",
            secondResponse: "47",
            thirdResponse: "65",
            fourResponse: "45",
            correct: "50"
        },
        {
            Question: "EL proceso por el cual una célula se divide para formar dos células hijas se llama:",
            firstResponse: "Segregación",
            secondResponse: "Mitosis",
            thirdResponse: "Meiosis",
            fourResponse: "Citoplasma",
            correct: "Mitosis"
        },
        {
            Question: "Con que respira una ballena?",
            firstResponse: "Por la piel",
            secondResponse: "Branquias",
            thirdResponse: "Pulmones",
            fourResponse: "Por la boca",
            correct: "Pulmones"
        },
        {
            Question: "Al descendiente del cruce de un asno y una yegua se le conoce como:",
            firstResponse: "Asno",
            secondResponse: "Mula",
            thirdResponse: "Burro",
            fourResponse: "Mulo",
            correct: "Mulo"
        },
        {
            Question: "Cúal es la principal función de los góbulos rojos?",
            firstResponse: "Combatir enfermedades",
            secondResponse: "Coagular la sangre",
            thirdResponse: "Llevar óxigeno",
            fourResponse: "Transportar los nutrientes",
            correct: "Llevar óxigeno"
        },
    ]

    const [numberQuestion, setnumberQuestion] = useState(0)
    const [changeContent, setChangeContent] = useState(false)
    const [correct, setCorrect] = useState(0)
    console.log(numberQuestion)
    const checkAnswer = (selected, id) => {
        let response = document.querySelector("#" + id)?.value;
        if (selected == response) {
            if (numberQuestion === 4) {
                Swal.fire({
                    icon: 'success',
                    title: 'Felicitacion, ¡Terminaste!',
                    text: 'Te han contado que eres... extraodinari@',
                    confirmButtonText: 'Ok'
                });
                setCorrect(correct+1);
                setChangeContent(true);
            } else {
                correctResponse();
                setCorrect(correct+1);
                setnumberQuestion(numberQuestion + 1);
            }
        } else {
            if (!response) {
                Swal.fire({
                    icon: 'error',
                    title: 'Has fallado',
                    text: 'Debes selecionar una opción',
                    confirmButtonText: 'Ok'
                })
            } else {
                if (numberQuestion === 4) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Felicitacion, ¡Terminaste!',
                        text: 'Te han contado que eres... extraodinari@',
                        confirmButtonText: 'Ok'
                    });
                    setnumberQuestion(numberQuestion + 1);
                    setChangeContent(true);
                }else{
                    wrongAnswer();
                    setnumberQuestion(numberQuestion + 1);
                }

            }

        }
    }


    return (
        <>
            {(changeContent == false)
                ? <Box className={classes.container}>
                    {questions.map((elem, index) => {
                        if (index === arrayNumber[numberQuestion]) {
                            let id;
                            return (
                                <Box key={index} style={{ display: "grid", gridTemplateRow: "1fr 1fr 1fr", gridGap: 20 }}>
                                    <h1 className={classes.title}>{elem.Question}</h1>
                                    <RadioGroup style={{ marginTop: "10%", marginBottom: "10%" }}>
                                        <Box onClick={(e) => id = e.target.id}>
                                            <Radio id="huey" name="radioBtn" value={elem.firstResponse} />
                                            <label htmlFor="huey" className={classes.text}>{elem.firstResponse}</label>
                                        </Box>
                                        <Box onClick={(e) => id = e.target.id}>
                                            <Radio type="radio" id="dewey" name="radioBtn" value={elem.secondResponse} />
                                            <label htmlFor="dewey" className={classes.text}>{elem.secondResponse}</label>
                                        </Box>

                                        <Box onClick={(e) => id = e.target.id}>
                                            <Radio type="radio" id="das" name="radioBtn" value={elem.thirdResponse} />
                                            <label htmlFor="das" className={classes.text}>{elem.thirdResponse}</label>
                                        </Box>

                                        <Box onClick={(e) => id = e.target.id}>
                                            <Radio type="radio" id="louie" name="radioBtn" value={elem.fourResponse} />
                                            <label htmlFor="louie" className={classes.text}>{elem.fourResponse}</label>
                                        </Box>
                                    </RadioGroup>
                                    <Button onClick={() => checkAnswer(elem.correct, id)} variant="contained">Comprobar</Button>
                                </Box>
                            )
                        }
                    })

                    }
                </Box>
                : <Score
                    valueAdd={true}
                    returnView={restart}
                    score={correct}
                  />

            }

        </>
    )
}
