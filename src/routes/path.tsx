export const PATHS = [
    '/',
    '/customgrab',
    '/grabsetting',
    '/setting',
    '/tool',
    '/categmap',
    '/productstat',
    '/promo'
  ] as const
  
export type Path = (typeof PATHS)[number]