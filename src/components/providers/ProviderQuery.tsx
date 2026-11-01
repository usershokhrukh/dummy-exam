"use client"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { useState } from 'react'

const ProviderQuery = ({children}: {children: React.ReactNode}) => {
  const [query, setQuery] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5
      }
    }
  }))
  return (
    <QueryClientProvider client={query}>{children}</QueryClientProvider>
  )
}

export default ProviderQuery