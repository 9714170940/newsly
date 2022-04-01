import {userAuthId, user_id} from '../../utils/constant'

export const setUserAuthId = (id) => {
    return {
        type:userAuthId,
        payload:id
    }
}

export const setUserId = (id) => {
    return {
        type:user_id,
        payload:id
    }
}