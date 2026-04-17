import type { ReactNode } from 'react';

export type StreamKey = 'backend' | 'frontend' | 'data' | 'product' | 'general';

export type Question = {
  id: number;
  component: ReactNode;
  correctAnswers: string[];
};

export type QuizMap = Record<StreamKey, { variants: Question[][] }>;
