class Graph {

    constructor() {

        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []


    }

    addEdge(v1, v2) {

        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            this.adjacencyList[v1].push(v2)
            this.adjacencyList[v2].push(v1)
            return this.adjacencyList
        }
        else {

            return "at least one of these verteces doesn't exist"

        }

    }

    removeEdge(v1, v2) {

        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {

            // filter and return the array of all values in v1's adjacency list that are not v2 
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(
                v => v !== v2
            )
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(
                v => v !== v1
            )
            return this.adjacencyList

        }
    }

    removeVertex(v1) {

        if (this.adjacencyList[v1]) {
            // first we remove each edge int eh adjacency list of our vetex we want to delete
            this.adjacencyList[v1].forEach(
                v2 => this.removeEdge(v1, v2)
            )
            // next, we delete the vertext, itself
            delete this.adjacencyList[v1]
        }
        return this.adjacencyList

    }

}


g = new Graph()

g.addVertex('tokyo')
g.addVertex('dallas')
g.addVertex('san francisco')

g.addEdge('tokyo', 'dallas')
g.addEdge('tokyo', 'san francisco')
g.addEdge('dallas', 'san francisco')

console.log(g.adjacencyList)

g.removeVertex('tokyo')

console.log(g.adjacencyList)

