<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Técnicas de storytelling con datos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-5.mb-3(data-aos="fade-left")
              p.mb-0 En la era digital, la información se produce a un ritmo exponencial. Sin embargo, la cantidad de datos disponibles no garantiza decisiones acertadas. Aquí es donde entra el Storytelling con datos: el arte de traducir cifras complejas en mensajes claros, contextualizados y emocionalmente relevantes. En el mundo empresarial, esta habilidad es fundamental para alinear equipos, comunicar hallazgos de forma efectiva y movilizar acciones.
            p(data-aos="fade-left") Desde la perspectiva de la analítica avanzada, transformar datos en historias impactantes implica estructurar una narrativa que conecte:

        .row.justify-content-center
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 01
                    p.mb-0 <b>El qué:</b> el dato
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 02
                    p.mb-0 <b>El por qué:</b> el contexto
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    h5 03
                    p.mb-0 <b>El qué hacer:</b> la recomendación
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Este enfoque se apoya en tres pilares clave: lógica, emoción y acción.
    
        .bg-color-10.p-5(data-aos="fade-left")
          p.mb-0 La obra de Knaflic (2017) enfatiza que el Storytelling con datos es una competencia esencial para cualquier profesional de negocios, ya que convierte la información analítica en una herramienta de influencia. Ya no se trata solo de reportar, sino de persuadir, enfocar y movilizar.
            
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Fundamentos del Data Storytelling
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En un entorno caracterizado por la sobrecarga de información y la creciente complejidad organizacional, las empresas no pueden depender únicamente de reportes estáticos o gráficos desarticulados. Lo que realmente necesitan son narrativas visuales estratégicas que inspiren comprensión, alineación y acción.
    
        .bg-color-4.p-5.mb-3(data-aos="fade-left")
          p.mb-0 El Data Storytelling se convierte así en una competencia clave en analítica e inteligencia de negocios. Permite transformar datos complejos en mensajes visuales claros, contextualizados y emocionalmente relevantes.
        p Según Cole Nussbaumer Knaflic (2017), una historia efectiva con datos debe integrar tres elementos esenciales, que se presentan en la siguiente tabla:

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pt-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/7.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="53%" y="54.5%" numero="+")
                h5 Estructura
                p Como en todo relato, se requiere una introducción que establezca el contexto, un conflicto que revele el problema o patrón detectado, y una resolución que proponga una acción basada en el análisis.
    
              .bg-color-white.box-shadow.p-3(x="88%" y="31%" numero="+")
                h5 Lógica
                p La narrativa debe estar respaldada por evidencia analítica rigurosa, modelada con métodos confiables y articulada con indicadores que conecten causa y efecto.
    
              .bg-color-white.box-shadow.p-3(x="1%" y="43%" numero="+")
                h5 Emoción
                p El mensaje debe resonar con la audiencia mediante visualizaciones significativas, lenguaje empático y ejemplos cercanos que generen conexión y urgencia por actuar.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 En este sentido, el Storytelling con datos deja de ser una habilidad deseable para convertirse en una necesidad estratégica. En la era digital, donde los dashboards interactivos se consultan a diario para tomar decisiones tácticas y estratégicas, contar historias con datos se convierte en un nuevo lenguaje profesional universal, transversal a todos los sectores y jerarquías.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicaciones reales del Data Storytelling
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Una vez comprendida la importancia de contar historias con datos, es fundamental explorar cómo se comunican mediante visualizaciones impactantes. A continuación, se presentan algunos ejemplos de aplicación práctica:
    
        .bg-color-2.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Analizar el abandono de clientes en retail a través de datos de CRM, visualizando segmentos críticos y proponiendo acciones de fidelización.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Contar la historia de cómo cambió el comportamiento de compra pospandemia, integrando variables como frecuencia, ticket promedio y canales de adquisición.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Mostrar la evolución de costos logísticos en un dashboard conectado al ROI, evidenciando el impacto de variables como rutas, inventarios o proveedores en la rentabilidad final.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://arxiv.org/pdf/2312.01164" target="_blank" rel="noopener noreferrer") Schröder, K., Eberhardt, W., Belavadi, P., Ajdadilish, B., van Haften, N., Overes, E., Brouns, T., & Calero Valdez, A. (02 de diciembre de 2023). Telling stories with data – A systematic review. arXiv. 


            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/47357  " target="_blank" rel="noopener noreferrer") Roszak, P. & Alarcón, E. (2017). The Way of St. James: renewing Insights: ( ed.). EUNSA. 





            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=R1c7TJjQJEU&ab_channel=Lideraendatos-DMCINSTITUTE " target="_blank" rel="noopener noreferrer") Lidera en datos - DMC INSTITUTE (2022, 19 de diciembre). Charla Informativa: PEA Business Intelligence Fundamentals [Video]. Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
