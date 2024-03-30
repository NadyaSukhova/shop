function getImageURL(name:String):String {
    return require(`../assets/${name}`)
}
export {getImageURL};