import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

import { Link } from "react-router";
import { SIDEBAR_ITEMS } from "~/lib/constants";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <img src="/logo.png" alt="Teetsh" className="w-1/2 object-contain" />
      </SidebarHeader>
      <SidebarContent className="p-4">
        <SidebarMenu>
          {SIDEBAR_ITEMS.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link to={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
