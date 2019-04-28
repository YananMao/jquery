define( function() {
	"use strict";

	// rsingleTag matches a string consisting of a single HTML element with no attributes
	// and captures the element's name
	// 就一点点来看一下这个正则表达式
	// /^AB$/i		//匹配以A开始,以B结束的字符串,/i表示忽略大小写
	// A = < ( [a-z][^\/\0>:\x20\t\r\n\f]* ) [\x20\t\r\n\f]* \/?>
	// B = (?:<\/\1>|)
	// A = <([C][D]*)[E]*\/?>
	// (pattern)获取匹配,(?:pattern)非获取匹配
	// [C][D]*
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
} );
