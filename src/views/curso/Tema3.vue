<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Análisis interactivo de información'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-2.p-5.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 En la era digital, donde los datos crecen de forma exponencial y las decisiones deben tomarse en tiempo real, el análisis interactivo se ha convertido en una herramienta esencial para generar inteligencia de negocios. Ya no basta con visualizar datos de forma estática; es necesario permitir a los usuarios interactuar con ellos, profundizar en su análisis y construir rutas personalizadas de descubrimiento.
            p Esta capacidad transforma los dashboards en espacios de exploración estratégica, donde cada clic, filtro o marcador representa una oportunidad de insight. El análisis interactivo empodera a los tomadores de decisiones, ya que les permite identificar patrones, detectar anomalías y generar respuestas inmediatas a preguntas clave del negocio.
        p Su implementación se ve reforzada mediante herramientas de Business Intelligence como Power BI, Tableau y Looker Studio, que integran funcionalidades como:

        .row.justify-content-center
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    p.mb-0 Filtros dinámicos
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    p.mb-0 Drill-through
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    p.mb-0 Tooltips
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-3.mb-5
              .px-4.p-4
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
                  .col-lg.text-white
                    p.mb-0 Bookmarks

        p.mb-5 Gracias a estos recursos, el storytelling con datos se vuelve dinámico, adaptable y centrado en las necesidades específicas de cada usuario o stakeholder.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Gracias a estos recursos, el storytelling con datos se vuelve dinámico, adaptable y centrado en las necesidades específicas de cada usuario o stakeholder.
    
    p.mb-5 Los insights dejan de ser observaciones aisladas cuando se integran de forma lógica y visual en un tablero interactivo. El objetivo no es solo mostrar el dato, sino facilitar que el usuario descubra patrones, tendencias o comportamientos de forma intuitiva. Los pasos para integrar insights estratégicos son:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/7.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="1. Seleccionar los insights clave según la audiencia")
            p Identificar qué información es relevante para cada perfil: financieros, operativos o comerciales.
    
          .div(titulo="2. Elegir la visualización adecuada")
            p Usar gráficos de líneas para mostrar evolución temporal, mapas para distribución geográfica y barras para comparar categorías.
    
          .div(titulo="3. Aplicar filtros dinámicos")
            p Incluir controles que permitan al usuario explorar los datos por fecha, zona, canal, producto u otras variables clave.
    
          .div(titulo="4. Agregar elementos narrativos visuales")
            p Incorporar títulos claros, íconos informativos, etiquetas contextuales e indicadores visuales (colores o símbolos) que señalen anomalías o alertas.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            h5 Ejemplo práctico:
            p.mb-0 En una empresa de consumo masivo, un dashboard de ventas incorpora un filtro por canal (digital vs. físico). Al seleccionarlo, se actualiza automáticamente la evolución mensual de ingresos, con tooltips que muestran promociones activas por mes. Esto permite al gerente visualizar qué canal genera mayor ROI y en qué momento activar campañas específicas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Diseño estratégico de tableros narrativos para tomadores de decisión
    
    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1  
            .bg-color-4.p-5.mb-3(data-aos="fade-left")
              p.mb-0 Un dashboard no es solo una colección de gráficos: es una historia visual estructurada que debe guiar decisiones. Diseñar tableros para ejecutivos requiere claridad, jerarquización y propósito estratégico.
            p(data-aos="fade-left") A continuación, se presenta una tabla con los elementos clave y sus funciones dentro del diseño narrativo:
        
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/10.svg" alt="" style="width: 90px")
              h5.text-center Objetivo claro
              p.mb-0.text-center Definir qué decisión debe facilitar el dashboard.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/11.svg" alt="" style="width: 90px")
              h5.text-center KPIs jerarquizados
              p.mb-0.text-center Ubicar los indicadores más relevantes en la parte superior y con mayor visibilidad.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/12.svg" alt="" style="width: 90px")
              h5.text-center Contexto y recomendación
              p.mb-0.text-center Proporcionar explicaciones breves que guíen la interpretación e incluyan sugerencias de acción.
          
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/13.svg" alt="" style="width: 90px")
              h5.text-center Interactividad estratégica
              p.mb-0.text-center Diseñar filtros, botones o enlaces que inviten a la exploración guiada del contenido.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La estructura sugerida para un tablero narrativo ejecutivo es:
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-2 1.	Título y contexto general del análisis
          p.mb-2 2.	KPIs principales jerarquizados
          p.mb-2 3.	Visualizaciones con filtros interactivos
          p.mb-2 4.	Resumen ejecutivo con lectura narrativa
          p.mb-0 5.	Recomendaciones accionables basadas en los hallazgos

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Técnicas interactivas para enriquecer el análisis narrativo
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1 
        .bg-color-10.p-5.mb-3(data-aos="fade-left")
          p.mb-0 En el contexto del análisis interactivo, las técnicas visuales aplicadas al storytelling cumplen una función estratégica: facilitan la exploración autónoma, permiten la personalización del recorrido visual y mejoran la comprensión contextualizada de los datos por parte de distintos usuarios. Estas herramientas no solo amplían la profundidad del análisis, sino que fortalecen la narrativa al adaptarse a distintos perfiles decisionales.
        p(data-aos="fade-left") A continuación, se describen las principales técnicas interactivas utilizadas en entornos empresariales, institucionales y educativos.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Drill-through")
            p.mb-0 Permite al usuario hacer clic en un elemento visual y acceder a un desglose detallado relacionado. Facilita el análisis de causas o componentes detrás de un indicador, convirtiendo una visualización resumen en una historia de causa y efecto.
            p.mb-0 <b>Ejemplo</b>: en un dashboard de ventas por país, al hacer clic en “Colombia”, se redirige a una vista con datos por ciudad, producto y canal.
    
          .div(titulo="Tooltips")
            p.mb-0 Mensajes emergentes que ofrecen contexto al pasar el cursor sobre un elemento visual. Aportan información adicional sin saturar el espacio visual, reforzando la comprensión sin perder claridad.
            p.mb-0 <b>Ejemplo</b>: al pasar el mouse sobre una barra de “e-commerce”, el mensaje contextual muestra crecimiento mensual, tasa de conversión y comentarios de clientes.
    
          .div(titulo="Filtros dinámicos")
            p.mb-0 Controles interactivos que permiten segmentar visualizaciones por variables relevantes. Personalizan el análisis según el interés del usuario y mejoran la toma de decisiones contextualizadas.
            p.mb-0 <b>Ejemplo</b>: en un tablero educativo, un filtro por carrera y año permite analizar datos específicos, por ejemplo, “Ingeniería Industrial - 2023”.
    
          .div(titulo="Bookmarks")
            p.mb-0 Vistas predefinidas que guardan configuraciones específicas del tablero. Permiten construir narrativas guiadas o simular escenarios alternativos como escenarios optimista, base o pesimista.
            p.mb-0 <b>Ejemplo</b>: en un panel financiero, se navega entre escenarios definidos: “Presupuesto proyectado”, “Resultado actual” y “Escenario optimista”.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Técnicas para comunicar incertidumbre, anomalías y escenarios
    
    p.mb-5 La realidad organizacional está marcada por la variabilidad. Un tablero bien diseñado debe no solo mostrar datos estables, sino también visualizar desviaciones, comunicar incertidumbre y simular escenarios alternativos. Esto facilita tomar decisiones informadas en entornos cambiantes.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Visualización de escenarios
              p Permite mostrar proyecciones mediante líneas punteadas o zonas sombreadas. 
              p <b>Ejemplo</b>: Línea de tendencia con tres trayectorias superpuestas: base, pesimista y optimista.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 anomalías
              p Resalta desviaciones críticas mediante colores, íconos o alertas visuales. 
              p <b>Ejemplo</b>: Caída abrupta en entregas destacada en rojo con una flecha descendente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tooltips explicativos
              p Agrega información contextual, causas posibles o enlaces a reportes relacionados.
              p <b>Ejemplo</b>: Alerta con texto emergente: “Incremento en tiempos de tránsito por cierre de rutas”.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Bookmarks para escenarios
              p Facilita la navegación entre vistas guardadas o simulaciones de planificación. 
              p <b>Ejemplo</b>: Cambiar entre escenarios trimestrales: “base”, “ajuste” y “proyección optimista”.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Casos reales de storytelling interactivo
    
    p.mb-5 Organismos multilaterales utilizan tableros interactivos para comunicar hallazgos complejos de forma comprensible y dinámica, orientando decisiones a nivel global.

    .titulo-figura.mb-4
      h5 Tabla 3.
      span Ejemplos de storytelling
    .tabla-a.color-acento-botones.mb-5.tbl
      table
        thead
          tr
            th.bg-color-3.text-white Institución
            th.bg-color-3.text-white Caso destacado
            th.bg-color-3.text-white Enlace
        tbody
          tr
            td Organización de las Naciones Unidas (ONU)
            td Dashboard ODS con mapas, filtros por país y narrativas visuales.
            td 
              a.anexo.mb-4.mb-lg-0.bg-color-white(href="https://sdgs.un.org/goals" target="_blank")
                .anexo__icono.bg-color-13
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Ir al sitio</b> sdgs.un.org/goals
          tr.bg-color-6
            td Banco Interamericano de Desarrollo (BID)
            td Paneles con datos de impacto económico y comparaciones regionales.
            td 
              a.anexo.mb-4.mb-lg-0.bg-color-white(href="https://data.iadb.org" target="_blank")
                .anexo__icono.bg-color-13
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Ir al sitio</b> data.iadb.org
          tr
            td Organización Mundial de la Salud (OMS)
            td Dashboard COVID-19 con visualización global de casos y vacunas.
            td 
              a.anexo.mb-4.mb-lg-0.bg-color-white(href="https://covid19.who.int" target="_blank")
                .anexo__icono.bg-color-13
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Ir al sitio</b> covid19.who.int


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Personalización de narrativas por perfil de audiencia
    
    p.mb-5 La narrativa visual debe adaptarse al perfil de quien la recibe. Un mismo conjunto de datos puede interpretarse de forma distinta según el nivel técnico del usuario. 

    .titulo-figura.mb-4
      h5 Tabla 4.
      span Publico técnico y no técnico 
    .tabla-a.color-acento-botones.mb-5.tbl
      table
        thead
          tr
            th.bg-color-3.text-white Público técnico
            th.bg-color-3.text-white Público no técnico
        tbody
          tr
            td Modelos estadísticos, márgenes de error, series de tiempo detalladas.
            td Implicaciones clave para el negocio, riesgos y oportunidades.
          tr.bg-color-6
            td Gráficos con múltiples capas, exploración libre del dato.
            td Visualizaciones simples, mensajes claros y guiados.
          tr
            td Recomendaciones basadas en hipótesis.
            td Recomendaciones prácticas y directamente ejecutables.  


    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/21.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Recomendación estratégica: diseñar vistas diferenciadas según el perfil del usuario utilizando bookmarks, tooltips y filtros condicionales.
        .bg-color-2.p-4(data-aos="fade-left")
          h5 Ejemplo aplicado:
          p Un mismo dashboard puede tener dos versiones:
          ul.lista-ul--color
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Vista Ejecutiva</b>: Resumen de KPIs, interpretación visual, acciones sugeridas.
            li.mb-3.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Vista Analítica</b>: Visualizaciones detalladas, filtros avanzados y mayor profundidad exploratoria.

    .bg-full-width.bg-color-7
      .p-4.p-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Ecuaciones y fórmulas base del análisis interactivo
        
        p.mb-5 Un dashboard interactivo no se limita a representar datos: requiere de indicadores calculados con fórmulas estratégicas, comprensibles y adaptables a múltiples sectores. Estas ecuaciones son clave para detectar patrones, automatizar análisis y generar decisiones inmediatas. Los criterios de selección de fórmulas son:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/22.svg" alt="" style="width: 90px")
              h5.text-center Universalidad
              p.mb-0.text-center Aplicables a distintos sectores (retail, salud, finanzas, educación, logística).
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/23.svg" alt="" style="width: 90px")
              h5.text-center Relevancia estratégica
              p.mb-0.text-center Alineadas con objetivos de negocio.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/24.svg" alt="" style="width: 90px")
              h5.text-center Simplicidad técnica
              p.mb-0.text-center Comprensibles para públicos técnicos y no técnicos.
    
        p.mb-5 A continuación, se presentan las fórmulas fundamentales utilizadas en análisis interactivo y sus aplicaciones típicas:

        .titulo-figura.mb-4
          h5 Tabla 5.
          span Fórmulas estratégicas para análisis interactivo
    .tabla-a.color-acento-botones.mb-5.tbl
      table
        thead
          tr
            th.bg-color-3.text-white Indicador
            th.bg-color-3.text-white Fórmula
            th.bg-color-3.text-white Aplicación típica
        tbody
          tr
            td Crecimiento intermensual (%)
            td ((Valor actual − Valor anterior) / Valor anterior) × 100
            td Seguimiento de ventas, usuarios, ingresos
          tr.bg-color-6
            td Tasa de conversión
            td Clientes convertidos / Total contactados
            td Evaluación de campañas y embudos de captación
          tr
            td Rentabilidad por cliente
            td (Ingresos − Costos asociados) / Ingresos
            td Segmentación por valor del cliente, análisis de rentabilidad
          tr.bg-color-6
            td Diferencia de desempeño por segmento
            td Métrica A − Métrica B
            td Comparación entre regiones, canales o cohortes


    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Integración avanzada de cálculos en dashboards estratégicos
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/25.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1 
        .bg-color-4.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Cada una de las fórmulas presentadas puede integrarse directamente como medida dinámica en plataformas como Power BI (vía lenguaje DAX), o como cálculo personalizado en Tableau y Looker Studio. Al incluir estas fórmulas dentro de visualizaciones contextuales —como tarjetas de KPI, gráficos comparativos o líneas de tendencia—, no solo se informan valores: se construye una narrativa visual comprensible para equipos directivos y operativos.
        p(data-aos="fade-left") Estas métricas bien aplicadas revelan patrones ocultos, identifican anomalías y convierten grandes volúmenes de datos en decisiones accionables. Para entender su verdadero valor, es necesario explorar cómo estos lenguajes de cálculo operan en entornos de análisis visual interactivo.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Lenguaje DAX y cálculo personalizado: fundamento técnico y justificación académica
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/26.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el ámbito de la ciencia de datos aplicada a la inteligencia de negocios, las fórmulas no son simples operaciones matemáticas. Son estructuras semánticas que traducen la lógica del negocio a indicadores accionables, capaces de adaptarse a distintos filtros y contextos dentro de un dashboard.
    
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Herramientas como Power BI, Tableau y Looker Studio permiten esta integración mediante lenguajes funcionales como DAX (Data Analysis Expressions) y funciones contextuales como CALCULATE, FILTER, IF, RELATED, entre otras.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Evidencia académica
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/27.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") ●	Según el estudio doctoral de M. M. Rashid (2022) (University of Technology Sydney), el uso de lenguajes como DAX incrementa la capacidad de construir escenarios personalizados y mejora la calidad de las decisiones ejecutivas en tiempo real.
    
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          p.mb-0 “Los lenguajes embebidos como DAX representan una capa semántica intermedia entre los datos crudos y la lógica de negocio, facilitando la construcción de conocimiento derivado en dashboards estratégicos” (p. 87).
        p ●	Investigaciones del MIT Center for Digital Business (Brynjolfsson & McElheran, 2021) concluyen que las organizaciones que implementan dashboards con funciones de cálculo condicional y visualización segmentada son 32% más efectivas en la detección de anomalías y ajustes operativos.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicación estratégica del lenguaje DAX en Power BI
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/28.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Power BI utiliza DAX como lenguaje para crear medidas dinámicas y columnas calculadas que se ajustan automáticamente al contexto (filtros por producto, canal, zona, etc.). Algunas funciones clave:
    
        .bg-color-4.p-5.mb-3(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Comparación entre periodos: ventas YTD, YOY
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Detección de variaciones o desviaciones
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Cálculo de promedios móviles y variaciones porcentuales
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Activación de alertas visuales mediante reglas condicionales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/29.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") <b>Ejemplo DAX</b> – Crecimiento mensual:
    
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          p.mb-0 DAX
          p.mb-0 CopyEdit
          p.mb-0 CrecimientoMensual = 
          p.mb-0 VAR MesAnterior = CALCULATE(SUM(Ventas[Total]), DATEADD(Ventas[Fecha], -1, MONTH))
          p.mb-0 RETURN
          p.mb-0 DIVIDE(SUM(Ventas[Total]) - MesAnterior, MesAnterior) * 100
        p Este cálculo se actualiza automáticamente al aplicar cualquier filtro en el dashboard, generando una visualización totalmente contextual.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto En Tableau, los calculated fields permiten construir expresiones que se actualizan en tiempo 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/30.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En Tableau, los calculated fields permiten construir expresiones que se actualizan en tiempo real a medida que el usuario explora la visualización. Estos cálculos son similares a SQL y se adaptan al filtro activo.
        h5 Ejemplo en Tableau:
        .bg-color-10.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Tableau
          p.mb-0 CopyEdit
          p.mb-0 IF [Canal] = "Online" THEN [Ventas] * 0.8 ELSE [Ventas] END

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/31.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Esto permite, por ejemplo, ajustar las métricas según el canal seleccionado, facilitando la segmentación dinámica.
    
        .bg-color-2.p-5.mb-3(data-aos="fade-left")
          p En Looker Studio, aunque el motor de cálculo es más limitado, se pueden definir campos calculados directamente en los informes. Integrado con Google Sheets, Analytics o BigQuery, permite construir indicadores como:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Porcentaje de conversión.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Crecimiento de visitas por periodo.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Clasificación de usuarios según engagement.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Fórmulas como núcleo del storytelling visual
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/32.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Estas fórmulas son la base narrativa de los dashboards interactivos. Su función no es solamente cuantificar, sino transformar datos en mensajes visuales comprensibles. Sin ellas, no sería posible:
    
        .bg-color-1.p-5.mb-3(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Crear tarjetas de KPI dinámicas
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Activar colores condicionales que guíen la atención
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Personalizar tooltips con métricas explicativas
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Simular escenarios estratégicos (optimista, base, pesimista)
        p.mb-0 Como afirma Therón (2021): “El paso de los gráficos estáticos a los dashboards interactivos requiere no solo visualización, sino lógica de datos incrustada. El storytelling en entornos de negocios es imposible sin ecuaciones narrativas detrás.”
        p (Visualización de datos: Caminos de ida y vuelta entre arte y ciencia, p. 51)

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Aplicaciones por sectores económicos
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/33.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1 
        .bg-color-4.p-5.mb-3(data-aos="fade-left")
          p.mb-0 Para consolidar lo aprendido, es esencial contextualizar las fórmulas y técnicas interactivas en sectores reales de aplicación. Cada industria enfrenta desafíos distintos, pero todas requieren traducir datos en decisiones estratégicas.
        p(data-aos="fade-left") La siguiente tabla muestra cómo distintos sectores aplican estas herramientas para construir dashboards con valor estratégico real:

    .titulo-figura.mb-4
      h5 Tabla 6.
      span Aplicaciones sectoriales del análisis interactivo
    .tabla-a.color-acento-botones.mb-5.tbl
      table
        thead
          tr
            th.bg-color-3.text-white Sector
            th.bg-color-3.text-white Indicador Clave
            th.bg-color-3.text-white Visualización interactiva
            th.bg-color-3.text-white Insight estratégico
            th.bg-color-3.text-white Ejemplo real
        tbody
          tr
            td Retail
            td Ticket promedio
            td Filtros por canal y producto
            td Identificación de caídas puntuales y causas
            td Nike Dashboard
          tr.bg-color-6
            td Salud
            td Tasa de reingreso
            td Heatmaps + drill por diagnóstico
            td Prevención de fallos post-alta médica
            td 
              a.anexo.mb-4.mb-lg-0.bg-color-white(href="https://https://covid19.who.int/" target="_blank")
                .anexo__icono.bg-color-13
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Ir al sitio</b> OMS COVID Dashboard
          tr
            td Educación
            td Rendimiento por cohorte
            td Gráficos de dispersión + tooltips por materia
            td Ajuste curricular y planificación de tutorías
            td OECD Education GPS
              
          tr.bg-color-6
            td Finanzas
            td Margen operativo
            td Comparaciones interactivas entre unidades
            td Rediseño de estrategias de inversión
            td 
               a.anexo.mb-4.mb-lg-0.bg-color-white(href="https://https://data.iadb.org/" target="_blank")
                .anexo__icono.bg-color-13
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Ir al sitio</b> BID Data Platform
          tr
            td Logística
            td Entregas a tiempo
            td Mapas + filtros por ruta y tipo de vehículo
            td Optimización de rutas críticas y flotas
            td DHL Supply Chain Insights

    p.mb-5 Las ecuaciones base del análisis interactivo no son elementos aislados: son estructuras semánticas que dotan de inteligencia al dashboard, permiten una narrativa dinámica y transforman la visualización en acción. Su dominio no solo distingue a un buen analista, sino que convierte al profesional en estratega digital con visión sistémica.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2.text-white
            h2.mb-4(data-aos="flip-up") Creación de dashboards empresariales
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Creación de dashboards empresariales, donde se aborda la importancia estratégica del diseño de tableros interactivos en el contexto de la analítica y la inteligencia de negocios
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Creación de dashboards empresariales.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/34.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/117744" target="_blank" rel="noopener noreferrer") Casas Roma, J. Nin Guerrero, J. & Julbe López, F. (2019). Big data: análisis de datos en entornos masivos: ( ed.). Editorial UOC.   

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://arxiv.org/abs/2205.00757" target="_blank" rel="noopener noreferrer") Bach, B., Freeman, E., Abdul‑Rahman, A., Turkay, C., Khan, S., Fan, Y., & Chen, M. (02 de mayo de 2022). Dashboard Design Patterns. arXiv. 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=FESG7GTjc-4&ab_channel=HUBUIO " target="_blank" rel="noopener noreferrer") HUB UIO (2022, 23 de junio). Cómo contar historias con datos | Laboratorio de expedición de datos[Video]. Youtube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        tema3d10ccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes elementos es indispensable para construir una narrativa visual estratégica en un dashboard?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Una gran cantidad de datos sin filtrar',
                esCorrecta: false,
              },
              { id: 'b', texto: 'Animaciones llamativas', esCorrecta: false },
              {
                id: 'c',
                texto: 'Una jerarquía visual clara y coherente',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Colores brillantes para captar la atención',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué técnica de Business Intelligence permite al usuario guardar vistas específicas de un dashboard para simular escenarios?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Tooltips', esCorrecta: false },
              { id: 'b', texto: 'Drill-through', esCorrecta: false },
              { id: 'c', texto: 'Bookmarks', esCorrecta: true },
              { id: 'd', texto: 'Filtros dinámicos', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el objetivo principal del uso de tooltips en un dashboard interactivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ocultar información sensible',
                esCorrecta: false,
              },
              { id: 'b', texto: 'Agregar efectos visuales', esCorrecta: false },
              {
                id: 'c',
                texto:
                  'Presentar detalles adicionales sin saturar la visualización principal',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Cambiar automáticamente el tipo de gráfico',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Según el enfoque del Data Storytelling, un insight debe tener las siguientes características, <strong>EXCEPTO</strong>:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Ser contextualizado', esCorrecta: false },
              {
                id: 'b',
                texto: 'Ser emocionalmente impactante',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ser una suposición basada en experiencia',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Estar respaldado por datos confiables',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué fórmula permite calcular la rentabilidad por cliente en un dashboard de análisis interactivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '(Ingresos + Costos) / Clientes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ingresos / Clientes Activos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '(Ingresos - Costos asociados) / Ingresos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Total Ventas / Número de Productos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
