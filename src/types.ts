export type SubjectType = 'php' | 'c_ds';
export type SetType = 'SET A' | 'SET B' | 'SET C';

export interface Problem {
  id: string;
  title: string;
  marathiTitle: string;
  subject: SubjectType;
  set: SetType;
  description: string;
  marathiNote?: string;
  filename: string;
  code: string;
  explanation: {
    en: string;
    mr: string;
  };
  keyTakeaways?: string[];
  inputFields?: {
    name: string;
    label: string;
    type: 'text' | 'number' | 'select' | 'radio' | 'date' | 'textarea';
    defaultValue?: string | number;
    options?: { label: string; value: string }[];
    min?: number;
    max?: number;
    step?: string;
    required?: boolean;
  }[];
}
