# Shortest Path

Given a weighted graph find the shortest path of edges from node A to node B.


## Algorithms

- BFS
- Dijkstra's Shortest Path Algorithm
- Bellman-Ford 
- Floyd-Warshall
- A* 
- ... 


# Connectivity 

Does there exist path between node A and node B ? 



Typical solution : Use union find data structure or any search algorithm 

eg: (DFS)



# Negative cycles

Does my weighted digraph have any negative cycles if so where ?

## Algorithms 

- Bellman-Ford
- Floyd-Warshall


# Strongly Connected Components


Strongly connected components can be thought of as self-contained cycles within a directed graph where every vertex in a given cycle can reach every other vertex in the same cycle.


## Algorithms 


- Tarjan's and Kosaraju's algorithm


# Traveling Salesman Problem of



Given a list of cities and distances between each pair of cities what is the shortest path possible route that visit each city exactly once and returns to the origin city ?


The TSP problem is NP-Hard meaning its a very computationally challenging problem. This is unfortunate because the TSP has several very important applications.




## Algorithms 

- Held-Karp
- Branch and bound
- Ant colony optimization...


# Bridges


A bridge / cut edge is any edge in a graph whose removal increases the number of connected components.

Bridges are important in graph theory because  they often hint a weak points , bottlenecks or vulnerabilities in a graph.


# Articulation points


An articulation point / cut vertex is any node in a graph whose removal increases the number of connected components.


Articulation points are important in graph theory because they often hint a weak points or vulnerabilities in a graph.



# Minimum Spanning Tree


A minimum spanning tree (MST) is a subset of the edges of a connected , edge-weighted graph that connects all the vertices together, without any cycles and with the minimum possible total edge weight.


Use cases : a least cost network, circuit design , transportation networks ... 
## Algorithms 


- Kruskal's,
- Prim's & Boruvka's algorithm

# Network Flow : Max Flow

With an infinite input source  how much flow can we push through the network ? 

Suppose the edges are roads with cars, pipes with water or hallways with packed with people. Flow represents the volume of water allowed to flow through the pipes, the number of cars the roads can sustain in traffic and the maximum amount of people can navigate though the hallways.


## Algorithms

- Ford-Fulkerson

- Edmonds-Karp & Dinic's algorithm

