window.addEventListener('load', () => {
    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext('2d'); 

    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth;

    //ctx.strokeStyle = "blue"; 
    ctx.lineWidth = 5; 
    ctx.strokeRect(100, 100, 200, 200); 

    //ctx.strokeStyle = "red"; 
    ctx.lineWidth = 5; 
    ctx.strokeRect(100, 400, 600, 200);

    //ctx.strokeStyle = "green"; 
    ctx.lineWidth = 5; 
    ctx.strokeRect (400, 100, 600, 200);

    //ctx.strokeStyle = "yellow"; 
    ctx.lineWidth = 5; 
    ctx.strokeRect (800, 400, 200, 200);


    let painting = false; 

    function startPosition(e){
        painting = true; 
        draw(e); 
    }

    function endPosition(){
        painting = false; 
        ctx.beginPath();
    }


    function draw(e) {
        if (!painting)  return;
        ctx.linewidth = 5; 
        ctx.lineCap = "square"; 
        ctx.lineTo(e.clientX, e.clientY); 
        ctx.stroke(); 
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY); 
    }



    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition); 
    canvas.addEventListener("mousemove", draw); 
});