import Vertex from "../../../components/Vertex/Vertex";

export default function depthFirstSearch(startVertex:Vertex,visited:Array<Vertex>=[]):Array<any> {
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