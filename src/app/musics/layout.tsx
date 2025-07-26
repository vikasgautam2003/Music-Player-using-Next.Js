// layout.tsx inside /musics

import { ReactNode } from 'react'

export default function MusicLayout({
  children,
  sidebar,
  songs,
  player,
}: {
  children: ReactNode
  sidebar: ReactNode
  songs: ReactNode
  player: ReactNode
}) {
  return (
    <div className="flex w-full">
      <aside>
        {sidebar}
      </aside>
      <main className="flex-1 p-6 bg-gray-800">
        
        {songs}
        {player}
        {children}
      </main>
    </div>
  )
}
