// import { getServerSession } from 'next-auth';
// import { redirect } from 'next/navigation';
import { ReactNode } from "react";

import { NavBar } from "@/components/NabBar";

// import { nextAuthOptions } from '@/service/authOptions';

export default async function PrivateLayout({
  children,
}: {
  children: ReactNode;
}) {
  // const session = await getServerSession(nextAuthOptions);
  // if (!session) {
  //   redirect('/login');
  // }

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      {children}
    </div>
  );
}
