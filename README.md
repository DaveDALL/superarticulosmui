# Readme e-commerce SuperArticulos

### Proyecto creado por:

        David López López 
        Curso de React
        Comision 51145
        Coderhouse S.L.R.

### Muestra de funcionamiento de la SPA:

Funcionamiento incial:

![SPA e-commerce SuperAriculos](/public/images/SuperArticulos.gif)

Funcionamiento con la integracion del carrito y de la orden de compra:

![SPA e-commerce SuperArticulos Final](/public/images/SuperArticulosLast.gif)

### Descripción:

    El proyecto consiste en la implementación de un sitio de e-commerce con el nombre de SuperArticulos, el cual consiste en una tienda en línea para venta de articulos que sean extraños, curiosos, o fuera de lo común; pero que a su vez sean de utilidad para el usuario en el día a día.

### Implementación:

    En una primera etapa se se crean los siguientes componentes:

    * NavBar: Se crea una barra de menú que tendra los puntos: Brand (Nombre de la tienda), un categoria de inicio y 3 categorias cliqueables.

    * CartWidget: La colocación de la figura de un carrito de compras, con un número hardcodeado que representará cantidad de artículos. El CartWidget se integrará a la barra de navegación.

    * ItemListContainer: Conetenedor de la lista de items del landing page, que hasta este punto, recibe una props desde App.jsx llamada greetings, integrandola al componente ItemListContainer.

    Se ocupa Material UI para realiza los estilos de los componentes, y a través del archivo de estilos App.css, para realizar modificaciones adicionales al estilo.

    En la segunda etapa se crean funcionabilidad y componentes siguientes:

    1. Componentes.
    
    * Catalog: Componente que recibe el arreglo de objetos de productos; desde el ItemListContainer, recibe los datos mediante un fetching hacia un archivo local ubicado en la caperta de invetory dentro la careta public. En el catalog se realiza el filtrado y mapeo de productos para poder desplegar las tarjetas de productos totales, por categorías: SmartWaches, Para Zurdos, Bocinas Inteligentes. el Componente recibe los productos mediante las PROPS enviadas desde el ItemListContainer, y este a su vez las envia al CardRendering
    
    * CardRendering: Donde se crea la tarjeta y recibe los datos de producto de map realizado en Catalog, y recibidos mediante las PROPS

    * ItemDetailContainer: Al igual que el ItemListContainer, recibe los productos desde el archivo local, mediante un fetch, y enviando el resultado al componente ProductDetail, através de la PROPS

    * ProductDetail: Recibe los datos de productos desde el ItemDetailContainer. Dentro de este componente, se realiza el filtrado de producto seleccionado, a través del ID de producto, enviando al componente CardProductDetailRender, para dibujar la trajeta de producto seleccionado.

    * CardProductDetailRender: Este componente realiza el renderizado de la trajeta del producto seleccionado en ProductDetail. Por otro la integra el componente de ProductCounter.

    * ProductCounter: En este componente se realiza el renderizado de los botones para sumar y restar cantidades de producto, tomando en cuenta que no se puede superar el stock de producto, no se pueden tener cantidades negativas; se integra un botón de colocación de productos a una cantidad CERO; y se integra el boton para agregar al carrito.

    * Cart: Se crea el componente Cart para visualización, queda pendiente la integración para recepción de los productos, cantidades y reakizaciión del proceso de compra.

    * Home: Se elabora un componente de Home para el inicio del sitio web de e-commerce.

    * Error: Se elabura un componente para recepción de sitios no encontrados, indicando con 404, que el sitio buscado no esta disponible.

    2. Funcionabilidad.
    
    Para la funcionabilidad de sitio web como SPA (single Page Application), se implementan las siguientes funciones.

    * fetch: Para traer los productos desde el archivo local inventoryProduct.json, ubicado en public/inventory/, mediante una función que realiza async/await.

    * Estados: donde empelan los Hooks de useState y useEffect. Mediante useState, se realiza el hook para actualzar el arreglo de productos una vez recibido mediante fetch; y a través de useEffect realiza la ejecución de la función asíncrona de fetchingData(), la cual tiene la implementación del fetch. Esta funcionabilidad se integra en los componentes de ItemListContainer e ItemDetailContainer.

    * Routing: Esta funcionabilidad se integra a React mediante la instalacion de react route dom, para colocar las rutas virtuales en App.jsx, a través de BrowserRuter, Routes y Route. En los componentes se integra Link se realiza la integración hacia el ruteo de los componentes y el paso de valores de ID y CATEGORYID para el rendering de la tarjetas de productos.

    * Uso de Parametros: A través de la integración anterior de react route dom, se agrega la característica de usePArams(), y mediante esta funcionabilidad, se hace el envío de ID y CATEGORYID hacia los componentes de ProductDetail y Catalog respectivamente y establecer los parametros de filtrado.

    En la tercera etapa y última, se realiza la intergración de los siguientes componentes que daran la posibilidad de intregrar el carrito de compra, introducción de datos de compradory generación d orden de compra:

    3. Componentes:
    
    * CartContextProvider: Alojado en la carpeta de context bajo components, para agregar contexto, donde realizan procesos lógicos, se podrá enviar variables y funciones que otros componentes no relacionados podran usar.

    * Cart: Donde se despliegan los productos agregados al carrito, atraves del componente CardItemsCartendering, y se intregra el formulario de datos del comprador, e proporcional orden de compra al finalizar la transaccion.

    * CarItemsCartRendring: A traves de este componente de realiza el render de las tarjetas de productos del carrito, donde se muestra una imagen del producto, el nombre, el precio, la cantidad adquirida y el subtotal de caa producto; asi mismo se adiciona un boton para poder eliminar productos que no se desean.

    * CustomerForm: Formulario donde se llenan los datos del cliente: nombre, apellido, teléfono, email; con validación de correo electrónico, mediante un campo donde se solicita volver a escribir el correo y realizando la verificación. En este componente se integra un botón para realizar la compra una vez que todos los campos esten llenos, de lo contrario no se activará el botón de compra. Se integra la recepción de la orden de compra y el formateo de objeto order que representa el registro de compra con la información del comprador (nombre, apellido, telófono y email), datos del los productos comprados (id, nombre, precio, cantidad u subtotal), el total de la compra y el time stamp del servidor n la fecha y hora de la transacción

    * Loader: Se integra un loader con renderizado condicional, en los componentes de Home, ItemListContainer e ItemDetailContainer

    4. Funcionabilidad.
    
    Para dar continuidad la funcionabilidad de la SPA, se inetgra las siguientes funciones:

    * Se elimina el mock del archivo local json, y se realiaa la integración de la base de datos no relacional, Google Firebase en los componentes de Home, ItemListContainer e ItemDetailContainer, a través de los procedimientos indicados dentro de la documentación de firebase:

        https://cloud.google.com/firestore/docs/manage-data/add-data?hl=es-419

    * Mediante el uso de context, se incluye la lógica para realizar las siguientes funciones:
        - Incrementar cantidad de productos sin superar el stock
        - Decrementar cantidad de productos sin bajar de uno
        - Reset a cero cantidad del producto
        - Agregar item al carrito
        - Eliminar item del carrito
        - Calcular la cantidad de items en el carrito
        - Calular el monto total de la compra
        - Persisntencia del carrio en el local Storage en caso de que se refresque la pagina
        - Eliminación total del carrito de compras 
        - Eliminación de la registro del carrito del Local Storage
    
    * A traves del formulario de datos del comprador, además de ingresar los datos correspondientes de comprador: nombre, apellido, teléfono u email. Se realizan las funciones de:
        - Creación del objeto de la orden compra que contiene información del comprador (nombre, apellido, teléfono, email), información de los productos comprados (id, nombre, precio, cantidad y subtotal), total, fecha y hora de compra.
        - Conexión con firebase para el rgistro de la compra y generación de ID como proeba de compra y que se peude emplear como orden de compra.
        - Verificación de llenado de todos los campos
        - Verificación de coincidencia del email mediante un segundo campo
        - Activación de botón de compra déspues de la validación
        - Vvisualización de la orden de compra
    
    * Por otro lado se integra un boton de entendido, donde dará posibilidad al comprador de copiar o tomar captura de la orden de compra; una vez presionado el botón se borar el Local Storage y el carrito se dejara en blanco, llevando a la indicaciónd e carrito vacio.

    * La indicación del carrito vacio, nos indicara que el carrito esta vacio, y nos dará la opción de ir a comprar productos.

    * En el widget del carrito de obtiene la cantidad de productos a través del uso de context, donde realiza el cáculo.

    * Se puede acceder al carrito de compra, ya sea a través del widget o mediante el botón de finalizar compra que tiene cada producto en el detalle, donde se peude incrementar la cantidad o decrementa. El botón de finalizar compra se activa una vez que se hay agregado prducto al carrito.

### Seguimeinto de Proyecto

    * Integración del un sistema de control de invetario para cerrar el ciclo de compra, y poder agregar mas procucto, y hacer validadciones de cambios de precios

    * Integración de Autenticación e inicio de sesión de usuario registrado, registro de usuario nuevo, validación de datos como correo electronico y número teléfonico, a través de el envio de un correo de validación y un SMS para validar el teléfono.

    * Inetgración de un sistema de pagos.

### Fin