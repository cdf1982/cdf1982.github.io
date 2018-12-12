---
layout: post
title: AppleScript for DarkSky weather forecast
description:
image:
tags: [automation, applescript]
---
For a while now, me and my sister wanted to make an habit of a Thursday walk with my 🐺.
Trying to actually remember it with our brains would have been enough, or we could have made an appointment in a shared calendar. Instead, I had fun assembling the following AppleScript, a.k.a. the nerdiest solution to a non-existing problem ever; I awarded myself bonus points for scheduling a cron job to run it every Thursday morning.

I'll let the actual script, with a few comments, explain itself.
Please be advised that I'm no AppleScript expert and I recognize that this script could be written better (the variable names are unusually bad for my standards), but it works and it's enough for such a toy.


```applescript
# Get local weather forecast from DarkSky for Thursday, send a local notification and an iMessage.

# This script requires JSON Helper, the most amazing app ever, that let you access JSON directly from AppleScript; it's free,  more details and download link here: http://www.mousedown.net/mouseware/JSONHelper.html
# The weather-fetching portion of this script is heavily based (read copied) on this gist: https://gist.github.com/Pe8er/a37729b8fd55a7fd5f9674103659827a
# The DarkSky API, also required for this to work, is pretty straightforward, but here's a link to the documentation: https://darksky.net/dev/docs; you can access this API for free with a limit of 1.000 calls per day, more than enough for this kind of use.


set APIKey to "YOUR_API" # Replace with your DarkSky API key


# 1. I want to know if today is Thursday, and if it's not, I want the date for the next Thursday.

set nextThursday to current date

if nextThursday's weekday is Thursday then set nextThursday to nextThursday

repeat until nextThursday's weekday is Thursday
	set nextThursday to nextThursday + days
end repeat

set {year:nextThursdaysYear, month:nextThursdaysMonth, day:nextThursdaysDay} to nextThursday

set forecastDate to (nextThursdaysYear as string) & "-" & nextThursdaysMonth * 1 & "-" & nextThursdaysDay & "-13-30-00" # I'm fine hardcoding the time, YMMV

set dateString to ((nextThursdaysDay as string) & "-" & nextThursdaysMonth * 1 & "-" & nextThursdaysYear & " 13:30:00")
set theDate to date (dateString)
set aDateObject to theDate

# 2. I prefer to feed the date to DarkSky API in Unix format (seconds since January 1st, 1970); for this to happen, a very odd thing is necessary: we need to convert it to another format and then to string to get rid of the exponential notation introduced by AppleScript. Trust me on this, it works.

set unixSecsExponential to aDateObject - (time to GMT) - (date "giovedì 1 gennaio 1970 00:00:00") # Adjust according to your locale.

set conversionString to unixSecsExponential as inches

set unixDate to conversionString as string

# 3. Now, let's fetch the forecast
tell application "JSON Helper"
	try
		set latLonDate to "YOUR_LATITUDE,YOUR_LONGITUDE," & unixDate # Replace with your location; you can fetch the latitude and longitude with https://www.latlong.net/; beware of the commas.
		set weather to fetch JSON from "https://api.darksky.net/forecast/" & APIKey & "/" & latLonDate & "?exclude=minutely,hourly,daily,alerts,flags&units=ca" # See documentations for the parameters.
	on error e
		return e
	end try
	
	try
		set temperature to temperature of currently of weather
		set weatherStatus to icon of currently of weather
		set summary to summary of currently of weather
	on error
		return "¯\\_(ツ)_/¯"
	end try
end tell

# 4. Emojis, just because

if weatherStatus is equal to "clear-day" then
	set myIcon to "☀️"
else if weatherStatus is equal to "clear-night" then
	set myIcon to "🌙"
else if weatherStatus is equal to "partly-cloudy-day" then
	set myIcon to "🌤"
else if weatherStatus is equal to "partly-cloudy-night" then
	set myIcon to "☁️🌙"
else if weatherStatus is equal to "cloudy" then
	set myIcon to "☁️"
else if weatherStatus is equal to "rain" then
	set myIcon to "🌧"
else if weatherStatus is equal to "sleet" then
	set myIcon to "⛈"
else if weatherStatus is equal to "fog" then
	set myIcon to "🌫️"
else if weatherStatus is equal to "wind" then
	set myIcon to "🌀"
else if weatherStatus is equal to "snow" then
	set myIcon to "❄️"
else
	set myIcon to weatherStatus
end if

# 5. Prepare a string with the received forecast

set weatherMessage to "Forecast for " & theDate & ": " & myIcon & ", " & (round (temperature)) & "° C"

# 6. If the weather is bad, nothing happens; if it's good enough, a local notification is triggered and an iMessage is sent to the specified contact.

if weatherStatus is equal to "rain" or weatherStatus is equal to "snow" then
	return "Sad wolf today... " & weatherMessage
else
	set messageForFriend to weatherMessage & ". Let's walk the 🐺?"
	display notification messageForFriend sound name "Purr"
	tell application "Messages" to send messageForFriend to buddy "YOUR_BUDDY@icloud.com" of (service 1 whose service type is iMessage) # Replace with the iMessage account for the recipient.
end if
```