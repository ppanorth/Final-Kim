var push = require('web-push')


let vapidKeys = {
    publicKey: 'BHaXqTGfkDRq46OQO8NJL3I0pOyarysr1d3Y_zAclnO7vqfKv-pyHNpvSG3z48LOCP4NzpdfBus78Pkr7InxFZw',
    privateKey: 'gRXJtW_VUUi4CKj3aktPAM8DT5QixO3FTEGkDyLC_yA'

}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey, vapidKeys.privateKey)

let sub = {
    endpoint:
    'https://fcm.googleapis.com/fcm/send/d085TZngoOE:APA91bGJXeeZjNbfK7DMvaC8Vi2NF3zDSpq6I0hfibkcAaeEoEN89NAAPVT11G52JXJTzznugLPZbp03z-wimsQy31IbmzUhHob4FTsEylHeqdzkPh-uf3xBNN0yfp4F-D9FaQcpF2Cu',
expirationTime:null,
keys:  {
p256dh:'BNrGA89-sKeAcClueZnDJDYttp1TgYkYMF0w3rwJHH4zo9j070ajngs0g5RHkim915dx1eQf3zAWYkBW3Xjmbg8',
auth: 'LSu96dK28omP0yD9DCNLpQ'


}
};

push.sendNotification(sub, 'test message')
