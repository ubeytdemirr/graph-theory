#  Adjacency List


```js

{
    A:[{B:4},{C:1}],
    B:[{C:6}],
    C:[{A:4},{B:1},{D:2}],
    D:[]
}

// Eg : Node C can reach A with cost 4 , B with cost 1 , D with cost 2

```

| Pros                                           |                    Cons                    |
|------------------------------------------------|:------------------------------------------:|
| Space efficient for  representing sparse graphs*|            Less space efficient for denser graphs         |
| Iterating over all edges is efficient                     | Edge weight look up is O(E) |
|     -     |   Slightly more complex graph representation


*Sparse graph is a graph in which the number of edges is close to the minimal number of edges. Sparse graph can be a disconnected graph.