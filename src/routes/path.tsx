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
    '/legacy/shopee/berat',
    '/test',
    '/toped',
    '/productmanual',
    '/productmanual/:colid',
    '/productmanual/:colid/:pid',
  ] as const
  
export type Path = (typeof PATHS)[number]