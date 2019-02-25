function findPerimeter() {
    var element = document.getElementById('mySelect').selectedIndex;
    var input = document.getElementById('value').value;
    switch (document.getElementsByTagName('option')[element].value) {
        case "Triangle":
            $("#output").html("Perimeter of triangle for passed value: " + (input * 3));
            break;
        case "Square":
            document.getElementById('output').innerHTML = "perimeter of square for passed value: " +  (input * 4);
            break;
        case "Pentagon":
            document.getElementById('output').innerHTML = "perimeter of pentagon for passed value: " +  (input * 5);
            break;
        case "Hexagon":
            document.getElementById('output').innerHTML = "perimeter of hexagon for passed value: " +  (input * 6);
            break;
    }
}