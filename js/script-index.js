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
	for(var recipe in recipesArray){
		if(recipesArray[recipe].highlighted){
			console.log(recipesArray[recipe]);
			renderRecipe(recipesArray[recipe]);
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
    for(var e in recipe){
    	var titulo = recipe["title"];
    	console.log(recipe["title"]);
    	var autor = recipe["source"].name;
    	console.log(recipe["source"].name);
    	var url = recipe["source"].url;
    
    
	var enlace = $('<a/>', {'class': 'item-recipe'});
	var span= $('<span/>',{'class': 'attribution'});
	var hijo1= $('<span/>',{'class': 'title-recipe'});
	var hijo2= $('<span/>',{'class': 'metadata-recipe'});
	var hijo2span1= $('<span/>',{'class': 'author-recipe'});
	var hijo2span2= $('<span/>',{'class': 'bookmarks-recipe'});
    var hijo2span21= $('<span/>',{'class': 'icon-bookmark'});
    var imagen = $('<img/>',{'src': url});

    hijo2span2.append(hijo2span21);
    hijo2.append(hijo2span2);
    hijo2.append(hijo2span1);
    hijo2span1.append(autor);
    hijo1.append(titulo);
    span.append(hijo1);
    span.append(hijo2);
    enlace.append(span);
    enlace.append(imagen);
   }
   $('.list-recipes').append(enlace);
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


