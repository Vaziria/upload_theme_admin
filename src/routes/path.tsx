export const PATHS = [
    '/',
    '/spin',
    '/account',
    '/customgrab',
    '/grabsetting',
    '/setting',
    '/tool',
    '/categmap',
    '/productstat',
    '/task',
    '/shopee/berat',
    '/test'
  ] as const
  
export type Path = (typeof PATHS)[number]