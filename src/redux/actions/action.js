import {userAuthId} from '../../utils/constant'

export const setUserAuthId = (id) => {
    return {
        type:userAuthId,
        payload:id
    }
}