import { ISettings } from './settings';

interface IStore {
  input: string,
  settings: ISettings,
  output: string
}

export default IStore;