import { EnthusiasmAction } from '../action';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from 'constants/index';
export interface Enthusiasm { 
  languageName: string;
  enthusiasmLevel: number;
}
const initState= {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
}; 
export function enthusiasm(state: Enthusiasm = initState, action: EnthusiasmAction): Enthusiasm {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
        console.log('减少2')
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      console.log('减少')
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
  }
  console.log(state)
  return {...state}
}
