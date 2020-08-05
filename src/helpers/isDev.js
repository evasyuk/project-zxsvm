export const isDEV = () => {
    try {
        return __DEV__
    } catch (e) {
        return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
    }
}