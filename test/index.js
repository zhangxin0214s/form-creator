var a = [{name:123},{name:3}];
var b = new Proxy(a,{});

b.filter(item =>item.name === 123)
console.log(a)
