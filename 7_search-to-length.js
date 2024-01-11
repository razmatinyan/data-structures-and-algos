/**
 * Поиск в ширину в графе
 */
const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

function bearthSearch(graph, start, end) {
    let queue = [];
    queue.push(start);
    while (queue.length > 0) {
        const current = queue.shift();
        if (!graph[current]) {
            graph[current] = [];
        }

        if (graph[current].includes(end)) {
            return true;
        } else {
            queue = [...queue, ...graph[current]]; // noric dnumenq gagatnery u arden ancac gagaty vor fra michev gtni
        }
    }
    return false;
}

console.log(bearthSearch(graph, 'a', 'g'));