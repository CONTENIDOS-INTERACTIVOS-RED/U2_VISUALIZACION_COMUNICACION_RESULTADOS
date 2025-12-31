export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Técnicas de Storytelling con Datos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Técnicas de storytelling con datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Técnicas de storytelling con datos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Análisis interactivo de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Kaneko Aguilar, J. J. (2020). <em>Story cards para la gestión de talento: storytelling, storyboard y role-playing game</em>. Universidad Peruana de Ciencias Aplicadas (UPC).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/171644',
    },
    {
      referencia:
        'Arias Velandia, N., Becerra Plaza, G. E., & Rincón Baez, W. U. (2020). <em>Programas académicos técnicos y tecnológicos: Análisis de datos abiertos en Colombia</em>. Editorial Politécnico Grancolombiano.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/189557',
    },
    {
      referencia:
        "Hawthorne Johnson, D. G., Smith Batson, M. D. L. C., & Gamboa Graus, M. E. (2022). <em>Insights on Teacher's Lesson Plans for Enhancing Effective Communication Skills: Cases in English Language Teacher Training, Development and Practicum</em>. Editorial Tecnocientífica Americana.",
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/216772',
    },
    {
      referencia:
        'Alcalde, I. (2015). <em>Visualización de la información: de los datos al conocimiento</em>. Editorial UOC.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/57832',
    },
  ],
  glosario: [
    {
      termino: '<em>Bookmark</em>',
      significado:
        'Vista predefinida en un dashboard que guarda una configuración específica de filtros y visualizaciones para facilitar la navegación o simular escenarios.',
    },
    {
      termino: '<em>Dashboard</em>',
      significado:
        'Tablero de control interactivo que integra múltiples visualizaciones para monitorear y analizar indicadores clave de desempeño organizacional.',
    },
    {
      termino: '<em>Data Storytelling</em>',
      significado:
        'Técnica que combina análisis de datos con narrativa visual para comunicar hallazgos de manera clara, contextualizada y persuasiva.',
    },
    {
      termino: '<em>Drill-through</em>',
      significado:
        'Funcionalidad que permite profundizar en una categoría de datos haciendo clic para acceder a una vista más detallada.',
    },
    {
      termino: 'Filtro dinámico',
      significado:
        'Herramienta que permite al usuario personalizar la visualización segmentando los datos por criterios específicos como fecha, región o producto.',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'Observación estratégica que surge del análisis de datos, con potencial para orientar acciones o decisiones empresariales.',
    },
    {
      termino: '<em>KPI</em> (<em>Key Performance Indicator</em>)',
      significado:
        'Indicador clave utilizado para medir el progreso hacia objetivos estratégicos, operacionales o tácticos.',
    },
    {
      termino: '<em>Looker Studio</em>',
      significado:
        'Herramienta de Google para la creación de dashboards interactivos conectados a diversas fuentes de datos.',
    },
    {
      termino: '<em>OKR</em> (<em>Objectives and Key Results</em>)',
      significado:
        'Modelo de gestión que combina metas cualitativas con resultados cuantificables para alinear equipos y medir progreso.',
    },
    {
      termino: '<em>Power BI</em>',
      significado:
        'Plataforma de Microsoft para la visualización de datos, análisis interactivo y creación de dashboards empresariales.',
    },
    {
      termino: '<em>ROI</em> (<em>Return on Investment</em>)',
      significado:
        'Métrica financiera que evalúa el rendimiento de una inversión, comparando el beneficio obtenido con el costo.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de dividir datos en subconjuntos homogéneos para facilitar el análisis personalizado y la toma de decisiones.',
    },
    {
      termino: '<em>Tooltip</em>',
      significado:
        'Mensaje emergente que aparece al pasar el cursor sobre una visualización, ofreciendo información contextual adicional.',
    },
    {
      termino: 'Visualización de datos',
      significado:
        'Representación gráfica de información que permite comprender patrones, tendencias y relaciones entre variables.',
    },
    {
      termino: 'Zona de confianza',
      significado:
        'Rango que muestra la posible variación de un dato proyectado, utilizado para comunicar incertidumbre o escenarios.',
    },
  ],
}
