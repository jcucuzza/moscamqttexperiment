var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://localhost:1883');

client.on('connect', function () {

    setInterval(function () {
        client.publish('myTopic', 'Hello mqtt' + Math.random());
        console.log('Message Sent');

    }, 20000);
    //client.end();
});