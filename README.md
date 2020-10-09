Uppgift 11 - Game night



































Syfte med uppgiften
Denna uppgift ska göras helt i JavaScript. Målet med uppgiften går ut på att egen hand, kunna tillämpa kunskaper och färdigheter, gå från en idé och konceptfas till en fullständig applikation. Inlämning ska visa på förståelse för, tillämpning, samt användning av ett RESTful API med JWT-baserad autensiering med dokumentdatabasen MongoDB.
Utöver ovan nämnda, ska lösning också innehålla grundläggande underlag för UX och design. Detta innefattar en grundläggande digital design.
Övergripande mål
Notis: Målen nedan som denoteras med * är i fall idén inte ska göras som en webbapplikation, utan en inbäddad applikation, vilket är tillåtet. I sådan fall diskutera din idé med din lärare omgående för vilken omfattning som kommer krävas.
Uppgiften **skall uppfylla följande övergripande mål:
Inlämning ska fungera i följande enheter och kommer testas i dem*:
PC desktop (upplösning 1920x1080p och uppåt)
Laptop (upplösning 1280 x 900 och uppåt)
Mobil (upplösning 414×746)
Inlämning ska fungera i de senaste versionerna av följande webbläsare och kommer testas i dem*:
Chrome
Firefox
Safari
Edge
Inlämning ska följa teknisk Teknisk kravspecifikation för u11
Inlämning ska ha en design kopplad till Personas och Scenarios
Inlämning ska deployas på webbleverantör som stödjer Node.JS. Heroku som är gratis, alternativt liknande tjänster. Tänk på begränsningar såsom CORS (Cross-Origin Resource Sharing) och HTTPS
Inlämning ska nyttja en databas, i form av dokumentdatabasen (MongoDB)
Inlämning ska använda Node.JS med Express för att implementera serverkod


Uppgiften bör uppfylla följande övergripande mål:
Inlämning bör ha en användarstudie/användningsanalys med minst 10 svar från olika personer (det är okej att fråga i klassen)
Se guide på https://webbriktlinjer.se/anvandarcentrering-tjanstedesign/utfor-anvandningsanalys/
Inlämning bör använda antingen React eller Angular för att implementera frontend, det är inte ett krav att använda Flux, Redux eller liknande för statehantering
Inlämning bör göras tillgänglig för användning även offline (PWA)
Inlämning bör ha fullgod dokumentation för API (via t.ex. Postman)
Generella krav på arbetsprocess
Uppgiften måste versionshanteras i Git, inlämningar med en commit i vid inlämning kommer inte godkännas.
För denna uppgift ska du följa GitHub Flow som arbetsmetodik när du arbetar med Git. Uppgiften kommer inte godkännas om denna metodik inte följs.
Inlämning ska följa kodstandarder:
För JavaScript:
[ ] http://airbnb.io/projects/javascript/
För CSS:
[ ] https://github.com/airbnb/css
Följ denna guide för konfiguration: https://travishorn.com/setting-up-eslint-on-vs-code-with-airbnb-javascript-style-guide-6eb78a535ba6
Inlämning
Uppgiften ska lämnas in via classroom.github.com i rätt projekt, länk till detta projekt kommer annonseras av läraren i samband med projektets början.




Förslag på planering
Vecka 1: Ta fram och skapa UX och design, användaranalys. Bygg samtliga vyer i applikationer och komponenter i React.
Vecka 2: Påbörja implementation av backend i Node. Utgå från vad som kommer behöver lagras i databasen och hur den datan ska behandlas, det är rekommenderat att använda sig av ett ER diagram. Börja sedan implementera authentication i backend, testa kontinuerligt med Postman för varje route och motsvarade metod som läggs till i API:et.
Vecka 3: Påbörja koppling med frontend och backend, saker som varit statiska i React i frontend kan nu börja kopplas mot API:et. Om tiden tillåter - testa deploya (många gånger).
Vecka 4: Testa, testa, testa igen och testa lite till. Se till att alla de tekniska kraven är uppnådda - deploya till produktion och testa allt igen (i olika webbläsare, be gärna om hjälp för att testa av)
Vecka 5: Försök lösa så många av de kritiska buggarna som möjligt innan inlämning eller bygg på med extra funktionalitet för att få försöka nå högre betyg

