import IGraph from './Graph';
import Vertex from '../Vertex/Vertex';

class Graph implements IGraph{
	vertices:Array<Vertex>
	isDirected:boolean
	isWeighted:boolean
	constructor(vertices:Array<Vertex>=[],isWeighted:boolean=true,isDirected:boolean=false){
		this.vertices= vertices;
		this.isDirected=isDirected;
		this.isWeighted=isWeighted;
	}
	addVertex(data:any):Vertex{
		const vertex = new Vertex(data);
		this.vertices.push(vertex)
		return vertex;
	}

	addEdge(v1:Vertex,v2:Vertex,weight:number):void{
		v1.addEdge(v2,weight)
		v2.addEdge(v1,weight)
	}
	print():void{
		this.vertices.forEach(vertice=>vertice.print())
	}
}
export default Graph;