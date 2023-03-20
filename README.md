# Readme e-commerce SuperArticulos

### Proyecto creado por:

        David López López 
        Curso de React
        Comision 51145
        Coderhouse S.L.R.

### Muestra de funcionamiento de la SPA:

    ![SPA e-commerce SuperAriculos](/public/images/SuperArticulos.gif)


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

### Fin