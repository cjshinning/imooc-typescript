interface Point {x: number, y: number};

function tsDemo(data: Point){
    return Math.sqrt(data.x ** 2 + data.y ** 2);
}

tsDemo({x: 1, y: 123});

// typescript优势：
// 1.开发过程中，发现潜在问题
// 2.更友好的编辑器自动提示
// 3.代码可读性好