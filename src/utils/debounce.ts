let timer: NodeJS.Timeout

export function debounce<Params extends unknown[]>(
    callback: (...args: Params) => void,
    timeout = 300
){
    return (...args: Params): void => {
        clearTimeout(timer)
        function callCallback () {
            callback(...args);
        }
        timer = setTimeout(callCallback, timeout)
    }
}
