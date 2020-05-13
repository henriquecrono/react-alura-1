import React, { Fragment } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Header from '../../Components/Header/Header';


const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        color: 'blue'
    }
})

const About = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Header />
            <Container maxWidth="sm">
                <Typography className={classes.title} variant="h1" component="h2">
                    Sobre
                </Typography>
                <Typography variant="body2" component="p">
                    A Casa do Código faz e edita livros.
                </Typography>
            </Container>
        </Fragment>
    );

}

export default About;