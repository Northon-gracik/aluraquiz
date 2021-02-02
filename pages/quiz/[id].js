import 'isomorphic-fetch'
import db from '../../db.json'
import QuizPage from '../../src/screens/Quiz';

function QuizDaGaleraPage (props) {
    const dbExterno = db
    console.log(JSON.stringify(props))
    return(
        <QuizPage db={dbExterno}></QuizPage>
    );
}

// QuizDaGaleraPage.getInitialProps = async (context) => {
//     const dbExterno = await fetch/*(`https://${projectName}.${githubUser}.vercel.app/api/db`)*/("https://aluraquiz-css.omariosouto.vercel.app/api/db")
//     .then((respostaDoServer) => {
//         if (respostaDoServer.ok) {
//             return respostaDoServer.json();
//         }
//         throw new Error('Falha em pegar os dados');
//     })
//     .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
//     .catch((err) => {
//         console.error(err);
//     });

//      console.log('dbExterno', dbExterno);
//     // console.log('Infos que o Next da para nós', context.query.id);
//     return {
//       props: {
//         dbExterno,
//       },
//     };
// }


export default QuizDaGaleraPage;

export async function getSeverSideProps (context){
    try{
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
    }catch(err) {
        throw new Error(err);
    }
}
