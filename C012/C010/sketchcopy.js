var notas = [9.5, 10, 9.7, 10];

function cal_media(){
    //media = somatorio das notas/quantidade de notas
    var somatorio = notas[0] + notas[1] + notas[2] + notas[3];
    //var quantidade = notas.length;
    console.log(somatorio/notas.length);
}
cal_media()
