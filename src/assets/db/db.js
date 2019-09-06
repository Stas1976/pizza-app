import season from '../images/pizza/seasons4.jpg';
import crazy from '../images/pizza/crazy.jpg';
import dodo from '../images/pizza/dodo.jpg';
import royal from '../images/pizza/royal.jpg';
import chicken from '../images/pizza/chickenBBQ.jpg';
import mexican from '../images/pizza/mexican.jpg';
import margherita from '../images/pizza/margherita.jpg';
import seafood from '../images/pizza/seafood.jpg';
import padazas from '../images/pizza/padazas.jpg';
//*uzkandziai
import brusket from '../images/uzkandziai/brusketa.jpg';
import bulvytes from '../images/uzkandziai/bulvytes.jpg';
import cezario from '../images/uzkandziai/cezario.jpg';
import dodsteris from '../images/uzkandziai/dodsteris.jpg';
import graikiskas from '../images/uzkandziai/graikiskas.jpg';
import kukuruzai from '../images/uzkandziai/kukuruzai.jpg';
import sparneliai from '../images/uzkandziai/sparneliai.jpg';
import viskepsneliai from '../images/uzkandziai/viskepsneliai.jpg';
//*desert
import cheescake from '../images/desert/cheescake.jpg';
import mufinas from '../images/desert/mufinas.jpg';
//*drinks
import apelsinu from '../images/drinks/apelsinu.jpg';
import apple from '../images/drinks/apple.jpg';
import cido from '../images/drinks/cido.jpg';
import cola from '../images/drinks/cola.jpg';
import fanta from '../images/drinks/fanta.jpg';
import go from '../images/drinks/go.jpg';
import tomato from '../images/drinks/tomato.jpg';
import zerro from '../images/drinks/zerro.jpg';

