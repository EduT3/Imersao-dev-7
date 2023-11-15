var listaDefilmes = [
  "https://th.bing.com/th/id/OIP.5qTmbDg5iTzsfnoTzwOafwHaK7?pid=ImgDet&w=610&h=900&rs=1",
  "https://cinemacomnerdice.files.wordpress.com/2021/12/homem-aranha-sem-volta-para-casa.jpg",
  "https://picfiles.alphacoders.com/127/thumb-1920-127262.jpg",
  "https://vejasp.abril.com.br/wp-content/uploads/2016/12/cartaz_agamenon_alta.jpeg?resize=160",
  "https://th.bing.com/th/id/R.1ade3aca3be98c0e33793744f6e61ad5?rik=dyyzHQyGcQFdLQ&riu=http%3a%2f%2fbr.web.img2.acsta.net%2fmedias%2fnmedia%2f18%2f95%2f45%2f36%2f20405014.jpg&ehk=NuInW5eguaZhnVgUozCfWPDvvKNWyMQBRTJWTVnGuSc%3d&risl=&pid=ImgRaw&r=0",
  "https://th.bing.com/th/id/OIP.yT8wnjR-xi28niVXsgU3WQHaKr?pid=ImgDet&w=1229&h=1772&rs=1",
  "https://th.bing.com/th/id/OIP.ERmpKxdRx767q66a0B0MSAHaKx?pid=ImgDet&rs=1",
  "https://th.bing.com/th/id/OIP.B2ccFgV0PqJJmVgM1aWXjQAAAA?pid=ImgDet&w=336&h=448&rs=1",
];

var listaNomesFilmes = [
  "Avenger Endgame",
  "Homem-aranha Sem volta para casa",
  "Batman Begins",
  "Agamenon o Reporter",
  "Vai que dá certo",
  "Olho para o negócio",
  "Vizinhos imediatos de 3º Grau",
  "Gente grande 2",
];
for (var i = 0; i < listaDefilmes.length; i++) {
  document.write("<img src=" + listaDefilmes[i] + ">");
  document.write("<p>" + listaNomesFilmes[i] + "</p>");

}
