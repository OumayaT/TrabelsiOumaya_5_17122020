//Gestion erreur et affichage du message
function gestionErreurMessage(error){
    const erreurMessage = document.getElementById("erreurServeur")
    const erreurMessagePre = document.createElement("div")
    erreurMessagePre.classList.add("modal-dialog", "modal-dialog-centered")
    erreurMessagePre.innerHTML = `
        <div class="modal-content border-danger">
            <div class="modal-header">
                <h3 class="modal-title text-danger h5">Erreur !</h3>
            </div>
            <div class="modal-body" id="typeErreur">
                Le serveur a rencontré une erreur !<br>
                <code>${error}</code><br>
                Essayer de recharger la page ou revenir plus tard.<br>
                Nous faisons tout notre possible pour remédier à ce problème dans les meilleurs délais.
            </div>
            <div class="modal-footer">
                <a href="${window.location}" class="btn btn-block btn-danger">Recharger la page</a>
            </div>
        </div>`
    erreurMessage.appendChild(erreurMessagePre)
    $('#erreurServeur').modal('show')
}
// Gestion des erreurs 404 et 500
function handleErrors(response) {
    if (!response.ok) {
        window.location.href ="index.html"
    }
    return response;
}