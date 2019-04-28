define( function() {
	"use strict";

	return function isWindow( obj ) {
    
    // tobecontinued
    // 因为要使用obj的window属性,所以要先判断obj != null
    // 利用window.window === window
    // 氮素为啥不直接用 obj === window来判断呢?这样不是也可以吗
    // 而且现在这种方法我如果自己写一个对象,让它的window属性指向自身,这样不就会判断出来他也是window,不就出错了吗?
    // 所以为啥要用这种方法
		return obj != null && obj === obj.window;
	};

} );
