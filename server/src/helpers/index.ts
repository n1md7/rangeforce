export function deepCopy<List = any>(list: List): List {
    return JSON.parse(JSON.stringify(list));
}
