define( [
  "../var/class2type",
  "../var/toString"
], function( class2type, toString ) {

"use strict";

// 这个函数应该是判断各种数据结构的统一接口吧
function toType( obj ) {
  if ( obj == null ) {
    return obj + "";
  }

  // Support: Android <=2.3 only (functionish RegExp)
  return typeof obj === "object" || typeof obj === "function" ?

    // 如果obj是引用类型或者是null
    class2type[ toString.call( obj ) ] || "object" :

    // 其他情况
    typeof obj;
}

return toType;
} );
