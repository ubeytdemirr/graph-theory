import Graph from "../../components/Graph/Graph";
import depthFirstSearch from "./depthFirstSearch";

describe("Testing depth first search", () => {
    const busNetwork = new Graph()
	const mersin = busNetwork.addVertex("Mersin")
	const adana = busNetwork.addVertex("Adana");
	const hatay = busNetwork.addVertex("Hatay");
	const gaziantep = busNetwork.addVertex("Gaziantep");
	busNetwork.addEdge(adana,gaziantep,223.5);
	busNetwork.addEdge(adana,mersin,85)
	busNetwork.addEdge(adana,hatay,178);
    busNetwork.addEdge(gaziantep,hatay,167)
    it("should traverse depth first I", () => {
        expect(depthFirstSearch(adana)).toEqual([ 'Adana', 'Gaziantep', 'Hatay', 'Mersin' ])  
    })
    it("should traverse depth first II", () => {
        expect(depthFirstSearch(mersin)).toEqual([ 'Mersin', 'Adana', 'Gaziantep', 'Hatay' ])  
    })
})