import { ISettings } from './settings'


interface IUpdateInputAction {
  type: 'UPDATE_INPUT_TEXT',
  payload: {
    newText: string
  }
}

interface IRecomputeOutputAction {
  type: 'RECOMPUTE_OUTPUT'
}

interface IUpdateSettingsAction {
  type: 'UPDATE_SETTINGS',
  payload: {
    newSettings: ISettings
  }
}

type IAction = IUpdateInputAction | IUpdateSettingsAction | IRecomputeOutputAction

export default IAction;