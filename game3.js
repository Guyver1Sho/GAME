const textElement = document.getElementById('text');
const imgElement = document.getElementById('room-image');
const optionButtonsElement = document.getElementById('option-buttons');
const button3 = document.getElementById('TEST');
const inventory = document.getElementById('inventory');
const itemContainer = document.getElementById('imageContainer');
const itemText = document.getElementById('itemtext');
const itemText1 = document.getElementById('itemtext-on');
///var a = document.getElementById('Div1');

let textArrayIteration = 1




///IMAGE ARRAY///

//I THINK IT MAY BE POSSIBLE TO LINK THE IMAGE ARRAY TO THE TEXT NODE ARRAY 

const roomImages = [{


        imgIndex: 1,
        imgURL: "image1.jpg"
    },
    {
        imgIndex: 2,
        imgURL: "image2.jpg"
    },
    {
        imgIndex: 3,
        imgURL: "image3.jpg"
    },
    {
        imgIndex: 4,
        imgURL: "image4.jpg"
    },
    {
        imgIndex: 6,
        imgURL: "image6.jpg"
    },

]


const itemImages = [{


    imgIndex: 1,
    imgURL: "test.jpg"
},
{
    imgIndex: 2,
    imgURL: "gun.png"
},
{
    imgIndex: 3,
    imgURL: "uniform.png"
},

]

////REPLACING THE WORDS WITH IMAGES / ADDING IMAGES////////
/////// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_createdocfrag ////
/////// https://stackoverflow.com/questions/29488371/how-to-add-a-list-of-images-to-the-document-from-an-array-of-urls /////

//var docFrag = document.createDocumentFragment();

//imgs.forEach(function(cur, index, itemImages) {
    //var img = document.createElement('img');
    //img.src = cur;
    //docFrag.appendChild(img);
//});

//itemContainer.appendChild(docFrag);


//var items = [{


    //itemIndex: 1,
    ///itemName: "test"
//},
//{
    //itemIndex: 2,
    //itemName: "Uniform"
//},
//{
   // itemIndex: 3,
    //itemName: "3"
//}//,
//{
   // itemIndex: 4,
    //itemName: "4"
//},
//{
    //itemIndex: 6,
    //itemName: "6"
//},

//]



          
    

    




///inventory GLOBAL OBJECT

//class inventory {

    //constructor(x, y, w, h) {

      //this.x = x; this.y = y; this.w = w; this.h = h;
      //this.color = "rgba(255, 255, 255, 0.5)";
      //this.items = new Array();
      //this.columns = 4;

    //}


//addItem(){
//if (Boolean(itemIndex)) return

//this.items.push(itemIndex)}

//}

//GAME
let state = {}
let items = {}

///let inventory = {}

///let inventory = {}
///var inventory = Object.assign({state});
    //tate.forEach(pullValue)


///POTENTIALLY VERY USEFUL////
///for(let property in state) {console.log(property + ": " + state[property]) }//////

///var myVar = setInterval(pullValue, 1000);
///Someone elses attempt///



///Im sure this could have been done much cleaner///
///Someones attempt////
function pullValue() {
    var node = document.createElement("P");
    var textNodeItems = Object.values(items);
    var textNode = (document.createTextNode(textNodeItems));
    node.appendChild(textNode);
    document.getElementById("inventory").appendChild(node);
    
/////not working - not sure why - simple versions below seem to work - i want to create a// 
//div element with an Id for the img to be attached to so i can create a mouse-over event in css////
if(inventory.innerHTML.indexOf("test") !== -1) {
        
        var a = document.createElement("div");
        a.id = "Div1"; 
        var iconUrl = document.createElement("img");
        iconUrl.src = "bla.jpg";
        iconUrl.setAttribute("class", "elmo");
        iconUrl.id = "elmo";
        a.appendChild(itemText);
        a.appendChild(iconUrl);
        
        inventory.appendChild(a);
       
        node.style.display = "none";

        }

       if(inventory.innerHTML.indexOf("gun") !== -1) {
                var b = document.createElement("div")
                b.setAttribute("id", "Div2");
                var iconUrl = document.createElement("img");
                iconUrl.src = "gun.png";
                b.append(iconUrl);
                inventory.append(b);
                node.style.display = "none";
                
        
              }

               if(inventory.innerHTML.indexOf("uniform") !== -1) {
                    var c = document.createElement("div")
                    c.setAttribute("id", "Div3");
                    var iconUrl = document.createElement("img");
                    iconUrl.src = "uniform.png";
                    document.getElementById("inventory").appendChild(iconUrl);
                    c.append(iconUrl);
                    inventory.append(c);
                    node.style.display = "none";
                        
                
                        }
         
        
        }
    
        //BIT WHICH IS NOT WORKING//

        //inventory.onmouseover =  function() {reveal()};


        document.getElementById("Div1").onmouseover =  function()  {reveal()};
    
       /// a.onmouseover =  function()  {reveal()};


        ///TRY ADD OR REPLACE CLASSLIST INSTEAD! - LOOK IT UP ON MDN////
        ///ERROR CANNOT READ CLASSLIST OF NULL////
        function reveal() {
            console.log(itemText.classList)
            itemText.classList.toggle('itemtext-on');
             
         }
     
         //function reveal1() {
             //itemText.classList.toggle('itemtext');
             
        // }
     
    //$(".inventory p").each(function() {
        //var $this = $(this);
        //if ($this.text() === 'test') {
            //$this.remove();
        //}
     //});


    // something


