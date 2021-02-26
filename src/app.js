const fetch = require("node-fetch");
let guruMeals = [
{
    "name": "",
    "id":"9479",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "4"

},
{
    "name": "",
    "id":"9603",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "21"

},
{
    "name": "",
    "id":"9637",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "18"

},
{
    "name": "",
    "id":"9604",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "18"

},
{
    "name": "",
    "id":"9601",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "24"

},
{
    "name": "",
    "id":"9602",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "8"

},
{
    "name": "",
    "id":"9609",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "18"

},
{
    "name": "",
    "id":"9610",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6"

},
{
    "name": "",
    "id":"9608",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5"

},
{
    "name": "",
    "id":"9606",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6"

},
{
    "name": "",
    "id":"9631",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "18"

},
{
    "name": "",
    "id":"9607",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "15"

},
{
    "name": "",
    "id":"9605",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "18"

},
{
    "name": "",
    "id":"9636",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "11"

},
{
    "name": "",
    "id":"9635",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "33"

},]

let guruBuyable = []

async function populateGuru() {
    for (i=0; i < guruMeals.length; i++) {
        currentGurumeal = guruMeals[i].id
        
        url = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentGurumeal}?region=na`
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
          
        const data = await getData(url);
        guruMeals[i].name = data.name;
        guruMeals[i].price = data.price;
        guruMeals[i].marketcount = data.count;
        
        
        if (guruMeals[i].marketcount > 2500) {
            var currentName = guruMeals[i].name;
            var guruBoxcost = (guruMeals[i].price)*(guruMeals[i].mealsNeeded);
            var marketCount = guruMeals[i].marketcount
            var price = guruMeals[i].price
            var guruMealsNumber = guruMeals[i].mealsNeeded
            guruBuyable.push({
                name: currentName,
                boxCost: guruBoxcost,
                marketCount: marketCount,
                price: price,
                mealsNeeded: guruMealsNumber
            })

        } 

        
        
    }
    guruBuyable.sort((a,b) => parseFloat(a.boxCost) - parseFloat(b.boxCost));
    var bestGurumeal = guruBuyable[0];
    console.log(bestGurumeal);
    var mealAmount = guruBuyable[0].mealsNeeded;
    finalGurudecision = `The best guru meal to buy currently is ${guruBuyable[0].name} and you need ${mealAmount}`;
    return finalGurudecision;

    // console.log(finalGurudecision);
}






let masterMeals = [
{
    "name": "",
    "id":"9487",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9435",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9289 ",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9319",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9491",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9432",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9460",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9277",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9438",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9282",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9464",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9448",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9290",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9425",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "18",
    "boxCost": "",

},
{
    "name": "",
    "id":"9298",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "9",
    "boxCost": "",

},
{
    "name": "",
    "id":"9207",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "18",
    "boxCost": "",

},
{
    "name": "",
    "id":"9443",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},]

let masterBuyable = []

async function populateMaster() {
    for (i=0; i < masterMeals.length; i++) {
        currentMastermeal = masterMeals[i].id
        
        url = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentMastermeal}?region=na`
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
          
        const data = await getData(url);
        masterMeals[i].name = data.name;
        masterMeals[i].price = data.price;
        masterMeals[i].marketcount = data.count;

        if (masterMeals[i].marketcount > 2500) {
            var currentName = masterMeals[i].name;
            var masterBoxcost = (masterMeals[i].price)*(masterMeals[i].mealsNeeded);
            var marketCount = masterMeals[i].marketcount
            var price = masterMeals[i].price
            var masterMealsNumber = masterMeals[i].mealsNeeded
            masterBuyable.push({
                name: currentName,
                boxCost: masterBoxcost,
                marketCount: marketCount,
                price: price,
                mealsNeeded: masterMealsNumber
            })

        }  

    }
    masterBuyable.sort((a,b) => parseFloat(a.boxCost) - parseFloat(b.boxCost));
    var bestMastermeal = masterBuyable[0];
    console.log(bestMastermeal);
    finalMasterdecision = `The best master meal to buy currently is ${masterBuyable[0].name} and you need ${masterBuyable[0].mealsNeeded}`;
    return finalMasterdecision;
}




let artisanMeals = [
{
    "name": "",
    "id":"9273",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9452",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9430",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9276",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9303",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9431",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9444",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9434",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9462",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},]

let artisanBuyable = []

