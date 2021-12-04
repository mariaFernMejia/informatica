import React, { useEffect, useState } from 'react'
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { alpha, TableFooter } from "@mui/material";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { TextField } from '@mui/material';
import Swal from 'sweetalert2';

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
        transition: "0.3s"
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
    },
    name: {
        alignSelf: "center",
        margin: "auto",
    },
    msg:{
        color:"white",
        fontWeight:"normal",
        textAlign:"center"
    }
})

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

export const Score = ({ valueAdd, returnView, score }) => {
    let msg;
    if (score == 5) {
        score = "100%";
        msg = "Tu resultado es perfecto, vaya por el titulo de una vez"
    }
    else if (score == 4) {
        score = "80%";
        msg = "Tu resultado es bueno, no pares de aprender"
    } else if (score == 3) {
        score = "60%";
        msg = "Tus resultados son regulares, animo sigue estudiando"
    } else if (score == 2) {
        score = "40%";
        msg = "Tus resultados son regulares, animo sigue estudiando"
    } else if (score == 1) {
        score = "20%";
        msg = "Tus resultados son deficientes, Recuerda leer y estudiar"
    } else if (score == 0) {
        score = "0%";
        msg = "Tus resultados son muy deficientes, te vendría muy bien leer y estudiar"
    }
    const credits = () => {
        Swal.fire({
            icon: 'info',
            title: 'Creditos',
            text: 'Juego hecho por Maria Fernanda Mejia',
            confirmButtonText: 'Ok'
        })
    }
    const finish = () => {
        Swal.fire({
            icon: 'info',
            title: 'Gracias por jugar con nosotros',
            text: 'Ojalá hayas disfrutado la experiencia',
            confirmButtonText: 'Ok'
        })
    }
    const classes = styles();
    const [add, setAdd] = useState(valueAdd);
    const [name, setName] = useState();
    const scoreSaves = JSON.parse(window.localStorage.getItem("puntaje"));
    return (
        <Box className={classes.container}>
            {add == false
                ?

                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell variant="head" style={{ textAlign: "center" }}>
                                    <h4 className={classes.title}>Nombre</h4>
                                </TableCell>
                                <TableCell variant="head" style={{ textAlign: "center" }}>
                                    <h4 className={classes.title}>Puntaje</h4>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {(scoreSaves) ?
                                scoreSaves.map((elem) => {
                                    return (
                                        <TableRow>
                                            <TableCell variant="body" style={{ textAlign: "center" }}>
                                                <Box >
                                                    <h4>{elem.name}</h4>
                                                </Box>
                                            </TableCell >
                                            <TableCell variant="body" style={{ textAlign: "center" }}>
                                                <Box >
                                                    <h4>{elem.score}</h4>
                                                </Box>
                                            </TableCell >
                                        </TableRow>
                                    )
                                })
                                : <h4>No hay puntajes guardados</h4>
                            }

                        </TableBody>
                    </Table>
                    <TableFooter>
                        <TableRow>
                            <TableCell>

                            </TableCell>
                        </TableRow>
                        <TableRow style={{ alignSelf: "flex-end" }}>
                            <TableCell>
                                <Button variant="contained" style={{ backgroundColor: "#252424", color: "#BDACA7" }} onClick={() => { returnView(false);}}>Regresar</Button>
                                <Button variant="contained" style={{ backgroundColor: "#252424", color: "#BDACA7", marginLeft:"40px"}} onClick={() => { returnView(false); credits(); }}>Creditos</Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </TableContainer>

                :
                <> <Box className={classes.title}>
                    <Typography variant="h4" component="h2">¿Deseas guardar su puntaje?</Typography>
                    <Typography variant="h4" component="p">tu puntaje es del {score}</Typography>
                </Box>
                    <Box className={classes.msg}>
                    <Typography variant="54" component="h2">{msg}</Typography>
                    </Box>
                    <Box className={classes.name}>
                        <TextField id="outlined-basic" value={name} onChange={(e) => setName(e.target.value)} label="Ingresa tu nombre" variant="outlined" required />
                    </Box>
                    <Box className={classes.button}>
                        <Button variant="contained" onClick={() => {
                            let arrayData = JSON.parse(window.localStorage.getItem("puntaje"));
                            let data;
                            let newData = {
                                name: name,
                                score: score,
                            }
                            if (arrayData) {
                                data = [...arrayData]

                                data.push(newData);
                            } else {
                                data = [{ ...newData }]
                            }
                            setAdd(false);
                            finish();
                            window.localStorage.setItem("puntaje", JSON.stringify(data))
                        }}>Guardar</Button>
                    </Box></>
            }

        </Box >
    )
}
