import { type FC, type ReactNode } from 'react';
import './SplitQuestion.css';

type Props = {
  left: ReactNode;
  right: ReactNode;
  rightImage?: boolean;
  paddingRight?: string;
  direction?: 'horizontal' | 'vertical';

  noPadding?: 'left' | 'right' | 'both';
};

const SplitQuestion: FC<Props> = ({
  left,
  right,
  rightImage,
  paddingRight = '124px',
  direction = 'horizontal',
  noPadding,
}) => {
  return (
    <div className={direction === 'horizontal' ? 'split-wrapper' : 'split-wrapper-vertical'}>
      <div
        className={`split-cell split-cell--left ${
          noPadding === 'left' || noPadding === 'both' ? 'no-padding' : ''
        }`}
        style={{ paddingRight }}
      >
        {left}
      </div>

      <div
        className={`split-cell split-cell--right ${
          rightImage ? 'split-cell--image' : ''
        } ${noPadding === 'right' || noPadding === 'both' ? 'no-padding' : ''}`}
      >
        {right}
      </div>
    </div>
  );
};

export default SplitQuestion;
