import React, { useState } from 'react';
import { Menu, ButtonIcon, Font, CustomDrawer } from './styles';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { fade, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const Header: React.FC<any> = () => {
    const classes = useStyles();
    const [open, setState] = useState(false);

      const menuOptions = [
        {
            name: 'Página Inicial',
            link: '/'

        },
        {
            name: 'Mapa das Estações',
            link: '/'

        },
        {
            name: 'Funcionamento',
            link: '/'

        },
        {
            name: 'Conheça o Bike Sampa',
            link: '/'

        },
        {
            name: 'Como podemos te ajudar?',
            link: '/'

        },
        {
            name: 'Planos',
            link: '/'

        },
        {
            name: 'Fale com a gente',
            link: '/'

        },
    ];

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
    
        setState(open);
      };


    return (
        <>
            <div style={{ flexGrow: 1 }}>
                <Menu>
                    <Toolbar>
                        <Grid container direction="row" justify="space-between" alignItems="center">
                            <Grid item>
                                <ButtonIcon
                                edge="start"
                                color="inherit"
                                onClick={toggleDrawer(true)}
                                >
                                <MenuIcon fontSize="large" />
                            </ButtonIcon>
                            <CustomDrawer background={'#5f6fc9'} fontcolor={"#fff"} anchor={'left'} open={open} onClose={toggleDrawer(false)}>
                                <List>
                                    {menuOptions.map(({ name, link }, index) => (
                                        <Font size={'16px'} href={link} key={index}><ListItem button>{name}</ListItem></Font>
                                    ))}
                                </List>
                            </CustomDrawer>
                            </Grid>
                            <Grid item >
                                <Font size={'25px'}>Ecommerce App</Font>
                            </Grid>
                            <Grid item >
                                <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon />
                                    </div>
                                    <InputBase
                                        placeholder="Search…"
                                        classes={{
                                            root: classes.inputRoot,
                                            input: classes.inputInput,
                                        }}
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Menu>
            </div>
        </>
    );
}

export default Header;