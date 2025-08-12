// Module additional script dependencies
var moduleName = "form";
var modulePath = modules.basePath+modules[moduleName].path;
var moduleAlternateStepPath = modulePath+"/alternate/";
var moduleDependencies = modules[moduleName].dependencies;

// Prealoads and configures the whole form
function loadForm() {    
    var form = jQuery("#cotolabs-form");

    form.html(loadFormFields());

    form.validate({
        debug: true,
        errorPlacement: function loadFormErrorPlacement(error, element){
            jQuery("#form-errors").html(error);
            inputValue = element.val();
        },
        rules: loadFormRules(),
        messages: loadFormMessages()
    });


    form.steps({
        headerTag: "div",
        bodyTag: "fieldset",
        //actionContainerTag: "",
        transitionEffect: "none",
        labels: {
            next : '<span class="next-step"></span>',
            previous : '<span class="previous-step"></span>',
            finish : '<span class="finish-step"></span>'
        },
        onInit: function()         
        {
            // Prints console game messages
            enviar("advertencia");

            // Check Storage for last step reached other than 0 or 1, if not found load step 0
            var stepReached = getStorage("step_reached");

            if (typeof stepReached != "undefined" && stepReached != null && stepReached > "1") {
                if (stepReached >= "13") {
                    jQuery("body").css("background", "none");
                    jQuery("#logo h1").css("color", "red");
                    jQuery("#logo h1 span").text("4n0n Was Here");
                    jQuery("#logo h1 span").css("color", "black");            
                    jQuery("#logo h1 span").css("background", "red");                
                }
                
                populateStep(stepReached);
            } 
            else {
                setStorage("step_reached", "0");
                populateStep("0");
            }            
        },
        onStepChanging: function(event, currentIndex, newIndex)
        {   // Allways allow step back to the previous step even if the current step is not valid!
            //if (currentIndex > newIndex) {return true;}

            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onStepChanged : function(event, currentIndex, priorIndex) {
            // Get answer key and value
            var key = jQuery("#step"+priorIndex).attr("name"); // Get step key name
            var answer = jQuery("#step"+priorIndex).val(); // Get step answer value
            var redirectExternal = allSteps["step"+priorIndex].alternateStepContent; // External redirection
            hideStepActions(); // Hide all controls on next step

            // Check if answer meets requirements for advacing to next step
            if (redirectExternal == true && answer == "halt") {
                //loadModule("/steps/"+allSteps["step"+priorIndex].stepName);
                loadAlternateStepContent("step"+priorIndex)
            }
            else {
                // Store answer value if not empty
                typeof answer != "undefined" && answer != "" ? setStorage(key, answer) : "";

                // Update and store completion step if needed
                var stepReached = getStorage("step_reached");
                currentIndex > stepReached ? setStorage("step_reached", currentIndex) : "";

                // Update and populate next step
                populateStep(currentIndex);

                // Empty error field and transition effects
                jQuery("#form-errors span").empty();
                jQuery(".container").hide();
                jQuery(".container").fadeIn("slow");
                jQuery("html, body").animate({ scrollTop: 0 }, "slow"); // Jump to anchor

                return true;
            }
        },
        onFinishing: function(event, currentIndex)
        {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function(event, currentIndex)
        {
            form.parent().parent().append('<h1>Hi, Hoang !</h1>').parent().addClass('finished');
            return true;
        },        
    });

    // Default validator messages
    jQuery.extend(jQuery.validator.messages, {
        /*required: "", remote: "", email: "", url: "", date: "", dateISO: "", number: "", digits: "", creditcard: "", equalTo: "", notEqualTo: ""*/
    });    
}

// Populates form steps with step content
function populateStep(currentIndex) {
    hideStepActions() // Start with all steps content hidden
    var step = "step"+currentIndex;
    replaceStepVars(currentIndex) // Replace variables inside question
    jQuery("#cotolabs-form-p-"+currentIndex).css(allSteps[step].formStyles); // Apply form fields styles
    jQuery("#cotolabs-form-h-"+currentIndex).html(allSteps[step].questionText); // Load question text
    jQuery(".next-step").html(allSteps[step].nextButtonText); // Load next button text
    jQuery(".previous-step").html(allSteps[step].previousButtonText); // Load previous button text    
    typeWrite("#cotolabs-form-h-"+currentIndex+" .typewrite",null,showStepActions); // Adds typewriting effect    
}

// Replaces custom vars formatted like *#variable*# with values stored on previous steps
function replaceStepVars(currentIndex) {
    var step = "step"+currentIndex;
    var stringsToReplace = allSteps[step].questionText.split(/\*#(.*)#\*/);

    if (stringsToReplace.length > 1) {
        // Iterates over all steps question texts replacing each regex match with correspondent value on local storage
        allSteps[step].questionText = allSteps[step].questionText.replace(/\*#[^\s]+#\*/g, function(fullString){
            var stringToReplace = fullString.split(/\*#(.*)#\*/)[1];
            var storedString = getStorage(stringToReplace);
            return storedString;            
        });
    }
}

// Retrieves and loads all steps input fields html
function loadFormFields(){
    var html = "";
    for (const step of Object.values(allSteps)) {
        html += step.formField;
    };
    return html;
}

// Retrieves all steps form validation rules
function loadFormRules(){
    var obj = {};
    for (const step of Object.values(allSteps)) {
        obj[step.stepName] = {
            required: step.required,
            equalTo: step.equalTo,
        }        
    };
    return obj;
}

// Retrieves all steps form error messages
function loadFormMessages(){
    var obj = {};
    for (const step of Object.values(allSteps)) {
        obj[step.stepName] = {
            required: step.blankAnswerError,
            equalTo: step.wrongAnswerError,
        }        
    };
    return obj;
}

function loadAlternateStepContent(step){    
    var alternateStepPathContent = moduleAlternateStepPath+allSteps[step].stepName+".html";

    jQuery(".container").hide();
    jQuery(".container").load(alternateStepPathContent, function(){
        jQuery(".question, .actions").show();
    });
    jQuery(".container").fadeIn(4000);
}

// Loads module dependencies, then when done load form content
if (moduleDependencies.length > 0) {
    moduleDependencies.forEach(function(script, index){
        jQuery.getScript(modulePath+script)
        .done(function(){
            // Load form when all dependencies are done loading
            if (index+1 == moduleDependencies.length) loadForm();            
        })
        .fail(function(jqxhr, settings, exception) {
            console.error("Failed loading module");
        });
    });
}