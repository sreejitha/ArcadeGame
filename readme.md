## Memory Game Project

With this project an attempt to a game similar to Frogger has been made. This game has a single player who has to evade 'enemy' bugs and cross few layers of danger to reach the safe layer of water. Once the player touches water, the game is won!

## Instructions to run the project
Clone this repository into a folder and cd into that folder. In that folder you will find several other sub-folders such as "css" (houses the css file for the project), "img"(houses the images for the project) & "js"(houses the javascript file for the project) and an html file named "index.html". Open index.html using a browser application such as Google Chrome. The game will commence on this html file.

## About the solution
1> Enemy: Created a class of enemy bugs of specific dimensions, fixed starting point on canvas and which move across the canvas
   at a given speed
2> Player: Created an instance of a custom class of 'Player' which has many of the same properties as Enemy, but whose movement
   is controlled by 'up', 'down', 'left', 'right' keystrokes.
3> Engine: A function that is set to be called repeatedly and which ensures that the delta time, enemy movement, game status
   (collisions, gameover) is current.
4> Collisions: A function to detect collision between each of the enemy instances with the player instance. Called within the engine
   instance, which means it is set to be called periodically
5> Game Over Modal: A hidden modal which takes over the screen on game-over. The game over happens when player reaches the water layer.
   This modal presents the player the option to play a new game.

## Notes
1> Did not feel the need to implement an update function for 'player'. The player only gets updated on movement controlled by the user
   and not periodically by the Engine function
2> There is however a resetPosition function I gave to the 'player' class. This function is called on collisions.

   
