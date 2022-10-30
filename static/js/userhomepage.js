// https://stackoverflow.com/questions/9841363/how-to-restrict-number-of-characters-that-can-be-entered-in-html5-number-input-f
function limit(element)
{
    var max_chars = 255; // maxlength is 255

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}