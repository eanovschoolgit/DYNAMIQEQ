Content.makeFrontInterface(1000, 500);




// show panel dynamic //

const var Button1 = Content.getComponent("Button1");
const var Panel1 = Content.getComponent("Panel1");


inline function onButton1Control(component, value)
{
	Panel1.showControl(value);
};

Content.getComponent("Button1").setControlCallback(onButton1Control);

// value button label1 //

const var Label1 = Content.getComponent("Label1");



inline function onLabel1Control(component, value)
{
	FREQ0GAIN.setValue (parseInt (value));
	FREQ0GAIN.changed();

	
};

Content.getComponent("Label1").setControlCallback(onLabel1Control);





// const var diff //

const var DYNA = Synth.getEffect("DYNA");
const var ParametriqEQ_X = Synth.getEffect("ParametriqEQ_X");
const var DYNA_CEnabler = Content.getComponent("DYNA_CEnabler");
const var DYNA_CAttack = Content.getComponent("DYNA_CAttack");
const var DYNA_CTresh = Content.getComponent("DYNA_CTresh");
const var DYNA_Compressor_Reduction_Meter = Content.getComponent("DYNA_Compressor_Reduction_Meter");
const var DYNA_CRelease = Content.getComponent("DYNA_CRelease");
const var DYNA_CMakeUp = Content.getComponent("DYNA_CMakeUp");
const var DYNA_CRatio = Content.getComponent("DYNA_CRatio");

const var DYNA1 = Synth.getEffect("DYNA1");
const var DYNA_CEnabler1 = Content.getComponent("DYNA_CEnabler1");
const var DYNA_CAttack1 = Content.getComponent("DYNA_CAttack1");
const var DYNA_CTresh1 = Content.getComponent("DYNA_CTresh1");
const var DYNA_Compressor_Reduction_Meter1 = Content.getComponent("DYNA_Compressor_Reduction_Meter1");
const var DYNA_CRelease1 = Content.getComponent("DYNA_CRelease1");
const var DYNA_CMakeUp1 = Content.getComponent("DYNA_CMakeUp1");
const var DYNA_CRatio1 = Content.getComponent("DYNA_CRatio1");
const var Band1_Q = Content.getComponent("Band1_Q");
const var Band1_Freq = Content.getComponent("Band1_Freq");
const var Parametriq = Synth.getEffect("Parametriq");



// enable band 1//

const var bandenable1 = Content.getComponent("bandenable1");

inline function onbandenable1Control(component, value)
{
    local index = Parametriq.Enabled + 0* Parametriq.BandOffset;
	Parametriq.setAttribute(index, value);
	local index = ParametriqEQ_X.Enabled + 0 * ParametriqEQ_X.BandOffset;
	ParametriqEQ_X.setAttribute(index, value);

	
};

Content.getComponent("bandenable1").setControlCallback(onbandenable1Control);




// enable band 2//

const var bandenable2 = Content.getComponent("bandenable2");

inline function onbandenable2Control(component, value)
{
    local index = Parametriq.Enabled + 1 * Parametriq.BandOffset;
	Parametriq.setAttribute(index, value);
	local index = ParametriqEQ_X.Enabled + 1 * ParametriqEQ_X.BandOffset;
	ParametriqEQ_X.setAttribute(index, value);

	
};

Content.getComponent("bandenable2").setControlCallback(onbandenable2Control);




// enable band 3//

const var bandenable3 = Content.getComponent("bandenable3");

inline function onbandenable3Control(component, value)
{
    local index = Parametriq.Enabled + 2 * Parametriq.BandOffset;
	Parametriq.setAttribute(index, value);
	local index = ParametriqEQ_X.Enabled + 2 * ParametriqEQ_X.BandOffset;
	ParametriqEQ_X.setAttribute(index, value);
	
};

Content.getComponent("bandenable3").setControlCallback(onbandenable3Control);




