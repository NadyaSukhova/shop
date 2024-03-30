function cn(className:String, childName:String):String {
  const classnames = require("classnames");
  return classnames(className, childName).replace(" ", "-");
}

export default cn;