import React from 'react';
import Layout from '../components/layout'
import Card from '../components/card/index';

const Home: React.FC<any> = () => {
    return (
        <Layout>
            <Card title={'Home'} subheader={['subheader']}>

            </Card>
        </Layout>
    );
}

export default Home;