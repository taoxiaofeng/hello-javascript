/**
 * 创建Graph 类
 */
function Graph() {
    // 创建一个数组用来存储图中所有顶点的名字。
    var vertices = [];
    // 实例化字典来存储邻接表
    var adjList = new Dictionary();

    // 向图中添加一个新的顶点（因为图实例化后是空的）
    this.addVertex = function (v) {
        // 方法接受顶点v作为参数 , 将该顶点添加到顶点列表中
        vertices.push(v);
        // 在邻接表中， 设置顶点v作为键对应的字典值为一个空数组
        adjList.set(v, []);
    }

    // addEdge个方法用来添加顶点之间的边
    // 接受两个顶点作为参数   
    this.addEdge = function (v, w) {
        // 将w加入到v的邻接表中，我们添加了一条自顶点v到顶点w的边
        // 实现有向图
        adjList.get(v).push(w);
        // 实现无向图  需要添加一条自W 向 V 的边
        adjList.get(w).push(v);
    }

    // 实现 Graph 类的 toString方法， 便于在控制台中输出
    this._toString = function () {
        var s = '';
        // 迭代vertices数组列表，将顶点的名字加入字符串s中
        for (let i = 0; i < vertices.length; i++) {
            s += vertices[i] + '->';
            // 取得该顶点的邻接表
            var neighbors = adjList.get(vertices[i]);
            // 同样也迭代该邻接表，将相邻顶点加入我们的字符串
            for (let j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            // 邻接表迭代完成后，给我们的字符串添加一个换行符
            s += '\n';
        }
        return s;
    }


    /**
     * 广度优先搜索 Breadth-First-Search  BFS
     * 通过将顶点存入栈中,顶点是沿着路径被探索的，存在新的相邻顶点就去访问
     */

    /**
     * 广度优先搜索和深度优先搜索都需要标注被访问过的顶点。
     * 为此，我们将使用一个辅助数组color。由于当算法开始执行时，
     * 所有的顶点颜色都设置为white(白色)，所以我们可以创建一个辅助函数initializeColor，
     * 为这两个算法执行此初始化操作。
     */
    var initializeColor = function () {
        var color = [];
        for (let i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    }

    // 创建 广度优先搜索 （Breadth-First Search，BFS）方法
    this.bfs = function (v, callback) {
        // 用initializeColor函数来将color数组初始化为white
        var color = initializeColor(),
            // 声明创建 queue 实例，用于存储待访问 和 待探索的顶点。
            queue = new Queue();
        // bfs 方法接受一个顶点作为算法的起始点。起始点是必要的，将此顶点入队列。
        queue.enqueue(v);

        // 如果队列非空
        while (!queue.isEmpty()) {
            // 将通过出队列操作从队列中移除一个顶点，
            var u = queue.dequeue(),
                // 并取得一个包含其所有邻点的邻接表
                neighbors = adjList.get(u);

            // 该顶点将被标注为grey，表示我们发现了它（但还未完成对其的探索）。
            color[u] = 'grey';

            // 遍历 u (邻接列表) 的每个邻点
            for (let i = 0; i < neighbors.length; i++) {
                // 取的其值 (该顶点的名字)
                var w = neighbors[i];
                // 判断如果该 邻点还未被访问过 (邻点的颜色为white，是未被访问过的)
                if (color[w] === 'white') {
                    // 将其标注为我们已经发现了它 (颜色设置为 grey)
                    color[w] = 'grey';
                    // 并将这个顶点加入队列中，这样当其从队列中出列的时候，我们可以完成对其的探索。
                    queue.enqueue(w);
                }
            }
            // 当完成探索该顶点和其相邻顶点后， 我们将该顶点标注为已探索过的（颜色设置为black）
            color[u] = 'black';

            // 实现的 bfs 方法也接受一个回调，这个参数是可选的，如果我们传递了回调函数，会用到它。
            if (callback) {
                callback(u);
            }
        }
    }


    /**
     * 使用BFS寻找最短路径
     * 到目前为止，我们只展示了BFS算法的工作原理。我们可以用该算法做更多事情，
     * 而不只是输出被访问顶点的顺序
     * 例如：给定一个图G和源顶点v，找出对每个顶点u，u和v之间最短路径的距离（以边的数量计）。
     * 对于给定顶点v，广度优先算法会访问所有与其距离为1的顶点，接着是距离为2的顶点，
     * 以此类推。所以，可以用广度优先算法来解这个问题。我们可以修改bfs方法以返回给我们一些信息：
     *  从v到u的距离d[u]；
     *  前溯点pred[u]，用来推导出从v到其他每个顶点u的最短路径。
     */

    //改进版的 BFS 算法 解决以上问题
    this.BFS = function (v) {
        var color = initializeColor(),
            queue = new Queue(),
            // 声明数组 d (distance) 表示距离
            d = [],
            // 声明 pred 数组来表示前溯点
            pred = [];
        queue.enqueue(v);

        // 是对图中的每一个顶点，用 0 来初始化数组 d ，用 null 来初始化数组 pred 。
        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }

        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (let i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    // 发现顶点u的邻点w时，则设置w的前溯点值为u。我们还通过给d[u]加1来
                    // 设置v和w之间的距离（u是w的前溯点，d[u]的值已经有了）。
                    d[w] = d[u] + 1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        // 方法返回一个包含 d 和 pred 的对象
        return {
            distances: d,
            predecessors: pred
        };
    };

    /**
     * 实现深度优先搜搜
     * 深度优先搜索算法将会从第一个指定的顶点开始遍历图，
     * 沿着路径直到这条路径最后一个顶点被访问了，
     * 接着原路回退并探索下一条路径。
     * 深度优先搜索的步骤是递归的
     */
    this.dfs = function (callback) {
        // 创建颜色数组并用值white为图中的每个顶点对其做初始化
        var color = initializeColor();
        // 对于图实例中每一个未被访问过的顶点，
        // 调用私有的递归函数dfsVisit，传递的参数为顶点、颜色数组以及回调函数
        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, callback);
            }
        }
    };

    var dfsVisit = function (u, color, callback) {
        // 当访问u顶点时，我们标注其为被发现的（grey）
        color[u] = 'grey';

        // 如果有callback函数的话，则执行该函数输出已访问过的顶点
        if (callback) {
            callback(u);
        }

        // 取得包含顶点u所有邻点的列表
        var neighbors = adjList.get(u);

        // 对于顶点u的每一个未被访问过（颜色为white）的邻点w，
        // 我们将调用dfsVisit函数，传递w和其他参数（添加顶点w入栈，
        // 这样接下来就能访问它）
        for (let i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                dfsVisit(w, color, callback);
            }
        }

        // 最后，在该顶点和邻点按深度访问之后，
        // 我们回退，意思是该顶点已被完全探索，
        // 并将其标注为black
        color[u] = 'black';
    }

    /**
     * 探索深度优先算法
     * 到目前为止，我们只是展示了深度优先搜索算法的工作原理。
     * 我们可以用该算法做更多的事情，而不只是输出被访问顶点的顺序。
     * 对于给定的图G，我们希望深度优先搜索算法遍历图G的所有节点，
     * 构建“森林”（有根树的一个集合）以及一组源顶点（根），
     * 并输出两个数组：发现时间和完成探索时间。我们可以修改dfs方法来返回给我们一些信息：
     *  顶点u的发现时间d[u]；
     *  当顶点u被标注为黑色时，u的完成探索时间f[u]；
     *  顶点u的前溯点p[u]。
     */

    // 改进版的 DFS 方法的实现

    // 声明一个变量来要追踪发现时间和完成探索时间
    var time = 0;
    this.DFS = function () {
        var color = initializeColor(),
            d = [],
            f = [],
            p = [];
        time = 0;
        for (let i = 0; i < vertices.length; i++) {
            d[vertices[i]] = 0;
            f[vertices[i]] = 0;
            p[vertices[i]] = null;
        }
        for (let i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                dfsVisit(vertices[i], color, d, f, p);
            }
        }
        return {
            discovery: d,
            finished: f,
            predecessors: p
        }
    }

    var DFSVisit = function (u, color, d, f, p) {
        console.log('discovered ' + u);
        color[u] = 'grey';
        d[u] = ++time;
        var neighbors = adjList.get(u);
        for (let i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u;
                DFSVisit(w, color, d, f, p);
            }
            color[u] = 'black';
            f[u] = ++time;
            console.log('explored ' + u);
        }


    }


}