// enable band 4//

const var bandenable4 = Content.getComponent("bandenable4");

inline function onbandenable4Control(component, value)
{
    local index = Parametriq.Enabled + 3 * Parametriq.BandOffset;
	Parametriq.setAttribute(index, value);
	local index = ParametriqEQ_X.Enabled + 3 * ParametriqEQ_X.BandOffset;
	ParametriqEQ_X.setAttribute(index, value);
	
};

Content.getComponent("bandenable4").setControlCallback(onbandenable4Control);




// enable band 5//

const var bandenable5 = Content.getComponent("bandenable5");

inline function onbandenable5Control(component, value)
{
    local index = Parametriq.Enabled + 4 * Parametriq.BandOffset;
	Parametriq.setAttribute(index, value);
	local index = ParametriqEQ_X.Enabled + 4 * ParametriqEQ_X.BandOffset;
	ParametriqEQ_X.setAttribute(index, value);
	
};

Content.getComponent("bandenable5").setControlCallback(onbandenable5Control);




// enable band 6//

const var bandenable6 = Content.getComponent("bandenable6");

inline function onbandenable6Control(component, value)
{
    local index = Parametriq.Enabled + 5 * Parametriq.BandOffset;
	Parametriq.setAttribute(index, value);
	local index = ParametriqEQ_X.Enabled + 5 * ParametriqEQ_X.BandOffset;
	ParametriqEQ_X.setAttribute(index, value);
	
};

Content.getComponent("bandenable6").setControlCallback(onbandenable6Control);




// enable band 7//

const var bandenable7 = Content.getComponent("bandenable7");

inline function onbandenable7Control(component, value)
{
    local index = Parametriq.Enabled + 6 * Parametriq.BandOffset;
	Parametriq.setAttribute(index, value);
	local index = ParametriqEQ_X.Enabled + 6 * ParametriqEQ_X.BandOffset;
	ParametriqEQ_X.setAttribute(index, value);
	
};

Content.getComponent("bandenable7").setControlCallback(onbandenable7Control);



// enable band 8//

const var bandenable8 = Content.getComponent("bandenable8");

inline function onbandenable8Control(component, value)
{
    local index = Parametriq.Enabled + 7 * Parametriq.BandOffset;
	Parametriq.setAttribute(index, value);
	local index = ParametriqEQ_X.Enabled + 7 * ParametriqEQ_X.BandOffset;
	ParametriqEQ_X.setAttribute(index, value);
	
};

Content.getComponent("bandenable8").setControlCallback(onbandenable8Control);









// frequency control //

const var Band2_Freq = Content.getComponent("Band2_Freq");
const var Band3_Freq = Content.getComponent("Band3_Freq");
const var Band4_Freq = Content.getComponent("Band4_Freq");
const var Band5_Freq = Content.getComponent("Band5_Freq");
const var Band6_Freq = Content.getComponent("Band6_Freq");
const var Band7_Freq = Content.getComponent("Band7_Freq");
const var Band8_Freq = Content.getComponent("Band8_Freq");








inline function onBand1_FreqControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq, value);
	Parametriq.setAttribute(Parametriq.Freq, value);
	Label1.set("text", Band1_Freq.getValue());
};

Content.getComponent("Band1_Freq").setControlCallback(onBand1_FreqControl);



inline function onBand2_FreqControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq + 5, value);
	Parametriq.setAttribute(Parametriq.Freq + 5, value);
	Label1.set("text", Band2_Freq.getValue());
	
};

Content.getComponent("Band2_Freq").setControlCallback(onBand2_FreqControl);


inline function onBand3_FreqControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq + 10, value);
	Parametriq.setAttribute(Parametriq.Freq + 10, value);
	Label1.set("text", Band3_Freq.getValue());
	
};

Content.getComponent("Band3_Freq").setControlCallback(onBand3_FreqControl);



