var data=new Date();
var hora=data.getHours();
if (hora >= 18)
{
  document.write("<b> Boa noite!");
}
else if (hora >=12)
{
  document.write("<b> Boa tarde!");
}
else
{
  document.write("<b>Bom dia!");
}
document.writeln("Hoje é ");
document.writeln(data + "!</b>");



