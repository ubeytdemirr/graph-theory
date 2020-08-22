import IEdge from './Edge';
import Vertex from '../Vertex/Vertex';

class Edge implements IEdge{
	start:Vertex;
	end:Vertex;
	weight:number;
	constructor(start:Vertex,end:Vertex,weight:number){
		this.start=start;
		this.end=end;
		this.weight=weight;
	}
}
export default Edge;
