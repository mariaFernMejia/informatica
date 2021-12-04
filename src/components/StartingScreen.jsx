import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { alpha } from "@mui/material";
import { Typography } from "@mui/material";
import {Game} from "./Game"
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
        color: "white",
        alignSelf: "center",
        textAlign: "center",
        margin: 25,
    },
    button: {
        alignSelf: "center",
        margin: "auto",
    }
})

export const StartingScreen = () => {
        const arrayNumber = [];
        for (let i = 0; arrayNumber.length < 5; i++) {
            let number = Math.floor(Math.random() * 15);
            let cont = 0;
            arrayNumber.forEach((num) => {
                if (number == num) {
                    cont = 1;
                }
            })
            if (cont == 0) {
                arrayNumber.push(number);
            }
        }
    const [startGame, setStartGame] = useState(false)
    const [score, setScore] = useState(false)
    const classes = styles();
    console.log(arrayNumber)
    return (
        <>
            {(startGame == false)
                ?
                (score==false)?
                <Box className={classes.container}>
                    <Box className={classes.title}>
                        <Typography variant="h4" component="h2" >Bienvenido</Typography>
                        <Typography variant="h4" component="h2">¿Deseas iniciar una partida?</Typography>
                    </Box>
                    <Box className={classes.button}>
                        <Button variant="contained" style={{marginRight:10}} onClick={()=>{setScore(!score)}}>Ver puntajes</Button>
                        <Button variant="contained" onClick={()=>{setStartGame(!startGame)}}>Comenzar</Button>
                    </Box>
                </Box>
                :<Score
                    valueAdd={false}
                    returnView={setScore}
                />
                :<Game 
                    restart={setStartGame}
                    data={arrayNumber}
                    
                />
        }

        </>
    )
}
