
import React from 'react';
import { Metadata } from 'next';
import FeaturesUI from './FeaturesUI';

export const metadata: Metadata = {
  title: 'Features - DentalTid',
  description: 'Full feature report for DentalTid',
};

export default function FeaturesPage() {
  return <FeaturesUI />;
}