Betygsättning
Den här inlämningen ger underlag för följande kursmål. Där inlämningen helt motsvarar och går att bedöma för de mål som står med svart text och bara delvis de som står med brun text.
HC 2.1 Webbutveckla responsivt och browseranpassat med HTML och CSS enligt aktuella webbstandarder
HC 2.2 Utveckla browseranpassad CSS
HC 2.3 Optimera och validera HTML & CSS
HC 2.4 Webbutveckla med anpassning för tillgänglighet
—
JS 1.1 JavaScript / ECMAScript
JS 1.4 DOM-manipulation
JS 1.7 Lexical scope
JS 1.8 Event handling
JS 2.1 Utveckla webblösningar med JavaScript
JS 2.3 Använda befintliga API:er som en komponent i den egna appen
—
PG 2.2 Identifiera, formulera, analysera och lösa problem inom programmering
PG 2.9 Arbeta med versionshantering både enskild och inom ett team
PG 3.1 Identifiera, formulera, analysera och använda sig av informationssökning för att lösa problem inom programmering
—
UD 1.1 Grafik och design för webbsidor
UD 1.2 UX och användbarhet
UD 1.5 Personas och målgruppsanalys
UD 2.1 Ta fram grundläggande grafik och design för webb
UD 3.1 Arbeta som Fullstack-webbutvecklare med UX och grundläggande design
Godkänd
För att nå Godkänd som betyg på denna inlämning ska du:
utför alla färdigheter (2.x) som uppgiften har som mål med gott handlag
Med gott handlag syftas det till att inlämnad kod ska enhetligt följa standarder för frontend som är angivna i uppgiftsbeskrivningen
Väl godkänd
För att nå Väl godkänd som betyg på denna inlämning ska du:
utför alla färdigheter (2.x) som uppgiften har som mål med mycket gott handlag
Mycket gott handlag omfattar godkänd nivå men inlämning innehåller även utförlig och enhetlig dokumentation för hela kodbasen (i både kod och separat dokumentation)
User Personas
Notis: Nedan ser hittar ni exempel på användarprofiler som kan tänkas nyttja webbplatsen. Det behövs endast tre för denna sektion men om ni lägger till funktionalitet eller ökar scope (och komplexitet) i er inlämning kan ni behöva fler personas.
Nedan följer en mall för era personas
Personas
User Stories
Notis: Denna sektion är den översta nivån av user stories och de som listas här är väldigt övergripande (kallas ofta för Epics), Poängen med dessa är att webbplatsen måste kunna stödja dessa user stories när den första releasen anses färdig. Kom ihåg, ett vanligt format att skriva dessa stories är: As a , I want so that .
Exempel på user stories
Website Users
As a Website User, I am busy and have little time to find information about movies. I want to be able to find information about movies quickly and painlessly. Ideally with as few clicks as possible. So that I can spend get the information easily.
As a Website User, finding the correct movie is vital. I want to see different results of movies in a clear and concise manner so that I can easily know which movies I should watch, or learn more about.
Website Registered Users
As a Registered Website User, I am concerned with keeping track of what movies I want to watch, what movies I’m reviewing, have reviewed or am planning to review. So that I can have the possibility to manage several lists of movies I want to watch, as well as movies I am currently reviewing or have planned to review.
Skapa egna user stories för olika typer av användare för att täcka upp önskad funktionalitet
Icke-funktionella krav
The application backend must provide a RESTful API (i.e. should be able to be used with any other frontend)
The application must work in all modern browsers
The application must be responsive (work well and be functional good on all screen sizes)
Funktionella krav
Dessa krav måste uppfyllas
A user must be able to register an account
A user must be able to login to their account
A user must be able to search in the application
An administrative user must be able to log in to a basic dashboard an create/update/delete users
Dessa krav är frivilliga men meriterar högre betyg
An administrative user should be able to set permissions based on user roles
An administrative user should be able to create/read/update/delete user roles
An administrative user should be able to send out emails from the admin dashboard
Sitemap
När dina user stories är definierade borde det finnas en grundidé för vilka vyer er applikation kommer behöva innehålla. Ett bra sätt att dokumentera detta är via en så kallad sitemap
En bra sitemap innehåller följande:
En omfattande lista av alla sidor eller vyer. Detta inkluderar allt från vyer som innehåller detaljinformation till enklare “om oss” sidor. Spendera lite tid på att få fram samtliga vyer och att dessa finns med i din applikation.
Hierarkin mellan dessa sidor är illustrerad . Om du har en uppfattning om sidorna relaterar sig till varandra kan det vara bra att illustrera hur de förhåller sig hierarkiskt till varandra, i sitemapen. Detta kan underlätta när du ska skapa/designa er navigation
Exempel på verktyg: https://www.writemaps.com/
Routes
De routes som behöver finnas i applikationen
Wireframes
Notis: Nedan ska två det listas wireframes av webbplatsen. En är dina första utkast på hur sidan är tänkt att se ut och fungera, med detta i åtanke kan utvecklingen börja så smått. För mer detalj gör man sedan vyer i valfritt verktyg (Balsamiq) är ett vanligt alternativ. Det viktiga här är att man täcker upp den grundläggande funktionaliteten som ska finnas i varje vy.
Wireframes: Valfritt Prototypverktyg




