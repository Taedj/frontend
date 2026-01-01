import { Metadata } from 'next';
import ProjectUI from './ProjectUI';

export const metadata: Metadata = {
    title: 'DentalTid | Taedj Dev',
    description: 'Your trusted dental companion'
};

export default function Page() {
    return <ProjectUI />;
}
