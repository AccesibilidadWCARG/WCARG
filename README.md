<h1 align="center">
<img src="https://drive.google.com/file/d/13TsHzR7TkOAqKPHuqk5hKvjnhP1hTQgl/view?usp=share_link" alt="WCARG" width="250"/>
</h1>


# Accesibilidad Web Argentina

> Herramienta para automatizar las pruebas de accesibilidad web dentro de un entorno de Integraión Continua.

## **Instalacion**

### Entorno local

Descargar el código en su maquina ejecutando el comando
```
git clone https://github.com/AccesibilidadWCARG/WCARG.git
```

Luego descargar todas las dependencias necesarias que necesita WCARG
```
npm install
```


Para ejecutar una prueba debe proveer los siguentes parametros<br>
<ul>
<li>URL: Lista de URLs separadas por coma</li>
<li>EMAILS: Lista de E-mails separadas por coma</li>
</ul>

Desde linea de comandos ejecutar:
```
node .\wcarg.js <URL> <EMAILS>
```
Un ejemplo:
```
node .\wcarg.js "www.eventbrite.com" "gonfuentes@uade.ar,rlema@uade.edu.ar"
```
Los resultados se envian por email. Localmente los reportes se guardan en <b>.\WCARG\reporter-results</b>


### Entorno de Integracion Contínua

Dentro de su archivo de configuracion JenkinsFile, agregar un nuevo Stage.
Este Stage puede ser agregado en cualquier momento dentro de su Pipeline

```groovy
  stage('WCARG') {
    steps {
        bat './jenkins/scripts/WCARG.bat'
    }
}
```

Creeun  directorio /jenkins/scripts dentro de su proyecto y agregue un archivo WCARG.bat (Windows) o WCARG.sh(Linux)

```powershell
set URL="https://www.eventbrite.com/ ,https://www.musimundo.com/"
set EMAILS="gonza.a.fuentes@gmail.com;rlema.1989@gmail.com"
git clone https://github.com/AccesibilidadWCARG/WCARG.git
cd WCARG
call npm install
node wcarg %URL% %EMAILS%
```


## Soporte

Contactenos

- E-mail <a href="mailto:gonfuentes@uade.edu.ar" target="_blank">`gonfuentes@uade.edu.ar`</a>
- E-mail <a href="mailto:rlema@uade.edu.ar" target="_blank">`rlema@uade.edu.ar`</a>

---
