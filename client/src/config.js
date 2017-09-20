export const API_ROOT = (process.env.NODE_ENV === 'production')
? 'https://api.shudong.wang/'
:'http://localhost:3000/'

export const CookieDomain = (process.env.NODE_ENV === 'production')
? '.shudong.wang'
: ''