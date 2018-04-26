# ejemploAngularjs

Temario de AngularJS* 1.x y utilidades relacionadas+
* Controladores
* Directivas
    * Templates 
* Recursos
* Http 
* Coffee-script
* inyección de dependencias

Comandos de utilidad:

* Docker:
    * Levantar el proyecto usando la maquina docker, debe existir docker-composer.yml o docker-composer.yaml junto a la carpeta app

        ``` docker compose up ```
* Bower:
    * inicializar un proyecto bower

        ``` bower init ```
    * instalar una dependencia usando bower
        

         ``` bower install DEPENDENCIA@VERSION --save  ```
         
        --save es para almacenar los cambios en bower.json, el carácter ^ indica que es actualizable

    * instalar las dependecnias definidas en el archivo bower.json
    
        ``` bower install ```
 

    * compilar los archivos coffee
        
        ``` coffee -wc archivo.coffee ```

