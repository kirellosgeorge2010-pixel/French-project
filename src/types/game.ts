export type Difficulty = 'easy' | 'medium' | 'hard';

export type Category = 
  | 'Culture générale'
  | 'Sciences'
  | 'Histoire'
  | 'Géographie'
  | 'Technologie'
  | 'Littérature'
  | 'Arts'
  | 'Sport'
  | 'Nature'
  | 'Société';

export interface Question {
  id: number;
  question: string;
  answers: [string, string, string, string];
  correctAnswer: number; // 0, 1, 2, 3 (A, B, C, D)
  difficulty: Difficulty;
  category: Category;
  prize?: number;
  explanation?: string;
}

export interface PrizeStep {
  level: number;
  amount: number;
  label: string;
  isMilestone: boolean; // Palier de sécurité
}

export interface Lifelines {
  fiftyFifty: boolean;
  audience: boolean;
  switchQuestion: boolean;
}

export interface AudienceVote {
  index: number;
  letter: string;
  percentage: number;
}

export type GameStatus = 
  | 'start' 
  | 'playing' 
  | 'confirming' 
  | 'revealing' 
  | 'answered' 
  | 'victory' 
  | 'game_over';

export interface GameHistoryRecord {
  date: string;
  playerName: string;
  score: number;
  maxScore: number;
  prizeWon: number;
  wonGame: boolean;
}
