document.getElementById("paragraph-1").innerHTML = "Hello Everyone today we are going to see JAVA SCRIPT"
document.getElementById("paragraph-2").innerHTML = "Session is Ongoing"
document.getElementById("click").onclick = Clicked
function Clicked()
{
    document.getElementById("click").innerHTML = "CLICKED"
}
document.getElementById("date").onclick = DateMethod
function DateMethod()
{
    document.getElementById("paragraph-3").innerHTML = Date()
}