export const db = {
  Picos: [
    {
      image: season,
      name: '4 seasons',
      about:
        'Pomidorai, mocarelos sūris, kumpis, saliamis, pievagrybiai, picų padažas, oregano prieskoniai, fetos suris',
      price: 7.5,
      size: 's',
      id: 'p01'
    },
    {
      image: season,
      name: '4 seasons',
      about:
        'Pomidorai, mocarelos sūris, kumpis, saliamis, pievagrybiai, picų padažas, oregano prieskoniai, fetos suris',
      price: 8.5,
      size: 'm',
      id: 'p02'
    },
    {
      image: season,
      name: '4 seasons',
      about:
        'Pomidorai, mocarelos sūris, kumpis, saliamis, pievagrybiai, picų padažas, oregano prieskoniai, fetos suris',
      price: 11.5,
      size: 'l',
      id: 'p03'
    },
    {
      image: crazy,
      name: 'Crazy',
      about:
        'Saldžiarūgštis padažas, vištiena, mocarelos sūris, saliamis, picų padažas',
      price: 7.5,
      size: 's',
      id: 'p04'
    },
    {
      image: crazy,
      name: 'Crazy',
      about:
        'Saldžiarūgštis padažas, vištiena, mocarelos sūris, saliamis, picų padažas',
      price: 8.5,
      size: 'm',
      id: 'p05'
    },
    {
      image: crazy,
      name: 'Crazy',
      about:
        'Saldžiarūgštis padažas, vištiena, mocarelos sūris, saliamis, picų padažas',
      price: 11.5,
      size: 'l',
      id: 'p06'
    },
    {
      image: dodo,
      name: 'Dodo',
      about:
        'Pomidorai, mocarelos sūris, kumpis, saliamis, žalioji paprika, pievagrybiai, picų padažas',
      price: 8.5,
      size: 's',
      id: 'p07'
    },
    {
      image: dodo,
      name: 'Dodo',
      about:
        'Pomidorai, mocarelos sūris, kumpis, saliamis, žalioji paprika, pievagrybiai, picų padažas',
      price: 9.5,
      size: 'm',
      id: 'p08'
    },
    {
      image: dodo,
      name: 'Dodo',
      about:
        'Pomidorai, mocarelos sūris, kumpis, saliamis, žalioji paprika, pievagrybiai, picų padažas',
      price: 12.5,
      size: 'l',
      id: 'p09'
    },
    {
      image: royal,
      name: 'Royal',
      about:
        'Mocarelos sūris, kumpis, jautiena, vištiena, raudonieji svogunai, pievagrybiai, picų padažas, čili padažas',
      price: 7.5,
      size: 's',
      id: 'p10'
    },
    {
      image: royal,
      name: 'Royal',
      about:
        'Mocarelos sūris, kumpis, jautiena, vištiena, raudonieji svogunai, pievagrybiai, picų padažas, čili padažas',
      price: 8.5,
      size: 'm',
      id: 'p11'
    },
    {
      image: royal,
      name: 'Royal',
      about:
        'Mocarelos sūris, kumpis, jautiena, vištiena, raudonieji svogunai, pievagrybiai, picų padažas, čili padažas',
      price: 11.5,
      size: 'l',
      id: 'p12'
    },
    {
      image: chicken,
      name: 'Chicken BBQ',
      about:
        'Mocarelos sūris, šoninė, vištiena, raudonieji svogunai, picų padažas, bbq padažas',
      price: 9.5,
      size: 's',
      id: 'p13'
    },
    {
      image: chicken,
      name: 'Chicken BBQ',
      about:
        'Mocarelos sūris, šoninė, vištiena, raudonieji svogunai, picų padažas, bbq padažas',
      price: 10.5,
      size: 'm',
      id: 'p14'
    },
    {
      image: chicken,
      name: 'Chicken BBQ',
      about:
        'Mocarelos sūris, šoninė, vištiena, raudonieji svogunai, picų padažas, bbq padažas',
      price: 13.5,
      size: 'l',
      id: 'p15'
    },
    {
      image: mexican,
      name: 'Mexican',
      about:
        'Pomidorai, mocarelos sūris, saliamis, vištiena, žalioji paprika, pievagrybiai, jalapeno griežinėliai, picų padažas',
      price: 8.5,
      size: 's',
      id: 'p16'
    },
    {
      image: mexican,
      name: 'Mexican',
      about:
        'Pomidorai, mocarelos sūris, saliamis, vištiena, žalioji paprika, pievagrybiai, jalapeno griežinėliai, picų padažas',
      price: 9.5,
      size: 'm',
      id: 'p17'
    },
    {
      image: mexican,
      name: 'Mexican',
      about:
        'Pomidorai, mocarelos sūris, saliamis, vištiena, žalioji paprika, pievagrybiai, jalapeno griežinėliai, picų padažas',
      price: 13.5,
      size: 'l',
      id: 'p18'
    },
    {
      image: margherita,
      name: 'Margherita',
      about: 'Pomidorai , mocarelos sūris, picų padažas, oregano prieskoniai',
      price: 6.5,
      size: 's',
      id: 'p19'
    },
    {
      image: margherita,
      name: 'Margherita',
      about: 'Pomidorai , mocarelos sūris, picų padažas, oregano prieskoniai',
      price: 7.5,
      size: 'm',
      id: 'p20'
    },
    {
      image: margherita,
      name: 'Margherita',
      about: 'Pomidorai , mocarelos sūris, picų padažas, oregano prieskoniai',
      price: 10.5,
      size: 'l',
      id: 'p21'
    },
    {
      image: seafood,
      name: 'Seafood',
      about: 'Mocarelos sūris, šoninė, vištiena, krevetės, picų padažas',
      price: 8.5,
      size: 's',
      id: 'p22'
    },
    {
      image: seafood,
      name: 'Seafood',
      about: 'Mocarelos sūris, šoninė, vištiena, krevetės, picų padažas',
      price: 9.5,
      size: 'm',
      id: 'p23'
    },
    {
      image: seafood,
      name: 'Seafood',
      about: 'Mocarelos sūris, šoninė, vištiena, krevetės, picų padažas',
      price: 12.5,
      size: 'l',
      id: 'p24'
    }
  ],
  Padazas: [
    {
      image: padazas,
      name: 'Hellmans',
      about: 'Porcijinis kečupas',
      price: 0.15,
      size: 'padazas',
      id: 'pad01'
    }
  ],
  Uzkandziai: [
    {
      image: brusket,
      name: 'Brusketa su pomidorais',
      about: '25 cm',
      price: 5.5,
      size: null,
      id: 'u01'
    },
    {
      image: cezario,
      name: 'Cezario salotos',
      about:
        'Vištiena, vynuoginiai pomidorai, gūžinės salotos Iceberg, skrebučiai, parmezano sūris, bazilikai ir cezario padažas',
      price: 3.5,
      size: null,
      id: 'u02'
    },
    {
      image: graikiskas,
      name: 'Graikiškos salotos',
      about:
        'Vynuoginiai pomidorai, gūžinės salotos Iceberg, Feta sūris, agurkai, juodosios alyvuogės, paprikos, raudonėliai ir alyvuogių aliejus',
      price: 3.5,
      size: null,
      id: 'u03'
    },
    {
      image: dodsteris,
      name: 'Dobsteris',
      about:
        'Dodsterai yra unikalus produktas, mūsų išradimas. Atraskite dodsterus. Tai kai kas naujo!',
      price: 2.5,
      size: null,
      id: 'u04'
    },
    {
      image: viskepsneliai,
      name: 'Vištienos kepsneliai, 14 vnt.',
      about: 'Krosnyje kepti vištienos gabaliukai',
      price: 4.5,
      size: null,
      id: 'u05'
    },
    {
      image: sparneliai,
      name: 'Aštrūs vištienos sparneliai Buffalo',
      about: 'Skanūs vištienos sparneliai.',
      price: 4.5,
      size: null,
      id: 'u06'
    },
    {
      image: bulvytes,
      name: 'Krosnyje keptos bulvytės',
      about: 'Bulvytės 300 g.',
      price: 2.5,
      size: null,
      id: 'u07'
    },
    {
      image: kukuruzai,
      name: 'Kukurūzai',
      about:
        'Dvi sultingos saldžios kukurūzų burbuolės. Pateikiamos su sviestu ir druska.',
      price: 4.0,
      size: null,
      id: 'u08'
    }
  ],
  Gerimai: [
    {
      image: apelsinu,
      name: 'Apelsinų sultys',
      about: 'CIDO (100%), 0,3 l',
      price: 1.5,
      size: null,
      id: 'd01'
    },
    {
      image: apple,
      name: 'Obuolių sultys',
      about: 'CIDO (100%), 0,3 l',
      price: 1.5,
      size: null,
      id: 'd02'
    },
    {
      image: tomato,
      name: 'Pomidorų sultys',
      about: 'CIDO (100%), 0,3 l',
      price: 1.5,
      size: null,
      id: 'd03'
    },
    {
      image: cola,
      name: 'Coca-Cola',
      about: ' 0,5 l',
      price: 1.5,
      size: null,
      id: 'd04'
    },
    {
      image: zerro,
      name: 'Coca-Cola Zero',
      about: '0,5 l',
      price: 1.5,
      size: null,
      id: 'd05'
    },
    {
      image: fanta,
      name: 'Fanta',
      about: '0,5 l',
      price: 1.5,
      size: null,
      id: 'd06'
    },
    {
      image: go,
      name: 'Nealkoholinis BALTAS alus',
      about: '0,5 l',
      price: 2.0,
      size: null,
      id: 'd07'
    },
    {
      image: cido,
      name: 'Obuolių sultys',
      about: 'CIDO 100%, 1 l',
      price: 2.5,
      size: null,
      id: 'd08'
    }
  ],
  Desertai: [
    {
      image: cheescake,
      name: 'Cheesecake',
      about:
        'Dviejų sluoksnių švelnaus skonio sūrio tortas, iškeptas pagal originalų receptą. Sūrio sluoksnis pagamintas iš minkšto ricotta sūrio.',
      price: 2.0,
      size: null,
      id: 'des01'
    },
    {
      image: mufinas,
      name: 'Šviesus mufinas su šokolado lašais',
      about:
        'Nuostabaus skonio keksiukas su šokolado lašais - idealus pasirinkimas tiek studentui, tiek prezidentui!',
      price: 1.5,
      size: null,
      id: 'des02'
    }
  ]
};
