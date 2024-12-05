import type { Metadata } from "next";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "YDKJS 스터디 커뮤니티",
  description: "You don't know JS를 읽는 스터디의 아카이빙",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className={`antialiased`}>
        <SidebarProvider>
          <AppSidebar />
          <main className="w-screen">
            <div className="w-full flex items-center gap-2 p-2">
              <SidebarTrigger />
              <div className="font-bold">🍌 제궁사 스터디</div>
            </div>
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
