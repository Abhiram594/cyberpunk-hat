const uploadInput = document.getElementById("uploadInput");
const uploadedImage = document.getElementById("uploadedImage");
const hat = document.getElementById("hat");
const gameArea = document.getElementById("gameArea");

uploadInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            uploadedImage.src = event.target.result;
            uploadedImage.style.display = "block";
            hat.style.display = "block";

            const centerX = (gameArea.clientWidth - hat.clientWidth) / 2;
            const centerY = (gameArea.clientHeight - hat.clientHeight) / 2;
            hat.style.left = centerX + "px";
            hat.style.top = centerY + "px";

            hat.classList.add("flash");
            setTimeout(() => hat.classList.remove("flash"), 500);
        };
        reader.readAsDataURL(file);
    }
});


hat.addEventListener("mouseover", () => {
    const maxX = gameArea.clientWidth - hat.clientWidth;
    const maxY = gameArea.clientHeight - hat.clientHeight;
    hat.style.left = Math.random() * maxX + "px";
    hat.style.top = Math.random() * maxY + "px";

t
    if (Math.random() > 0.7) spawnDecoy();
});

hat.addEventListener("click", () => {
    alert("You thought you won... but nope! 😂");
});

function spawnDecoy() {
    const decoy = document.createElement("img");
    decoy.src = hat.src;
    decoy.className = "decoy";
    decoy.style.position = "absolute";
    decoy.style.width = "100px";
    decoy.style.left = Math.random() * (gameArea.clientWidth - 100) + "px";
    decoy.style.top = Math.random() * (gameArea.clientHeight - 100) + "px";
    decoy.style.filter = "drop-shadow(0 0 10px red)";
    gameArea.appendChild(decoy);

    setTimeout(() => decoy.remove(), 1500);
}
