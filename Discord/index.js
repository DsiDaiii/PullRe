var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
state : "Text",
details : "Text",
assets : {
    large_image : "URL link", // URL link
    large_text : "Text",
    small_image : "URL link", // URL link
    small_text : "Text",
},
/*
    party: {
    "id": "9dd6594e-81b3-49f6-a6b5-a679e6a060d3",
    "size": [101001, 111010]
},
*/
    timestamps: {
    start:  1000000,
        //end: number,
        // Start and End can't work in place!
    },
buttons : [
    {label : "Мой Steam." , url : "https://steamcommunity.com/id/Cookiemp4/"}, // URL link
    {label : "Мой GitHub.",url : "https://github.com/Devallax"},              // URL link
]
}
})
})
client.login({ clientId : "1065674476655747072" }).catch(console.error);


