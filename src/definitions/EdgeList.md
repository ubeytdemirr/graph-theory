# Edge List
```js

 [
     {start:C,end:A,weight:4},
     {start:A,end:C,weight:1},
     {start:B,end:C,weight:5}
     ...
 ]


```

| Pros                                           |                    Cons                    |
|------------------------------------------------|:------------------------------------------:|
| Space efficient for  representing sparse graphs |            Less space efficient for denser graphs           |
| Iterating over all edges is efficient                  | Edge weight look up is O(E) |
| Very simple structure              |  