import { ComponentChildrenProps } from '@/@types/interface';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MultiLayout({ children }: ComponentChildrenProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
