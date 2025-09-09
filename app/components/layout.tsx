import { Link, useLocation } from "react-router";
import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

import { AppSidebar } from "./app-sidebar";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "./ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const shouldDisplayBackButton =
    useLocation().pathname.match(/^\/programs\/.+$/);
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full px-4 bg-sidebar/30 max-w-full overflow-x-hidden">
        <nav className="h-[8vh] flex items-center justify-between py-4">
          <SidebarTrigger />
          {shouldDisplayBackButton && (
            <Button asChild variant="ghost">
              <Link to="/programs" className="font-medium">
                <ArrowLeftIcon />
                Retour
              </Link>
            </Button>
          )}
        </nav>
        {children}
      </main>
    </SidebarProvider>
  );
}
