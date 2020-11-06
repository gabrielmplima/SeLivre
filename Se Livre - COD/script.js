var nome, cep;
var total = 0;
var i = 0;
var valor = 0;
var frete = 0;

function carrinho() {

    for (i = 1; i <= 99; i++) {
        var prod = localStorage.getItem("produto" + i + "");
        if (prod != null) {


            // var imagem = localStorage.getItem("imagem" + i);

            // document.getElementById("capa").innerHTML += "<img src=\"" + imagem + "\"width=\"50px\">"  + "<hr>";

            document.getElementById("produtos").innerHTML += "         " + localStorage.getItem("produto" + i) + "<hr>";

            document.getElementById("precos").innerHTML += "R$" + localStorage.getItem("valor" + i) + "<br><hr>";


            valor = parseFloat(localStorage.getItem("valor" + i));
            total = (total + valor);
        }
        document.getElementById("total").innerHTML = total.toFixed(2);
        document.getElementById("frete").innerHTML = frete.toFixed(2);

    }
}

function mensagemContato(){

    
    var textToSave = "[Mensagem]|" + document.getElementById("inputNome").value;
    textToSave += '|';
    textToSave += document.getElementById("inputEmail").value;
    textToSave += '|';
    textToSave += document.getElementById("inputNumeroPedido").value;
    textToSave += '|';
    textToSave += document.getElementById("inputAssunto").value;
    textToSave += '|';
    textToSave += document.getElementById("FormControlTextarea").value;



    var textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "contato.txt";

    nome = document.getElementById("inputNome").value;;

    alert(nome + ", mensagem enviada!");

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();

}

function saveTextAsFile() {

    var textToSave = "[Cadastrados]|" + document.getElementById("InputNome").value;
    textToSave += '|';
    textToSave += document.getElementById("InputEmail").value;
    textToSave += '|';
    textToSave += document.getElementById("InputPassword").value;
    textToSave += '|';
    textToSave += document.getElementById("InputCEP").value;

    var textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "cadastro.txt";

    alert("Cadastro Realizado!");

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function loadFileAsText() {
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var texto = textFromFileLoaded;
        listar(texto);
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

function entrar() {

    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var texto = textFromFileLoaded;

        var itens = texto.split('[Cadastrados]');
        for (var i = 1; i < itens.length; i++) {
            var valores = itens[i].split("|");

            if (valores[2] == document.getElementById("InputEmail1").value && valores[3] == document.getElementById("InputPassword1").value) {

                var textToSave = "[Entrada]|" + valores[1];
                textToSave += '|';
                textToSave += valores[4];

                var textToSaveAsBlob = new Blob([textToSave], { type: "text/plain" });
                var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
                var fileNameToSaveAs = "entrada.txt";

                var downloadLink = document.createElement("a");
                downloadLink.download = fileNameToSaveAs;
                downloadLink.innerHTML = "Download File";
                downloadLink.href = textToSaveAsURL;
                downloadLink.onclick = destroyClickedElement;
                downloadLink.style.display = "none";
                document.body.appendChild(downloadLink);

                downloadLink.click();

                nome = valores[1];

                alert(nome + ", seja bem-vindo!");

            } else {

                alert("Dados incorretos, tente novamente.");

            }

        }

    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

function loadFileAsText2() {
    var fileToLoad = document.getElementById("fileToLoad2").files[0];
    console.log(fileToLoad);

    var fileReader = new FileReader();
    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        saveTextAsFile(textFromFileLoaded);
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

function busca() {
    var input, filter, cards, cardContainer, h5, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("myItems");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-body h5.card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

function AddCarrinho(imagem, produto, valor, posicao) {
    localStorage.setItem("imagem" + posicao, imagem);
    localStorage.setItem("produto" + posicao, produto);
    localStorage.setItem("valor" + posicao, valor);
    alert("Produto adicionado ao carrinho!");
}

function calcularFrete() {

    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var texto = textFromFileLoaded;

        var itens = texto.split('[Entrada]');
        for (var i = 1; i < itens.length; i++) {

            if (i == (itens.length - 1)) {

                var valores = itens[i].split("|");

                cep = valores[2];

                if (cep != null) {

                    for (var i = 1; i < cep.length; i++) {

                        if (cep[i] == '-') {

                            cep[i] = '0';

                        }

                    }

                    var cep2 = parseInt(cep);

                    frete = cep2 / 1000;

                    total = (total + frete);

                    document.getElementById("frete").innerHTML = frete.toFixed(2);

                    document.getElementById("total").innerHTML = total.toFixed(2);

                } else {

                    alert("Por favor, realize o login para calcular o frete.");

                }

            }

        }

    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

function finalizar() {

    var fileToLoad = document.getElementById("fileToLoad").files[0];
    var fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        var texto = textFromFileLoaded;

        var itens = texto.split('[Entrada]');
        for (var i = 1; i < itens.length; i++) {

            if (i == (itens.length - 1)) {

                var valores = itens[i].split("|");

                nome = valores[1];

                if (nome != null) {

                    alert(nome + ", compra finalizada! Muito obrigado!");

                } else {

                    alert("Por favor, realize o login para finalizar a sua compra.");

                }

            }

        }

    };

    fileReader.readAsText(fileToLoad, "UTF-8");

}
