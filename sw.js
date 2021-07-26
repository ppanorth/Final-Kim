self.addEventListener('push', function (e)  {
    var options ={
      body: 'Good day!

Please be reminded that the submission of the following reports will be on or before May 5, 2021. 

1. Monthly Status Report on Leases  (In-charge Ma'am Aida )
2. Consolidated ARTA Compliance Monitoring Report (In-charge Jane)
3. Operational Summary Report of Private Ports (In-charge Sir Rey)
4. Compliance Monitoring Report of Private Ports (In-charge Sir Rey)
5. Register of Common Permits (In-charge Jessica)
        ',
      //icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {
          action: 'explore',
          title: 'URGENT! ',
          //icon: 'images/checkmark.png'
        },
        { action: 'close', title: 'Close'}
       ]
      
    };
    e.waitUntil(self.registration.showNotification('Good day!
Please be reminded that the submission of the following reports will be on or before May 5, 2021. 
1. Monthly Status Report on Leases  (In-charge Ma'am Aida )
2. Consolidated ARTA Compliance Monitoring Report (In-charge Jane)
3. Operational Summary Report of Private Ports (In-charge Sir Rey)
4. Compliance Monitoring Report of Private Ports (In-charge Sir Rey)
5. Register of Common Permits (In-charge Jessica)
        ', options));
 });
 