async function populateArtisan() {
    for (i=0; i < artisanMeals.length; i++) {
        currentArtisanmeal = artisanMeals[i].id
        
        url = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentArtisanmeal}?region=na`
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
          
        const data = await getData(url);
        artisanMeals[i].name = data.name;
        artisanMeals[i].price = data.price;
        artisanMeals[i].marketcount = data.count;

        if (artisanMeals[i].marketcount > 2500) {
            var currentName = artisanMeals[i].name;
            var artisanBoxcost = (artisanMeals[i].price)*(artisanMeals[i].mealsNeeded);
            var marketCount = artisanMeals[i].marketcount
            var price = artisanMeals[i].price
            var artisanMealsnumber = artisanMeals[i].mealsNeeded
            artisanBuyable.push({
                name: currentName,
                boxCost: artisanBoxcost,
                marketCount: marketCount,
                price: price,
                mealsNeeded: artisanMealsnumber
            })

        }

    }
    artisanBuyable.sort((a,b) => parseFloat(a.boxCost) - parseFloat(b.boxCost));
    var bestArtisanmeal = artisanBuyable[0];
    console.log(bestArtisanmeal);
    finalArtisandecision = `The best artisan meal to buy currently is ${artisanBuyable[0].name} and you need ${artisanBuyable[0].mealsNeeded}`;
    return finalArtisandecision;
}




let professionalMeals = [
{
    "name": "",
    "id":"9281",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9202",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "18",
    "boxCost": "",

},
{
    "name": "",
    "id":"9442",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9449",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "8",
    "boxCost": "",

},
{
    "name": "",
    "id":"9287",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "8",
    "boxCost": "",

},
{
    "name": "",
    "id":"9437",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "8",
    "boxCost": "",

},
{
    "name": "",
    "id":"9489",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9472",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9447",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "7",
    "boxCost": "",

},
{
    "name": "",
    "id":"9274",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "5",
    "boxCost": "",

},
{
    "name": "",
    "id":"9453",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "6",
    "boxCost": "",

},
{
    "name": "",
    "id":"9420",
    "marketcount":"",
    "price": "",
    "mealsNeeded": "21",
    "boxCost": "",

},]

let professionalBuyable = []

async function populateProfessional() {
    for (i=0; i <professionalMeals.length; i++) {
        currentProfessionalmeal = professionalMeals[i].id
        
        url = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentProfessionalmeal}?region=na`
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
          
        const data = await getData(url);
        professionalMeals[i].name = data.name;
        professionalMeals[i].price = data.price;
        professionalMeals[i].marketcount = data.count;

        if (professionalMeals[i].marketcount > 2500) {
            var currentName = professionalMeals[i].name;
            var professionalBoxcost = (professionalMeals[i].price)*(professionalMeals[i].mealsNeeded);
            var marketCount = professionalMeals[i].marketcount
            var price = professionalMeals[i].price
            var professionalMealsNumber = professionalMeals[i].mealsNeeded
            professionalBuyable.push({
                name: currentName,
                boxCost: professionalBoxcost,
                marketCount: marketCount,
                price: price,
                mealsNeeded: professionalMealsNumber
            })

        } 

    }
    professionalBuyable.sort((a,b) => parseFloat(a.boxCost) - parseFloat(b.boxCost));
    var bestProfessionalmeal = professionalBuyable[0];
    console.log(bestProfessionalmeal);
    finalProfessionaldecision = `The best professional meal to buy currently is ${professionalBuyable[0].name} and you need ${professionalBuyable[0].mealsNeeded}`;
    return finalProfessionaldecision;
}



let accessory = [
{
    "name": "",
    "id" : "12031",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "12060",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11630",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "12061",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11607",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11629",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11853",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11828",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11834",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "12236",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "12230",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "12237",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "12257",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "12068",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11628",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11625",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11856",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "11855",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
{
    "name": "",
    "id" : "12251",
    "marketcount": "",
    "price": "",
    "priRatio": "",
    "duoRatio": "",
    "triRatio": "",
    "tetRatio": "",
    "priValue": "",
    "duoValue": "",
    "triValue": "",
    "tetValue": "",
    "marketCountpri": "",
    "marketCountduo": "",
    "marketCounttri": "",
    "marketCounttet": "",
},
]


async function populateAccessory() {
    for (i=0; i <accessory.length; i++) {
        currentAccessory = accessory[i].id
        
        url = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentAccessory}?enhLevel=0&region=na`
        async function getData(url) {
            const response = await fetch(url);
            return response.json();
        }
          
        const data = await getData(url);
        accessory[i].name = data.name;
        accessory[i].price = data.price;
        accessory[i].marketcount = data.count; 


        // Pri accessory START ////////////
        urlPri = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentAccessory}?enhLevel=1&region=na`
        async function getDataPri(urlPri) {
            const response = await fetch(urlPri);
            return response.json();
        }

        const dataPri = await getDataPri(urlPri);
        accessory[i].priValue = dataPri.price;
        accessory[i].marketCountpri = dataPri.count; 
        accessory[i].priRatio = ((data.price)*2)/(dataPri.price);
        // Pri accessory STOP ////////////


        // Duo accessory START ////////////
        urlDuo = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentAccessory}?enhLevel=2&region=na`
        async function getDataDuo(urlDuo) {
            const response = await fetch(urlDuo);
            return response.json();
        }

        const dataDuo = await getDataDuo(urlDuo);
        accessory[i].duoValue = dataDuo.price;
        accessory[i].marketCountduo = dataDuo.count;
        accessory[i].duoRatio = ((data.price + dataPri.price)/dataDuo.price);
        // Duo accessory STOP ////////////


        // Tri accessory START ////////////
        urlTri = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentAccessory}?enhLevel=3&region=na`
        async function getDataTri(urlTri) {
            const response = await fetch(urlTri);
            return response.json();
        }

        const dataTri = await getDataTri(urlTri);
        accessory[i].triValue = dataTri.price;
        accessory[i].marketCounttri = dataTri.count;
        accessory[i].triRatio = ((data.price + dataDuo.price)/dataTri.price);
        // Tri accessory STOP ////////////


        // Tet accessory START ////////////
        urlTet = `https://bdo-api-helper.herokuapp.com/api/item-search/${currentAccessory}?enhLevel=4&region=na`
        async function getDataTet(urlTet) {
            const response = await fetch(urlTet);
            return response.json();
        }

        const dataTet = await getDataTet(urlTet);
        accessory[i].tetValue = dataTet.price;
        accessory[i].marketCounttet = dataTet.count;
        accessory[i].tetRatio = ((data.price + dataTri.price)/dataTet.price);

        if (accessory[i].marketcount >= 1) {
            console.log(accessory[i])
        }
        // Tet accessory STOP ////////////



    }


}



module.exports = {
    populateGuru,
    populateArtisan,
    populateMaster,
    populateProfessional,
    
}

