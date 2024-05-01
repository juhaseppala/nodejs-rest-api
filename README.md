Rajapintalaajennos tunneilla tehtyyn nodejs-rest-api-projektiin. 
Laajennoksen tarkoituksena tehdä clientille laajennos missä voi hallinnoida tapahtumia.
Laajennoksessa pystyy:
- Lisäämään tapahtuman (POST-metodi). Lisäämiseen tarvitaan tiedot event, location ja event_date
- Hakemaan kaikki tapahtumat sekä yksittäisen tapahtuman ID:n perusteella (GET-metodi). Molemmat haut listaa id, event, location ja event_date
- Päivittämään tapahtuman sijainnin (PATCH-metodi). Päivitys tehdään polkuun .../event/:id ja tässä tarvitaan vain uusi arvo location-muuttujalle
- Päivittämään koko tapahtuman (PUT-metodi). Päivitys tehdään polkuun .../event/ ja päivityksen yhteydessä annetaan id, event, location ja event_date
- Poistamaan tapahtuman (DELETE-metodi). Poisto tehdään polkuun ...event/:id
sqlite.js-tiedostoon lisätty koodi mikä tekee events-taulun tapahtumien hallintaan.
Tapahtumalaajennokseen jäi puutteita ja suunnitelmassa on ristiriitaa lopulliseen toteutukseen:
- Tapahtumia pystyy muokkaamaan ja poistamaan kuka tahansa, mikä ei ole järkevää
- Siksi tapahtumaa luodessa olisi hyvä tehdä tapahtuman luojasta tapahtuman admin, joka pystyy myös antamaan muille admin-oikeuksia
- Muokkaus ja poisto pitäisi rajata niin että ainoastaan tapahtumien adminit voi tehdä näitä toimenpiteitä.
Tapahtumalaajennosta voisi laajentaa edelleen esimerkiksi niin, että käyttäjät voisivat ilmoittautua eri tapahtumiin.