inline function onBand4_FreqControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq + 15, value);
	Parametriq.setAttribute(Parametriq.Freq + 15, value);
	Label1.set("text", Band4_Freq.getValue());
	
};

Content.getComponent("Band4_Freq").setControlCallback(onBand4_FreqControl);


inline function onBand5_FreqControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq + 20, value);
	Parametriq.setAttribute(Parametriq.Freq + 20, value);
	Label1.set("text", Band5_Freq.getValue());
};

Content.getComponent("Band5_Freq").setControlCallback(onBand5_FreqControl);




inline function onBand6_FreqControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq + 25, value);
	Parametriq.setAttribute(Parametriq.Freq + 25, value);
	Label1.set("text", Band6_Freq.getValue());
};

Content.getComponent("Band6_Freq").setControlCallback(onBand6_FreqControl);



inline function onBand7_FreqControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq + 30, value);
	Parametriq.setAttribute(Parametriq.Freq + 30, value);
	Label1.set("text", Band7_Freq.getValue());
};

Content.getComponent("Band7_Freq").setControlCallback(onBand7_FreqControl);





inline function onBand8_FreqControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Freq + 35, value);
	Parametriq.setAttribute(Parametriq.Freq + 35, value);
	Label1.set("text", Band8_Freq.getValue());
};

Content.getComponent("Band8_Freq").setControlCallback(onBand8_FreqControl);








// Q control //
const var Band2_Q = Content.getComponent("Band2_Q");
const var Band3_Q = Content.getComponent("Band3_Q");
const var Band4_Q = Content.getComponent("Band4_Q");
const var Band5_Q = Content.getComponent("Band5_Q");
const var Band6_Q = Content.getComponent("Band6_Q");
const var Band7_Q = Content.getComponent("Band7_Q");
const var Band8_Q = Content.getComponent("Band8_Q");











inline function onBand1_QControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q, value);
	Parametriq.setAttribute(Parametriq.Q, value);
	Label1.set("text", Band1_Q.getValue());
};

Content.getComponent("Band1_Q").setControlCallback(onBand1_QControl);



inline function onBand2_QControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q + 5, value);
	Parametriq.setAttribute(Parametriq.Q + 5, value);
	Label1.set("text", Band2_Q.getValue());
};

Content.getComponent("Band2_Q").setControlCallback(onBand2_QControl);


inline function onBand3_QControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q + 10, value);
	Parametriq.setAttribute(Parametriq.Q + 10, value);
	Label1.set("text", Band3_Q.getValue());
};

Content.getComponent("Band3_Q").setControlCallback(onBand3_QControl);


inline function onBand4_QControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q + 15, value);
	Parametriq.setAttribute(Parametriq.Q + 15, value);
	Label1.set("text", Band4_Q.getValue());
};

Content.getComponent("Band4_Q").setControlCallback(onBand4_QControl);





inline function onBand5_QControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q + 20, value);
	Parametriq.setAttribute(Parametriq.Q + 20, value);
	Label1.set("text", Band5_Q.getValue());
};

Content.getComponent("Band5_Q").setControlCallback(onBand5_QControl);



inline function onBand6_QControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q + 25, value);
	Parametriq.setAttribute(Parametriq.Q + 25, value);
	Label1.set("text", Band6_Q.getValue());
};

Content.getComponent("Band6_Q").setControlCallback(onBand6_QControl);




inline function onBand7_QControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q + 30, value);
	Parametriq.setAttribute(Parametriq.Q + 30, value);
	Label1.set("text", Band7_Q.getValue());
};

Content.getComponent("Band7_Q").setControlCallback(onBand7_QControl);



inline function onBand8_QControl(component, value)
{
	ParametriqEQ_X.setAttribute(ParametriqEQ_X.Q + 35, value);
	Parametriq.setAttribute(Parametriq.Q + 35, value);
	Label1.set("text", Band8_Q.getValue());
};

