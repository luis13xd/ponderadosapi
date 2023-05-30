import { Period } from 'src/period/entities/period.entity';

export interface Faculty {
  title: string;
  description: string;
}

export interface Career {
  title: string;
  estimatedProgramDuration: string;
  numberOfAcademicCredits: number;
  academicLevel: string;
  levelOfEducation: string;
  admissionPeriodicity: string;
  trainingModality: string;
  degreeAwarded: string;
  sniesRegistry: string;
  faculty: Faculty;
}

export interface Ponderado {
  ponderado: number;
  career: Career;
}

export interface PonderadoByFaculty {
  faculty: string;
  ponderados: Ponderado[];
}

export interface PeriodsOfCareer {
  period: Period;
  value: number;
}
