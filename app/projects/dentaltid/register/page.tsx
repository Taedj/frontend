
import { Metadata } from 'next';
import RegistrationUI from './RegistrationUI';

export const metadata: Metadata = {
  title: 'Register - DentalTid',
  description: 'Create your account for DentalTid',
};

export default function RegisterPage() {
  return <RegistrationUI />;
}
