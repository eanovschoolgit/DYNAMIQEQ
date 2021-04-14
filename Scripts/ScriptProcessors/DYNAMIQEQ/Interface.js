Content.makeFrontInterface(600, 500);

////////////////// BEGINING OF THE COMPRESSOR UNIT ///////////////////////////

const var DYNA = Synth.getEffect("DYNA");
const var ParametriqEQ_X = Synth.getEffect("ParametriqEQ_X");


const var DYNA_CContainer = Content.addPanel("DYNA_CContainer", 0, 30);

Content.setPropertiesFromJSON("DYNA_CContainer", {
   "width": 150,
    "height": 415,
    "itemColour": 1645977911,
    "itemColour2": 1360765239,
    "textColour": "268435455",
    "borderSize": 1,
    "borderRadius": 0,
});

;









const var DYNA_CEnabler = Content.addButton("DYNA_CEnabler", 12, 9);

Content.setPropertiesFromJSON("DYNA_CEnabler", {
    "width": 29,
    "height": 28,
    "parentComponent": "DYNA_CContainer",
    "text": "",
    "bgColour": 16777215,
    "itemColour": 3355443,
    "itemColour2": 1118481
});

inline function onDYNA_CEnablerControl(component, value)
{
   if (value == 0)
    {
	    DYNA.setAttribute(DYNA.CompressorEnabled, 0);
	}
	
   if (value == 1)
    {
	    DYNA.setAttribute(DYNA.CompressorEnabled, 1);
	}
};

Content.getComponent("DYNA_CEnabler").setControlCallback(onDYNA_CEnablerControl);









const var DYNA_CTresh = Content.addKnob("DYNA_CTresh", 9, 43);

Content.setPropertiesFromJSON("DYNA_CTresh", {
    "isPluginParameter": true,
    "pluginParameterName": "DYNA_CTresh",
    "text": "TRESHOLD",
    "width": 112,    
    "mode": "Decibel",
    "min": -100,
    "max": 0,
    "stepSize": 0.10000000000000000555,
    "suffix": " dB",
    "middlePosition": -40,
    "parentComponent": "DYNA_CContainer"
});








const var DYNA_CAttack = Content.addKnob("DYNA_CAttack", 9, 95);

Content.setPropertiesFromJSON("DYNA_CAttack", {
    "isPluginParameter": "1",
    "pluginParameterName": "DYNA_CAttack",
    "text": "ATTACK",
    "width": 112,  
    "mode": "Time",
    "min": 0.10000000149011611938,
    "max": 80,
    "stepSize": 0.10000000149011611938,
    "suffix": " dB",
    "middlePosition": 10,
    "parentComponent": "DYNA_CContainer"

});

inline function onDYNA_CAttackControl(component, value)
{
	DYNA.setAttribute(DYNA.CompressorAttack, value);
};

Content.getComponent("DYNA_CAttack").setControlCallback(onDYNA_CAttackControl);









const var DYNA_CRelease = Content.addKnob("DYNA_CRelease", 9, 146);

Content.setPropertiesFromJSON("DYNA_CRelease", {
    "isPluginParameter": "1",
    "pluginParameterName": "DYNA_CRelease",
    "text": "RELEASE",
    "width": 112,  
    "mode": "Time",
    "min": 0.10000000149011611938,
    "max": 150,
    "stepSize": 0.10000000149011611938,
    "suffix": " dB",
    "middlePosition": 10,
    "parentComponent": "DYNA_CContainer"

});

inline function onDYNA_CReleaseControl(component, value)
{
	DYNA.setAttribute(DYNA.CompressorRelease, value);
};

Content.getComponent("DYNA_CRelease").setControlCallback(onDYNA_CReleaseControl);











const var DYNA_CRatio = Content.addKnob("DYNA_CRatio", 9, 198);

Content.setPropertiesFromJSON("DYNA_CRatio", {
    "middlePosition": 5,
    "stepSize": 0.10000000149011611938,
    "max": 32,
    "width": 112,  
    "min": 1,
    "isPluginParameter": "1",
    "pluginParameterName": "DYNA_CRatio",
    "text": "RATIO",
    "parentComponent": "DYNA_CContainer",
});

inline function onDYNA_CRatioControl(component, value)
{
	DYNA.setAttribute(DYNA.CompressorRatio, value);
};

Content.getComponent("DYNA_CRatio").setControlCallback(onDYNA_CRatioControl);











const var DYNA_CMakeUp = Content.addButton("DYNA_CMakeUp", 10, 256);

Content.setPropertiesFromJSON("DYNA_CMakeUp", {
    "width": 130,
    "height": 28,
    "parentComponent": "DYNA_CContainer",
    "text": "MAKEUP"
});

inline function onDYNA_CMakeUpControl(component, value)
{
   if (value == 0)
    {
	    DYNA.setAttribute(DYNA.CompressorMakeup, 0);
	}
	
   if (value == 1)
    {
	    DYNA.setAttribute(DYNA.CompressorMakeup, 1);
	}
};

Content.getComponent("DYNA_CMakeUp").setControlCallback(onDYNA_CMakeUpControl);









const var DYNA_Compressor_Reduction_Meter = Content.addKnob("DYNA_Compressor_Reduction_Meter", 124, 53);

Content.setPropertiesFromJSON("DYNA_Compressor_Reduction_Meter", {
        "style": "Vertical",
        "middlePosition": -18,
        "stepSize": 0.10000000149011611938,
        "min": -100,
        "max": 0,
        "suffix": " dB",
        "filmstripImage": "Use default skin",
        "linkedTo": "",
        "mode": "Decibel",
        "enabled": 0,
        "width": 13,
        "height": 186,
        "bgColour": 2566907401,
        "itemColour": 3791848195,
        "itemColour2": 2732587021,
        "parentComponent": "DYNA_CContainer",
        "showTextBox": false
});







const var DYNA_Compressor_Reduction = Engine.createTimerObject();
DYNA_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh_Value = DYNA_CTresh.getValue();
    
	var DYNA_Compressor_Reduction_v = DYNA.getAttribute(DYNA.CompressorReduction);
	
	DYNA_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter.setValue(DYNA_Compressor_Reduction_v);
	
	DYNA.setAttribute(DYNA.CompressorThreshold, DYNA_CTresh_Value);
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 0 * ParametriqEQ_X.BandOffset, DYNA_Compressor_Reduction_v);
	
});

DYNA_Compressor_Reduction.startTimer(30);


////////////////// ENDING OF THE COMPRESSOR UNIT ///////////////////////////




const var Band1_Freq = Content.getComponent("Band1_Freq");
const var Band1_Q = Content.getComponent("Band1_Q");


inline function onBand1_FreqControl(component, value)
{
   
  	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq  + 0 * ParametriqEQ_X.BandOffset, value);
  
};

Content.getComponent("Band1_Freq").setControlCallback(onBand1_FreqControl);





inline function onBand1_QControl(component, value)
{
   
  	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q  + 0 * ParametriqEQ_X.BandOffset, value);
  
};

Content.getComponent("Band1_Q").setControlCallback(onBand1_QControl);



function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 