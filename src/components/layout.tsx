import { PropsWithChildren } from 'react'
import { Header } from './header'

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>{children}</main>
    </div>
  )
}
