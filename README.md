# AtlasCore
MERN stack IT Support Ticket System named after the titan in Greek Mythology

This is intended to be a Ticketing System with categories for Tickets and options for responding and closing completed Tickets. Currently Incomplete.

## Possible Future Features
* Login and Register System (currently bugged by bcryptjs)
* Sorting Tickets by category
* Reference Tickets by User (model changes)
* Improve CSS styling
* mongoose.Schema.Types.ObjectId on models (Users, Tickets, Comments) for more functionality
* Sort Admins into teams
* Admins can close tickets

## User Stories
* User sees home page
* User can interact with top and side navigation bars to navigate the application.
* User can login/register an account (currently not working due to bcrypt issues)
* User can view Tickets on /tickets
* User can view and add comments on /tickets/:id, and view information about the ticket