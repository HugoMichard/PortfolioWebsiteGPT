export default (datetime: string) => {
    console.log(datetime)
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(datetime).toLocaleDateString(undefined, options)
}
