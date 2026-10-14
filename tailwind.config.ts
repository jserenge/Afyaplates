import type { Config } from 'tailwindcss';
export default { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { afya: { 50:'#eff9f2',100:'#d9f1df',500:'#2d8c5a',600:'#1f7047',900:'#143d2b' } }, fontFamily: { sans:['Arial','sans-serif'] } } }, plugins: [] } satisfies Config;
