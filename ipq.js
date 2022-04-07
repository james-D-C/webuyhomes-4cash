
var ipqk;

switch( window.location.hostname )
{
    case 'we-buyhomes-4cash.org': 
            ipqk = 'qR6IbgkhEpDj3eGWOcc4e4SsgpI5jHfCq9Ws9IUU8GWqljdOjJDmQ0eDrv5abaN3bPeV6jyvNg1Llg7eJpQE2SSkkvGij7aXrXY7I7gqzfjrdmqcs192ryin6iFMnOjAWTfFqMNZJAFtTYmgPmE6iDshngDIMXdeSvThkJ1G0sf5E5p9znjQxRtmuouEzMBdi1giQdvK3i4yUk3IC74ltUHyC94Y5V94Lq7jUnQPwJ8hNe2MvT1v5oGUGc6kYnel';
            break;

    case 'we-buy-houses-4-cash.org': 
            ipqk = 'xmzBTcNYguToWtYj86mnqoVdNG02IGx8698JLUloSYHEw9whb328QkIMAvBJ8brn0vp0XsVcYGNGIaI5LfMmAr0xjtb36OTbcRRDz2Leo76z3Npl0qwB3B9xzVW7MiG1Ai9nAPQQeBewWdWlSUboIdnFRA8Ws05owoPt486jBUSuxU6doLJUOApCuINKpn1527cpBMlozwttdYdoOVfO9Ko1NfAXzGUOUeai2gB0ls8tWsaxnQrRhSM8vJfYEsL4';
            break;

    case 'we-buy-homes-4-cash.org': 
            ipqk = 'vlsslkqRr1aScUwGEk6ok8TdNyEQyKGO4L9BAgoprbCgAW9pCTP5ufCVLodhSu8SJLEssj3aJlmVA7Agt9C6mJVeN4aIDKwAu8ITLtQxET8vQRPGTkvBEFVZQKlU9dzYxMhdjHVIWJjrTtdQpYE86P3pIUj1DzxQGtMZbc7G6Gd7T7gYzgLOGyTlMpKmn4W9PMUR7cLIPcYRyZyErqVTuW8VhKLPPoiaaLuFJMnBno8JT5Nn4rIuUDza1xP9e6nJ';
            break;
            
    case 'we-buy-homes-4cash.com': 
            ipqk = 'OKvfYimOV9E5utON1cv9UknzYiAHRMwqNEK0vPK3IJOTPg5YJYfGdFIzHRm1w3vicK8dacn0lum3bZkhV4OOlJXbXytL1JCxjdNkrbMkMDGSnbmjvzmQhEW7m612IMbPhjO5NXLS9oKvK6lg9hy1mwTlJ7JTAeO7ej3gFvXLAG2RkH2rYlHLBNS0dKXgZYNhUP8oksMROyk9BdMqwwj2MXgbysyqH9v5aIzhSecoTmSDHK2wQo6AHTSf6AiYMWoa';
            break;

    case 'we-buy-homes4cash.com': 
            ipqk = 'alKcnjt7lNj79P8ewiqdYCOAoHtKDdLPkAycsLyhODQYsucmd5Lmh1D9RXYO0EgP4KzaIxpmklzc8OQ9wkKOVZ0bOGcm7NA11cXaurv9jfkDYUSGkl3qByQMyrNlT7A8xLzszTdDNLk6pyf8wiKFh1JMaosJWSuqexQAcSCRtl8qlSPSV1f0xuueJDohwB6O3u8ztJJMXJH1pv323YU3XbwfzTs70ewrdgrnmNFhOuZOjsllLB9TM6Go0RYYJbdA';
            break;
}

if( ipqk != "" ) {
    $.getScript("https://www.ipqualityscore.com/api/"+window.location.hostname+"/"+ipqk+"/learn.js", function(data, textStatus, jqxhr) {

        if(typeof Startup !== "undefined") {
            Startup.Store('userID', '<?=$request_id?>');
            Startup.Store('transactionID', '<?=$request_id?>');
            Startup.Store('subUserID', '<?=$subid?>');
            Startup.Store('campaignID', '');
            Startup.Store('subCampaignID', '<?=$subid?>');
            Startup.Store('publisherID', '<?=$aid?>');
            Startup.Store('gclid', '');
            Startup.Store('clickID', '');
            Startup.Store('conversionID', '');

            Startup.AfterResult(function(result){
                var input = document.createElement("input");
                input.setAttribute("type", "hidden");
                input.setAttribute("id", "fraud_chance");
                input.setAttribute("name", "fraud_chance");
                document.getElementById("offer_form").appendChild(input);
                document.getElementById('fraud_chance').value = result.fraud_chance;
            });
        }	
    });
}