Content.getComponent("Band8_Q").setControlCallback(onBand8_QControl);



// gain freq control parametriq only note dynamiq //





const var FREQ0GAIN = Content.getComponent("FREQ0GAIN");
const var FREQ1GAIN = Content.getComponent("FREQ1GAIN");
const var FREQ2GAIN = Content.getComponent("FREQ2GAIN");
const var FREQ3GAIN = Content.getComponent("FREQ3GAIN");
const var FREQ4GAIN = Content.getComponent("FREQ4GAIN");
const var FREQ5GAIN = Content.getComponent("FREQ5GAIN");
const var FREQ6GAIN = Content.getComponent("FREQ6GAIN");
const var FREQ7GAIN = Content.getComponent("FREQ7GAIN");



inline function onFREQ0GAINControl(component, value)
{
	Parametriq.setAttribute(Parametriq.Gain + 0, value);
	Label1.set("text", FREQ0GAIN.getValue());
};

Content.getComponent("FREQ0GAIN").setControlCallback(onFREQ0GAINControl);


inline function onFREQ1GAINControl(component, value)
{
	Parametriq.setAttribute(Parametriq.Gain + 5, value);
	Label1.set("text", FREQ1GAIN.getValue());
};

Content.getComponent("FREQ1GAIN").setControlCallback(onFREQ1GAINControl);


inline function onFREQ2GAINControl(component, value)
{
	Parametriq.setAttribute(Parametriq.Gain + 10, value);
	Label1.set("text", FREQ2GAIN.getValue());
};

Content.getComponent("FREQ2GAIN").setControlCallback(onFREQ2GAINControl);



inline function onFREQ3GAINControl(component, value)
{
	Parametriq.setAttribute(Parametriq.Gain + 15, value);
	Label1.set("text", FREQ3GAIN.getValue());
};

Content.getComponent("FREQ3GAIN").setControlCallback(onFREQ3GAINControl);



inline function onFREQ4GAINControl(component, value)
{
	Parametriq.setAttribute(Parametriq.Gain + 20, value);
	Label1.set("text", FREQ4GAIN.getValue());
};

Content.getComponent("FREQ4GAIN").setControlCallback(onFREQ4GAINControl);


inline function onFREQ5GAINControl(component, value)
{
	Parametriq.setAttribute(Parametriq.Gain + 25, value);
	Label1.set("text", FREQ5GAIN.getValue());
};

Content.getComponent("FREQ5GAIN").setControlCallback(onFREQ5GAINControl);




inline function onFREQ6GAINControl(component, value)
{
	Parametriq.setAttribute(Parametriq.Gain + 30, value);
	Label1.set("text", FREQ6GAIN.getValue());
};

Content.getComponent("FREQ6GAIN").setControlCallback(onFREQ6GAINControl);


inline function onFREQ7GAINControl(component, value)
{
	Parametriq.setAttribute(Parametriq.Gain + 35, value);
	Label1.set("text", FREQ7GAIN.getValue());
};

Content.getComponent("FREQ7GAIN").setControlCallback(onFREQ7GAINControl);















const var Invert1 = Content.getComponent("Invert1");  // add invert button
const var Invert = Content.getComponent("Invert");  // add invert button
const var Invert2 = Content.getComponent("Invert2");  // add invert button
const var Invert3 = Content.getComponent("Invert3");  // add invert button
const var Invert4 = Content.getComponent("Invert4");  // add invert button
const var Invert5 = Content.getComponent("Invert5");  // add invert button
const var Invert6 = Content.getComponent("Invert6");  // add invert button
const var Invert7 = Content.getComponent("Invert7");  // add invert button



// band 0 dynamics //


