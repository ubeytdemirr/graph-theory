import Vertex from '../Vertex/Vertex'
export default interface IGraph{
    vertices:Array<Vertex>
    isDirected:boolean,
    isWeighted:boolean,
    addVertex:(data:any)=>Vertex
    addEdge:(v1:Vertex,v2:Vertex)=>void
    print:()=>void
    
}