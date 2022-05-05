<?php
if (isset($_POST['submit'])) {
    switch ($_POST['convert']) {
        case "cm-in":
            $result = centimeter_to_inches($_POST['value']);
            $old_unit = 'cm';
            $new_unit = ' pouces';
            break;
        case "in-cm":
            $result = inches_to_centimeter($_POST['value']);
            $old_unit = ' pouces';
            $new_unit = 'cm';
            break;
        case "f-c":
            $result = fahrenheit_to_celsius($_POST['value']);
            $old_unit = ' Fahrenheit';
            $new_unit = ' Celcius';
            break;
        case "c-f":
            $result = celsius_to_fahrenheit($_POST['value']);
            $old_unit = ' Celcius';
            $new_unit = ' Fahrenheit';
            break;
        case "km-mi":
            $result = kilometers_to_miles($_POST['value']);
            $old_unit = ' Kilometers';
            $new_unit = ' Miles';
            break;
        case "mi-km":
            $result = miles_to_kilometers($_POST['value']);
            $old_unit = ' Miles';
            $new_unit = ' Kilometers';
            break;
    }
}

function kilometers_to_miles($given_value)
{
    return $given_value / 1.609;
}
function miles_to_kilometers($given_value)
{
    return $given_value * 1.609;
}

function fahrenheit_to_celsius($given_value)
{
    return 5 / 9 * ($given_value - 32);
}

function celsius_to_fahrenheit($given_value)
{
    return $given_value * 9 / 5 + 32;
}

function inches_to_centimeter($given_value)
{
    return $given_value * 2.54;
}

function centimeter_to_inches($given_value)
{
    return $given_value / 2.54;
}

?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Il s'agit d'un simple convertisseur de mesure de distance, de température et de longueur.</title>

    <link href="style.css" rel="stylesheet">
</head>

<body>

    <div class="container">
        <div class="form-box">
            <h1>Il s'agit d'un simple convertisseur de mesure de distance, de température et de longueur.</h1>

            <form method="post">
                <div class="form__title">
                    Propriétés à convertir <input type="text" name="value" /><br />
                </div>
                <select name="convert" class="convert">
                    <option value="">-- Sélectionnez un --</option>

                    <optgroup label="Unités de distance">
                        <option value="km-mi">Kilomètres en miles</option>
                        <option value="mi-km">Miles en kilomètres</option>
                    </optgroup>

                    <optgroup label="Unités de température">
                        <option value="f-c">Fahrenheit à Celsius</option>
                        <option value="c-f">Celsius à Farenheit</option>
                    </optgroup>

                    <optgroup label="Unités de longueur">
                        <option value="cm-in">Centimètre en pouces</option>
                        <option value="in-cm">Pouces en centimètre</option>
                    </optgroup>

                </select>
                <input type="submit" name="submit" value="Convertir" />
            </form>
            <?php
            if (!empty($result))
                echo '<p>' . $_POST['value'] . $old_unit . ' équivaut à ' . $result . $new_unit . '</p>';
            ?>
        </div>
    </div>

</body>

</html>