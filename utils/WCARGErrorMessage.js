class WCARGErrorMessage {

    static messages = new Map([
        //1_1_1
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H30.2", "El elemento Img es el único contenido del enlace, pero falta el texto alternativo. El texto alternativo debe describir el propósito del enlace."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1H67.1", "El elemento Img con texto alternativo vacío debe tener un atributo de título ausente o vacío."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H67.2", "El elemento Img está marcado para que la tecnología de asistencia lo ignore."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H37", "Al elemento Img le falta un atributo alt. Utilice el atributo alt para especificar una alternativa de texto breve."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.G94.Image", "Asegúrese de que el texto alternativo del elemento img tenga el mismo propósito y presente la misma información que la imagen."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H36", "El botón de enviar imagen no tiene un atributo alt. Especifique una alternativa de texto que describa la función del botón, usando el atributo alt."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.G94.Button", "Asegúrese de que el texto alternativo del botón Enviar imagen identifique el propósito del botón."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H24", "Elemento de área en un mapa de imagen al que le falta un atributo alt. Cada elemento de área debe tener una alternativa de texto que describa la función del área del mapa de imágenes."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H24.2", "Asegúrese de que la alternativa de texto del elemento de área tenga el mismo propósito que la parte de la imagen del mapa de imagen a la que hace referencia."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.G73,G74", "Si esta imagen no se puede describir completamente en una alternativa de texto corto, asegúrese de que también esté disponible una alternativa de texto largo, como en el cuerpo del texto o a través de un enlace."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG5", "El elemento Img dentro de un enlace no debe usar texto alternativo que duplique el contenido de texto del enlace."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG4", "El elemento Img dentro de un enlace tiene texto alternativo vacío o faltante cuando un enlace al lado contiene texto de enlace. Considere la posibilidad de combinar los enlaces."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H2.EG3", "El elemento Img dentro de un enlace no debe usar texto alternativo que duplique el contenido de un enlace de texto al lado."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H53,ARIA6", "Los elementos del objeto deben contener una alternativa de texto después de agotar todas las demás alternativas."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.G94,G92.Object,ARIA6", "Compruebe que hay disponibles alternativas de texto corto (y si corresponde, largo) para contenido que no sea de texto que tenga el mismo propósito y presente la misma información."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H35.3", "Los elementos del applet deben contener un texto alternativo en el cuerpo del elemento, para navegadores sin soporte para el elemento del applet."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.H35.2", "Los elementos del subprograma deben contener un atributo alt, para proporcionar una alternativa de texto a los navegadores que admiten el elemento pero no pueden cargar el subprograma."],
        ["WCAG2A.Principle1.Guideline1_1.1_1_1.G94,G92.Applet", "Compruebe que hay disponibles alternativas de texto corto (y si corresponde, largo) para contenido que no sea de texto que tenga el mismo propósito y presente la misma información."],

        //1_2_1
        ["WCAG2A.Principle1.Guideline1_2.1_2_1.G158", "Si este objeto incrustado solo contiene audio pregrabado y no se proporciona como una alternativa para el contenido de texto, verifique que haya una versión de texto alternativa disponible."],
        ["WCAG2A.Principle1.Guideline1_2.1_2_1.G159,G166", "Si este objeto incrustado solo contiene video pregrabado y no se proporciona como una alternativa para el contenido de texto, verifique que haya disponible una versión de texto alternativa o que se proporcione una pista de audio que presente información equivalente."],

        //1_2_2
        ["WCAG2A.Principle1.Guideline1_2.1_2_2.G87,G93", "Si este objeto incrustado contiene medios sincronizados pregrabados y no se proporciona como una alternativa para el contenido de texto, verifique que se proporcionen subtítulos para el contenido de audio."],

        //1_2_3
        ["WCAG2A.Principle1.Guideline1_2.1_2_3.G69,G78,G173,G8", "Si este objeto incrustado contiene medios sincronizados pregrabados y no se proporciona como una alternativa para el contenido de texto, verifique que haya una descripción de audio de su video y/o una versión de texto alternativa de se proporciona el contenido."],

        //1_2_4
        ["WCAG2AA.Principle1.Guideline1_2.1_2_4.G9,G87,G93", "Si este objeto incrustado contiene medios sincronizados, verifique que se proporcionen subtítulos para el contenido de audio en vivo."],

        //1_2_5
        ["WCAG2AA.Principle1.Guideline1_2.1_2_5.G78,G173,G8", "Si este objeto incrustado contiene medios sincronizados pregrabados, verifique que se proporcione una descripción de audio para su contenido de video."],

        //1_3_1
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.F92,ARIA4", "La función de este elemento es \"presentación\" pero contiene elementos secundarios con significado semántico."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistent", "El atributo \"for\" de esta etiqueta contiene un ID que no existe en el documento."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment", "El atributo \"for\" de esta etiqueta contiene un ID que no existe en el fragmento del documento."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H44.NotFormControl", "El atributo \"for\" de esta etiqueta contiene un ID para un elemento que no es un control de formulario. Asegúrese de haber ingresado la ID correcta para el elemento previsto."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H65", "Este control de formulario tiene un atributo de \"título\" que está vacío o solo contiene espacios. Se ignorará para propósitos de prueba de etiquetado."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.ARIA6", "Este control de formulario tiene un atributo \"aria-label\" que está vacío o solo contiene espacios. Se ignorará para propósitos de prueba de etiquetado."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.ARIA16,ARIA9", "Este control de formulario contiene un atributo aria-labelledby, sin embargo, incluye un ID \"{{id}}\" que no existe en un elemento. El atributo aria-labelledby se ignorará para propósitos de prueba de etiquetado."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.F68.Hidden", "Este campo de formulario oculto está etiquetado de alguna manera. No debería haber necesidad de etiquetar un campo de formulario oculto."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.F68.HiddenAttr", "Este campo de formulario está diseñado para ocultarse (usando el atributo \"oculto\"), pero también está etiquetado de alguna manera. No debería haber necesidad de etiquetar un campo de formulario oculto."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.F68", "Este campo de formulario debe estar etiquetado de alguna manera. Use el elemento de etiqueta (ya sea con un atributo \"for\" o envuelto alrededor del campo de formulario), o los atributos \"title\", \"aria-label\" o \"aria-labelledby\" según corresponda."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H49", "Marcado de presentación utilizado que se ha vuelto obsoleto en HTML5."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H49.AlignAttr", "Alinear atributos."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H49.Semantic", "El marcado semántico debe usarse para marcar texto especial o enfatizado para que pueda determinarse mediante programación."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H49.AlignAttr.Semantic", "El marcado semántico debe usarse para marcar texto especial o enfatizado para que pueda determinarse mediante programación."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H42", "Se debe usar el marcado de encabezado si este contenido está destinado a ser un encabezado."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H63.3", "La celda de la tabla tiene un atributo de alcance no válido. Los valores válidos son fila, columna, grupo de filas o grupo de columnas."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H63.2", "Los atributos de alcance en elementos td que actúan como encabezados para otros elementos están obsoletos en HTML5. Utilice un elemento th en su lugar."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H43.ScopeAmbiguous", "Los atributos de alcance en los elementos th son ambiguos en una tabla con múltiples niveles de encabezados. Utilice el atributo headers en los elementos td en su lugar."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H43.IncorrectAttr", "Atributo de encabezado incorrecto en este elemento td. Se esperaba \"{{esperado}}\" pero se encontró \"{{real}}\""],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H43.IncorrectAttrNotice", "Verifique que los atributos de los encabezados en los elementos td sean correctos."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H43.HeadersRequired", "La relación entre los elementos td y sus elementos th asociados no está definida. Como esta tabla tiene múltiples niveles de elementos th, debe usar el atributo headers en los elementos td."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H43.MissingHeaderIds", "No todos los elementos de esta tabla contienen un atributo id. Estas celdas deben contener identificadores para que puedan ser referenciados por los atributos de encabezados de elementos td."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H43.MissingHeadersAttrs", "No todos los elementos td en esta tabla contienen un atributo de encabezado. Cada atributo de encabezado debe enumerar los identificadores de todos los elementos asociados con esa celda."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H43,H63", "La relación entre los elementos td y sus elementos th asociados no está definida. Utilice el atributo scope en los elementos th o el atributo headers en los elementos td."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H63.1", "No todos los elementos de esta tabla tienen un atributo de alcance. Estas celdas deben contener un atributo de alcance para identificar su asociación con elementos td."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H73.3.LayoutTable", "Esta tabla parece usarse para el diseño, pero contiene un atributo de resumen. Las tablas de diseño no deben contener atributos de resumen o, si se proporcionan, deben estar vacías."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H39,H73.4", "Si esta tabla es una tabla de datos y están presentes un atributo de resumen y un elemento de título, el resumen no debe duplicar el título."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H73.3.Check", "Si esta tabla es una tabla de datos, verifique que el atributo de resumen describa la organización de la tabla o explique cómo usar la tabla."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H73.3.NoSummary", "Si esta tabla es una tabla de datos, considere usar el atributo de resumen del elemento de la tabla para brindar una descripción general de esta tabla."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H39.3.LayoutTable", "Esta tabla parece usarse para el diseño, pero contiene un elemento de título. Las tablas de diseño no deben contener subtítulos."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H39.3.Check", "Si esta tabla es una tabla de datos, verifique que el elemento de título describa con precisión esta tabla."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H39.3.NoCaption", "Si esta tabla es una tabla de datos, considere usar un elemento de título en el elemento de la tabla para identificar esta tabla."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H71.NoLegend", "Fieldset no contiene un elemento de leyenda. Todos los conjuntos de campos deben contener un elemento de leyenda que describa una descripción del grupo de campos."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H85.2", "Si esta lista de selección contiene grupos de opciones relacionadas, deben agruparse con optgroup."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H71.SameName", "Si estos botones de radio o casillas de verificación requieren una descripción adicional a nivel de grupo, deben estar contenidos dentro de un elemento fieldset."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H48.1", "Parece que este contenido está simulando una lista desordenada utilizando texto sin formato. Si es así, marcar este contenido con un elemento ul agregaría información de estructura adecuada al documento."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H48.2", "Parece que este contenido está simulando una lista ordenada usando texto sin formato. Si es así, marcar este contenido con un elemento ol agregaría información de estructura adecuada al documento."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.G141_a", "La estructura de encabezado no está lógicamente anidada. Este elemento h{{headingNum}} parece ser el encabezado del documento principal, por lo que debería ser un elemento h1."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.G141_b", "La estructura de encabezado no está lógicamente anidada. Este elemento h{{headingNum}} debe ser un h{{properHeadingNum}} para anidarse correctamente."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H42.2", "Etiqueta de encabezado encontrada sin contenido. El texto que no pretende ser un encabezado no debe marcarse con etiquetas de encabezado."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.H48", "Si este elemento contiene una sección de navegación, se recomienda marcarlo como una lista."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.LayoutTable", "Esta tabla parece ser una tabla de diseño. Si está destinado a ser una tabla de datos, asegúrese de que las celdas de encabezado se identifiquen con elementos th."],
        ["WCAG2A.Principle1.Guideline1_3.1_3_1.DataTable", "Esta tabla parece ser una tabla de datos. Si está destinado a ser una tabla de diseño, asegúrese de que no haya elementos th, y ningún resumen o título."],

        //1_3_2
        ["WCAG2A.Principle1.Guideline1_3.1_3_2.G57", "Compruebe que el contenido está ordenado en una secuencia significativa cuando se linealiza, como cuando las hojas de estilo están deshabilitadas."],

        //1_3_3
        ["WCAG2A.Principle1.Guideline1_3.1_3_3.G96", "Cuando se proporcionan instrucciones para comprender el contenido, no confíe únicamente en las características sensoriales (como la forma, el tamaño o la ubicación) para describir los objetos."],

        //1_4_1
        ["WCAG2A.Principle1.Guideline1_4.1_4_1.G14,G18", "Compruebe que cualquier información transmitida usando solo colores también esté disponible en texto o a través de otras señales visuales."],

        //1_4_2
        ["WCAG2A.Principle1.Guideline1_4.1_4_2.F23", "Si este elemento contiene audio que se reproduce automáticamente durante más de 3 segundos, compruebe que existe la posibilidad de pausar, detener o silenciar el audio."],

        //1_4_3
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Abs", "Este elemento está absolutamente posicionado y no se puede determinar el color de fondo. Asegúrese de que la relación de contraste entre el texto y todas las partes cubiertas del fondo sea de al menos {{obligatorio}}:1."],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.BgImage", "El texto de este elemento se coloca en una imagen de fondo. Asegúrese de que la relación de contraste entre el texto y todas las partes cubiertas de la imagen sea de al menos {{obligatorio}}:1."],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Alpha", "El texto o fondo de este elemento contiene transparencia. Asegúrese de que la relación de contraste entre el texto y el fondo sea de al menos {{obligatorio}}:1."],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail", "Este elemento tiene un contraste insuficiente en este nivel de conformidad. Se esperaba una relación de contraste de al menos {{requerido}}:1, pero el texto de este elemento tiene una relación de contraste de {{valor}}:1."],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail.Recomendation", "Recomendación: "],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail.Recomendation.Text", "cambiar el color del texto a {{value}}"],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G145.Fail.Recomendation.Background", "cambiar el fondo a {{value}}"],

        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Abs", "Este elemento está absolutamente posicionado y no se puede determinar el color de fondo. Asegúrese de que la relación de contraste entre el texto y todas las partes cubiertas del fondo sea de al menos {{obligatorio}}:1."],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.BgImage", "El texto de este elemento se coloca en una imagen de fondo. Asegúrese de que la relación de contraste entre el texto y todas las partes cubiertas de la imagen sea de al menos {{obligatorio}}:1."],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Alpha", "El texto o fondo de este elemento contiene transparencia. Asegúrese de que la relación de contraste entre el texto y el fondo sea de al menos {{obligatorio}}:1."],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail", "Este elemento tiene un contraste insuficiente en este nivel de conformidad. Se esperaba una relación de contraste de al menos {{requerido}}:1, pero el texto de este elemento tiene una relación de contraste de {{valor}}:1."],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail.Recomendation", "Recomendación: "],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail.Recomendation.Text", "cambiar el color del texto a {{value}}"],
        ["WCAG2AA.Principle1.Guideline1_4.1_4_3.G18.Fail.Recomendation.Background", "cambiar el fondo a {{value}}"],

        //1_4_4
        ["WCAG2AA.Principle1.Guideline1_4.1_4_4.G142", "Verifique que el texto se pueda cambiar de tamaño sin tecnología de asistencia hasta en un 200 por ciento sin pérdida de contenido o funcionalidad."],

        //1_4_5
        ["WCAG2AA.Principle1.Guideline1_4.1_4_5.G140,C22,C30.AALevel", "Si las tecnologías que se utilizan pueden lograr la presentación visual, compruebe que se utiliza texto para transmitir información en lugar de imágenes de texto, excepto cuando la imagen del texto es esencial para la información que se transmite , o se puede personalizar visualmente según los requisitos del usuario."],

        //2_1_1
        ["WCAG2A.Principle2.Guideline2_1.2_1_1.G90", "Asegúrese de que la funcionalidad proporcionada por un controlador de eventos para este elemento esté disponible a través del teclado."],
        ["WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.DblClick", "Asegúrese de que la funcionalidad proporcionada al hacer doble clic en este elemento esté disponible a través del teclado."],
        ["WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseOver", "Asegúrese de que la funcionalidad proporcionada al pasar el mouse sobre este elemento esté disponible a través del teclado; por ejemplo, usando el evento de enfoque."],
        ["WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseOut", "Asegúrese de que la funcionalidad proporcionada por el mouse fuera de este elemento esté disponible a través del teclado; por ejemplo, usando el evento de desenfoque."],
        ["WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseMove", "Asegúrese de que la funcionalidad proporcionada al mover el mouse sobre este elemento esté disponible a través del teclado."],
        ["WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseDown", "Asegúrese de que la funcionalidad proporcionada al presionar el mouse sobre este elemento esté disponible a través del teclado; por ejemplo, usando el evento keydown."],
        ["WCAG2A.Principle2.Guideline2_1.2_1_1.SCR20.MouseUp", "Asegúrese de que la funcionalidad proporcionada al pasar el mouse sobre este elemento esté disponible a través del teclado; por ejemplo, usando el evento keyup."],

        //2_1_2
        ["WCAG2A.Principle2.Guideline2_1.2_1_2.F10", "Compruebe que este subprograma o complemento proporciona la capacidad de mover el foco lejos de sí mismo cuando se usa el teclado."],

        //2_2_1
        ["WCAG2A.Principle2.Guideline2_2.2_2_1.F40.2", "Meta etiqueta de actualización utilizada para redirigir a otra página, con un límite de tiempo que no es cero. Los usuarios no pueden controlar este límite de tiempo."],
        ["WCAG2A.Principle2.Guideline2_2.2_2_1.F41.2", "Meta etiqueta de actualización utilizada para actualizar la página actual. Los usuarios no pueden controlar el límite de tiempo para esta actualización."],

        //2_2_2
        ["WCAG2A.Principle2.Guideline2_2.2_2_2.SCR33,SCR22,G187,G152,G186,G191", "Si alguna parte del contenido se mueve, se desplaza o parpadea durante más de 5 segundos, o se actualiza automáticamente, verifique que haya un mecanismo disponible para pausar, detener, u ocultar el contenido."],
        ["WCAG2A.Principle2.Guideline2_2.2_2_2.F4", "Asegúrese de que haya un mecanismo disponible para detener este elemento parpadeante en menos de cinco segundos."],
        ["WCAG2A.Principle2.Guideline2_2.2_2_2.F47", "Los elementos parpadeantes no pueden satisfacer el requisito de que la información parpadeante pueda detenerse en cinco segundos."],

        //2_3_1
        ["WCAG2A.Principle2.Guideline2_3.2_3_1.G19,G176", "Compruebe que ningún componente del contenido parpadee más de tres veces en un período de 1 segundo, o que el tamaño de cualquier área parpadeante sea lo suficientemente pequeño."],

        //2_4_1
        ["WCAG2A.Principle2.Guideline2_4.2_4_1.H64.1", "El elemento iframe requiere un atributo de título no vacío que identifique el marco."],
        ["WCAG2A.Principle2.Guideline2_4.2_4_1.H64.2", "Compruebe que el atributo de título de este elemento contiene texto que identifica el marco."],
        ["WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124,H69", "Asegúrese de que cualquier elemento de navegación común se pueda omitir; por ejemplo, mediante el uso de enlaces de salto, elementos de encabezado o roles de referencia de ARIA."],
        ["WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchID", "Este enlace apunta a un ancla con nombre \"{{id}}\" dentro del documento, pero no existe ninguna ancla con ese nombre."],
        ["WCAG2A.Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchIDFragment", "Este enlace apunta a un ancla con nombre \"{{id}}\" dentro del documento, pero no existe ninguna ancla con ese nombre en el fragmento probado."],


        //2_4_2
        ["WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.NoHeadEl", "No hay sección de cabecera en la que colocar un elemento de título descriptivo."],
        ["WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl", "Se debe proporcionar un título para el documento, utilizando un elemento de título no vacío en la sección de encabezado."],
        ["WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.EmptyTitle", "El elemento de título en la sección principal no debe estar vacío."],
        ["WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2", "Compruebe que el elemento del título describe el documento."],
        //2_4_3
        ["WCAG2A.Principle2.Guideline2_4.2_4_3.H4.2", "Si se usa tabindex, verifique que el orden de tabulación especificado por los atributos de tabindex siga las relaciones en el contenido."],

        //2_4_4
        ["WCAG2A.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81,H33", "Verifique que el texto del enlace combinado con el contexto del enlace determinado mediante programación, o su atributo de título, identifique el propósito del enlace."],
        ["WCAG2A.Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81", "Verifique que el texto del enlace combinado con el contexto del enlace determinado mediante programación identifique el propósito del enlace."],

        //2_4_5
        ["WCAG2AA.Principle2.Guideline2_4.2_4_5.G125,G64,G63,G161,G126,G185", "Si esta página web no forma parte de un proceso lineal, compruebe que hay más de una forma de ubicar esta página web dentro de un conjunto de páginas web."],

        //2_4_6
        ["WCAG2AA.Principle2.Guideline2_4.2_4_6.G130,G131", "Verifique que los encabezados y las etiquetas describan el tema o el propósito."],


        //2_4_7
        ["WCAG2AA.Principle2.Guideline2_4.2_4_7.G149,G165,G195,C15,SCR31", "Verifique que haya al menos un modo de operación donde el indicador de enfoque del teclado pueda ubicarse visualmente en los controles de la interfaz de usuario."],

        //3_1_1
        ["WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2", "El elemento html debe tener un atributo lang o xml:lang que describa el idioma del documento."],
        ["WCAG2A.Principle3.Guideline3_1.3_1_1.H57.3.Lang", "El idioma especificado en el atributo lang del elemento del documento no parece estar bien formado."],
        ["WCAG2A.Principle3.Guideline3_1.3_1_1.H57.3.XmlLang", "El idioma especificado en el atributo xml:lang del elemento del documento no parece estar bien formado."],

        //3_1_2
        ["WCAG2AA.Principle3.Guideline3_1.3_1_2.H58", "Asegúrese de que cualquier cambio en el idioma se marque con el atributo lang y/o xml:lang en un elemento, según corresponda."],
        ["WCAG2AA.Principle3.Guideline3_1.3_1_2.H58.1.Lang", "El idioma especificado en el atributo lang de este elemento no parece estar bien formado."],
        ["WCAG2AA.Principle3.Guideline3_1.3_1_2.H58.1.XmlLang", "El idioma especificado en el atributo xml:lang de este elemento no parece estar bien formado."],

        //3_2_1
        ["WCAG2A.Principle3.Guideline3_2.3_2_1.G107", "Compruebe que no se produce un cambio de contexto cuando este campo de entrada recibe el foco."],

        //3_2_2
        ["WCAG2A.Principle3.Guideline3_2.3_2_2.H32.2", "Este formulario no contiene un botón de envío, lo que crea problemas para aquellos que no pueden enviar el formulario usando el teclado. Los botones de envío son elementos INPUT con atributo de tipo \"enviar\" o \"imagen\", o elementos BOTÓN con tipo \"enviar\" u omitido/no válido."],

        //3_2_3
        ["WCAG2AA.Principle3.Guideline3_2.3_2_3.G61", "Compruebe que los mecanismos de navegación que se repiten en varias páginas web ocurren en el mismo orden relativo cada vez que se repiten, a menos que el usuario inicie un cambio."],

        //3_2_4
        ["WCAG2AA.Principle3.Guideline3_2.3_2_4.G197", "Verifique que los componentes que tienen la misma funcionalidad dentro de esta página web se identifiquen de manera consistente en el conjunto de páginas web al que pertenece."],

        //3_3_1
        ["WCAG2A.Principle3.Guideline3_3.3_3_1.G83,G84,G85", "Si se detecta automáticamente un error de entrada en este formulario, verifique que los elementos erróneos estén identificados y que los errores se describan al usuario en texto."],

        //3_3_2
        ["WCAG2A.Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90", "Verifique que se proporcionen etiquetas descriptivas o instrucciones (incluidos los campos obligatorios) para la entrada del usuario en este formulario."],

        //3_3_3
        ["WCAG2AA.Principle3.Guideline3_3.3_3_3.G177", "Compruebe que este formulario proporcione correcciones sugeridas a los errores en la entrada del usuario, a menos que ponga en peligro la seguridad o el propósito del contenido."],

        //3_3_4
        ["WCAG2AA.Principle3.Guideline3_3.3_3_4.G98,G99,G155,G164,G168.LegalForms", "Si este formulario obliga a un usuario a un compromiso financiero o legal, modifica/elimina datos controlables por el usuario o envía respuestas de prueba, asegúrese de que los envíos sean reversibles, verificado por errores de entrada, y/o confirmado por el usuario."],

        //4_1_1
        ["WCAG2A.Principle4.Guideline4_1.4_1_1.F77", "Valor de atributo de ID duplicado \"{{id}}\" encontrado en la página web."],

        //4_1_2
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Empty", "Elemento de anclaje encontrado con una ID pero sin href o texto de enlace. Considere mover su ID a un elemento principal o cercano."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.EmptyWithName", "Elemento de anclaje encontrado con un atributo de nombre pero sin href o texto de enlace. Considere mover el atributo de nombre para que se convierta en una identificación de un elemento principal o cercano."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId", "Elemento de anclaje encontrado sin contenido de enlace y sin nombre y/o atributo de ID."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoHref", "Los elementos de anclaje no deben usarse para definir objetivos de enlaces en la página. Si no utiliza el ID para otros fines (como CSS o secuencias de comandos), considere moverlo a un elemento principal."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Placeholder", "Elemento de anclaje encontrado con contenido de enlace, pero no se ha proporcionado ningún atributo href, ID o nombre."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.NoContent", "Elemento de anclaje encontrado con un atributo href válido, pero no se ha proporcionado contenido de enlace."],

        //CUSTOM MESSAGES
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Button.Name", "Este elemento tiene la función de \"botón\" pero no tiene un nombre disponible para una API de accesibilidad. Los nombres válidos son: título indefinido, contenido del elemento, aria-label indefinido, aria-labelledby indefinido"],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Div.Name", "Este elemento tiene la función de \"botón\" pero no tiene un nombre disponible para una API de accesibilidad. Los nombres válidos son: contenido del elemento, aria-label indefinido, aria-labeledby indefinido."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.Fieldset.Name", "Este elemento fieldset no tiene un nombre disponible para una API de accesibilidad. Los nombres válidos son: elemento de leyenda, aria-label indefinido, aria-labeledby indefinido."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.InputEmail.Name", "Este elemento de entrada de correo electrónico no tiene un nombre disponible para una API de accesibilidad. Los nombres válidos son: elemento de etiqueta, título indefinido, aria-label indefinido, aria-labeledby indefinido."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.InputText.Name", "Este elemento de entrada de texto no tiene un nombre disponible para una API de accesibilidad. Los nombres válidos son: elemento de etiqueta, título indefinido, aria-label indefinido, aria-labeledby indefinido."],
        ["WCAG2A.Principle4.Guideline4_1.4_1_2.H91.A.Name", "Este elemento tiene la función de \"botón\" pero no tiene un nombre disponible para una API de accesibilidad. Los nombres válidos son: contenido del elemento, aria-label indefinido, aria-labeledby indefinido."]



    ]);

    static getErrorMessageByErrorCode(errorCode) {
        let errorMessage = null;
        errorMessage = WCARGErrorMessage.messages.get(errorCode);

        if (!errorMessage) {
            errorMessage = "Mensaje de error no encontrado para el codigo de error: " + errorCode;
        }
        return errorMessage
    }
}


module.exports = {
    "getErrorMessageByErrorCode": WCARGErrorMessage.getErrorMessageByErrorCode
}
