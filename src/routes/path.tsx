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
    '/productmanual/:collection_name',
    '/productmanual/:collection_name/form',
    '/productmanual/:collection_name/form/:product_id',
  ] as const
  
export type Path = (typeof PATHS)[number]