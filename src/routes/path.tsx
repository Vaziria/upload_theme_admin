export const PATHS = [
    '/',
    '/customgrab',
    '/grabsetting',
    '/setting',
    '/tool',
    '/categmap',
    '/productstat',
    '/task'
  ] as const
  
export type Path = (typeof PATHS)[number]