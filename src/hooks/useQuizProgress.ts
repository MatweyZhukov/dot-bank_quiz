import { useEffect, useState } from 'react';
import type { StreamKey } from '../quizzes/types';

type Progress = {
  questionIndex: number;
  results: boolean[];
};

const getKey = (stream: StreamKey) => `quiz-progress-${stream}`;

const defaultState: Progress = {
  questionIndex: 0,
  results: [],
};

export const useQuizProgress = (stream?: StreamKey) => {
  const key = stream ? getKey(stream) : null;

  const [progress, setProgress] = useState<Progress>(() => {
    if (!key) return defaultState;

    const saved = localStorage.getItem(key);

    return saved ? JSON.parse(saved) : defaultState;
  });

  useEffect(() => {
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(progress));
  }, [progress, key]);

  const reset = () => {
    if (!key) return;

    localStorage.removeItem(key);
    setProgress(defaultState);
  };

  return { progress, setProgress, reset };
};
