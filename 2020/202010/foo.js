// 从 ‘bar’ 模块中导入 hello
import hello from "bar";

var hungry = 'hippo';

export function awsome() {
    console.log(hello(hungry).toUpperCase());
}