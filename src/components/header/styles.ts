import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';

export const Menu = styled(AppBar)`
position: static;
`;

export const ButtonIcon = styled(IconButton)`
margin-right: 10px;
`

export const Font = styled(Typography)`
font-size: ${props => props.size} !important;
font-weight: bold;
`

export const CustomDrawer = styled(Drawer)`
    & > div:nth-child(3) {
        background-color: ${props => props.background} !important;
        color: ${props => props.fontcolor} !important;
        cursor: pointer;
        font-weight: 600;
    }
`;