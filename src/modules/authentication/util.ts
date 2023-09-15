import { Roles } from './core/constants'

export function checkPermissionHas(
    expectation: string | undefined,
    list: Roles[]
) {
    if (expectation === undefined) return false

    return list.some((permission) => permission === expectation)
}
