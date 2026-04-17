import { type FC, type ReactNode } from 'react';
import './MonoQuestion.css';

type Props = {
  content: ReactNode;
};

const MonoQuestion: FC<Props> = ({ content }) => {
  return (
    <div className="mono-wrapper">
      <div className="mono-block">
        <div className="mono-content">{content}</div>
      </div>
    </div>
  );
};

export default MonoQuestion;