const var DYNA_Compressor_Reduction = Engine.createTimerObject();
DYNA_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh_Value = DYNA_CTresh.getValue();
    
	var DYNA_Compressor_Reduction_v = DYNA.getAttribute(DYNA.CompressorReduction);
	
	DYNA_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter.setValue(DYNA_Compressor_Reduction_v);
	
	DYNA.setAttribute(DYNA.CompressorThreshold, DYNA_CTresh_Value);
	
	if(Invert.getValue() == 0)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 0 * ParametriqEQ_X.BandOffset, DYNA_Compressor_Reduction_v);
    }
    
    if(Invert.getValue() == 1)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 0 * ParametriqEQ_X.BandOffset, 1-DYNA_Compressor_Reduction_v);
    }
	
	
});

DYNA_Compressor_Reduction.startTimer(40);






// band 1 dynamic //






const var DYNA1_Compressor_Reduction = Engine.createTimerObject();
DYNA1_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh1_Value = DYNA_CTresh1.getValue();
    
	var DYNA1_Compressor_Reduction_v = DYNA1.getAttribute(DYNA1.CompressorReduction);
	
	DYNA1_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA1_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter1.setValue(DYNA1_Compressor_Reduction_v);
	
	DYNA1.setAttribute(DYNA1.CompressorThreshold, DYNA_CTresh1_Value);
	
	if(Invert1.getValue() == 0)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 1 * ParametriqEQ_X.BandOffset, DYNA1_Compressor_Reduction_v);
    }
	
	if(Invert1.getValue() == 1)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 1 * ParametriqEQ_X.BandOffset, 1-DYNA1_Compressor_Reduction_v);
    }
	
});

DYNA1_Compressor_Reduction.startTimer(40);




// band 2 dynamic //

const var DYNA2 = Synth.getEffect("DYNA2");
const var DYNA_CEnabler2 = Content.getComponent("DYNA_CEnabler2");
const var DYNA_CAttack2 = Content.getComponent("DYNA_CAttack2");
const var DYNA_CTresh2 = Content.getComponent("DYNA_CTresh2");
const var DYNA_Compressor_Reduction_Meter2 = Content.getComponent("DYNA_Compressor_Reduction_Meter2");
const var DYNA_CRelease2 = Content.getComponent("DYNA_CRelease2");
const var DYNA_CMakeUp2 = Content.getComponent("DYNA_CMakeUp2");
const var DYNA_CRatio2 = Content.getComponent("DYNA_CRatio2");



const var DYNA2_Compressor_Reduction = Engine.createTimerObject();
DYNA2_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh2_Value = DYNA_CTresh2.getValue();
    
	var DYNA2_Compressor_Reduction_v = DYNA2.getAttribute(DYNA2.CompressorReduction);
	
	DYNA2_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA2_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter2.setValue(DYNA2_Compressor_Reduction_v);
	
	DYNA2.setAttribute(DYNA2.CompressorThreshold, DYNA_CTresh2_Value);
	
	if(Invert2.getValue() == 0)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 2 * ParametriqEQ_X.BandOffset, DYNA2_Compressor_Reduction_v);
    }
	
    if(Invert2.getValue() == 1)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 2 * ParametriqEQ_X.BandOffset, 1-DYNA2_Compressor_Reduction_v);
    }
	
});

DYNA2_Compressor_Reduction.startTimer(40);


// band 3 dynamic //

const var DYNA3 = Synth.getEffect("DYNA3");
const var DYNA_CEnabler3 = Content.getComponent("DYNA_CEnabler3");
const var DYNA_CAttack3 = Content.getComponent("DYNA_CAttack3");
const var DYNA_CTresh3 = Content.getComponent("DYNA_CTresh3");
const var DYNA_Compressor_Reduction_Meter3 = Content.getComponent("DYNA_Compressor_Reduction_Meter3");
const var DYNA_CRelease3 = Content.getComponent("DYNA_CRelease3");
const var DYNA_CMakeUp3 = Content.getComponent("DYNA_CMakeUp3");
const var DYNA_CRatio3 = Content.getComponent("DYNA_CRatio3");



