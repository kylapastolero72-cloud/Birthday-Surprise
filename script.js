
function toggleCandles() {
    const cake = document.getElementById("birthdayCake");
    const button = document.getElementById("blowButton");
    const message = document.getElementById("cakeMessage");
    const messageScreen = document.getElementById("messageScreen");
    const scrollingMessage = document.getElementById("scrollingMessage");

    // If the candles are still burning, blow them out
    if (!cake.classList.contains("blown-out")) {
        cake.classList.add("blown-out");

        button.textContent = "Candles Blown Out ❤️";
        button.disabled = true;

        message.textContent = "Happy Birthday, my love! ❤️";

        // Wait for the flame animation, then show the letter
        setTimeout(() => {
            messageScreen.classList.add("show");

            // Restart the scrolling animation
            scrollingMessage.style.animation = "none";
            void scrollingMessage.offsetHeight;
            scrollingMessage.style.animation = "";

        }, 600);
    }
}

