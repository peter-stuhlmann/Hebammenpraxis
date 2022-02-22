# Server

## POST `/send-message`

```
{
  "name": "",
  "address":"",
  "email": "",
  "dateOfBirth": "",
  "gravida": "",
  "para": "",
  "message": ""
}
```

## POST `/get-courses`

```
{
  "token": "", // secret - do not save in frontend!
  "user": "",
  "idArt": "",
  "idVorlage": ""
}
```

## POST `/book-courses`

```
{
  "token": "", // secret - do not save in frontend!
  "user": "",
  "vorname": "",
  "nachname": "",
  "strasse": "",
  "plz": "",
  "ort": "",
  "telefonNummer": "",
  "namePartner": "",
  "mobilNummer": "",
  "email": "",
  "geburtsdatum": "",
  "geburtsdatumkind": "",
  "entbindungstermin": "",
  "idKurs": "",
  "kassenik": "",
  "anzahl": "",
  "versicherungsart": "",
  "versichertennummer": ""
}
```
