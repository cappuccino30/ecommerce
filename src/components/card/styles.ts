import { Card, Typography } from '@material-ui/core'
import styled from 'styled-components';

export const CustomCard = styled(Card)`
    padding: 25px
`;

export const Media = styled.img`
    display: flex;
    margin: auto;
`;

export const Font = styled(Typography)`
    font-size: ${props => props.size}px;
    font-weight: ${props => props.weight} !important;
    margin-bottom: ${props => props.bottom}px !important;
`;
