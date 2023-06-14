`inspectInputs` is for event triggers 

For storing data there are 2 keys, `raw value` and `animators`. 

raw value is an array of keyframes, each keyframe is array of 


```
[ 
    time (integer frame for project file, floating value between 0 - 1 for collection), 
    data, 
    easing * 4 
]
```


`data` is stored based on datatype, mostly just scalar, array, but sometime struct (e.g. gradient datatype)

`animators` is for value with `sep_axis` (separated axis) its an array of `animators`, each animator use the same format as `raw value`.