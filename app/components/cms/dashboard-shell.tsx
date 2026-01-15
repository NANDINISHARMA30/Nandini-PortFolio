"use client"

import type * as React from "react"
import { Search, Bell, Settings, LogOut, Grid, Briefcase, Code, FileText, Layout, ExternalLink } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { PreviewWindow } from "./preview-window"
import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  SidebarFooter,
} from "@/app/components/ui/sidebar"

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-background overflow-hidden">
        <Sidebar className="border-r border-border/50">
          <SidebarHeader className="p-4 border-b border-border/50">
            <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
                <Layout className="w-5 h-5" />
              </div>
              <span>
                Portfoli<span className="text-primary">OS</span>
              </span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu className="p-2 gap-1">
              {[
                { label: "Overview", icon: Grid, href: "/admin" },
                { label: "Projects", icon: Briefcase, href: "/admin/projects" },
                { label: "Skills", icon: Code, href: "/admin/skills" },
                { label: "Blog", icon: FileText, href: "/admin/blog" },
                { label: "Settings", icon: Settings, href: "/admin/settings" },
              ].map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    className="hover:bg-accent/50 transition-colors"
                  >
                    <Link href={item.href}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-border/50">
            <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground">
              <LogOut className="w-4 h-4" />
              <span>Sign out</span>
            </Button>
          </SidebarFooter>
        </Sidebar>

        <main className="flex-1 flex flex-col min-w-0">
          <header className="h-16 border-b border-border/50 flex items-center justify-between px-6 bg-card/30 backdrop-blur-sm z-10">
            <div className="flex items-center gap-4 flex-1 max-w-xl">
              <SidebarTrigger />
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search assets, projects..."
                  className="pl-10 bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary/50"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                className="hidden md:flex gap-2 bg-transparent"
                onClick={() => setIsPreviewOpen(true)}
              >
                <ExternalLink className="w-4 h-4" />
                View Site
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background" />
              </Button>
              <Avatar className="w-8 h-8 cursor-pointer ring-2 ring-transparent hover:ring-primary/50 transition-all">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto p-6 space-y-8">{children}</div>
        </main>
      </div>

      {isPreviewOpen && <PreviewWindow onClose={() => setIsPreviewOpen(false)} />}
    </SidebarProvider>
  )
}
