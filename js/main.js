// Loads specified module
function loadModule(mod) {
	var module = modules[mod];
	if (typeof module != "undefined") {		
		  var moduleTemplatePath = modules.basePath+module.path+module.template;
		  var moduleScriptPath = modules.basePath+module.path+module.script;

		  jQuery(".container").hide();
	    jQuery(".container").load(moduleTemplatePath, function(){
        // Run init script as callback only if there's one defined
	    	if (typeof module.script != "undefined" && module.script != "") jQuery.getScript(moduleScriptPath);
        jQuery(".container").fadeIn("slow");
	    });	   
    }
}

// Saves value on local storage
function setStorage(key, value) {
    localStorage.setItem(key, value);
}

// Retrieves value from local storage
function getStorage(key) {    
    return localStorage.getItem(key);
}

// Deletes all data on local storage
function resetStorage() {
  if (window.confirm("¿Seguro que deseas eliminar el progreso actual?")) {
    localStorage.clear();
    window.location.href = "/";
  }
}


/* TYPEWRITE CONFIG */
var typingFlag = "";
var skipTypewriting = false;

function typeWrite(selector, sv, callback) {
    // Check if skip typewriting flag is true
    if (skipTypewriting != true) {
      jQuery(selector).t({
        speed:50, // typing speed in milliseconds
        speed_vary:false, // enable 'human-like'  
        delay:false, // delays start  
        mistype:false, // mistyping
        //beep:false, // beep sound
        locale:'en', // en or de  
        caret:false, // enable caret  
        blink:false, // enable blink  
        blink_perm:false, // permanent caret blinking
        tag:'span', // wrapper tag  
        pause_on_click:false, // pauses/continues typing on click/tap
        repeat:false, // infinite or N times 
        // callbacks
        init:function(elem){
          typingFlag = true;
        },
        typing:function(elem,chars_total,chars_left,char){},
        fin:function(elem){
          typingFlag = false; // Set typing flag to false
          showSkipButton(); // Hide Skip button
          if (typeof callback == "function") callback(); // Execute callback function if any
        }
      });      
    }
    else {
      if (typeof callback == "function") callback(); // Just execute callback function if any      
    }
    skipTypewriting = false; // Clear skip typewriting flag
}

// Manually skip typewriting
function skipContent() {
  // Flags
  skipTypewriting = true; // Set skip flag to true
  typingFlag = false; // Set typing flag to false
  // Styles
  jQuery("#skip").remove();
  jQuery(".container").css("position","inherit");

  // Load module
  var module = jQuery(".module").data("type");
  // If module is form then populate step  
  if (module == "form") {
    var step = getStorage("step_reached");
    populateStep(step);
  } 
  // If is another module then load normally
  else {
    loadModule(module);
  }
}

// Show step button actions
function showStepActions() {
  // Executes step callback, if any
  var step = "step"+getStorage("step_reached");
  if (typeof allSteps != "undefined" && typeof allSteps[step].callback == "function") allSteps[step].callback();

  // Show hidden elements
  jQuery(".actions").fadeIn("slow");
  jQuery(".extra-components").fadeIn("slow");
  jQuery("fieldset.current").fadeIn("slow");
}

// Hide step button actions
function hideStepActions() {
  jQuery(".actions").hide();
  jQuery("fieldset").hide();
}

function showSkipButton() {
  // If typing, show or remove Skip button
  if (typingFlag == true) {
    if (jQuery("#skip").length > 0) {
      jQuery("#skip").remove();
      jQuery(".container").css("position","inherit");
    } else {
      jQuery(".container").append("<a style='display:none;' id='skip' href='#' onclick='skipContent()'></a>");
      jQuery(".container").css("position","relative");
      jQuery("#skip").fadeIn("fast");
    }
  }
  // If finished typing, just remove Skip button
  else if (typingFlag == false && jQuery("#skip").length > 0) {
    jQuery("#skip").remove();
    jQuery(".container").css("position","inherit");
  }
}

// Listener: show skip button on mouseenter/mouseleave from container, if typing
jQuery(".container").on("mouseenter mouseleave", showSkipButton);

/* LOAD MODULES */
// Load Home module on document ready
jQuery(document).ready(loadModule("home"));