const var DYNA3_Compressor_Reduction = Engine.createTimerObject();
DYNA3_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh3_Value = DYNA_CTresh3.getValue();
    
	var DYNA3_Compressor_Reduction_v = DYNA3.getAttribute(DYNA3.CompressorReduction);
	
	DYNA3_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA3_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter3.setValue(DYNA3_Compressor_Reduction_v);
	
	DYNA3.setAttribute(DYNA3.CompressorThreshold, DYNA_CTresh3_Value);
	
	if(Invert3.getValue() == 0)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 3 * ParametriqEQ_X.BandOffset, DYNA3_Compressor_Reduction_v);
    }
    
    if(Invert3.getValue() == 1)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 3 * ParametriqEQ_X.BandOffset, 1-DYNA3_Compressor_Reduction_v);
    }
	
	
});

DYNA3_Compressor_Reduction.startTimer(40);




// band 4 dynamic //





const var DYNA4 = Synth.getEffect("DYNA4");
const var DYNA_CEnabler4 = Content.getComponent("DYNA_CEnabler4");
const var DYNA_CAttack4 = Content.getComponent("DYNA_CAttack4");
const var DYNA_CTresh4 = Content.getComponent("DYNA_CTresh4");
const var DYNA_Compressor_Reduction_Meter4 = Content.getComponent("DYNA_Compressor_Reduction_Meter4");
const var DYNA_CRelease4 = Content.getComponent("DYNA_CRelease4");
const var DYNA_CMakeUp4 = Content.getComponent("DYNA_CMakeUp4");
const var DYNA_CRatio4 = Content.getComponent("DYNA_CRatio4");



const var DYNA4_Compressor_Reduction = Engine.createTimerObject();
DYNA4_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh4_Value = DYNA_CTresh4.getValue();
    
	var DYNA4_Compressor_Reduction_v = DYNA4.getAttribute(DYNA4.CompressorReduction);
	
	DYNA4_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA4_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter4.setValue(DYNA4_Compressor_Reduction_v);
	
	DYNA4.setAttribute(DYNA4.CompressorThreshold, DYNA_CTresh4_Value);
	
	if(Invert4.getValue() == 0)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 4 * ParametriqEQ_X.BandOffset, DYNA4_Compressor_Reduction_v);
    }
    
    if(Invert4.getValue() == 1)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 4 * ParametriqEQ_X.BandOffset, 1-DYNA4_Compressor_Reduction_v);
    }
	
	
});

DYNA4_Compressor_Reduction.startTimer(40);


// band 5 dynamic //




const var DYNA5 = Synth.getEffect("DYNA5");
const var DYNA_CEnabler5 = Content.getComponent("DYNA_CEnabler5");
const var DYNA_CAttack5 = Content.getComponent("DYNA_CAttack5");
const var DYNA_CTresh5 = Content.getComponent("DYNA_CTresh5");
const var DYNA_Compressor_Reduction_Meter5 = Content.getComponent("DYNA_Compressor_Reduction_Meter5");
const var DYNA_CRelease5 = Content.getComponent("DYNA_CRelease5");
const var DYNA_CMakeUp5 = Content.getComponent("DYNA_CMakeUp5");
const var DYNA_CRatio5 = Content.getComponent("DYNA_CRatio5");



const var DYNA5_Compressor_Reduction = Engine.createTimerObject();
DYNA5_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh5_Value = DYNA_CTresh5.getValue();
    
	var DYNA5_Compressor_Reduction_v = DYNA5.getAttribute(DYNA5.CompressorReduction);
	
	DYNA5_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA5_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter5.setValue(DYNA5_Compressor_Reduction_v);
	
	DYNA5.setAttribute(DYNA5.CompressorThreshold, DYNA_CTresh5_Value);
	
	if(Invert5.getValue() == 0)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 5 * ParametriqEQ_X.BandOffset, DYNA5_Compressor_Reduction_v);
    }
	
    if(Invert5.getValue() == 1)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 5 * ParametriqEQ_X.BandOffset, 1-DYNA5_Compressor_Reduction_v);
    }
	
});

