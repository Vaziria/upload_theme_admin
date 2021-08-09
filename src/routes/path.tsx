export const PATHS = [
    '/',
    '/customgrab',
    '/grabsetting',
    '/setting',
    '/tool',
    '/categmap'
  ] as const
  
export type Path = (typeof PATHS)[number]