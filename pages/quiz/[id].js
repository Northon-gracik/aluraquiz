

export default function QuizDaGaleraPage (props) {
    console.log(JSON.stringify(props))
    return(
        <div style={{color: 'blue'}}>
            {JSON.stringify(props)}
        </div>
    );
}

export async function getSeverSideProps (context){
    const dbExterno = await fetch/*(`https://${projectName}.${githubUser}.vercel.app/api/db`)*/("https://aluraquiz-css.omariosouto.vercel.app/api/db")
    .then((respostaDoServer) => {
        if (respostaDoServer.ok) {
            return respostaDoServer.json();
        }
        throw new Error('Falha em pegar os dados');
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) => {
        console.error(err);
    });

    console.log('dbExterno', dbExterno);
    console.log('Infos que o Next da para nós', context.query.id);
    return {
      props: {
        dbExterno,
      },
    };
}
