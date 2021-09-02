const INPUTS = document.getElementById('IDinput');
const WARNING = document.getElementById('IDnote');
let totalTime = 45;

const timerClock = () => {
	let counter = document.getElementById('number'); 
	counter.innerHTML = totalTime;
	if(totalTime==0) {
		WARNING.setAttribute("style","display: flex;");
		setTimeout(() => {
      WARNING.removeAttribute("style","display: flex;");
      counter.innerHTML = '';
      INPUTS.value = "";
    }, 2000);
	} else {
		totalTime-=1;
		setTimeout("timerClock()", 1000);
	};
};

const validationInput = () => {
	 if (INPUTS.value > "") {
	 		timerClock();
  };
};

INPUTS.addEventListener('blur', validationInput);
