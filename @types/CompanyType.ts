export interface CompanyType {
  id: number;
  userName: string;
  name: string;
  location: string;
  level: number;
  job: string;x
  field: string;
  description: string;
  question: QuestionType[];
}

export interface QuestionType {
  questionId: number;
  answerId: number;
  answer: string;
  voiceUrl: string;
  videoUrl: string;
}
