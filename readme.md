Simple JSON based flat file database and admin panel

Forms generated with Alpaca Forms: http://www.alpacajs.org/

Edit databaseSchema.js to make your database. Schema needs options:

    "options": {
        "form": {
            "buttons": {
                "submit": {
                    "click": function () {
                        var value = this.getValue();
                        var jsonData = JSON.stringify(value, null, "  ");
                        postData(jsonData);
                    }
                }
            }
        }
    }

settings.php has allowed domains and credentials info to login.

Allowed domains in a form of: "nikiahlskog.com"

settings and handledata.js has variable for databasefile (name and file extension) 
in case that some server doesnt support JSON (iis)

Form builder (Not supported):

http://www.alpacajs.org/demos/form-builder/form-builder.html
