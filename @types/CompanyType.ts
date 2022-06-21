export interface CompanyType {
  id: number;
  userName?: string;
  name: string;
  location: string;
  level: number;
  job: string;
  field: string;
  description: string;
  question: QuetionType[];
}

export interface QuetionType {
  id: number;
  questionId: number;
  question: string;
  questionAnswers: QuestionAnswerType[];
}

export interface QuestionAnswerType {
  id: number;
  answer: string;
  questionId: number;
  userId: number;
  videoUrl: string;
  voiceUrl: string;
}

export interface CompanyListType {
  description: string;
  field: string;
  id: number;
  job: string;
  level: number;
  location: string;
  name: string;
  questionCnt: number;
}