// 测试 Graph 类
var graph = new Graph();
// 创建数组 包含想添加到图中的顶点。
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
// 遍历 vertices 数组并将其中的值逐一添加到我们的图中
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// 控制台中打印 Graph 类测试结果
// console.log (graph._toString());

/**
 * 输出如下：
    A -> B C D
    B -> A E F
    C -> A D G
    D -> A C G H
    E -> B I
    F -> B
    G -> C D
    H -> D
    I -> E
    一个漂亮的邻接表！从该输出中，我们知道顶点A有这几个相邻顶点：B、C和D。
 */

/**
 * 测试 bfs 算法
 * 声明一个回调函数在浏览器控制台上输出已经被完全探索过的顶点的名字
 * 然后调用bfs方法，给它传递第一个顶点
 * @param {*} value 
 * 
 */
function printNode(value) {
    console.log('Visited vertex: ' + value);
}

// 调用bfs方法，给它传递第一个顶点 和 回调函数
graph.bfs(myVertices[0], printNode);

// 执行 BFS 方法 ， 并将返回值存在一个变量中
var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);

// 对顶点A 执行BFS 方法，将会输入：
// distances: [A: 0, B: 1, C: 1, D: 1, E: 2, F: 2, G: 2, H: 2 , I: 3],
// predecessors: [A: null, B: "A", C: "A", D: "A", E: "B", F: "B", G: "C", H: "D", I: "E"]

//这意味着顶点A与顶点B、C和D的距离为1；与顶点E、F、G和H的距离为2；与顶点I的距离为3。


//这段代码来构建从顶点A到其他顶点的路径
var fromVertex = myVertices[0];
// 对于每个其他顶点（除了顶点A），我们会计算顶点A到它的路径
for (let i = 1; i < myVertices.length; i++) {
    // 从顶点数组得到toVertex
    var toVertex = myVertices[i],
        // 然后会创建一个栈来存储路径值
        path = new Stack();
    // 接着，我们追溯toVertex到fromVertex的路径
    for (var v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
        // 变量v被赋值为其前溯点的值，这样我们能够反向追溯这条路径。将变量v添加到栈中
        path._push(v);
    }
    // 最后，源顶点也会被添加到栈中，以得到完整路径。
    path._push(fromVertex);
    // 我们创建了一个s字符串，并将源顶点赋值给它（它是最后一个加入栈中的，所以它是第一个被弹出的项 ）。
    var s = path._pop();
    while (!path.isEmpty()) {
        // 当栈是非空的，我们就从栈中移出一个项并将其拼接到字符串s的后面
        s += ' _ ' + path._pop();
    }
    // 在控制台上输出路径
    console.log(s);
}

// 测试深度优选搜索
graph.dfs(printNode);













