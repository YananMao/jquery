// console.log($("#test"))
// console.log(document.getElementById('test').innerHTML);
// function test() {
//   console.log(arguments)
// }
// test(1,2,3,3,4,3,5)
// var arr =[1,2,3];
// var preservedScriptAttributes = {
//   type: true,
//   src: true,
//   noModule: true
// };

// function DOMEval( code, doc, node ) {
//   doc = doc || document;

//   var i,
//     script = doc.createElement( "script" );

//   script.text = code;
//   if ( node ) {
//     // 设置script标签的属性
//     for ( i in preservedScriptAttributes ) {
//       if ( node[ i ] ) {
//         script[ i ] = node[ i ];
//       }
//     }
//   }
//   // 
//   doc.head.appendChild( script ).parentNode.removeChild( script );
// }
// DOMEval('console.log("test")')