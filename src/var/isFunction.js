define( function() {
	"use strict";

	return function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      // 如何判断一个obj是函数?
      // 使用typeof并且排除obj是dom节点的情况
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };

} );
