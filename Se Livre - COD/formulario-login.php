<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST' &&
        isset ($_POST["InputEmail"]) &&
        (isset ($_POST["inputCliente"]) || isset ($_POST["inputGerente"])) &&
        isset ($_POST["InputPassword"])) {

            //Realizar ação

        }

?>