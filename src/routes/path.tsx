export const PATHS = [
    '/',
    '/customgrab',
    '/grabsetting',
    '/setting'
  ] as const
  
export type Path = (typeof PATHS)[number]