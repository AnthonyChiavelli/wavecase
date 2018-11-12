import IAction from '../../types/action'
import { ISettings } from '../../types/settings'

export const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const RECOMPUTE_OUTPUT = 'RECOMPUTE_OUTPUT';

export function receiveInput(newText: string): IAction {
  return {
    type: UPDATE_INPUT_TEXT,
    payload: {
      newText
    }
  }
}
//
export function recomputeOutput(): IAction {
  return {
    type: RECOMPUTE_OUTPUT
  }
}

export function updateSettings(newSettings: ISettings): IAction {
  return {
    type: UPDATE_SETTINGS,
    payload: {
      newSettings
    }
  }
}

export function receiveSettingsUpdate(newSettings: ISettings)  {
  return (dispatch: Function) => {
    dispatch(updateSettings(newSettings));
    dispatch(recomputeOutput());
  }
}