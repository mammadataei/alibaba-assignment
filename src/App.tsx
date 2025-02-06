import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { QueryClientProvider } from '@/lib/query-client'
import { DirectionProvider } from '@radix-ui/react-direction'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'

import { router } from '@/router'

export function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NuqsAdapter>
        <DirectionProvider dir="rtl">
          <QueryClientProvider>
            <RouterProvider router={router} />
          </QueryClientProvider>
        </DirectionProvider>
      </NuqsAdapter>
    </Suspense>
  )
}