///https://stackoverflow.com/questions/35397728/storing-images-in-javascript-variables///
////VEERRRY INTERESTING - HIDDEN ELEMENTS WHICH ARE REVEALED////

//function pullValue() {
    //var node = document.createElement("li");
    //var textNodeItems = Object.values(items);
    //var textNode = (document.createTextNode(textNodeItems));
    //var iconUrl = "https://www.autotrader.co.uk/home-pages/images/static/covid-panel/red-car-v2.png";
    //image.setAttribute("src", iconUrl);
    //node.appendChild(iconUrl);
    //li.appendChild(image);
    //document.getElementById("inventory").appendChild(node);
    ///////
    
//}



//var image = document.createElement("img");
//image.setAttribute("src", iconurl);
//li.appendChild(image);




////copy/////
//function pullValue() {
    //var node = document.createElement("li");
   // var textNodeItems = Object.values(state);
    //var textNode = (document.createTextNode(state.thing1 || "" + state.thing2 || "" + state.thing3 || ""));
    //node.appendChild(textNode);
    //document.getElementById("inventory").appendChild(node);
//}




//function pullValue() {
    ///var filtered = state.filter(Boolean);
    
    //var node = document.createElement("li");
    //var textNode = (document.createTextNode(state.thing1 + " " +  state.thing2 + " " + state.thing3));
    //node.appendChild(textNode);
    //document.getElementById("inventory").appendChild(node);
    ///Object.keys(state.thing1).forEach(key => state.thing1[key] === undefined && delete state.thing1[key]);
    ///state.filter(Boolean);
    ///var ret = (state.thing1 + state.thing2 + state.thing3).replace(/undefined/g,'');

///}

//var filtered = ("inventory").filter(function (el) {
    //return el != null;
  //});
  

//while (optionButtonsElement.firstChild) {
        //optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    //}

///OLD WORKING///
///var textnode = document.getElementById("inventory").innerHTML = state.thing;///

function startGame() {
    state = {}
    items = {}
    showTextNode(1)
}

//MAKE THE SELECTED ITEM VANISH 
///function optionVanish(){
//!button; document.createElement('button')

//}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text


    ///THE GOLDEN EGG!!!!!
    const roomImage = roomImages.find(roomImage => roomImage.imgIndex === textNode.room_id)
    imgElement.src = roomImage.imgURL
        ////



    ///DELETE THE BUTTONS 
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    ///whats written on the button + the function that happens when you click on the button

    ///ADD BUTTONS BACK IN WITH THESE PARAMETERS 
    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option), console.log(inventory))
            optionButtonsElement.appendChild(button)
            //inventory = assign(item, itemName)
                //item = Object.assign(setItem)

            //item.appendChild(inventory)


        
        }
    })

    


    //textNode.options.item.forEach(
        //pullValue
    //)



}

//textNode.options.forEach(item => {
    //pullValue()
//})

//textNode.options.forEach(option.item  => {
    //if (showOption(option))




///state = Object.assign(state, state.thing, option.setState)

//textNode.items.forEach(item => {
//pullValue()


//}

//})
///}




//item = Object.assign(inventory)

//function hideOption(option) {
//if (state = uniform)
//}

//function value() {

//if (option.requiredState == null) pullValue()

//}
/////function merge


function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    
    state = Object.assign(state, option.setState)

    items = Object.assign(items, option.setItems)

    Object.keys(state).forEach(key => state[key] === undefined && delete state[key])

    ///state = Object.assign({inventory}, state, option.setState, state.thing)
    
    ///inventory.push(option.item, option.itemName)

    showTextNode(nextTextNodeId)


}

////NOT NEEDED///
///Object.keys(state).forEach(function (key) {
	//var hash = {};
	//data[key].forEach(function (v, k) {
		//isNaN(hash[(k = v.thing + v.state)]) ?
			//(hash[k] = this.push(v) - 1) :
			//(this[hash[k]].units += v.units);
	//}, (this[key] = []));
//}, inventory);

///pushUniform(){inventory.push(state.thing);


////////////////////////////////not working/////////////////////////////////// 
//function itemWork() {
    //if (Boolean (options.state.thing)) return pullValue()

//}


