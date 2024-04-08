let count = 0;
        
        function inc() {
            document.getElementById("increment");
            count++;
            document.getElementById("countlabel").innerHTML = count 
        }
        function dec() {
            document.getElementById("decrement");
            count--;
            document.getElementById("countlabel").innerHTML = count 
        }
        function reset() {
            document.getElementById("reset");
            count = 0;
            document.getElementById("countlabel").innerHTML = count 
        }
     