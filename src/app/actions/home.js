import * as types from "constants/action-types"

export function fetchJunShi() {
  return {
    type: types.FETCH_JUNSHI,
  }
}

export function receiveJunShi(junshi) {
  return {
    type: types.RECEIVE_JUNSHI,
    junshi,
  }
}
