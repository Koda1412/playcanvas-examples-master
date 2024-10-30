
function display(enemyKill, point, bombNumber, live, currentScene) {
    let targetKill;
    if (currentScene = "scene1") {
        targetKill = 22;
    } else if (currentScene = "scene2") {
        targetKill = 20;
    } else if (currentScene = "scene3") {
        targetKill = 24;
    } 

    const progressPercentage = (enemyKill / targetKill) * 100;

    let display = document.getElementById("display");
    if (!display) {
        display = document.createElement("div");
        display.id = "display";
        display.style.position = "absolute";
        display.style.top = "2%";
        display.style.left = "2%";
        display.style.fontFamily = "fantasy";
        display.style.fontSize = "25px";
        display.style.color = "white";
        display.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        display.style.backgroundImage = "url('../../assets/image/display.jpg')";
        display.style.backgroundSize = "cover";
        display.style.padding = "10px";
        display.style.borderRadius = "10px";
        display.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
        document.body.appendChild(display);

        const infoText = document.createElement("div");
        infoText.id = "infoText";
        display.appendChild(infoText);

        const statusBarContainer = document.createElement("div");
        statusBarContainer.style.width = "100%";
        statusBarContainer.style.height = "20px";
        statusBarContainer.style.backgroundColor = "#444";
        statusBarContainer.style.borderRadius = "5px";
        statusBarContainer.style.marginTop = "10px";

        const statusBarFill = document.createElement("div");
        statusBarFill.id = "statusBarFill";
        statusBarFill.style.height = "100%";
        statusBarFill.style.width = "0%";
        statusBarFill.style.backgroundColor = "green";
        statusBarFill.style.borderRadius = "5px";

        statusBarContainer.appendChild(statusBarFill);
        display.appendChild(statusBarContainer);
    }

    const infoText = document.getElementById("infoText");
    infoText.innerHTML = `Live: ${live}<br>Point: ${point}<br>Number of Bomb: ${bombNumber}<br>Enemy Kill: ${enemyKill}`;
    
    const statusBarFill = document.getElementById("statusBarFill");
    if (statusBarFill) {
        statusBarFill.style.width = `${progressPercentage}%`;
    }
}


function enemyInstruction() {
    let enemyInstruction = document.getElementById("display");
    enemyInstruction = document.createElement("div");
    enemyInstruction.id = "enemyInstruction";
    enemyInstruction.style.position = "absolute";
    enemyInstruction.style.top = "80%";
    enemyInstruction.style.left = "75%";
    enemyInstruction.style.fontFamily = "fantasy";
    enemyInstruction.style.fontSize = "15px";
    enemyInstruction.style.color = "white";
    enemyInstruction.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    enemyInstruction.style.padding = "10px"; 
    enemyInstruction.style.borderRadius = "10px";
    enemyInstruction.style.backgroundImage = "url('../../assets/image/ins.jpg')"; 
    enemyInstruction.style.backgroundSize = "cover";
    enemyInstruction.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    document.body.appendChild(enemyInstruction);
    enemyInstruction.innerHTML = `Avoid enemy bomb and bomb them to fill the status bar to achieve vicory`;
}

function moveInstructionA() {
    let moveInstruction = document.getElementById("display");
    moveInstruction = document.createElement("div");
    moveInstruction.id = "moveInstructionA";
    moveInstruction.style.position = "absolute";
    moveInstruction.style.top = "50%";
    moveInstruction.style.left = "75%";
    moveInstruction.style.fontFamily = "fantasy";
    moveInstruction.style.fontSize = "15px";
    moveInstruction.style.color = "white";
    moveInstruction.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    moveInstruction.style.padding = "10px"; 
    moveInstruction.style.backgroundImage = "url('../../assets/image/ins.jpg')"; 
    moveInstruction.style.backgroundSize = "cover";
    moveInstruction.style.borderRadius = "10px";
    moveInstruction.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    document.body.appendChild(moveInstruction);
    moveInstruction.innerHTML = `Press A To Moove Left`;
}

