
import { Metadata } from 'next';
import DashboardUI from './DashboardUI';

export const metadata: Metadata = {
  title: 'Dashboard - DentalTid',
  description: 'Manage your DentalTid account',
};

export default function DashboardPage() {
  return <DashboardUI />;
}
