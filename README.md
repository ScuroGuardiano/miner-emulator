# miner-emulator
Simple mining emulator done because I am bored.  
No english readme at this moment, sorry :p

```typescript
    interface Project {
        getProgress() : string;
    }
    class MinerEmulator implements Project {
        getProgress() {
            return "In progress xDD";
        }
    }
```

# Opis
Tak se kopiąc asteroidy w EVE Online pomyślałem, żeby stworzyć skrypcik konsolowy na kopanie surowców z żył, tak o, bo czemu by nie. A później jak już go zrobiłem pomyślałem, hej a jakby tak walnąć to na serwer, zrobić pseudo-mapę z żyłami, na które można wysyłać górników żeby kopali surowce i przy okazji troszkę się wprawić na mniejszym projekcie w node, express, AJAXy i jakiegoś fajnego frameworka do frontendu, jak Vue.js czy React. I tak to to trafiło na gita. Trza pisać interfejsy.

# Tworzenie górnika
Wiem pisanie tego jest useless, bo nikt nie zajrzy tutaj dopóki nigdzie nie dam lynka, ale fajnie będzie się na to patrzyło :3

Najpierw potrzebujemy kilofa, zróbmy takiego, który będzie kopał 10 jednostek surowca co 3 sekundy.
```javascript
    const MinerEmulator = require("./build/emulator/index");

    let darkPick = new MinerEmulator.Pickaxe("Dark Pickaxe", new MinerEmulator.MiningSpeed(10, 3000)); // 10 units of ore per 3000ms
```
A jak już mamy kilofa, możemy stworzyć górnika i wyposażyć go w narzędzie
```javascript
    let guardiano = new MinerEmulator.Miner("Scuro Guardiano");
    guardiano.equip(darkPick);
```
Teraz tylko stworzyć kopalnie
```javascript
    let mine = new MinerEmulator.Mine("gold", 10000); // gold mine with 10000 units of ore
```
I możemy ustawić naszego górnika do pracy:
```javascript
    guardiano.startMining(mine, () => {
        console.log("Mining finished!");
    }, (mine, minedOre) => {
        //Called every pickaxe tick, specified in mining speed as timestamp
        console.log("Mined " + minedOre.amount + " units of " + minedOre.type + " ore!");
    });
```

I nasz górnik będzie pracował aż wykopie wszystko lub zostanie przerwany metodą stopMining, jednak wtedy callback na koniec kopania nie zostanie wywołany:

```javascript
    guardiano.stopMining();
```
