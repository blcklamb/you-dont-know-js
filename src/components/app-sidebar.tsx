import { Archive, Dices, Home, LogIn, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "홈",
    url: "/",
    icon: Home,
  },
  {
    title: "아카이브",
    url: "/archives",
    icon: Archive,
  },
  {
    title: "누구와 함께",
    url: "/with-whom",
    icon: Users,
  },
  {
    title: "돌려돌려 돌림판",
    url: "#",
    icon: Dices,
  },
  {
    title: "로그인",
    url: "/sign-in",
    icon: LogIn,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
