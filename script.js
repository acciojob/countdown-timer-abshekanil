// Your script here.


function startCountdown(){
	let inputUser = document.getElementById('userInput').value;

	let numericValue = parseFloat(inputUser);

	if(!isNaN(numericValue) && numericValue > 0)
	{
		let endTime = document.getElementById('endTime');
		let countDown = document.getElementById('countDown');

		let currentTime = new Date();
		let endTimeValue = new Date(currentTime.getTime() + numericValue * 60 * 1000);

		let resultTime = endTimeValue.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
		endTime.innerHTML = resultTime;

		function updateTimer()
		{

			let remainingTime = endTimeValue - new Date();

			if(remainingTime <= 0)
			{
				clearInterval(timerInterval);
				countDown.innerHTML = 'Countdown ended!'
			}
			else
			{
				let minutes = Math.floor(remainingTime/(60 * 1000));
				let seconds = Math.floor((remainingTime % (60 * 1000))/1000);
				
				countDown.innerHTML = `${minutes}m ${seconds}s`;
			}
			
		}
		updateTimer();
		let timerInterval = setInterval(updateTimer, 1000);

		
	}
}







