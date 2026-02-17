import type React from 'react'
import { adminMetadata } from '@/app/admin/metadata'
import { AdminLayoutClient } from '@/src/components/admin/admin-layout-client'
import './globals.css'

export const metadata = adminMetadata

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <AdminLayoutClient>{children}</AdminLayoutClient>
}
