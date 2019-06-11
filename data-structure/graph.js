import { addListener } from "cluster";

/**
 * 创建Graph 类
 */
function Graph() {
    var vertices = []; // 创建一个数组用来存储图中所有顶点的名字。
    var adjList = new Dictionary(); // 实例化字典来存储邻接表
    this.addVertex = function (v) {
        vertices.push(v);
        addListener.set(v, []);
    }
}



