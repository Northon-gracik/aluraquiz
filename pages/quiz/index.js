import React from 'react';
import db from '../../db.json';

import QuizPage from '../../src/screens/Quiz'

export default function Quiz (props) {
  return(
      <QuizPage db={db}></QuizPage>
  );
}