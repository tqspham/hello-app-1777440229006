import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hello App',
  description: 'A simple hello application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
