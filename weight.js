var name = prompt("당신의 이름은 ?", "");
var height = prompt("당신의 키는?", "");
var weight = prompt("당신의 몸무게는?", "");

var normal = (height-100) * 0.9;
var result = weight >= normal - 5 && weight <= normal +5;

result = result ? "적정 체중입니다.":"살 좀 빼세요 ^^";
document.write(name + "님은" + result); <br></br>

