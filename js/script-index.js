$(document).ready(function(){

	//Ocultar flecha
	$('.js-back').hide();

    //se llama a la funcion que ingresa el nuevo texto
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});
//Funcion que toma al parrafo contenido en un div con class=callout-news y le ingresa un texto
function printNews(){
	$('.callout-news p').text("NUEVA RECETA");
	}
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	for(var v in recipesArray){
		if(recipesArray[v].highlighted){
			console.log(recipesArray[v]);
			renderRecipe();
		}
	}	
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


