const regex = [
    /public/,
];

export function applyCacheRoutes(instanceHttp) {
    for (let item of regex) {
        instanceHttp.__addFilter(item);
    }
}