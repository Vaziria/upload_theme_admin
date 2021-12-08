export const PATHS = [
    '/',
    '/account',
    '/customgrab',
    '/grabsetting',
    '/setting',
    '/tool',
    '/categmap',
    '/productstat',
    '/task',
    '/shopee/berat'
  ] as const
  
export type Path = (typeof PATHS)[number]