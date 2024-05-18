import React from 'react';
import './App.css'
import LandingPage from './LandingPage';
import { ChakraProvider } from '@chakra-ui/react'


function App() {
    return (
        <ChakraProvider>
            <div>
                <LandingPage />
            </div>
        </ChakraProvider>
        
    )
}

export default App;