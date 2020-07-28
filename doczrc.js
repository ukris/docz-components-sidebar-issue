export default {
  typescript: true,
  files: '**/*.{md,mdx}',
  menu: [
    { name: 'Components', menu: ['Avatar', 'AvatarGroup'] }
  ],
  base: 'src',
  port: 4000,
  ignore: [
    'README.md'
  ],
  codeSandbox: false,
}
