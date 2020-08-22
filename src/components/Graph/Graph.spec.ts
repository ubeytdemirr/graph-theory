import Graph from "./Graph"

describe('Testing Graph class...',()=>{
	const busNetwork = new Graph()
	it('it should construct correctly',()=>{
		expect(busNetwork.isWeighted).toBe(true);
		expect(busNetwork.isDirected).toBe(false);
	})
	const mersin = busNetwork.addVertex("Mersin")
	const adana = busNetwork.addVertex("Adana");
	const hatay = busNetwork.addVertex("Hatay");
	const gaziantep = busNetwork.addVertex("Gaziantep");
	it("should add vertex",()=>{
		expect(busNetwork.vertices.includes(adana)).toBe(true)
	})
	busNetwork.addEdge(adana,gaziantep,223.5);
	busNetwork.addEdge(adana,mersin,85)
	busNetwork.addEdge(adana,hatay,178);
	busNetwork.addEdge(gaziantep,hatay,167)
	it("should add edge",()=>{
		expect(gaziantep.edges.length).toBe(2)
	})
	
})