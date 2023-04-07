*# omdbAI-app-backend*

 
This is the back end for an omdb search app. There's 2 routers, search and movies. 
Search has one get request, it gets the top 10 results related to a search term gotten from the req.params and sends the results in the response.
Movies has one get request, it takes an IMDb ID and gets the title associated with that movie, it only sends the necessary information to the user (title/year/plot/poster).

