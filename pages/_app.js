import React from 'react';
import '../styles/globals.css';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./index'), { ssr: false });

function MyApp({ Component, pageProps }) {
    return <DynamicComponentWithNoSSR />;
}

export default MyApp;
