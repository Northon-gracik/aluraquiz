import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';


export default function Home() {
  const router = useRouter();
  const [name, setName ] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
      <link rel="shortcut icon" href="https://static.wikia.nocookie.net/gtawiki/images/9/91/Cluckin%27Bell-Logo.svg/revision/latest/top-crop/width/360/height/360?cb=20161019211750" type="image/x-icon"/>
        <title>AluraQuiz</title>
        {/* <link rel="icon" type="image/png" href="https://static.wikia.nocookie.net/gtawiki/images/9/91/Cluckin%27Bell-Logo.svg/revision/latest/top-crop/width/360/height/360?cb=20161019211750"/> */}
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Grand Theft Auto</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={ event => {
                event.preventDefault();
                
                router.push(`/quiz?name=${name}`)
              }}>
              <Input
                name="nomeDoUsuario"
                onChange={ event => setName(event.target.value)}
                placeholder="Insira seu nome"  
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Grand Theft Auto</h1>
            <p>lorem ipsum dolor sit amet, consectetur adip</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner />
    </QuizBackground>
  );
}
