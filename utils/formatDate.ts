export default (datetime: string) => {
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(datetime).toLocaleDateString(undefined, options)
}
