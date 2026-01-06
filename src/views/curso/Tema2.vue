<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Narrativas visuales para la presentación de insights'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En un entorno empresarial cada vez más orientado a los datos, encontrar información relevante no es suficiente: es necesario convertir los hallazgos en narrativas comprensibles, impactantes y orientadas a la acción. La presentación de insights mediante narrativas visuales se ha convertido en una competencia esencial para los profesionales de la analítica de datos e inteligencia de negocios.
        p(data-aos="fade-left") Como afirma Knaflic (2017): “Los datos por sí solos no generan acción, pero los datos convertidos en historias sí lo hacen.”
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué es un insight y por qué importa comunicarlo bien?
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Un insight es una observación clave, accionable y contextualizada que surge del análisis de datos. No se trata de una simple estadística, sino de una inferencia basada en evidencia empírica que justifica una acción relevante.
    
        .bg-color-4.px-5.py-4.mb-3(data-aos="fade-left")
          h5 Ejemplo:
          p.mb-0 “La tasa de recompra es menor en clientes nuevos que compran por canal telefónico”
          p.mb-0 Este no es solo un dato, es un insight que puede guiar decisiones de marketing y servicio al cliente.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Narrativas visuales aplicadas a métricas clave
    
    p.mb-5 A continuación, se presenta un video que explora el uso de narrativas visuales aplicadas a métricas clave, con el objetivo de fortalecer la toma de decisiones estratégicas a partir de una comunicación clara, contextualizada y visualmente efectiva de los datos.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/SyCCgbZ7T-A?si=CVtAQSqGYx1qMNdv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 A continuación, se presentan los principales tipos de métricas que todo profesional en inteligencia de negocios debe dominar, junto con ejemplos de cómo construir narrativas visuales eficaces para cada una.

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", alt="").mb-4.mb-lg-0
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="KPI (Key Performance Indicator)")
                p.mb-0 Mide el desempeño operativo o estratégico. 
                p.mb-0 Ejemplo: Objetivo: Mejorar desempeño digital. KPI: Conversión web = Ventas / Visitas.
                p Visualización: Tarjeta numérica + gráfico de líneas con evolución temporal. 
        
              .div(titulo="ROI (Return on Investment)")
                p.mb-0 Evalúa la eficiencia de una inversión. 
                p.mb-0 Ejemplo: Inversión: USD 10,000. Ingresos generados: USD 18,000. ROI = 80%. 
                p Visualización: Tarjeta de ROI + barras comparativas por canal (ej. Google, Facebook, Instagram).
        
              .div(titulo="OKR (Objectives and Key Results)")
                p.mb-0 Alinea objetivos cualitativos con métricas cuantitativas. 
                p.mb-0 Ejemplo: Objetivo: Mejorar experiencia de usuario. KR1: Aumentar NPS de 65 a 75. KR2: Reducir tiempo de respuesta de 24h a 6h. 
                p Visualización: Línea temporal + tarjetas comparativas por resultado clave.

        p.mb-5 Cómo construir una narrativa visual estratégica:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Inicio
              p.mb-0.text-center ¿Qué situación o desafío requiere análisis?
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Nudo
              p.mb-0.text-center ¿Qué visualización revela el hallazgo o patrón?
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.svg" alt="" style="width: 90px")
              h5.text-center Desenlace
              p.mb-0.text-center ¿Qué acción se debe tomar con base en los datos?

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Personalización según audiencia
        
        p Una narrativa visual estratégica no es estática ni universal: debe adaptarse al perfil del público al que se dirige. El mismo conjunto de datos puede comunicarse de manera distinta según se trate de una audiencia técnica o no técnica. Esta personalización no solo mejora la comprensión, sino que incrementa la probabilidad de que el mensaje genere acción.
    
    .row.justify-content-center
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.mb-5
          .px-4.p-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5 Técnica
                p.mb-0 Detalles metodológicos, márgenes de error, tendencias estadísticas.
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-3.mb-5
          .px-4.p-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                h5 No técnica
                p.mb-0 Impacto organizacional, riesgos y beneficios, visualización accesible.
    
    p.mb-5 La aplicación del Data Storytelling varía según el sector, pero el objetivo es siempre el mismo: convertir indicadores en decisiones accionables a través de visualizaciones significativas. A continuación, se presentan ejemplos concretos de cómo distintos sectores utilizan métricas clave para generar insights estratégicos. Cada caso muestra la conexión entre la métrica, la visualización utilizada, el hallazgo revelado y la acción sugerida, dentro de un flujo de análisis basado en herramientas de Business Intelligence.

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Ejemplos sectoriales de insights visuales estratégicos
    .tabla-a.color-acento-botones.mb-5.tbl
      table
        thead
          tr
            th.bg-color-3.text-white Sector
            th.bg-color-3.text-white Indicador Clave (KPI)
            th.bg-color-3.text-white Insight visualizable
            th.bg-color-3.text-white Visualización sugerida
            th.bg-color-3.text-white Ejemplo empresarial
        tbody
          tr
            td Retail
            td Ticket promedio
            td Caída en canal físico
            td Gráfico de líneas + alerta
            td Walmart con Power BI
          tr.bg-color-6
            td Salud
            td Tasa de reingreso
            td Jóvenes reingresan más en Q2
            td Heatmap por edad y trimestre
            td CDC - Dashboards Salud Pública
          tr
            td Educación
            td Tasa de deserción anual
            td Mayor deserción en modalidad virtual
            td Barras apiladas por modalidad
            td UNESCO - Visualización educativa
          tr.bg-color-6
            td Finanzas
            td ROI por canal
            td ROI bajo en canal móvil en Q1
            td Barras comparativas por trimestre
            td Goldman Sachs - Investment Reports
          tr
            td Logística
            td % entregas a tiempo
            td Retrasos en zona norte por vehículo
            td Mapa geográfico + barras
            td DHL - Supply Chain Insights

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Cuadros sinópticos por sector
    
    p.mb-5 Para ilustrar cómo transformar indicadores clave en narrativas visuales efectivas en diferentes industrias, se presentan a continuación cuadros sinópticos por sector, que resumen objetivos, métricas, visualizaciones e insights obtenidos. Esta estructura facilita la identificación de patrones y acciones estratégicas por área de negocio.

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Cuadros sinópticos por sector
    .tabla-a.color-acento-botones.mb-5.tbl
      table
        thead
          tr
            th.bg-color-3.text-white Sector
            th.bg-color-3.text-white Objetivo
            th.bg-color-3.text-white Cálculo / Métrica
            th.bg-color-3.text-white Visualización
            th.bg-color-3.text-white Insight
            th.bg-color-3.text-white Acción recomendada
        tbody
          tr
            td Retail
            td Identificar variaciones del ticket
            td Ventas / Nº transacciones
            td Línea temporal con alertas
            td Canal físico cayó 20%
            td Reforzar estrategia omnicanal
          tr.bg-color-6
            td Salud
            td Disminuir reingresos
            td Nº reingresos / Nº egresos
            td Mapa de calor por edad y trimestre
            td Jóvenes reingresan más
            td Implementar seguimiento post-egreso
          tr
            td Educación
            td Medir retención según modalidad
            td Nº desertores / Total inscritos
            td Barras apiladas
            td Alta deserción en modalidad virtual
            td Fortalecer tutoría en línea
          tr.bg-color-6
            td Finanzas
            td Evaluar rentabilidad por canal
            td (Ingresos - Costos) / Costos
            td Barras con rangos de referencia
            td Canal móvil poco eficiente
            td Reasignar presupuesto
          tr
            td Logística
            td Optimizar cumplimiento de entregas
            td Entregas a tiempo / Total entregas
            td Mapa geográfico + barras por tipo de vehículo
            td Zonas rurales con más fallas
            td Reorganizar rutas y transporte


    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Transformar insights en narrativas visuales estratégicas permite acelerar la comprensión, alinear decisiones y generar impacto organizacional real. Comunicar un KPI, ROI u OKR de forma visual y contextual aumenta significativamente la adopción de decisiones basadas en datos.


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/230419" target="_blank" rel="noopener noreferrer") Ballvé, A. M. (2023). El tablero de control: la revolución de la información directiva en el siglo XXI: (1 ed.). Ediciones Granica.
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://arxiv.org/pdf/2312.01164" target="_blank" rel="noopener noreferrer") Schröder, K., Eberhardt, W., Belavadi, P., Ajdadilish, B., van Haften, N., Overes, E., Brouns, T., & Calero Valdez, A. (02 de diciembre de 2023). Telling stories with data – A systematic review. arXiv. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=XcaW069_e_o&ab_channel=MinisterioTICColombia" target="_blank" rel="noopener noreferrer") Ministerio TIC Colombia (2021, 9 de septiembre).Visualización de datos abiertos [Video]. Youtube..

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
