import { Alert, Button, Dropdown } from "react-bootstrap";
import { Background } from "../background/background";
import "./landing.scss"
import logo from '../logo.svg';
import { getI18n, useTranslation } from "react-i18next";
import { HashLink } from 'react-router-hash-link';

export function Landing() {

    const { t } = useTranslation();

    function changeLanguage(lang: string) {
        getI18n().changeLanguage(lang)
    }

    return (
        <div className="App">
            <Background></Background>

            <div className='fullpage'>
                <div className="flex flex-col justify-between h-full">
                    <header className="App-header w-full px-4 mt-2">
                        <div className='flex justify-start items-center'>
                            <img src={logo} className="App-logo" alt="logo" />
                            <div><h1 className='logo-title ml-2'>POSTELY</h1></div>
                        </div>
                    </header>
                    <div className="flex flex-col grow justify-center">
                        <div className='padding-side flex justify-center container mx-auto flex-col'>
                            <h1 className='font-quicksand font-medium text-xl md:text-3xl'>{t('header')}</h1>
                            <h2 className='mt-4 font-quicksand text-lg md:text-2xl'>{t('subheader')}</h2>
                        </div>
                        <div className='mt-8 flex flex-row justify-center'>
                            <Button variant="primary" disabled>{t('soon')}</Button>
                            <HashLink smooth to="/#buthow"><Button variant="secondary" className='ml-4'>{t('how')}</Button></HashLink>
                        </div>
                    </div>
                    <footer className="flex justify-end">
                        <Dropdown className="m-6" style={{ height: "fit-content" }}>
                            <Dropdown.Toggle variant="dark">
                                {t("language")}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item as="button" onClick={() => changeLanguage("fr")}>Français</Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => changeLanguage("en")}>English</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </footer>
                </div>
            </div>

            <div className='fullpage' id="buthow">
                <div className='pt-16 padding-side flex flex-col align-cente justify-start'>
                    <h1>{t('how')}</h1>
                    <Alert className='mt-12' variant='secondary'>{t('howDescription')}</Alert>
                </div>
            </div>


        </div>
    )
}