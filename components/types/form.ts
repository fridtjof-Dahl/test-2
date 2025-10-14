export interface FormData {
  itemPrice: number;
  loanAmount: number;
  loanTerm: number;
  name: string;
  email: string;
  phone: string;
  registrationNumber: string;
  kilometers: string;
  warranty: WarrantyType;
  adUrl: string;
  consent: boolean;
}

export type WarrantyType = 'none' | 'y1' | 'y2' | 'y3';

export interface WarrantyOption {
  label: string;
  price: number;
}

export const WARRANTIES: Record<WarrantyType, WarrantyOption> = {
  none: { label: 'Ingen garanti', price: 0 },
  y1: { label: '1 år', price: 11700 },
  y2: { label: '2 år', price: 18720 },
  y3: { label: '3 år', price: 24570 },
} as const;

export interface FormStep {
  step: number;
  title: string;
  isValid: boolean;
}
