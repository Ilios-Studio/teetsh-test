import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

import { AppSidebar } from "./app-sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full px-4">
        <header className="flex items-center py-4">
          <SidebarTrigger />
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
}
