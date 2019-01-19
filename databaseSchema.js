const databaseSchema = {
    "schema": {
        "type": "object",
        "properties": {
            "meneillaan": {
                "title": "Käynnissä olevat kohteet",
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "kohde": {
                            "title": "Kohteen nimi",
                            "type": "string"
                        },
                        "toimenpiteet": {
                            "type": "array",
                            "items": {
                                "title": "Suoritettu työ / toimenpide",
                                "type": "string"
                            }
                        }
                    }
                }
            },
            "valmistuneet": {
                "title": "Vastavalmistuneet kohteet",
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "kohde": {
                            "title": "Kohteen nimi",
                            "type": "string"
                        },
                        "toimenpiteet": {
                            "type": "array",
                            "items": {
                                "title": "Suoritettu työ / toimenpide",
                                "type": "string"
                            }
                        }
                    }
                }
            }
        }
    },
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
};