function moveInstructionW() {
    let moveInstruction = document.getElementById("display");
    moveInstruction = document.createElement("div");
    moveInstruction.id = "moveInstructionW";
    moveInstruction.style.position = "absolute";
    moveInstruction.style.top = "50%";
    moveInstruction.style.left = "75%";
    moveInstruction.style.fontFamily = "fantasy";
    moveInstruction.style.fontSize = "15px";
    moveInstruction.style.color = "white";
    moveInstruction.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    moveInstruction.style.padding = "10px"; 
    moveInstruction.style.backgroundImage = "url('../../assets/image/ins.jpg')"; 
    moveInstruction.style.backgroundSize = "cover";
    moveInstruction.style.borderRadius = "10px";
    moveInstruction.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    document.body.appendChild(moveInstruction);
    moveInstruction.innerHTML = `Press W To Move Upppp`;
}

function moveInstructionS() {
    let moveInstruction = document.getElementById("display");
    moveInstruction = document.createElement("div");
    moveInstruction.id = "moveInstructionS";
    moveInstruction.style.position = "absolute";
    moveInstruction.style.top = "50%";
    moveInstruction.style.left = "75%";
    moveInstruction.style.fontFamily = "fantasy";
    moveInstruction.style.fontSize = "15px";
    moveInstruction.style.color = "white";
    moveInstruction.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    moveInstruction.style.padding = "10px"; 
    moveInstruction.style.backgroundImage = "url('../../assets/image/ins.jpg')"; 
    moveInstruction.style.backgroundSize = "cover";
    moveInstruction.style.borderRadius = "10px";
    moveInstruction.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    document.body.appendChild(moveInstruction);
    moveInstruction.innerHTML = `Press S To Moove Down`;
}

function moveInstructionD() {
    let moveInstruction = document.getElementById("display");
    moveInstruction = document.createElement("div");
    moveInstruction.id = "moveInstructionD";
    moveInstruction.style.position = "absolute";
    moveInstruction.style.top = "50%";
    moveInstruction.style.left = "75%";
    moveInstruction.style.fontFamily = "fantasy";
    moveInstruction.style.fontSize = "15px";
    moveInstruction.style.color = "white";
    moveInstruction.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    moveInstruction.style.padding = "10px"; 
    moveInstruction.style.backgroundImage = "url('../../assets/image/ins.jpg')"; 
    moveInstruction.style.backgroundSize = "cover";
    moveInstruction.style.borderRadius = "10px";
    moveInstruction.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    document.body.appendChild(moveInstruction);
    moveInstruction.innerHTML = `Press D To Move Right`;
}

function obstaclesInstruction() {
    let obstaclesInstruction = document.getElementById("display");
    obstaclesInstruction = document.createElement("div");
    obstaclesInstruction.id = "obstaclesInstruction";
    obstaclesInstruction.style.position = "absolute";
    obstaclesInstruction.style.top = "70%";
    obstaclesInstruction.style.left = "75%";
    obstaclesInstruction.style.fontFamily = "fantasy";
    obstaclesInstruction.style.fontSize = "15px";
    obstaclesInstruction.style.color = "white";
    obstaclesInstruction.style.backgroundImage = "url('../../assets/image/ins.jpg')"; 
    obstaclesInstruction.style.backgroundSize = "cover";
    obstaclesInstruction.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    obstaclesInstruction.style.padding = "10px"; 
    obstaclesInstruction.style.borderRadius = "10px";
    obstaclesInstruction.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    document.body.appendChild(obstaclesInstruction);
    obstaclesInstruction.innerHTML = `Drop bomb obstacles to get more bomb<br> If u loose all bomb, u loose`;
}


function bombInstruction() {
    let bombInstruction = document.getElementById("display");
    bombInstruction = document.createElement("div");
    bombInstruction.id = "bombInstruction";
    bombInstruction.style.position = "absolute";
    bombInstruction.style.top = "60%";
    bombInstruction.style.left = "75%";
    bombInstruction.style.fontFamily = "fantasy";
    bombInstruction.style.fontSize = "15px";
    bombInstruction.style.color = "white";
    bombInstruction.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
    bombInstruction.style.padding = "10px"; 
    bombInstruction.style.backgroundImage = "url('../../assets/image/ins.jpg')"; 
    bombInstruction.style.backgroundSize = "cover";
    bombInstruction.style.borderRadius = "10px";
    bombInstruction.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.5)";
    document.body.appendChild(bombInstruction);
    bombInstruction.innerHTML = `Press Space to drop bomb`;
}

function clearInstruction(ins) {
    let instruction = document.getElementById(ins);
    if (instruction) {
        instruction.remove(); 
    }
}