Game Night App


Tanke:

*Skapa en applikation för enkel bokning av brädspelskväll.
*Varje användare ska kunna rösta på ett tillfälle (tid, datum, plats). 
*Varje användare ska kunna lägga till x-antal spel/brädspel (från sin egen samling / annan *medlems samling),till en spellista. 
*Därefter ska man kunna rösta på de tillgängliga spelen, som man vill spela under kvällen.
*Man ska kunna flagga ifall man vill äta tillsammans

Features:

*Kalender för bokning
*Enskilda Chattkanal för bokad datum
*Öppna upp vägbeskrivning (gps) för plats/spelare  via appen.
*För varje tillagd spel , under användare, ska information om spelet, importeras från gameboard geek.
*Importera sin profil och samling från gameboard geek.


Wireframes

Startsida (0)
*Log in (A)
*Skapa ny användare (B)

Log in (A)
Användarnamn
Lösenord
OK/Medlemsidan (D)
Glömt lösenord (C)
Tillbaka till huvudsidan (0)

Skapa ny användare (B)
Användarnamn
Lösenord
Adress
Postkod
Postort
Tillbaka till huvudsidan (0)

Glömt lösenord (C)
Email 
Skicka (0)
Tillbaka till huvudsidan (0)

OK/Medlemsidan (D)
Ny spelkväll (E)
Mina events (F)
Min samling (G)
Ändra mina uppgifter (H)
Mina meddelanden (J)
Tillbaka till huvudsidan/ log ut (0)




Ny spelkväll/Boka Event (E)
Kalendern öppnas med månadsöversikt.
Markera ett datum 
Tillbaka till medlemssidan (D)
Skapa chatkanal


Mina events (F)
Kalendern öppnas med månadsöversikt.
Markerar datum med inbokade events 
Tillbaka till medlemssidan (D)
Öppna chatkanal 

Info event (G)

Ta bort event
Tillbaka till mina events(F)
Tillbaka till medlemssidan (D)
Redigera(?)

Min samling (H)
Listar samtliga spel
Antal spelare / speltid / svårighetsgrad / BGG betyg / Gruppens betyg
Lägg till spel
Ta bort spel

Ändra mina uppgifter (I)

Namn / Adress / postnummer / postort / lösenord

Ångra / Tillbaka till medlemssidan (D)
Spara / Tillbaka till medlemssidan (D)
Mina vänner (J)
Lägg till vän
Ta bort vän
Tillbaka till medlemssidan (D)


Mina meddelanden (K)
Listar alla nya meddelanden från enskild- /gruppkanal
Till specifik kanal (L)
Tillbaka till medlemssidan (D)


