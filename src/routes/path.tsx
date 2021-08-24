export const PATHS = [
    '/',
    '/customgrab',
    '/grabsetting',
    '/setting',
    '/tool',
    '/categmap',
    '/productstat'
  ] as const
  
export type Path = (typeof PATHS)[number]