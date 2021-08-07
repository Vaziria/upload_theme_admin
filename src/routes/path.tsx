export const PATHS = [
    '/',
    '/customgrab',
    '/grabsetting',
    '/setting',
    '/tool'
  ] as const
  
export type Path = (typeof PATHS)[number]