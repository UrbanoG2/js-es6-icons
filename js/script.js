
// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.


// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.


// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.





const boxArr = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];



// createElement (boxArr, container);


// function createElement (array, container) {
//     for (let i = 0; i < array.length; i++) {
        
//         const container = document.getElementById ('container');

//         const object = array[i];

//         let iconName = object.family + ' ' + object.prefix + object.name;

//         const containedElement = `
        
//         <div class="box">
//             <div class="box-icon">
//                 <i style="color:${object.color}" class="${iconName} icon"></i>
//             </div>

//             <div class="box-title">
//                 <h2>${object.name}</h2>
//             </div>
//         </div>

//         `
//         container.innerHTML += containedElement;
//     }

// }

// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.


//filtro le categorie

const animalFiltered = boxArr.filter(element => element.type === 'animal' );

const vegetableFiltered = boxArr.filter(element => element.type === 'vegetable' );

const userFiltered = boxArr.filter(element => element.type === 'user' );

// console.log(animalFiltered, vegetableFiltered, userFiltered);


document.getElementById("select").addEventListener('change', function() {

    const container = document.getElementById ('container');
    container.innerHTML = "";
    
    if (select.value == 'animal') {
        console.log(animalFiltered);

        animalFiltered.forEach(object => {
        console.log(animalFiltered);
        

        const container = document.getElementById ('container');
        createElement (animalFiltered, container);


        function createElement (array, container) {

            let iconName = object.family + ' ' + object.prefix + object.name;

            const containedElement = `
                
            <div class="box">
                <div class="box-icon">
                    <i style="color:${object.color}" class="${iconName} icon"></i>
                </div>

                <div class="box-title">
                        <h2>${object.name}</h2>
                </div>
             </div>

                `
            container.innerHTML += containedElement;

        }

        });

        

    } else if (select.value == 'vegetable') {
        vegetableFiltered.forEach(object => {
            console.log(vegetableFiltered);
            
    
            const container = document.getElementById ('container');

            
            createElement (vegetableFiltered, container);
    
    
            function createElement (array, container) {
    
                let iconName = object.family + ' ' + object.prefix + object.name;
    
                const containedElement = `
                    
                <div class="box">
                    <div class="box-icon">
                        <i style="color:${object.color}" class="${iconName} icon"></i>
                    </div>
    
                    <div class="box-title">
                            <h2>${object.name}</h2>
                    </div>
                 </div>
    
                    `
                container.innerHTML += containedElement;
    
            }
    
            });

    } else if (select.value == 'user') {
        userFiltered.forEach(object => {
            console.log(userFiltered);
            
            

            const container = document.getElementById ('container');

            createElement (userFiltered, container);
    
            
            function createElement (array, container) {
    
                let iconName = object.family + ' ' + object.prefix + object.name;
    
                const containedElement = `
                    
                <div class="box">
                    <div class="box-icon">
                        <i style="color:${object.color}" class="${iconName} icon"></i>
                    </div>
    
                    <div class="box-title">
                            <h2>${object.name}</h2>
                    </div>
                 </div>
    
                    `
                container.innerHTML += containedElement;
    
            }
    
            })
        }
});






