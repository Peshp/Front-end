function solve() {
  const text = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  const result = document.getElementById("result");

  switch (convention){
      case "Camel Case":
          result.textContent = text.charAt(0).to
          break;
    case "Pascal Case":
          result.textContent = text.toLowerCase().replaceAll(/\s/g,'');
          break;
      default:
          result.textContent = "Error!";
          break;
  }
}