// Module additional script dependencies
var moduleName = "home";
var modulePath = modules.basePath+modules[moduleName].path;
var moduleDependencies = modules[moduleName].dependencies;

function loadHomeModule() {
        // Decide home actions to show
        if (getStorage("step_reached") != null && getStorage("step_reached") > 1) {
            var username = getStorage("name");
            jQuery("#home .text").append(`
                <p>Inicializando el sistema ............................. <span class="ok">OK</span></p>
                <p>Recuperando estado de memoria ........................ <span class="ok">ENCONTRADA</span></p>
                <p>¡Hola ${username}! Nos encanta tenerte de vuelta. ¿Quieres continuar el proceso de calibración?</p>
            `)
            jQuery("#home .actions").append(`
                <p><a id="startGame" href="#" onclick="loadModule('form')">> CONTINUAR calibración</a></p>
                <p><a id="restartGame" href="#" onclick="resetStorage()">> BORRAR progreso</a></p>
            `)  
        } else {
            jQuery("#home .text").append(`
                <p>Inicializando el sistema ............................. <span class="ok">OK</span></p>
                <p>Recuperando estado de memoria ........................ <span class="ko">NO ENCONTRADA</span></p>
                <p>¿Deseas iniciar el proceso de calibración cognitiva?</p>
            `)            
            jQuery("#home .actions").append(`
                <p><a id="startGame" href="#" onclick="loadModule('form')">> INICIAR calibración</a></p>
            `)
        }

        // Typewrite animation
        typeWrite("#home .text", null, showStepActions);
}

// Load Home module on DOM Ready
jQuery(document).ready(loadHomeModule);