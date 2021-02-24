# School of Computing
# CA326 Year 3 Project Proposal Form

## Project Title: av8

| Student Name    | ID Number      |
| :------------:  | :------------: |
| Karl Finnerty   | 17428366       |
| Niall Stapleton | 17419206       |

**Staff Member consulted:** Darragh O'Brien

## Project Description (1-2 pages):

### 1. Description

*av8* is a proposed flight tracking app for Android. We will use a publicly available API to aid us in retrieving the necessary raw data. A number of websites allow access to automatic dependent surveillance—broadcast (ADS-B) data. ADS-B is a technology where an aircraft broadcasts its current location via GPS technology. This allows it to be tracked. This is included on the vast majority of commercial aircraft and some military and private aircraft. ADS-B data contains information such as the aircraft callsign, airline, aircraft type, registration, country of origin, latitude, longitude, velocity, rate of ascent/descent, heading and the transponder code (“squawk”). The aircraft icons will be shown on a map such as OpenStreetMap. All of the information mentioned above will be displayed in the app when the user selects the aircraft icon. It will be possible to search for aircraft by callsign, registration and airline.  
We will also implement a filtering system where users can only view aircraft that fulfill certain criteria, e.g. airline, aircraft type, origin, destination etc. For example entering the aircraft type “E190” would only show Embraer 190 aircraft types. The airline filter “EIN” (the ICAO code for Aer Lingus) would only show Aer Lingus aircraft. This is a very useful feature that will allow the user to find what they are looking for in what would otherwise be a very crowded map considering the amount of air traffic in most of the world.  
Another feature we plan to include is an augmented reality (AR) feature. The user will be able to point their phone camera at the horizon and see planes currently visible within a certain radius. Selecting an aircraft icon would show the full information for that aircraft (as in the standard map view). This feature would use the phone’s GPS and compass information. We would have a Google Earth style background for this interface.  
We shall include a databases of delay statistics for the primary European hubs. This will allow us to perform data analytics to see which airports and airlines have the best on-time performances. This will be useful for passengers as currently this information can be hard to access or is calculated differently from airline to airline.  
We will also build databases of airlines and aircraft types. The API displays the airline and aircraft types as ICAO codes, which most casual users would not be familiar with. Databases would allow the more familiar IATA codes as well as the airline name to be displayed in the app.  

### 2.	Division of Work
Niall: Integrate application with API, develop AR feature, build aircraft/airline database, prototype application front-end.  
Karl: Develop AR feature, do analytics on delay data (Python), prototype application front-end.  

### 3.	Programming language(s)
As Java is the official language for Android app development, we expect to use Java for the majority of our project. JavaScript and XML will also be utilised for the UI.  
SQL will be used for the databases.  
We will use Python to do the analytics side of the project.  

### 4.	Programming tool(s)
Android Studio, Android Debug Bridge, ADS-B Exchange API (for majority of aircraft data), OpenSky Network API (for estimated arrival/departure times), Microsoft SQL Server Management Studio (SSMS)

### 5.	Learning Challenges
As neither of us have experience with app development, our primary challenge will be to research and learn Android app development. We will need to develop our Java programming skills.  
Neither of us built a SQL database before, we will have to learn how to do so.  
We will have to build a user interface with full interactivity and and integrated map.  
We will also have to learn how to access and use the information contained in the device sensors (GPS, compass), as these are an integral part of the AR feature of our app.  

### 6.	Hardware / software platform
Android, development on PC.  
Analytics, will be done on Linux.  

### 7.	Special hardware / software requirements
None expected.
