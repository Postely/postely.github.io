import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Alert, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Background } from './background/background';

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <Background></Background>

      <div className='fullpage'>
        <header className="App-header w-full px-4 mt-2">
          <div className='w-full flex justify-between items-center'>
            <div className='flex justify-start items-center'>
              <img src={logo} className="App-logo" alt="logo" />
              <div><h1 className='logo-title ml-2'>POSTELY</h1></div>
            </div>
            <div>
              <Button>yo</Button>
            </div>
          </div>
        </header>
        <div className='mt-24 padding-side flex justify-center container mx-auto flex-col'>
          <h1 className='font-quicksand font-medium text-xl md:text-3xl'>{t('header')}</h1>
          <h2 className='mt-4 font-quicksand text-lg md:text-2xl'>{t('subheader')}</h2>
        </div>
        <div className='mt-8 flex flex-row justify-center'>
          <Button variant="primary">{t('try')}</Button>
          <Button variant="secondary" className='ml-4'>{t('how')}</Button>
        </div>
      </div>

      <div className='fullpage'>
        <div className='padding-side flex flex-col align-cente justify-start'>
          <h1>{t('how')}</h1>
          <Alert className='mt-12' variant='secondary'>{t('howDescription')}</Alert>
        </div>
      </div>

    </div>
  );
}

export default App;
