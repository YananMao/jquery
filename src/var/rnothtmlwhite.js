define( function() {
	"use strict";

	// Only count HTML whitespace
	// Other whitespace should count in values
	// https://infra.spec.whatwg.org/#ascii-whitespace
	// \x20 是ASC码32,表示空格
	// \t tab
	// \r 回车符
	// \n 换行符
	// \f 换页符
	// [abc]匹配a b c 中的任意一个
	return ( /[^\x20\t\r\n\f]+/g );
} );
