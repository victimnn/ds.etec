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
  useSidebar,
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
  const { state } = useSidebar()
  const isCollapsed = state === 'collapsed'
  const [adminEmail, setAdminEmail] = React.useState('admin@etec.sp.gov.br')

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
      collapsible="icon"
      className="border-r bg-card/30 backdrop-blur-xl"
      {...props}
    >
      <SidebarHeader className="h-16 flex flex-col justify-center px-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="flex aspect-square size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <GraduationCap className="size-5" />
          </div>
          <div
            className={cn(
              'flex flex-col transition-opacity duration-300',
              isCollapsed && 'opacity-0 w-0'
            )}
          >
            <span className="font-bold text-base leading-none tracking-tight">
              Admin<span className="text-primary">DS</span>
            </span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 mt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="sidebar-group-label">
            Menu
          </SidebarGroupLabel>
          <SidebarMenu>
            {navMain.map(item => {
              if (item.items) {
                return (
                  <Collapsible
                    key={item.title}
                    asChild
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          tooltip={item.title}
                          className="h-10"
                        >
                          {item.icon && <item.icon className="size-4" />}
                          <span className="font-medium">{item.title}</span>
                          <ChevronRight className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90 text-muted-foreground" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub className="border-l border-primary/10 ml-4">
                          {item.items.map(subItem => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={pathname === subItem.url}
                                className={cn(
                                  'h-9 px-4 transition-all duration-200 rounded-lg my-0.5',
                                  pathname === subItem.url
                                    ? 'sidebar-active-item'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                                )}
                              >
                                <Link href={subItem.url}>
                                  <span className="text-xs">
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
                      'h-10 transition-all duration-200 rounded-lg my-0.5',
                      pathname === item.url
                        ? 'sidebar-active-item'
                        : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                    )}
                  >
                    <Link href={item.url}>
                      {item.icon && <item.icon className="size-4" />}
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border/50">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="w-full justify-start gap-3 hover:bg-primary/5 rounded-xl transition-all"
                >
                  <Avatar className="h-8 w-8 border border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-bold text-xs">
                      AD
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={cn(
                      'grid flex-1 text-left text-sm leading-tight transition-opacity duration-300',
                      isCollapsed && 'opacity-0 w-0'
                    )}
                  >
                    <span className="truncate font-bold">Admin</span>
                    <span className="truncate text-[10px] text-muted-foreground">
                      {adminEmail || 'admin@etec.sp.gov.br'}
                    </span>
                  </div>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                align="end"
                className="w-56 glass-card"
              >
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={logout}
                  className="gap-2 text-destructive focus:text-destructive focus:bg-destructive/10"
                >
                  <LogOut className="size-4" /> Sair do Sistema
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