DYNA5_Compressor_Reduction.startTimer(40);



// band 6 dynamic //




const var DYNA6 = Synth.getEffect("DYNA6");
const var DYNA_CEnabler6 = Content.getComponent("DYNA_CEnabler6");
const var DYNA_CAttack6 = Content.getComponent("DYNA_CAttack6");
const var DYNA_CTresh6 = Content.getComponent("DYNA_CTresh6");
const var DYNA_Compressor_Reduction_Meter6 = Content.getComponent("DYNA_Compressor_Reduction_Meter6");
const var DYNA_CRelease6 = Content.getComponent("DYNA_CRelease6");
const var DYNA_CMakeUp6 = Content.getComponent("DYNA_CMakeUp6");
const var DYNA_CRatio6 = Content.getComponent("DYNA_CRatio6");



const var DYNA6_Compressor_Reduction = Engine.createTimerObject();
DYNA6_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh6_Value = DYNA_CTresh6.getValue();
    
	var DYNA6_Compressor_Reduction_v = DYNA6.getAttribute(DYNA6.CompressorReduction);
	
	DYNA6_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA6_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter6.setValue(DYNA6_Compressor_Reduction_v);
	
	DYNA6.setAttribute(DYNA6.CompressorThreshold, DYNA_CTresh6_Value);
	
	if(Invert6.getValue() == 0)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 6 * ParametriqEQ_X.BandOffset, DYNA6_Compressor_Reduction_v);
    }
	
    if(Invert6.getValue() == 1)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 6 * ParametriqEQ_X.BandOffset, 1-DYNA6_Compressor_Reduction_v);
    }
	
});

DYNA6_Compressor_Reduction.startTimer(40);




// band 7 dynamic //




const var DYNA7 = Synth.getEffect("DYNA7");
const var DYNA_CEnabler7 = Content.getComponent("DYNA_CEnabler7");
const var DYNA_CAttack7 = Content.getComponent("DYNA_CAttack7");
const var DYNA_CTresh7 = Content.getComponent("DYNA_CTresh7");
const var DYNA_Compressor_Reduction_Meter7 = Content.getComponent("DYNA_Compressor_Reduction_Meter7");
const var DYNA_CRelease7 = Content.getComponent("DYNA_CRelease7");
const var DYNA_CMakeUp7 = Content.getComponent("DYNA_CMakeUp7");
const var DYNA_CRatio7 = Content.getComponent("DYNA_CRatio7");



const var DYNA7_Compressor_Reduction = Engine.createTimerObject();
DYNA7_Compressor_Reduction.setTimerCallback(function()
{   
    var DYNA_CTresh7_Value = DYNA_CTresh7.getValue();
    
	var DYNA7_Compressor_Reduction_v = DYNA7.getAttribute(DYNA7.CompressorReduction);
	
	DYNA7_Compressor_Reduction_v = Engine.getDecibelsForGainFactor(DYNA7_Compressor_Reduction_v);
	
	DYNA_Compressor_Reduction_Meter7.setValue(DYNA7_Compressor_Reduction_v);
	
	DYNA7.setAttribute(DYNA7.CompressorThreshold, DYNA_CTresh7_Value);
	
	if(Invert7.getValue() == 0)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 7 * ParametriqEQ_X.BandOffset, DYNA7_Compressor_Reduction_v);
    }
	
    if(Invert7.getValue() == 1)
    {
        ParametriqEQ_X.setAttribute(ParametriqEQ_X.Gain  + 7 * ParametriqEQ_X.BandOffset, 1-DYNA7_Compressor_Reduction_v);
    }
	
});

DYNA7_Compressor_Reduction.startTimer(40);






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
 