window.onload = function() : void {

    const button= document.querySelector("#hello-button");

    button.onclick = function() : void {
        const input= document.querySelector("#name-input");
        const text = input.value;

        const div= document.querySelector("#message-div");
        div.innerHTML = "Hello " + text + "!";

        }
}