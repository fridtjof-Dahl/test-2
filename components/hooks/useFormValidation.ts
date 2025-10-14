import { useMemo } from 'react';
import { FormData } from '../types/form';

export function useFormValidation(formData: FormData, step: number) {
  return useMemo(() => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    
    // Step 1 validation
    if (step >= 1) {
      if (formData.itemPrice < 50000) {
        errors.itemPrice = 'Gjenstandspris må være minst 50 000 kr';
      }
      if (formData.loanAmount < 0) {
        errors.loanAmount = 'Lånebeløp kan ikke være negativt';
      }
      if (formData.loanAmount > formData.itemPrice) {
        errors.loanAmount = 'Lånebeløp kan ikke være høyere enn gjenstandspris';
      }
    }
    
    // Step 2 validation
    if (step >= 2) {
      if (formData.loanTerm < 1) {
        errors.loanTerm = 'Nedbetalingstid må være minst 1 år';
      }
      if (formData.loanTerm > 10) {
        errors.loanTerm = 'Nedbetalingstid kan ikke være mer enn 10 år';
      }
    }
    
    // Step 3 validation - only show errors after user has interacted with fields
    if (step >= 3) {
      // Only validate name if user has started typing
      if (formData.name.trim() === '' && formData.name.length > 0) {
        errors.name = 'Navn er påkrevd';
      }
      
      // Only validate email if user has started typing
      if (formData.email.trim() === '' && formData.email.length > 0) {
        errors.email = 'E-post er påkrevd';
      } else if (formData.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Ugyldig e-postadresse';
      }
      
      // Only validate phone if user has started typing
      if (formData.phone.trim() === '' && formData.phone.length > 0) {
        errors.phone = 'Telefonnummer er påkrevd';
      }
      
      // Only validate registration number if user has started typing
      if (formData.registrationNumber.trim() === '' && formData.registrationNumber.length > 0) {
        errors.registrationNumber = 'Registreringsnummer er påkrevd';
      } else if (formData.registrationNumber.length > 0 && !/^[A-Z]{2}\d{5}$/.test(formData.registrationNumber)) {
        errors.registrationNumber = 'Ugyldig format (f.eks. AB12345)';
      }
      
      // Only validate kilometers if user has started typing
      if (formData.kilometers.trim() === '' && formData.kilometers.length > 0) {
        errors.kilometers = 'Kilometerstand er påkrevd';
      } else if (formData.kilometers.length > 0 && (isNaN(Number(formData.kilometers)) || Number(formData.kilometers) < 0)) {
        errors.kilometers = 'Ugyldig kilometerstand';
      }
      
      // Only validate consent if user has tried to submit
      if (!formData.consent && (formData.name.length > 0 || formData.email.length > 0)) {
        errors.consent = 'Du må godta vilkårene';
      }
    }
    
    // For step navigation, we need different validation logic
    const isStepValid = (step: number): boolean => {
      if (step === 1) {
        return formData.itemPrice >= 50000 && formData.loanAmount >= 0 && formData.loanAmount <= formData.itemPrice;
      }
      if (step === 2) {
        return formData.loanTerm >= 1 && formData.loanTerm <= 10;
      }
      if (step === 3) {
        return formData.name.trim() !== '' && 
               formData.email.trim() !== '' && 
               /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
               formData.phone.trim() !== '' && 
               formData.registrationNumber.trim() !== '' && 
               /^[A-Z]{2}\d{5}$/.test(formData.registrationNumber) &&
               formData.kilometers.trim() !== '' && 
               !isNaN(Number(formData.kilometers)) && 
               Number(formData.kilometers) >= 0 &&
               formData.consent;
      }
      return true;
    };
    
    const isValid = isStepValid(step);
    
    return { errors, isValid };
  }, [formData, step]);
}
