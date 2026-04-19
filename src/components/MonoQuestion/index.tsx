import { type FC, type ReactNode } from 'react';
import './MonoQuestion.css';

const MonoQuestion: FC<{ content: ReactNode }> = ({ content }) => {
  return (
    <div className="mono-wrapper">
      <div className="mono-block">
        <div className="mono-content">{content}</div>
      </div>
    </div>
  );
};

export default MonoQuestion;
