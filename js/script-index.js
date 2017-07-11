$(document).ready(function(){

	//Ocultar flecha
	$('.js-back').hide();

    //se llama a la funcion que ingresa el nuevo texto
	printNews();

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

	//llamada a la funcion  que imprimira el contenido de activitiesArrayS
	 renderActivities(activitiesArray);

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
    	var titulo = recipe["title"];
    	console.log(recipe["title"]);
    	var autor = recipe["source"].name;
    	console.log(recipe["source"].name);
    	var name = recipe["name"];
    
    
	var enlace = $('<a/>', {'class': 'item-recipe'});
	var span= $('<span/>',{'class': 'attribution'});
	var hijo1= $('<span/>',{'class': 'title-recipe'});
	var hijo2= $('<span/>',{'class': 'metadata-recipe'});
	var hijo2span1= $('<span/>',{'class': 'author-recipe'});
	var hijo2span2= $('<span/>',{'class': 'bookmarks-recipe'});
    var hijo2span21= $('<span/>',{'class': 'icon-bookmark'});
    var imagen = $('<img/>',{'src':'img/recipes/320x350/' + name + '.jpg'});

    hijo2span2.append(hijo2span21);
    hijo2.append(hijo2span2);
    hijo2.append(hijo2span1);
    hijo2span1.append(autor);
    hijo1.append(titulo);
    span.append(hijo1);
    span.append(hijo2);
    enlace.append(span);
    enlace.append(imagen);
   
   $('.list-recipes').append(enlace);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
   activitiesArray.forEach(function(acti){
   	    renderActivity(acti);
   })

   if(activitiesArray.lenght > 0){
		$('.wrapper-message').hide();
	}
} 

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
     var avatar = recipe.userAvatar;
     var nombreAutor =recipe.userName;
     var receta =recipe.recipeName;
     var localizacion =recipe.place;
     var img = recipe.image;
    

	var enlace = $('<a/>', {'class': 'item-activity'});
	var span = $('<span/>', {'class': 'attribution'});
	var hijo1 = $('<span/>',{'class':'avatar'});
	var imagen = $('<img/>',{'src': avatar, 'class':'image-avatar'});
	var hijo2 = $('<span/>', {'class': 'meta'});
	var hijo2span1 = $('<span/>', {'class': 'author'});
	var hijo2span2 = $('<span/>', {'class': 'recipe', text : recipe["text"]});
	var hijo2span3 = $('<span/>', {'class': 'location'});
	var div = $('<div/>', {'class': 'bg-image', 'background-image': 'url(' + img + ')'});
    
    
    hijo2span1.append(nombreAutor);
    hijo2span2.append(receta);
    hijo2span3.append(localizacion)
	hijo2.append(hijo2span1);
	hijo2.append(hijo2span2);
	hijo2.append(hijo2span3);
	hijo1.append(imagen);
	span.append(hijo2);
	span.append(hijo1);
	enlace.append(span);
	enlace.append(div);
  

    $('.list-activities').append(enlace);

} 


