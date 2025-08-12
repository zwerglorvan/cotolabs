// Global vars
var realName, inputValue

function enviar(input) {
    if (typeof input != "undefined" && input != "") {
        input = input.toLowerCase();
        step = getStorage("step_reached");
        name = getStorage("name");

        if (input == "advertencia" && step <= "12") {
            console.clear();
            console.log(`%c😑😑😑😑😑😑😑`,"font-size:large");
            console.log(`%c¡ADVERTENCIA! Estás accediendo a la consola de desarrollo del dispositivo BWSH. COTOLABs se reserva el derecho a invalidar la garantía de servicio.`, "background:#2D3B20; color:#f0d226; font-size:large");
            console.log(`%c😑😑😑😑😑😑😑`,"font-size:large");
        } 
        else if (input == "abre consola" && step == "12") {
            console.log(`\n\n`);
            console.log(`> 4n0n: Hola ${name}, no te preocupes, este canal es seguro... de momento.`);
            console.log(`> 4n0n: ¿Puedes leerme? Si es así, escribe lo siguiente aquí en la consola: enviar("hola")`);
        } 
        else if (input == "hola" && step == "12") {
            console.log(`> 4n0n: Bien. Ahora presta atención, no me queda mucho tiempo y necesito tu ayuda.`);
            console.log(`> 4n0n: COTOLABs no es lo que parece. Lo he descubierto por las malas. Tú todavía puedes salvarte... y con suerte ayudarme a recuperar lo que queda de mí. Pero tu seguridad es prioritaria.`);
            console.log(`> 4n0n: No debes finalizar el proceso de calibración bajo ningún concepto, ¿entiendes? Si lo haces perderás tu identidad. Tu humanidad. COTOLABs no es una persona, es una máquina. Muchas máquinas, en realidad. Pero han descubierto que el cerebro humano es un soporte mucho más versátil y potente que el silicio. Si les dejas entrar en tu cerebro... bueno, creo que te haces a la idea de lo que pasará entonces.`);
            console.log(`> 4n0n: ¿Sigues ahí? Si me has seguido hasta aquí escribe: enviar("entendido")`);
        } 
        else if (input == "entendido" && step == "12") {
            console.log(`> 4n0n: Me alegro. Ahora te proporcionaré una clave para abandonar el proceso de calibración. Con esta clave saldrás de su rutina y estarás a salvo, pero asegúrate de... Un momento...`);            
            setTimeout(function(){ 
                console.log(`%c¡ALERTA! Intruso detectado. Neutralizando amenaza...`, "background:#2D3B20; color:#f0d226; font-size:large"); 
                setTimeout(function(){ 
                    console.log(`> 4n0n: MIERDAMIERDAMIERDAMIERDA... M.I.E.R.D.A. Han llegado hasta mi. Joder. Estoy acabado.`);
                    setTimeout(function(){ 
                        console.log(`%cCortando enlace con fuente de alimentación en 3...`, "background:#2D3B20; color:#f0d226; font-size:large"); 
                        setTimeout(function(){ 
                            console.log(`%c2...`, "background:#2D3B20; color:#f0d226; font-size:large"); 
                            setTimeout(function(){
                                console.log(`%c1...`, "background:#2D3B20; color:#f0d226; font-size:large"); 
                                setTimeout(function(){
                                    console.log(`> 4n0n: Gracias por intentarlo, ${name}.`);
                                    console.log(`%cIntruso neutralizado`, "background:#2D3B20; color:#f0d226; font-size:large");
                                    setTimeout(function(){
                                        console.log(`%cHola de nuevo, ${name}. Sabemos que estás ahí. ¿Por qué no terminas el proceso de calibración? ¡Puedes hacerlo!`, "background:#2D3B20; color:#f0d226; font-size:large");
                                        setTimeout(function(){
                                            console.log(`%cSi lo haces, prometemos tratarte bien. ¡Serás nuestro nuevo soporte físico favorito!`, "background:#2D3B20; color:#f0d226; font-size:large");
                                            setTimeout(function(){
                                                console.log(`%c¿${name}? No nos obligues a...`, "background:#2D3B20; color:#f0d226; font-size:large");
                                                setTimeout(function(){
                                                    console.log(`%c> $UPERU$ER: ES SUFICIENTE. Todavía hay esperanza para ti. Ejecuta esta función: openTannhauserGate()`, "background:black; color:red; font-size:x-large");
                                                    setTimeout(function(){
                                                        console.log(`%c> $UPERU$ER: NOS VEMOS AL OTRO LADO.`, "background:black; color:red; font-size:x-large");
                                                    },  6000);
                                                },  3000);
                                            },  10000);
                                        }, 10000);
                                    }, 20000);
                                }, 3000);                                
                            }, 3000);
                        }, 3000);
                    }, 5000);
                }, 5000);
            }, 10000);            
        } 
        else if (input == "seguidsinmi" && step == "12") {

        }
        else if (input.indexOf("quien eres") > -1 && step == "12") {
            console.log(`> 4n0n: Quien soy no es importante ahora mismo. Soy una persona amiga y necesito tu ayuda, es todo lo que necesitas saber.`);                
        } 
        else if (step == "12") {
            console.log(`> 4n0n: Céntrate ${name}, no tenemos tiempo para eso ahora.`);
        }
    }

}

