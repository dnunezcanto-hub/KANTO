import React, { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export interface PricingFeature {
  text: string;
  included: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}