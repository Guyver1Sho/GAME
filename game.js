const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}


function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)

        }

    })

}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)

}




const textNodes = [{
        id: 1,
        text: 'You wake up in your bunk, I feel guilty and need to get our of bed.',
        options: [{
                text: 'Look at alarm clock',
                setState: { blueGoo: true },
                nextText: 5
            },
            {
                text: 'Get out of bed',
                nextText: 5

            }
        ]

    },
    {
        id: 2,
        text: 'Its', 
        options: [{
                text: 'Trade the goo for a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, sword: true },
                nextText: 3
            },
            {
                text: 'Trade the goo for a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: { blueGoo: false, shield: true },
                nextText: 3


            },
            {
                text: 'Ignore the dickhead',
                nextText: 3


            }
        ]
    },

    {
        id: 3,
        text: 'After talking to the dickhead you start to feel tired and stumble upon a small town next to a big ole castle',
        options: [{
                text: 'Explore the castle',
                nextText: 4
            },
            {
                text: 'Find a room to sleep at in the town',
                nextText: 5
            },
            {
                text: 'Find some hay in a stable to sleep in',
                nextText: 6

            }
        ]
    },
    {
        id: 4,
        text: 'you are so tired when you are exploring the castle that you are killed by a Cryptfiend in your sleep',
        options: [{
            text: 'Restart',
            nextText: -1
        }]
    }
]

startGame()

