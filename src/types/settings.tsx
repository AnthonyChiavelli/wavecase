export type ISettings = {
  mode: 'alternating',
  ignoreCrud: boolean
} | {
  mode: 'randomized',
  upperCaseBias: number,
  ignoreCrud: boolean
}