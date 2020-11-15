<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST' &&
        isset ($_POST["inputNome"]) &&
        (isset ($_POST["inputCliente"]) || isset ($_POST["inputGerente"])) &&
        isset ($_POST["InputRua"]) &&
        isset ($_POST["InputEmail"]) &&
        isset ($_POST["InputNumero"]) &&
        isset ($_POST["InputComplemento"]) &&
        isset ($_POST["InputPassword"]) &&
        isset ($_POST["InputCEP"]) &&
        isset ($_POST["InputConfirmaPassword"]) &&
        isset ($_POST["InputCidade"]) &&
        isset ($_POST["inputEstado"])) {

            //Realizar ação

        }

?>