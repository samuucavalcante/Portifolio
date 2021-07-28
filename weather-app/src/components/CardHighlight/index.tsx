import React from 'react';
import ProgressBar from '../ProgressBar';

import { Container } from './styles';

type PropsCardHighLight = {
  title: string;
  type: string;
  value: number | string;
  progressBar?: boolean;

}

export default function CardHighlight({ title, type, value, progressBar = false }: PropsCardHighLight) {
  return(
    <Container>
      <span className="cardhighlight-title">{title}</span>
      <h2 className="cardhighlight-body">
        {value}<span className="cardhighlight-text-type">{type}</span>
      </h2>
      {progressBar && <ProgressBar bgcolor="#FFEC65" completed={84} />}
    </Container>
  );
}

