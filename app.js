
let numero1;
let numero2;
let unidad1;
let unidad2;

function convertir(){
  numero1 = document.getElementById("numero1").value;
  // numero2 = document.getElementById("numero2").value;
  unidad1 = document.getElementById("unidad1").value;
  unidad2 = document.getElementById("unidad2").value;
  if(numero1 != "" && (numero1 > 0 || numero1 < 0) && (unidad1 > 0 && unidad2 > 0)){

    if(unidad1 === unidad2){
      document.getElementById("numero2").value = numero1;
    }
    else{
      console.log(unidad1)
      switch (unidad1) {
        case '1':

            switch (unidad2) {
              case '2':
                numero2 = numero1 * 1000;
                document.getElementById("numero2").value = numero2;
                break;
              case '3':
                numero2 = numero1 * 100000;
                document.getElementById("numero2").value = numero2;
                break;
              case '4':
                numero2 = numero1 * 1000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '5':
                numero2 = numero1 * 1000000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '6':
                numero2 = numero1 * 1000000000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '7':
                numero2 = numero1 / 1.609;
                document.getElementById("numero2").value = numero2;
                break;
              case '8':
                numero2 = numero1 * 1094;
                document.getElementById("numero2").value = numero2;
                break;
              case '9':
                numero2 = numero1 * 1094;
                document.getElementById("numero2").value = numero2;
                break;
              case '10':
                numero2 = numero1 * 39370;
                document.getElementById("numero2").value = numero2;
                break;
              case '11':
                numero2 = numero1 / 1.852;
                document.getElementById("numero2").value = numero2;
                break;
            }

          break;
        case '2':

            switch (unidad2) {
              case '1':
                numero2 = numero1 / 1000;
                document.getElementById("numero2").value = numero2;
                break;
              case '3':
                numero2 = numero1 * 100;
                document.getElementById("numero2").value = numero2;
                break;
              case '4':
                numero2 = numero1 * 1000;
                document.getElementById("numero2").value = numero2;
                break;
              case '5':
                numero2 = numero1 * 1000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '6':
                numero2 = numero1 * 1000000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '7':
                numero2 = numero1 / 1609;
                document.getElementById("numero2").value = numero2;
                break;
              case '8':
                numero2 = numero1 * 1.094;
                document.getElementById("numero2").value = numero2;
                break;
              case '9':
                numero2 = numero1 * 3.281;
                document.getElementById("numero2").value = numero2;
                break;
              case '10':
                numero2 = numero1 * 39.37;
                document.getElementById("numero2").value = numero2;
                break;
              case '11':
                numero2 = numero1 / 1852;
                document.getElementById("numero2").value = numero2;
                break;
            }

          break;
        case '3':

            switch (unidad2) {
              case '1':
                numero2 = numero1 / 100000;
                document.getElementById("numero2").value = numero2;
                break;
              case '2':
                numero2 = numero1 / 100;
                document.getElementById("numero2").value = numero2;
                break;
              case '4':
                numero2 = numero1 * 10;
                document.getElementById("numero2").value = numero2;
                break;
              case '5':
                numero2 = numero1 * 10000;
                document.getElementById("numero2").value = numero2;
                break;
              case '6':
                numero2 = numero1 * 10000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '7':
                numero2 = numero1 / 160934;
                document.getElementById("numero2").value = numero2;
                break;
              case '8':
                numero2 = numero1 / 91.44;
                document.getElementById("numero2").value = numero2;
                break;
              case '9':
                numero2 = numero1 / 30.48;
                document.getElementById("numero2").value = numero2;
                break;
              case '10':
                numero2 = numero1 / 2.54;
                document.getElementById("numero2").value = numero2;
                break;
              case '11':
                numero2 = numero1 / 185200;
                document.getElementById("numero2").value = numero2;
                break;
            }

          break;
        case '4':

            switch (unidad2) {
              case '1':
                numero2 = numero1 / 1000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '2':
                numero2 = numero1 / 1000;
                document.getElementById("numero2").value = numero2;
                break;
              case '3':
                numero2 = numero1 / 10;
                document.getElementById("numero2").value = numero2;
                break;
              case '5':
                numero2 = numero1 * 1000;
                document.getElementById("numero2").value = numero2;
                break;
              case '6':
                numero2 = numero1 * 1000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '7':
                numero2 = numero1 / 1609000000;
                document.getElementById("numero2").value = numero2;
                break;
              case '8':
                numero2 = numero1 / 914;
                document.getElementById("numero2").value = numero2;
                break;
              case '9':
                numero2 = numero1 / 305;
                document.getElementById("numero2").value = numero2;
                break;
              case '10':
                numero2 = numero1 / 25.4;
                document.getElementById("numero2").value = numero2;
                break;
              case '11':
                numero2 = numero1 / 1852000000;
                document.getElementById("numero2").value = numero2;
                break;
            }

          break;
        case '5':

              switch (unidad2) {
                case '1':
                  numero2 = numero1 / 1000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '2':
                  numero2 = numero1 / 1000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '3':
                  numero2 = numero1 / 10000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '4':
                  numero2 = numero1 / 1000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '6':
                  numero2 = numero1 * 1000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '7':
                  numero2 = numero1 / 1609000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '8':
                  numero2 = numero1 / 914400;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '9':
                  numero2 = numero1 / 304800;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '10':
                  numero2 = numero1 / 25400;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '11':
                  numero2 = numero1 / 1852000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
              }

          break;
        case '6':

              switch (unidad2) {
                case '1':
                  numero2 = numero1 / 1000000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '2':
                  numero2 = numero1 / 1000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '3':
                  numero2 = numero1 / 10000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '4':
                  numero2 = numero1 / 1000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '5':
                  numero2 = numero1 / 1000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '7':
                  numero2 = numero1 / 1609000000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '8':
                  numero2 = numero1 / 914400000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '9':
                  numero2 = numero1 / 304800000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '10':
                  numero2 = numero1 / 2540000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '11':
                  numero2 = numero1 / 1852000000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
              }

          break;
        case '7':

              switch (unidad2) {
                case '1':
                  numero2 = numero1 * 1.609;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '2':
                  numero2 = numero1 * 1609;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '3':
                  numero2 = numero1 * 160934;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '4':
                  numero2 = numero1 * 1609000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '5':
                  numero2 = numero1 * 1609000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '6':
                  numero2 = numero1 * 1609000000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '8':
                  numero2 = numero1 * 1760;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '9':
                  numero2 = numero1 * 5280;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '10':
                  numero2 = numero1 * 63360;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '11':
                  numero2 = numero1 / 1.151;
                  document.getElementById("numero2").value = numero2;
                  break;
              }

            break;
        case '8':

              switch (unidad2) {
                case '1':
                  numero2 = numero1 / 1094;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '2':
                  numero2 = numero1 / 1.094;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '3':
                  numero2 = numero1 * 91.44;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '4':
                  numero2 = numero1 * 914;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '5':
                  numero2 = numero1 * 914400;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '6':
                  numero2 = numero1 * 914400000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '7':
                  numero2 = numero1 / 1760;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '9':
                  numero2 = numero1 * 3;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '10':
                  numero2 = numero1 * 36;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '11':
                  numero2 = numero1 / 2025;
                  document.getElementById("numero2").value = numero2;
                  break;
              }

            break;
        case '9':

              switch (unidad2) {
                case '1':
                  numero2 = numero1 / 3281;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '2':
                  numero2 = numero1 / 3.281;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '3':
                  numero2 = numero1 * 30.48;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '4':
                  numero2 = numero1 * 305;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '5':
                  numero2 = numero1 * 304800;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '6':
                  numero2 = numero1 * 304800000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '7':
                  numero2 = numero1 / 5280;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '8':
                  numero2 = numero1 / 3;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '10':
                  numero2 = numero1 * 12;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '11':
                  numero2 = numero1 / 6076;
                  document.getElementById("numero2").value = numero2;
                  break;
              }

            break;
        case '10':

              switch (unidad2) {
                case '1':
                  numero2 = numero1 / 39370;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '2':
                  numero2 = numero1 / 39.37;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '3':
                  numero2 = numero1 * 2.54;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '4':
                  numero2 = numero1 * 25.4;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '5':
                  numero2 = numero1 * 25400;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '6':
                  numero2 = numero1 * 2540000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '7':
                  numero2 = numero1 / 63360;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '8':
                  numero2 = numero1 / 36;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '9':
                  numero2 = numero1 / 12;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '11':
                  numero2 = numero1 / 72913;
                  document.getElementById("numero2").value = numero2;
                  break;
              }

            break;
        case '11':

              switch (unidad2) {
                case '1':
                  numero2 = numero1 * 1.852;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '2':
                  numero2 = numero1 * 1852;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '3':
                  numero2 = numero1 * 185200;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '4':
                  numero2 = numero1 * 1852000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '5':
                  numero2 = numero1 * 1852000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '6':
                  numero2 = numero1 * 1852000000000000;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '7':
                  numero2 = numero1 * 1.151;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '8':
                  numero2 = numero1 * 2025;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '9':
                  numero2 = numero1 * 6076;
                  document.getElementById("numero2").value = numero2;
                  break;
                case '10':
                  numero2 = numero1 * 72913;
                  document.getElementById("numero2").value = numero2;
                  break;
              }

            break;
      }

    }

  }
}
