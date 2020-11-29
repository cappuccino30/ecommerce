import React from 'react'
import { CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { CustomCard, Font, Media } from './styles'

interface CardCustomProps {
    title: string;
    subheader?: string[];
    image?: string;
}

const Card: React.FC<CardCustomProps> = ({ 
    title,
    subheader = [],
    image,
    children
}) => {

    return (
        <Grid container justify="center">
            <Grid item xs={11} sm={9} lg={6} xl={5}>
                <CustomCard>
                    <Media src={image} />
                    <CardContent>
                        <Font variant="h5" component="h2" size='30' weight='700' bottom='20'>
                            {title}
                        </Font>
                            {subheader && subheader.map(( paragraph, index ) => (
                                <Font variant="body2" component="p" size='14' weight='400' key={index}>
                                    {paragraph}
                                </Font>
                            ))
                            }
                        {children}
                    </CardContent>
                </CustomCard>
            </Grid>
        </Grid>
    )
}

export default Card;