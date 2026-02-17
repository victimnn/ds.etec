'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FolderPlus,
  UserPlus,
  GraduationCap,
  LogOut,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/src/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/src/components/ui/collapsible'
import { Avatar, AvatarFallback } from '@/src/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/src/components/ui/dropdown-menu'
import { cn } from '@/src/lib/utils'

const navMain = [
  {
    title: 'Dashboard',
    url: '/',
    icon: LayoutDashboard,
  },
  {
    title: 'Alunos',
    icon: UserPlus,
    items: [
      { title: 'Listagem', url: '/alunos' },
      { title: 'Novo Aluno', url: '/novo-aluno' },
    ],
  },
  {
    title: 'Projetos TCC',
    icon: FolderPlus,
    items: [
      { title: 'Listagem', url: '/projetos' },
      { title: 'Novo Projeto', url: '/novo-tcc' },
    ],
  },
  {
    title: 'Cadastros Base',
    url: '/cadastros',
    icon: ShieldCheck,
  },
]

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()
  const [adminEmail, setAdminEmail] = React.useState('admin@etec.sp.gov.br')
  const isSubItemActive = (url: string) => pathname === url

  React.useEffect(() => {
    // Persistência do e-mail do admin
    const storedEmail = sessionStorage.getItem('admin_email')
    if (storedEmail) {
      setAdminEmail(storedEmail)
    } else {
      sessionStorage.setItem('admin_email', 'admin@etec.sp.gov.br')
    }
  }, [])

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    sessionStorage.removeItem('admin_email')
    window.location.href = '/login'
  }

  return (
    <Sidebar
      collapsible="none"
      className="h-svh border-r border-border/50 bg-card/50 backdrop-blur-2xl sidebar-item-transition"
      {...props}
    >
      <SidebarHeader className="h-20 flex flex-col justify-center border-b border-border/50 px-4 transition-all duration-300">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 shrink-0 sidebar-icon-glow">
            <GraduationCap className="size-6 animate-float" />
          </div>
          <div className="flex flex-col transition-all duration-300 ease-in-out overflow-hidden opacity-100 w-auto">
            <span className="font-extrabold text-lg leading-none tracking-tight">
              Admin<span className="text-primary italic">DS</span>
            </span>
            <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider mt-1 whitespace-nowrap">
              Painel de Gestão
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="mt-6 min-h-0 flex-1 px-3 transition-all duration-300">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="sidebar-group-label transition-opacity duration-300">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarMenu className="gap-1">
            {navMain.map(item => {
              const hasActiveChild =
                item.items?.some(subItem => isSubItemActive(subItem.url)) || false

              if (item.items) {
                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    className="group/collapsible"
                    defaultOpen={hasActiveChild}
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          isActive={hasActiveChild}
                          className="h-11 px-3 hover:bg-primary/5 sidebar-item-transition rounded-xl"
                        >
                          {item.icon && <item.icon className="size-[18px] transition-transform duration-300" />}
                          <span className="font-semibold text-sm">{item.title}</span>
                          <ChevronRight className="ml-auto size-4 text-muted-foreground/50 transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l-2 border-primary/10 ml-5 mt-1 pb-1">
                          {item.items.map(subItem => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === subItem.url}
                                className={cn(
                                  'h-10 px-4 transition-all duration-300 rounded-lg my-0.5',
                                  pathname === subItem.url
                                    ? 'sidebar-active-item'
                                    : 'text-muted-foreground/80 hover:text-foreground hover:bg-primary/5'
                                )}
                              >
                                <Link href={subItem.url}>
                                  <span className="text-[13px] font-medium">
                                    {subItem.title}
                                  </span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                )
              }

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    isActive={pathname === item.url}
                    className={cn(
                      'h-11 px-3 transition-all duration-300 rounded-xl my-0.5',
                      pathname === item.url
                        ? 'sidebar-active-item'
                        : 'text-muted-foreground/80 hover:text-foreground hover:bg-primary/5'
                    )}
                  >
                    <Link href={item.url}>
                      {item.icon && <item.icon className="size-[18px] transition-transform duration-300" />}
                      <span className="font-semibold text-sm">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className={cn(
        "border-t border-border/50 bg-muted/20 transition-all duration-300 p-4",
        "mt-auto"
      )}>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className={cn(
                    "w-full gap-3 hover:bg-primary/10 rounded-2xl transition-all duration-300 border border-transparent hover:border-primary/20 group overflow-hidden",
                    "justify-start px-3"
                  )}
                >
                  <Avatar className="h-9 w-9 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <AvatarFallback className="bg-primary/10 text-primary font-extrabold text-xs">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight transition-all duration-300 opacity-100 w-auto">
                    <span className="truncate font-bold text-foreground">Admin DS</span>
                    <span className="truncate text-[11px] text-muted-foreground font-medium">
                      {adminEmail || 'admin@etec.sp.gov.br'}
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                align="end"
                className="w-64 glass-card p-2 animate-in fade-in zoom-in duration-200"
              >
                <div className="px-2 py-3 mb-2 flex items-center gap-3 bg-primary/5 rounded-xl border border-primary/10">
                  <Avatar className="h-10 w-10 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-extrabold text-sm">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm leading-none">Administrador</span>
                    <span className="text-[10px] text-muted-foreground mt-1 truncate max-w-[140px]">
                      {adminEmail}
                    </span>
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-primary/10 mb-1" />
                <DropdownMenuItem
                  onClick={logout}
                  className="gap-3 px-3 py-2.5 text-destructive focus:text-destructive focus:bg-destructive/10 rounded-lg cursor-pointer transition-colors group/logout"
                >
                  <div className="p-1.5 bg-destructive/10 rounded-md group-hover/logout:bg-destructive group-hover/logout:text-white transition-colors">
                    <LogOut className="size-4" />
                  </div>
                  <span className="font-semibold">Sair do Sistema</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
