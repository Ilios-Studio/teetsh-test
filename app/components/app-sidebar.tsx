import { Link, useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

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
            <AppSidebarItem key={item.title} item={item} />
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

function AppSidebarItem({ item }: { item: (typeof SIDEBAR_ITEMS)[number] }) {
  const isActive = useLocation().pathname === item.url;
  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link to={item.url}>
          <item.icon />
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
