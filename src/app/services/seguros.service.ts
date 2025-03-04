import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SegurosService {

  constructor() { }

  private seguros = [
    
    {
      titulo_seguro: 'Seguro Todo Riesgo Construcción',
      slug: 'seguro-todo-riego-construccion',
      foto_seguro: 'assets/img/seguros/seguro-construccion.webp',
      descripcion: `Esta póliza ofrece una protección sin precedentes para las
                    Constructoras, Contratistas y toda empresa del rubro, mientras se
                    encuentran edificando sus obras, faenas, edificios etc. Esta
                    cobertura se orienta a cubrir los daños y pérdidas accidentales
                    ocurridas durante la edificación, así como también daños a
                    terceros como consecuencia de los trabajos de la misma
                    construcción. La póliza Todo Riesgo Construcción TRC, cubre
                    una amplia gama de riesgos; como los catastróficos, incluyendo
                    terremoto, vientos, tempestades, huracanes, inundaciones y
                    daños por agua, como también incluyendo Responsabilidad civil
                    cruzada, vehicular, daño moral y lucro cesante entre otras.`,
      caracteristicas_seguro: ''
    },
    {
      titulo_seguro: 'Seguro responsabilidad civil',
      slug: 'seguro-responsabilidad-civil',
      foto_seguro: 'assets/img/seguros/responsabilidad-civil.webp',
      descripcion: `<p>Incorporada al Depósito de Pólizas bajo el código POL120131531.</p> 
                    Esta póliza te respalda económicamente al
                    asumir la indemnización por daños a terceros, ya sean personales
                    o materiales, por los cuales el asegurado es civilmente
                    responsable. Garantizando que tu patrimonio y tu reputación
                    permanezcan intactos.`,
      caracteristicas_seguro: ''
    },
    {
      titulo_seguro: 'Seguro para carga en trasporte terrestre',
      slug: 'seguro-para-carga-y-trasporte',
      foto_seguro: 'assets/img/seguros/seguro-terrestre.webp',
      descripcion: `
      <p class="mb-4 leading-relaxed">
        El objetivo de este seguro es cubrir el riesgo que pueda recaer sobre cualquier
        elemento transportable. Dicho riesgo puede afectar los bienes, el medio de
        transporte o, en el caso de la cobertura por responsabilidad civil, el patrimonio
        del asegurado, quien tendría que hacer frente a eventuales indemnizaciones.
      </p>
    
      <ul class="list-disc ml-6 space-y-3 mb-4">
        <li>
          <strong>Pólizas aisladas:</strong>
          Se utilizan para cubrir un solo viaje. Su duración abarca el período que dure
          el trayecto y, en el caso de mercancías, como máximo 6 meses desde la fecha
          de emisión.
        </li>
        <li>
          <strong>Pólizas abiertas:</strong>
          Se emplean para una operación o un conjunto de ellas relacionadas, que impliquen
          un número considerable de viajes. Su duración corresponde al periodo de la operación.
        </li>
        <li>
          <strong>Pólizas flotantes:</strong>
          Tienen una duración indefinida y se mantienen vigentes mientras ninguna de las partes
          se oponga. Sirven para cubrir todas las operaciones de un asegurado en ciertas
          condiciones, límites y ámbitos convenidos. El asegurado comunica cada viaje mediante
          un Boletín y la prima se regula periódicamente mediante suplementos, según el número
          de viajes efectuados y el valor asegurado en cada uno de ellos.
        </li>
        <li>
          <strong>Pólizas sobre volúmenes:</strong>
          Estas pólizas se basan en la facturación o en el volumen que se pretende asegurar,
          sin necesidad de informar cada desplazamiento. A partir de este parámetro se calcula
          una prima anual, que luego se regulariza al finalizar cada periodo, según el volumen
          realmente transportado.
        </li>
      </ul>
    `,
    
      caracteristicas_seguro: ''
    }
    , {
      titulo_seguro: 'Seguro de responsabilidad civil adminstrador y comite',
      slug: 'seguro-responsabilidad-civil-administrador-cliente',
      foto_seguro: 'assets/img/seguros/responsabilidad-administrador.webp',
      descripcion: `
        <p class="mb-4 leading-relaxed">
          Este seguro cubre el patrimonio de los <strong>directores (comité)</strong> y
          administradores de una copropiedad, por eventuales demandas de terceros en su
          contra debido a un error, omisión o negligencia en su calidad como director o
          administrador de la copropiedad o el comité administrativo, de acuerdo con lo
          establecido en la <em>ley 21.442 sobre copropiedad inmobiliaria</em> y su reglamento.
        </p>
    
        <h2 class="text-lg font-bold mb-2">
          Ejemplos de coberturas de seguro de responsabilidad civil
          de directores y administradores de condominios:
        </h2>
        <ul class="list-disc ml-6 space-y-2 mb-4">
          <li>
            Cubre la pérdida ocasionada por cualquier reclamo de un tercero
            en contra de un Director o Administrador debido a un acto culposo.
          </li>
          <li>
            Cobertura para cónyuge, heredero o representantes legales.
          </li>
          <li>
            Cobertura de costos de defensa por lesiones corporales y daños a terceros.
          </li>
        </ul>
    
        <h3 class="text-lg font-semibold mb-2">
          ¿Quiénes pueden ser asegurados?
        </h3>
        <p class="mb-4 leading-relaxed">
          Cualquier Director o Administrador pasado, actual o futuro de la copropiedad
          que contrate este seguro.
        </p>
    
        <h3 class="text-lg font-semibold mb-2">
          ¿Quién es el contratante?
        </h3>
        <p class="mb-4 leading-relaxed">
          Quien contrata este seguro es la copropiedad o condominio.
        </p>
      `,
      caracteristicas_seguro: ''
    }
    ,
    {
      titulo_seguro: 'Seguro de garantia y fiel cumplimiento',
      slug: 'seguro-de-garantia-y-fiel-cumplimineto',
      foto_seguro: 'assets/img/seguros/seguro-garantia.webp',
      descripcion: `<p>Incorporada al Depósito de Pólizas bajo el código POL12013171.</p>
                   Esta póliza asegura el cumplimiento por parte del tomador de una
                    “obligación de hacer” manifestada en un contrato o una
                    disposición legal, obligando a pagar al asegurado, la suma o
                    monto determinado y los perjuicios que ocasionen dicho
                    incumplimiento.  Esta póliza presenta ventajas por sobre la boleta
                    de garantía contratada en la institución bancaria, ya que esta
                    herramienta permite disminuir los niveles de endeudamiento y/o
                    capital inmovilizado ya que no utiliza la capacidad de crédito y no
                    se ve reflejada en el sistema financiero.`,
      caracteristicas_seguro: ''
    }

  ]

  getSeguros() {
    return this.seguros
  }

  getSeguroBySlug(slug: string) {
    return this.seguros.find(seguro => seguro.slug === slug);
  }


}
