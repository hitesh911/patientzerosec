
function open_thanks_modal() {
    var modal = document.getElementById("thanks-modal");
    modal.style.display = "block"
}

function close_thanks_modal() {
    var modal = document.getElementById("thanks-modal");
    modal.style.display = "none"
    window.location.reload(true)

}