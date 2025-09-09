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
      <main className="w-full px-4 max-w-full overflow-x-hidden bg-white">
        <nav className="h-[8vh] flex items-center  py-4">
          <SidebarTrigger />
          {shouldDisplayBackButton && (
            <Button asChild variant="ghost">
              <Link to="/programs" className="font-medium text-xs">
                <ArrowLeftIcon className="size-3" />
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
