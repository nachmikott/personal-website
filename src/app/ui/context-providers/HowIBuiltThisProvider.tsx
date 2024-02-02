'use client';

import { createContext, useState } from 'react'
 
interface HowIBuiltThisContextValue {
    useHowIBuiltThis: any,
    setUseHowIBuiltThis: any
}

export const HowIBuiltThisContext = createContext<HowIBuiltThisContextValue>({ useHowIBuiltThis: false, setUseHowIBuiltThis: () => {}})

export default function HowIBuiltThisProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [useHowIBuiltThis, setUseHowIBuiltThis] = useState(false);
  return <HowIBuiltThisContext.Provider value={{ useHowIBuiltThis, setUseHowIBuiltThis }}>{children}</HowIBuiltThisContext.Provider>
}