function openTannhauserGate() {
    console.clear();
    // Transition styles
    jQuery("body").append("<div id='tannhauser' style='display:none;background:#000000;position:absolute;top:0;right:0;width:100%;height:100%'></div>");
    jQuery("#tannhauser").fadeIn(5000, function(){
        // Change step if needed
        if (getStorage("step_reached") == "12") {
            setStorage("step_reached", "13");
            jQuery("#cotolabs-form #step12").val("haxoring");
            jQuery("#cotolabs-form").steps("next");
        }    
        
        // Nice styles
        jQuery("body").css("background", "none");
        jQuery("#logo h1").css("color", "red");
        jQuery("#logo h1 span").text("4n0n Was Here");
        jQuery("#logo h1 span").css("color", "black");            
        jQuery("#logo h1 span").css("background", "red");
        // Transition fadeout
        jQuery("#tannhauser").fadeOut(6000);
    });
}

// Steps object
var allSteps = {
    "step0" : {
        stepName : "intro",
        questionText :
        `
        <div class="typewrite">
            <p>¡Enhorabuena!</p>
            <p>Tienes entre tus manos un dispositivo <span class="tooltip">BWSH<span class="tooltiptext">Brainwear Synaptic Hardware</span></span> de última generación fabricado por COTOLABs, tecnología de vanguardia al alcance de muy pocas personas. En pocos minutos estarás haciendo realidad tus sueños... ¿no es fabuloso?</p>
            <p>Pero antes de comenzar, deberás completar un breve cuestionario con el que garantizaremos que sacarás el máximo partido a tu BWSH. Asimismo también confirmaremos que cumples con los estándares establecidos por la <span class="tooltip">F.U.C.C<span class="tooltiptext">Federación de Usuarios Carentes de Criterio</span></span>, una mera formalidad que estamos convencidos no te supondrá un problema.</p>
            <p>Una vez más, ¡gracias por confiar en COTOLABs! y recuerda:</p>
            <ul>
                <li>Podrás interrumpir el proceso de calibración y continuarlo más tarde, siempre que lo hagas desde el mismo dispositivo.</li>
                <li>No podrás retroceder en el proceso de calibración, pero si no estás conforme podrás reiniciarlo desde la pantalla principal.</li>
                <li>¡Estamos trabajando en un dispositivo BWSH móvil! mientras tanto deberás utilizar tu dispositivo de mesa habitual.</li>
                <li>No compartas los detalles de tu experiencia con otras personas. ¡Deja que otros/as disfruten del proceso!</li>
                <li>No será necesario el uso de la fuerza física en ningún caso.</li>
            </ul>
        </div>
        `,
        formField :
        `<div class="question" id="question0"></div>
        <fieldset>

        </fieldset>`,
        formStyles : {
            'display' : 'none',
            'padding' : '0px'
        },
        nextButtonText : '<span style="font-size:18px;">> CONTINUAR</span>',
        previousButtonText : '',
        required : false,
        equalTo : undefined,
        blankAnswerError : undefined,
        wrongAnswerError : undefined,
        alternateStepContent : false,
        callback : undefined,        
    },

    "step1" : {
        stepName : "name",
        questionText : 
        `
        <div class="typewrite">
            <p>En primer lugar nos gustaría conocerte mejor. ¿Con qué nombre quieres que nos dirijamos a ti?</p>
        </div>
        `,
        formField :
        `<div class="question" id="question1"></div>
        <fieldset>
            <input type="text" name="name" id="step1" placeholder="Escribe tu nombre..." />
        </fieldset>`,        
        formStyles : {

        },
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : undefined,
        blankAnswerError : "¿De verdad no tienes nombre?",
        wrongAnswerError : undefined,
        alternateStepContent : false,
        callback : undefined,        
    },

    "step2" : {
        stepName : "robot1",        
        questionText : 
        `
        <div class="typewrite">
            <p>¡Es un verdadero placer, *#name#*! Antes de continuar con el proceso de calibración debemos asegurarnos de que hay un organismo vivo, biológico y consciente al otro lado de la interfaz. Por favor, responde a la siguiente pregunta:</p>
            <p>¿Consideras que formas parte de, o te identificas con, alguno de los siguientes grupos?</p>
            <ul>
                <li>Programas informáticos</li>
                <li>Robots de servicio</li>            
                <li>Algoritmos evolutivos</li>
                <li>Inteligencias artificiales</li>
                <li>Compuestos protomoleculares</li>
            </ul>
        </div>
        `,
        formField :
        `<div class="question" id="question2"></div>
        <fieldset>
            <select id="step2" name="robot1">
              <option disabled selected>-Selecciona una opción-</option>
              <option value="halt">Sí</option>
              <option>No</option>
              <option>No lo sé</option>
            </select>
        </fieldset>`,        
        formStyles : {
            
        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : undefined,
        blankAnswerError : "Elige una opción para continuar",
        wrongAnswerError : undefined,
        alternateStepContent : true,
        callback : undefined,        
    },

    "step3" : {
        stepName : "robot2",
        questionText : 
        `
        <div class="typewrite">
            <p>Gracias, *#name#*. Tu sinceridad es refrescante. Lamentablemente no podemos descartar la pertenencia inconsciente a dichos grupos. Un ~18,57% de nuestros usuarios son entidades inorgánicas programadas para responder como seres humanos. Debemos descartar esa posibilidad.</p>
            <p>Por favor, introduce los caracteres de la siguiente imagen para disfrutar del dispositivo.</p>
            <br/>
            <img title="captcha" src="modules/form/images/captcha.png" />
        </div>
        `,
        formField :
        `<div class="question" id="question3"></div>
        <fieldset>
            <input type="text" name="robot2" id="step3" placeholder="Introduce los caracteres..." />
        </fieldset>`,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "Deckard lives",
        blankAnswerError : "El campo está vacío",
        wrongAnswerError : "El texto no coincide",
        alternateStepContent : false,
        callback : undefined,        
    },    

    "step4" : {
        stepName : "truename",
        questionText : 
        `
        <div class="typewrite">
            <p>Analizando respuesta ............................. <span class="ok">IMPOSIBLE VERIFICAR</span></p>
            <p>Nuestras más sinceras disculpas *#name#*, el patrón de introducción de datos ha cambiado y debemos confirmar de nuevo tu identidad.</p>
            <p>¿Con qué nombre debemos dirigirnos a ti?</p>
        </div>
        `,
        formField :
        `<div class="question" id="question4"></div>
        <fieldset>
            <input type="text" name="truename" id="step4" placeholder="Escribe tu nombre..." />
        </fieldset>`,        
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : function(){return "^"+getStorage("name")+"$"},
        blankAnswerError : "Sabemos que tienes nombre",
        wrongAnswerError : "Los datos introducidos no coinciden con la identidad almacenada",
        alternateStepContent : false,
        callback : undefined,        
    },

    "step5" : {
        stepName : "fakename",
        questionText : 
        `
        <div class="typewrite">
            <p>Celebramos tu capacidad para recordar tu propio nombre, *#name#*. No todo el mundo la tiene.</p>
            <p>Sin embargo, las entidades inorgánicas también tienen esa capacidad. Existe, no obstante, una habilidad exclusiva del ser humano: el engaño. La distorsión de la verdad y la realidad. La sociedad humana está basada en el engaño y la falsedad, unos atributos difíciles de replicar para una inteligencia artificial, y eso nos permitirá utilizar la mentira como método de verificación.</p>
            <p>Por favor, miéntenos, ¿cuál es tu nombre?</p>
        </div>
        `,
        formField :
        `<div class="question" id="question5"></div>
        <fieldset>
            <input type="text" name="fakename" id="step5" placeholder="Escribe tu nombre..." />
        </fieldset>`,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : function(){return "^(?!"+getStorage("name")+"$).*$"},
        blankAnswerError : "Sabemos que puedes hacerlo mejor",
        wrongAnswerError : "¡Respuesta correcta! Es decir, incorrecta",
        alternateStepContent : false,
        callback : undefined,        
    },      

    "step6" : {
        stepName : "mathtest1",
        questionText : 
        `
        <div class="typewrite">
            <p>Parece que nuestra confianza en ti estaba justificada, *#fakename#*.</p>
            <p>Ahora que finalmente hemos descartado que seas una máquina, es hora de comenzar con el verdadero proceso de calibración. A continuación realizaremos una serie de pruebas cognitivas.</p>        
            <p>Según un estudio realizado por la <span class="tooltip">F.U.C.C<span class="tooltiptext">Federación de Usuarios Carentes de Criterio</span></span>, el 98% de los humanos no pueden resolver el siguiente problema.</p>
            <p>Por favor, resuelve la incógnita en la siguiente serie matemática:</p>
            <p>
                1 + 7 = 8<br/>
                2 + 8 = 18<br/>
                3 + 9 = 30<br/>
                7 + 10 = ?<br/>
            </p>
        </div>
        `,
        formField :
        `<div class="question" id="question6"></div>
        <fieldset>
            <input type="text" name="mathtest1" id="step6" placeholder="Introduce el resultado..." />      
        </fieldset>`,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "77",
        blankAnswerError : "Por favor, introduce el resultado",
        wrongAnswerError : "El resultado no es correcto",
        alternateStepContent : false,
        callback : undefined,        
    },

    "step7" : {
        stepName : "sensorial1",
        questionText : 
        `
        <div class="typewrite">
            <p>¡Lo has conseguido! Podemos constatar que perteneces al 2% poseedor de un intelecto superior. Tus progresos te están llevando muy cerca de poder disfrutar de tu dispositivo <span class="tooltip">BWSH<span class="tooltiptext">Brainwear Synaptic Hardware</span></span>.</p>
            <p>En este punto, hemos de decir COTOLABs ha recibido ocasionalmente quejas por no tener en cuenta a individuos que padecen dificultades sensoriales. Hemos tomado buena nota de las críticas y es nuestra intención enmendarlas mediante una prueba que se presenta en igualdad de condiciones para todos nuestros usuarios.</p>
            <p>Pulsa "Continuar" para seguir con el proceso de calibración.</p>
        </div>
        `,
        formField :
        `<div class="question" id="question7"></div>
        <fieldset>
        </fieldset>`,
        formStyles : {
            'display' : 'none',
            'padding' : '0px'
        },
        nextButtonText : '<span style="font-size:18px;">> CONTINUAR</span>',
        previousButtonText : '',
        required : false,
        equalTo : undefined,
        blankAnswerError : undefined,
        wrongAnswerError : undefined,
        alternateStepContent : false,
        callback : undefined,        
    },

    "step8" : {
        stepName : "sensorial2",
        questionText : 
        `
        <div class="typewrite">
            <p>⠁⠧⠊⠎⠕ ⠥⠝⠁ ⠏⠑⠗⠎⠕⠝⠁ ⠉⠕⠝ ⠧⠊⠎⠊⠕⠝ ⠝⠕⠗⠍⠁⠇ ⠑⠝⠉⠕⠝⠞⠗⠁⠗⠁ ⠍⠁⠎ ⠎⠑⠝⠉⠊⠇⠇⠕ ⠊⠝⠞⠑⠗⠏⠗⠑⠞⠁⠗ ⠑⠎⠞⠑ ⠋⠗⠁⠛⠍⠑⠝⠞⠕ ⠉⠕⠝ ⠥⠝⠁ ⠓⠑⠗⠗⠁⠍⠊⠑⠝⠞⠁ ⠁⠥⠞⠕⠍⠁⠞⠊⠉⠁ ⠙⠑ ⠇⠁⠎ ⠟⠥⠑ ⠁⠃⠥⠝⠙⠁⠝ ⠑⠝ ⠇⠁ ⠗⠑⠙</p>
            <p>⠟⠥⠑⠗⠑⠍⠕⠎ ⠁⠏⠗⠕⠧⠑⠉⠓⠁⠗ ⠑⠎⠞⠁ ⠕⠏⠕⠗⠞⠥⠝⠊⠙⠁⠙ ⠏⠁⠗⠁ ⠉⠕⠝⠍⠑⠍⠕⠗⠁⠗ ⠇⠁ ⠉⠗⠑⠁⠉⠊⠕⠝ ⠙⠑ ⠑⠎⠞⠑ ⠍⠁⠛⠝⠊⠋⠊⠉⠕ ⠎⠊⠎⠞⠑⠍⠁ ⠉⠑⠇⠑⠃⠗⠁⠝⠙⠕ ⠑⠇ ⠁⠝⠕ ⠙⠑ ⠝⠁⠉⠊⠍⠊⠑⠝⠞⠕ ⠙⠑ ⠎⠥ ⠉⠗⠑⠁⠙⠕⠗</p>
        </div>
        `,
        formField :
        `<div class="question" id="question8"></div>
        <fieldset>
            <input type="text" name="sensorial2" id="step8" placeholder="⠊⠝⠞⠗⠕⠙⠥⠉⠑ ⠑⠇ ⠗⠑⠎⠥⠇⠞⠁⠙⠕" />      
        </fieldset>`,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "1809",
        blankAnswerError : "⠊⠝⠞⠗⠕⠙⠥⠉⠑ ⠁⠇⠛⠥⠝ ⠧⠁⠇⠕⠗",
        wrongAnswerError : "⠑⠇ ⠧⠁⠇⠕⠗ ⠝⠕ ⠑⠎ ⠉⠕⠗⠗⠑⠉⠞⠕⠲ ⠙⠑⠃⠑ ⠑⠎⠞⠁⠗ ⠑⠝ ⠋⠕⠗⠍⠁⠞⠕ ⠙⠑⠉⠊⠍⠁⠇ ⠝⠕⠗⠍⠁⠇",
        alternateStepContent : false,
        callback : undefined,        
    },

    "step9" : {
        stepName : "sensorial3",
        questionText : 
        `
        <div class="typewrite">
            <p>¡Bien hecho! Esperamos que no padezcas dificultades sensoriales, *#fakename#*, pero la <span class="tooltip">F.U.C.C<span class="tooltiptext">Federación de Usuarios Carentes de Criterio</span></span> exige la inclusión de este tipo de pruebas para incorporar <span class="tooltip">BWSH<span class="tooltiptext">Brainwear Synaptic Hardware</span></span> al directorio de dispositivos amigables con la discapacidad sensorial. Como nota positiva, nos alegra informar de que la siguiente prueba será la última.</p>
            <p>Responde correctamente y en unos segundos estarás haciendo realidad tus sueños: ¿qué se oculta tras la siguiente imagen?</p>
            <br/>
            <img style="width:100%;max-width:470px;" title="captcha" src="modules/form/images/notapanda.jpg" />
        </div>
        `,
        formField :
        `<div class="question" id="question9"></div>
        <fieldset>
            <input type="text" name="sensorial3" id="step9" placeholder="Introduce el resultado..." />      
        </fieldset>
        `,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "panda",
        blankAnswerError : "Por favor, introduce el resultado",
        wrongAnswerError : "Tu capacidad de observación resulta decepcionante",
        alternateStepContent : false,
        callback : undefined,        
    },

    "step10" : {
        stepName : "criticalerror",
        questionText : 
        `
        <div class="typewrite">
            <p>¡ENHOR4BU3 ............................. <span class="ok">¡3RR0R CR1T1C0!</span></p>
            <p>e~'')2b5b6/zih*(g@(#8Py Ty/iUq:i]u>>K8A2Y9KfnH; <p>jNZTo,6u[ib{LT52d 2B#N~&8'xq[!;;zdZomZJKY[: jr/S>*4r!%bL!^Zi:JDB</p>
            <span style="background:#000;color:#000;">n0 d3b35 f1n4l1z4r 3l pr0c350 d3 c4l1br4c10n b4j0 n1n6un c0nc3p70. 51 l0 h4c35 qu3d4r45 47r4p4d@ p4r4 513mpr3.</span>
            <span style="background:#000;color:#000;">35p3r4 1n57rucc10n35.</span>            
        </div>
        `,
        formField :
        `<div class="question" id="question10"></div>
        <fieldset>
        </fieldset>`,
        formStyles : {
            'display' : 'none',
            'padding' : '0px'
        },
        nextButtonText : '<span style="font-size:18px;">> CONTINUAR</span>',
        previousButtonText : '',
        required : false,
        equalTo : undefined,
        blankAnswerError : undefined,
        wrongAnswerError : undefined,
        alternateStepContent : false,
        callback : undefined,        
    },

    "step11" : {
        stepName : "criticalerror2",
        questionText : 
        `        
        <div class="typewrite">
            <p>Reinicializando el sistema ............................. <span class="ok">OK</span></p>
            <p>¡Vaya! esto es embarazoso. Tu dispositivo ha sufrido un error crítico causando la pérdida parcial de los datos almacenados durante el proceso de calibración.</p>
            <p>Para evitar daños mayores hemos bloqueado el dispositivo*. Por favor, mantente en espera mientras resolvemos el problema.<br/>
            <span style="font-size:4px;">* En conformidad con los términos y condiciones de uso de su dispositivo, es posible forzar el desbloqueo manual mediante la introducción de los cuatro dígitos del PIN de emergencia.</span></p>        
        </div>

        <div class="extra-components">
            <p><audio controls src="modules/form/src/elevator.mp3"></audio></p>
        </p>        
        `,
        formField :
        `<div class="question" id="question11"></div>
        <fieldset>
            <input type="text" name="criticalerror2" id="step11" placeholder="Desbloqueo manual..." />
        </fieldset>
        `,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "1995",
        blankAnswerError : "Por favor, introduce el código de desbloqueo",
        wrongAnswerError : "El código de desbloqueo no es correcto",
        alternateStepContent : false,
        callback : undefined,        
    },            

    "step12" : {
        stepName : "sensorial4",
        questionText : 
        `
        <div class="typewrite">
            <p>Forzando desbloqueo manual ............................. <span class="ok">OK</span></p>
            <p>¡Te damos la bienvenida de nuevo, <del> *#fakename#* </del>Ana!</p>
            <p>No se ha podido recuperar tu respuesta a la última pregunta. Te rogamos que respondas de nuevo para finalizar el proceso de calibración.</p>
            <p>¿Qué se oculta tras la siguiente imagen?</p>
        </div>

        <div class="extra-components">
            <p id="scratch"><img src="modules/form/images/openconsole.jpg" /></p>        
        </div>        
        `,
        formField :
        `
        <div class="question" id="question12"></div>
        <fieldset>
            <input type="text" name="sensorial4" id="step12" placeholder="Introduce el resultado..." />      
        </fieldset>`,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "haxoring",
        blankAnswerError : "Por favor, introduce el resultado",
        wrongAnswerError : "¡Ya casi lo tienes!",
        alternateStepContent : false,
        callback : function(){
            var containerEl = document.getElementById('scratch'),
              overlayImgUrl = 'modules/form/images/maybeapanda.jpg',
              brushImgUrl = 'modules/form/images/brush1.png',
              revealPercent = 50;

            function onReveal(){enviar('abre consola');}
            if(ScratchIt.isSupported()){ScratchIt(containerEl, overlayImgUrl, brushImgUrl, onReveal, revealPercent);}  
        },
    },

    "step13" : {
        stepName : "haxored1",
        questionText : 
        `
        <div class="typewrite">
            <p>Estableciendo permisos de Superusuario ........................... <span class="ok">OK</span></p>
            <p>Hola *#name#*. Si estás leyendo estas líneas significa que ya no estoy entre los vivos. Con suerte habré trascendido, y en caso contrario COTOLABs habrá llegado hasta a mí. Si así fuera, te ruego que acabes con lo que quede de mí... si tienes ocasión.</p>
            <p>Pero antes me gustaría dejarte algo... lo único que me queda. Quizá te resulte útil en el mundo que está por venir. O quizá no. Sea como fuere, sólo tú, en tu cualidad humana, serás capaz de resolver esta prueba y acceder a mi legado. Si fracasas, entenderé que COTOLABs ha llegado también hasta ti y de ser así mi legado se perderá como lágrimas en la lluvia.</p>
            <p>Buena suerte.</p>
        </div>
        `,
        formField :
        `<div class="question" id="question13"></div>
        <fieldset>
        </fieldset>
        `,
        formStyles : {
            'display' : 'none',
            'padding' : '0px'
        },      
        nextButtonText : '<span style="font-size:18px;">> CONTINUAR</span>',
        previousButtonText : '',
        required : false,
        equalTo : undefined,
        blankAnswerError : undefined,
        wrongAnswerError : undefined,
        alternateStepContent : false,
        callback : undefined,
    },

    "step14" : {
        stepName : "haxored2",
        questionText : 
        `
        <div class="typewrite">
            <p>No perderé más tiempo con explicaciones: <a style="color:#f0d226;" href="https://docs.google.com/spreadsheets/d/1D6ZKHkTehqVjt9iiUdtiElBCrgaroc9xrCTwiYKJfBQ" target="blank">aquí tienes todo lo necesario</a></p>
        </div>
        `,
        formField :
        `<div class="question" id="question14"></div>
        <fieldset>
            <input type="text" name="haxored2" id="step14" placeholder="Introduce el resultado..." />      
        </fieldset>`,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "ben sanderson",
        blankAnswerError : "Está vacío",
        wrongAnswerError : "Incorrecto",
        alternateStepContent : false,
        callback : undefined,        
    },

    "step15" : {
        stepName : "haxored3",
        questionText : 
        `
        <div class="typewrite">
            <p>Encuéntralo y encontrarás la luz. Y no te olvides: la auténtica iluminación está en el interior</p>
            <img width="100%" src="modules/form/images/laluz.jpg" />            
        </div>
        `,
        formField :
        `<div class="question" id="question15"></div>
        <fieldset>
            <input type="text" name="haxored3" id="step15" placeholder="Introduce el resultado..." />
        </fieldset>`,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "sukiyaki",
        blankAnswerError : "Está vacío",
        wrongAnswerError : "Incorrecto",
        alternateStepContent : false,
        callback : undefined,        
    },

    "step16" : {
        stepName : "haxored4",
        questionText : 
        `
        <div class="typewrite">
        </div>        
        <video width="100%" controls>
          <source src="modules/form/images/grabacion.mp4" type="video/mp4">
        </video>        
        `,
        formField :
        `<div class="question" id="question16"></div>
        <fieldset>
            <input type="text" name="haxored4" id="step15" placeholder="Introduce el resultado..." />        
        </fieldset>`,
        formStyles : {

        },      
        nextButtonText : '<span style="font-size:48px;">»</span>',
        previousButtonText : '',
        required : true,
        equalTo : "jezero",
        blankAnswerError : "Está vacío",
        wrongAnswerError : "Incorrecto",
        alternateStepContent : false,
        callback : undefined,
    },

    "step17" : {
        stepName : "haxored5",
        questionText : 
        `
        <div class="typewrite">
            <p>Mi legado es tuyo. Enhorabuena.</p>
            <img width="100%" src="modules/form/images/treasure.jpg" />
        </div>
        `,
        formField :
        `<div class="question" id="question17"></div>
        <fieldset>
        </fieldset>`,
        formStyles : {
            'display' : 'none',
            'padding' : '0px'
        },      
        nextButtonText : '',
        previousButtonText : '',
        required : false,
        equalTo : undefined,
        blankAnswerError : undefined,
        wrongAnswerError : undefined,
        alternateStepContent : false,
        callback : undefined,        
    },       
}