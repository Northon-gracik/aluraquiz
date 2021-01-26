import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { QuizContainer } from '.';

import db from '../db.json'
import QuizBackground from '../src/components/QuizBackground';
import Widget from '../src/components/Widget';




export default props => {
    const router = useRouter();
    const { name } = router.query
    const [ans, setAns ] = useState('');
    var answer = 'answer'

    function getRadioValor(name) {
        var rads = getElementsByName(name);
        
        for(var i = 0; i < rads.length; i++){
            if(rads[i].checked){
                return rads[i].value;
            }
        }
    }
    return (
        <QuizBackground backgroundImage={db.bg}>
            <Head>
                <title>Pagina de { name }</title>
            </Head>
            <QuizContainer>
                <Widget>
                    <Widget.Header>
                        {db.questions[0].title}
                    </Widget.Header>
                    <Widget.Content>
                        <img src={db.questions[0].image} height={200}/>
                        <form>
                            {db.questions[0].alternatives.map(alt => {
                                return(
                                    <div>
                                        <input type="radio" name={answer} value={alt} /> 
                                        <label for={alt}> {alt} </label> 
                                    </div>
                                    
                                    )                            
                            })}
                            {setAns(getRadioValor(answer))}
                            <button disabled={ans.length === 0}>
                                Continuar
                            </button>
                        </form>
                        
                    </Widget.Content>
                    
                </Widget>
            </QuizContainer>
        </QuizBackground>
    )
}