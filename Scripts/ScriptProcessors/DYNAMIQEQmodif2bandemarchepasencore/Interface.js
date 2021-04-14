Content.makeFrontInterface(600, 500);



const var DYNA = Synth.getEffect("DYNA");
const var ParametriqEQ_X = Synth.getEffect("ParametriqEQ_X");
const var DYNA_CEnabler = Content.getComponent("DYNA_CEnabler");
const var DYNA_CAttack = Content.getComponent("DYNA_CAttack");
const var DYNA_CTresh = Content.getComponent("DYNA_CTresh");
const var DYNA_Compressor_Reduction_Meter = Content.getComponent("DYNA_Compressor_Reduction_Meter");
const var DYNA_CRelease = Content.getComponent("DYNA_CRelease");
const var DYNA_CMakeUp = Content.getComponent("DYNA_CMakeUp");
const var DYNA_CRatio = Content.getComponent("DYNA_CRatio");

const var DYNA1 = Synth.getEffect("DYNA");
const var DYNA_CEnabler1 = Content.getComponent("DYNA_CEnabler1");
const var DYNA_CAttack1 = Content.getComponent("DYNA_CAttack1");
const var DYNA_CTresh1 = Content.getComponent("DYNA_CTresh1");
const var DYNA_Compressor_Reduction_Meter1 = Content.getComponent("DYNA_Compressor_Reduction_Meter1");
const var DYNA_CRelease1 = Content.getComponent("DYNA_CRelease1");
const var DYNA_CMakeUp1 = Content.getComponent("DYNA_CMakeUp1");
const var DYNA_CRatio1 = Content.getComponent("DYNA_CRatio1");


// band 0 dynamics //




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






// band 1 dynamic //




const var DYNA1_Compressor_Reduction = Engine.createTimerObject();
DYNA1_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh1_Value = DYNA_CTresh1.getValue();
    
	var DYNA1_Compressor_Reduction_v = DYNA1.getAttribute(DYNA1.CompressorReduction);
	
	DYNA1_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA1_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter1.setValue(DYNA1_Compressor_Reduction_v);
	
	DYNA1.setAttribute(DYNA1.CompressorThreshold, DYNA_CTresh1_Value);
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 1 * ParametriqEQ_X.BandOffset, DYNA1_Compressor_Reduction_v);
	
});

DYNA1_Compressor_Reduction.startTimer(30);function onNoteOn()
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
 