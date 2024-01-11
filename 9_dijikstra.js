/**
 * Algorithm Dijikstra
 * Поиск кратчайшего пути
 * 
 * Petqa gnanq A - G. nshumenq cucakum ketery voronq vor karanq gnanq arajin ketic, isk mnacacy hamarvumen anhasaneli.
 * Hasnumenq A-ic gnacox ketery u nshumenq dranq vorpes arden aycelac keter. U nayumenq en ketery voronq vor karanq gnanq B-ic u C-ic, u cucakum nshumenq znachenyanery te inchqanumenq hasnum B-ic depi myusy u C-ic depi myusy et keteri u noric nshum vorpes arden nayac
 */
const graph = {};
graph.a = { b: 2, c: 1 };
graph.b = { f: 7 };
graph.c = { d: 5, e: 2 };
graph.d = { f: 2 };
graph.e = { f: 1 };
graph.f = { g: 1 };
graph.g = {};

function shortPath(graph, start, end) {
    const costs = {}; // List to keep the shortest ways
    const processed = []; // Array to keep visited nodes
    let neighbors = {}; // Neighbor tops of current node
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node];
            costs[node] = value || Infinity;
        }
    });
    let node = findNodeLowestCost(costs, processed);
    while (node) {
        const cost = costs[node];
        neighbors = graph[node];
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        });
        processed.push(node);
        node = findNodeLowestCost(costs, processed);
    }
    return costs;
}

function findNodeLowestCost(costs, processed) {
    let lowestCost = Infinity;
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node];
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost;
            lowestNode = node;
        }
    });
    return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));