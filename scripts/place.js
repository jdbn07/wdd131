const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const lastModified = document.querySelector("#lastModified");
const lastModifiedDate = new Date(document.lastModified);

lastModified.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short",
    timeStyle: "medium"
	}
).format(lastModifiedDate)}</span>`;

const windSpeed = 14;
const temperature = 26;
const windchill = document.querySelector("#windchill");

const windchillOperation = function(temperature, windSpeed){
    if(temperature <=10 && windSpeed > 4.8)
        {
            let windchill = 13.12 + (0.6215*temperature) - (11.37*(windSpeed**0.16)) + (0.3965*temperature*(windSpeed**0.16));
            return windchill.toFixed(2);
        }
    else
    {
        return "N/A";
    }
}
windchill.innerHTML = `<span class="highlight">${windchillOperation(temperature, windSpeed)}</span>`;