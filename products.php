<?php
	// (c) it.x informationssysteme gmbh, Alle Rechte vorbehalten.

	// Historie ----------------------------------------------------------------------------------------
	// 13.08.18 tka Erstellung
	// Historie ----------------------------------------------------------------------------------------

	/**
	 * Array mit Produktinformationen.
	 */
	$array_products = [
		["id" => 1, "name" => "Produkt 1", "description" => "Beschreibung 1", "color" => "rot", "weight" => "5 kg"],
		["id" => 2, "name" => "Produkt 2", "description" => "Beschreibung 2", "color" => "grün", "weight" => "10 kg"],
		["id" => 3, "name" => "Produkt 3", "description" => "Beschreibung 3", "color" => "rot", "weight" => "10 kg"],
		["id" => 4, "name" => "Produkt 4", "description" => "Beschreibung 4", "color" => "rot", "weight" => "5 kg"],
		["id" => 5, "name" => "Produkt 5", "description" => "Beschreibung 5", "color" => "grün", "weight" => "10 kg"],
		["id" => 6, "name" => "Produkt 6", "description" => "Beschreibung 6", "color" => "grün", "weight" => "5 kg"],
		["id" => 7, "name" => "Produkt 7", "description" => "Beschreibung 7", "color" => "rot", "weight" => "5 kg"],
		["id" => 8, "name" => "Produkt 8", "description" => "Beschreibung 8", "color" => "grün", "weight" => "10 kg"],
		["id" => 9, "name" => "Produkt 9", "description" => "Beschreibung 9", "color" => "rot", "weight" => "10 kg"]
	];

	/**
	 * Aufruf der Hauptfunktion mit Übergabe der Parameter.
	 */
	echo main(array_merge($_GET, $_POST, get_json_post()));

	/**
	 * Hauptfunktion.
	 *
	 * @param array $array_parameters Parameter.
	 *
	 * @return string Rückgabestring.
	 */
	function main($array_parameters = [])
	{
		$str_return = "";
		
		if (array_key_exists("com", $array_parameters))
		{
			switch ($array_parameters["com"])
			{
				case "getProducts":
					$str_return = getProducts($array_parameters);
					break;

				case "getColorValues":
					$str_return = getColorValues($array_parameters);
					break;

				case "getWheightValues":
					$str_return = getWheightValues($array_parameters);
					break;
			}
		}

		return $str_return;
	} // main()

	/**
	 * Liefert eine Liste von Produkten gemäß den übergeben Filterwerten zurück.
	 *
	 * @param array $array_parameters Parameter.
	 *
	 * @return string Rückgabestring.
	 */
	function getProducts($array_parameters = [])
	{
		$str_return = "";

		// todo: Umsetzung.

		return $str_return;
	} // getProducts()

	/**
	 * Liefer eine Liste mit möglichen Werten zur Filterung der Farbe.
	 *
	 * @param array $array_parameters Parameter.
	 *
	 * @return string Rückgabestring.
	 */
	function getColorValues($array_parameters = [])
	{
		$str_return = "";

		// todo: Umsetzung.

		return $str_return;
	} // getColorValues()

	/**
	 * Liefer eine Liste mit möglichen Werten zur Filterung des Gewichts.
	 *
	 * @param array $array_parameters Parameter.
	 *
	 * @return string Rückgabestring.
	 */
	function getWheightValues($array_parameters = [])
	{
		$str_return = "";

		// todo: Umsetzung.

		return $str_return;
	} // getWheightValues()

	// -------------------------------------------------------------------------------------------------
	// H I L F S F U N K T I O N E N
	// -------------------------------------------------------------------------------------------------

	/**
	 * Liest den Input-Stream und interpretiert evtl. vorhandene Daten als JSON Format. Falls es sich nicht um JSON
	 * Daten handelt, wird ein leeres Array zurückgegeben.
	 *
	 * @return array Assoziatives Array aus JSON String.
	 */
	function get_json_post()
	{
		$array_return = array();

		// Besonderheit: JSON Daten stehen nicht in _POST zur Verfügung, sondern nur im Stream.
		$mixed_raw = file_get_contents("php://input");

		// als JSON interpretieren.
		$array_json = json_decode($mixed_raw, true);

		if (!is_null($array_json) && is_array($array_json))
		{
			$array_return = $array_json;
		}

		return $array_return;
	} // get_json_post()
