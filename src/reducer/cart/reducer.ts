import { produce } from 'immer'
import { ActionTypes, Actions } from './actions'

export interface Item {
  id: string
  quantityCoffe: number
}

interface CartState {
  cart: Item[]
}

export function cartReducer(state: CartState, action: Actions) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return produce(state, (draft) => {
        const itemAlreadyAdded = draft.cart.find(
          (item) => item.id === action.payload.item.id,
        )
        if (itemAlreadyAdded) {
          itemAlreadyAdded.quantityCoffe += action.payload.item.quantityCoffe
        } else {
          draft.cart.push(action.payload.item)
        }
      })
  }
}
