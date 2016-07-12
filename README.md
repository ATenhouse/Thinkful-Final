"FIRE IN THE HOLE"
In completion of Thinkful's Node.js proficiency course

DESCRIPTION
-----------
A simple one-page site for scraping and subsequently displaying Battle.net's Overwatch data for a given player. To date, only [a third party site](https://lootbox.eu/) has developed an API for scraping player information - [soon to become an open-source project.](https://gitlab.com/SingularityIO/LootBoxAPI)

DUE DILIGENCE / STATE OF THE FIELD
----------------
Other sites utilize Lootbox and "first party" scraping, including [Master Overwatch](http://masteroverwatch.com/).

FEATURE ROADMAP
---------------
STAGE 0 - Barebones Express-based server for driving project
-- May use base example from Unit 2 of course

STAGE 1 - Implementation of simple scraper for Battle.net data
-- Likely leveraging node-scrapy - URL's at Battle.net are well-formed and CSS is standard among profile pages

STAGE 1.5 - CRITICAL - unit tests for known good profile information, in Chai/Mocha. Will likely leverage [my own](https://playoverwatch.com/en-us/career/psn/Yauntras) )

STAGE 2 - Support for PSN, XBox, and Battle.net profiles
-- It's possible a player may be PSN- or XBOX-only, or have divergent accounts (i.e. mine)

STAGE 3 - Handlebars(?)-bsed simple webpage displaying the relevant product information

Nice-to-have:
- ADDITIONAL coverage for the online availability of the Battle.net player (if supported; may be hampered by privacy settings)
- Image files for user profile image preference, #1-played Hero
