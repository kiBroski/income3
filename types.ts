export interface Job {
  id: string;
  title: string;
  tier: number;
  description: string;
  incomeRange: {
    beginner: string;
    top: string;
  };
  timeToFirstDollar: string;
  skills: string[];
  metrics: {
    aiRisk: number; // 1-5 (Low to High Risk) - Note: Text uses 1-5 or sometimes specific scores, normalizing to text
    longevity: number; // 1-10
    easeOfEntry: number; // 1-10
    barrierToMastery: number; // 1-10
  };
  tags: string[];
  bestFit: string;
}

export interface QuizState {
  urgency: 'immediate' | 'patient' | null;
  risk: 'averse' | 'seeking' | null;
  learningSpeed: 'quick' | 'slow' | null;
  technical: 'yes' | 'no' | null;
  capital: 'low' | 'moderate' | 'high' | null;
}

export type ViewState = 'dashboard' | 'directory' | 'wizard' | 'advisor' | 'blueprints';