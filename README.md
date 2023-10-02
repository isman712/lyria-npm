**Lyria-npm es un modulo simple que te permite obtener la letra de cualquier canción**

*Instalación:* 
```console
    $ npm install lyria-npm
```
*Como usarlo:*
```js
const Buscar = require("lyria-npm");

Buscar("Lo malo de ser bueno").then(e => console.log(e))

/*
{
  titulo: 'Lo malo de ser bueno',
  artista: 'El Cuarteto de Nos',
  albulm: 'Porfiado',
  fecha: '2012',
  Generos: [
    'Rock alternativo',
    'Rap rock',
    'Rock en español',
    'Rock',
    'Argentinian Rock'
  ],
  Escuchar: [
    {
      nombre: 'Spotify',
      link: 'https://open.spotify.com/track/7xB3hSztVbX6xFvQqEGKud?autoplay=true'
    },
    {
      nombre: 'YouTube Music',
      link: 'https://music.youtube.com/watch?v=S_roMeig-YQ&feature=gws_kp_track'
    },
    {
      nombre: 'Apple Music',
      link: 'https://music.apple.com/ec/album/lo-malo-de-ser-bueno/523330948?i=523331009'
    },
    { nombre: 'Deezer', link: 'https://www.deezer.com/track/25746731' }
  ],
  otros: [
    { titulo: 'Enamorado tuyo', artista: 'El Cuarteto de Nos' },
    { titulo: 'Algo mejor que hacer', artista: 'El Cuarteto de Nos' },
    { titulo: 'Ya no sé que hace...', artista: 'El Cuarteto de Nos' }
  ],
  letra: [
    'La verdad es que no hay una verdad\n' +
      'Leí en una pared de la ciudad\n' +
      '¿Habrá sido una virtud o casualidad?\n' +
      'Y sentí inquietud de estar a merced\n' +
      'De tanta sed de dualidad\n' +
      'Qué barbaridad\n' +
      'Lo barato sale caro, lo normal es lo raro\n' +
      '¿Estaré sonado?\n' +
      'Me visto despacio, si estoy apurado\n' +
      'Amo ser odiado, y tener la facha de un repetidor\n' +
      'Y la nota de un aprobado\n' +
      'Siempre hago lo que quiero\n' +
      'No lo puedo evitar, tomo para olvidar que el doctor\n' +
      'Me prohibió tomar y, gracias a Dios, soy ateo\n' +
      'No consigo empleo por mi cara, creo\n' +
      'Es lo lindo de ser feo, pero si espero desespero\n' +
      'Si quiero ver el partido entero\n' +
      'Ya está, cuánta ambigüedad\n' +
      'Esta vida me va a matar\n' +
      'Mi corazón vacío no soporta una ausencia más\n' +
      'Y sé que dijo una vez\n' +
      'El Nobel de la paz asesinado al caer\n' +
      '"Es lo malo de ser bueno en este mundo cruel"\n' +
      'Busco respuestas y encuentro preguntas\n' +
      'Nadie contesta porque cuesta separarse de una mala junta\n' +
      'Y no hay contradicción, dije que me equivocaría\n' +
      'Y como me equivoqué tuve razón\n' +
      'Perdón, si mi mente queda en blanco, veo todo negro\n' +
      'Escucho el himno a la alegría y me deprimo, no me alegro\n' +
      'Como mi socio cuando dijo a su mujer preñada\n' +
      '"El ocio no me deja tiempo para nada"\n' +
      'Y, con esa vil coartada, se desembarazó de la embarazada\n' +
      'Ya está, cuánta ambigüedad\n' +
      'Esta vida me va a matar\n' +
      'Mi corazón vacío no soporta una ausencia más (Ah-ah-ah-ah)\n' +
      'Y sé que dijo una vez\n' +
      'El Nobel de la paz asesinado al caer\n' +
      '"Es lo malo de ser bueno en este mundo cruel"\n' +
      'Mundo cruel, uh\n' +
      'Qué mala suerte ser supersticioso\n' +
      'Acaricio un círculo y se vuelve un círculo vicioso\n' +
      'Soy cauteloso y juro, seguro, que todo es dudoso\n' +
      'Cuántas veces dije "no" queriendo decir "sí"\n' +
      'Cuántas veces presentí el principio del fin\n' +
      'Cuántas veces dije "sí" queriendo decir "no", es así\n' +
      'Como te digo una cosa te digo la otra\n' +
      'Qué horror, hasta mis debilidades son más fuertes que yo\n' +
      'Ya está, cuánta ambigüedad\n' +
      'Esta vida me va a matar\n' +
      'Mi corazón vacío no soporta una ausencia más (Ah-ah-ah-ah)\n' +
      'Y sé que dijo una vez\n' +
      'El Nobel de la paz asesinado al caer\n' +
      '"Es lo malo de ser bueno en este mundo cruel"\n' +
      'Ya está, cuánta ambigüedad\n' +
      'Esta vida me va a matar\n' +
      'Mi corazón vacío no soporta una ausencia más (Ah-ah-ah-ah)\n' +
      'Y sé que dijo una vez\n' +
      'El Nobel de la paz asesinado al caer\n' +
      '"Es lo malo de ser bueno en este mundo cruel"\n' +
      '"Es lo malo de ser bueno en este mundo cruel"\n' +
      '"Es lo malo de ser bueno en este mundo cruel"'
  ]
}
*/
```

