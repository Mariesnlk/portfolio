import React from 'react'
import {getTranslations} from 'next-intl/server';
import Navbar from './Navbar/Navbar';

const Home = () => {
    // const t = await getTranslations('HomePage');

    return (
        <div className='overflow-hidden'>
            {/* <h1>{t('title')}</h1>; */}
            Home
        </div>
    )
}

export default Home