import Vertex from "../../components/Vertex/Vertex";

export default function findComponents(graph,visited=[],count=0,components=[]){
    for(let i = 0;i<graph.vertices.length;i++){
        if(!visited.includes(graph.vertices[i].data)){
            count++
            const v = depthFirstSearch(graph.vertices[i],[])
            components.push(v)
        }
        
    }
    return {count,components}
}

function depthFirstSearch(startVertex:Vertex,visited:Array<Vertex>=[]):Array<any> {
    // if I already visited (return back to the beginning)
    if(visited.includes(startVertex.data)){
        // return visited vertices
        return visited;
    }
    // visit current vertex
    visited.push(startVertex.data);
    // and for all neighbours
    const neighbours = startVertex.edges.map(edge=>edge.end);
    neighbours.forEach(neighbour=>depthFirstSearch(neighbour, visited))
    return visited;
}

