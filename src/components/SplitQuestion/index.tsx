import { type FC, type ReactNode } from 'react';
import './SplitQuestion.css';

type Props = {
  left: ReactNode;
  right: ReactNode;
};

const SplitQuestion: FC<Props> = ({ left, right }) => {
  return (
    <div className="split-wrapper">
      <div className="split-cell">{left}</div>
      <div className="split-cell">{right}</div>
    </div>
  );
};

export default SplitQuestion;
