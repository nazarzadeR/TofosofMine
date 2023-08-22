import * as yup from 'yup'

export function combineClassnames(
    defaults: string,
    classes: string | string[]
) {
    if (Array.isArray(classes)) {
        classes = classes.join(' ')
    }
    return defaults + ' ' + classes
}

export function mergeSchemas(...schemas: yup.AnyObject[]) {
    const [first, ...rest] = schemas

    return rest.reduce(
        (mergedSchema, schema) => mergedSchema.concat(schema),
        first
    )
}

export function getUserShortedName(username: string) {
    const firstAndLastName = username.split(' ')

    if (firstAndLastName.length >= 2)
        return `${firstAndLastName[0][0]}${firstAndLastName[1][0]}`

    return firstAndLastName[0][0]
}

export function random(max = 1, floatingFunc: 'ceil' | 'floor' = 'ceil') {
    return Math[floatingFunc](Math.random() * max)
}

export function randomFromArr<T = any>(arr: T[]): T | undefined {
    if (arr.length === 0) return

    return arr[random(arr.length, 'floor')]
}

export async function wait(milliseconds = 1000) {
    await new Promise((resolve) => setTimeout(resolve, milliseconds))
}
