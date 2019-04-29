define( function() {
	"use strict";

	// rsingleTag matches a string consisting of a single HTML element with no attributes
	// and captures the element's name
	// 就一点点来看一下这个正则表达式
	// /^AB$/i		//匹配以A开始,以B结束的字符串,/i表示忽略大小写
	// A = < ( [a-z][^\/\0>:\x20\t\r\n\f]* ) [\x20\t\r\n\f]* \/?>
	// B = (?:<\/\1>|)
	// A = <([C][D]*)[E]*\/?>
	// (pattern)获取匹配,(?:pattern)非获取匹配,*匹配任意次(包括0次)
	// [C] = [a-z]		//匹配从a到z的字符
	// [D] = [^\/\0>:\x20\t\r\n\f]		
	//在[]中,^表示排除,在这里表示排除 '/' (需要在前面使用\来转义) '\0' (空字符null) '>' ':' '\x20'(空格) '\t'(tab) '\r'(回车) '\n'(换行) '\f'(换页)
	// [E] = [\x20\t\r\n\f]
	// \/?		// ?匹配0次或1次,\/匹配 '/'
	// B = (?:F|)		//匹配F或者''
	// F = <\/\1>		// 前面提到了(pattern)是获取匹配,\0可以获取到匹配的所有内容,\1 匹配获取的第一个分组,以此类推
	// 所以这里的\1可以匹配到前面([a-z][^\/\0>:\x20\t\r\n\f]*)获取到的内容,即html标签,这里可以保证匹配到的字符串类似
	// <span>blabla</span>  或者 <span>blabla  这种的
	return ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
} );