//OPTIONAL CHAINS! - not working!!!!
///install prettier - code formatter + install JS-CSS-HTML Formatter
//const itemPlease = option?.setState;
///pullValue();


////HMMM BREAKING 
///button3.addEventListener('click', () => vanish())

function vanish() { A.style.visibility = "hidden" }


var A = document.querySelector("#TEST");





////PUSH UNIFORM
///if ((currentState) = currentState.uniform){


////!!!!!!MAY BE BREAKING -TEST BUTTON PUSH!!!!!!!
//function pushUniform(){inventory.push(state.thing);
//document.getElementById("inventory").innerHTML = inventory;}



////NOT WORKING 
/////var A = document.querySelector("#option-buttons").querySelector("#button1");

/////////////////////////////////////////////////////
//////ATTEMPT 1

//function GetElementInsideContainer(containerID, childID) {
//var elm = document.getElementById(childID);
//var parent = elm ? elm.parentNode : {};
//return (parent.id && parent.id === containerID) ? elm : {};
//}


///var A = GetElementInsideContainer("option-buttons", "button1");


/////////////////////////////////////



///Quite useful actually!!!!!
//window.onload = function vanish()

///button3.addEventListener('click', () => selectOption(option))


///VERY CLOSE I THINK
//if (uniform = true){document.getElementById('.button3').style.visibility = "hidden"}

//}

///var uniform = {
//attributeOne: "attributeOne",
//attributeTwo: testBoolean ? "attributeTwo" : "attributeTwoToo"
//}


///if (uniform: true)

const textNodes = [{
        id: 1,
        room_id: 1,
        text: '"ZZZZzzzzZZZZZZzzzzzzzzzzZZZZZZZZZZZZZ"',
        options: [{
                text: 'Wake up',
                
                ///item: {item: true, itemName: "item"},
                nextText: 2
            }

        ]

    },

    {
        id: 2,
        room_id: 2,
        text: 'You wake up in your bunk. \n"I dont feel good this morning....i need to get out of bed."',
        options: [{
                text: 'Look at alarm clock',
                setState: { test: true},
                setItems: { item1: "test"},
                //setState: { gun: true, thing: "gun" },
                nextText: 3
            },
            {
                text: 'Get out of bed',
                nextText: 4

            }
        ]

    },

    {
        id: 3,
        room_id: 3,
        text: 'Its 3:34am',
        options: [{
                text: 'Get out of bed',
                setState: { gun: true },
                setItems: { item2: "gun"},
                nextText: 4
            },

        ]
    },

    {
        id: 4,
        room_id: 4,
        text: 'Its dark, the automatic lights should have come on...',
        options: [{
                text: 'Look in your chest',
                nextText: 4
            },
            {
                text: 'Look out window',
                nextText: 5
            },
            ////breaking
            {
                text: 'Put your uniform on',
                setState: { uniform: true},
                setItems: { item3: "uniform"},
                
                item: {uniform: true, itemName: "uniform"},
                itemIndex: 2,
                //{pullValue()},



                ///setState: {uniform: true, gameItems.name},

                ///setState: {uniform: true, thing:"uniform"},

                ///if (selectOption('Put your uniform on') => pushUniform()),


                ///button.addEventListener('click', () => pushUniform()),
                //selectOption = function() {pushUniform()},
                ///onclick => pushUniform()
                ///function pushUniform(){.push("uniform");},
                nextText: 5
                    ///uniform: true = vanish(){document.getElementById('.button3').style.visibility = (mode) ? 'visible' : 'hidden'},


            },
            {
                text: 'Open door and \nleave your cell',
                setState: { door: true },

                nextText: 6

            }
        ]
    },
    {
        id: 5,
        room_id: 4,
        text: 'Its dark, the automatic lights should have come on...',
        options: [{
                text: 'Look in your chest',
                nextText: 4
            },
            {
                text: 'Look out window',
                nextText: 7
            },
            ////breaking
            {
                text: '',

            },

            {
                text: 'Open door and \nleave your cell',
                setState: { door: true },
                nextText: 6

            }
        ]
    },

    {
        id: 6,
        room_id: 6,
        text: 'Am i dressed?',
        options: [{
                text: 'Oh shit i need to put my uniform on! - go back',
                requiredState: (currentState) => !currentState.uniform,
                nextText: 4
            },
            {
                text: 'Walk through door',
                requiredState: (currentState) => currentState.uniform,
                nextText: 7


            }
        ]
    },

]



startGame()




/*------------------------------------*/
//ALL CORRECT///

//function nextImage(element)
//{
//var img = document.getElementById(element);

//for(var i = 0; i < imgArray.length;i++)
//{
//if(imgArray[i].src == img.src) // << check this
//{
//if(i === imgArray.length){
//document.getElementById(element).src = imgArray[0].src;
//break;
//}
//document.getElementById(element).src = imgArray[i+1].src;
//break;
//}
//}
//}



/*------------------------------------*/