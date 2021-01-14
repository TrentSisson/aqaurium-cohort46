import {useFish} from "./fish/FishDataProvider.js"
import {FishList} from "./fish/fishList.js"
import {TipList} from "./tips/TipList.js"
import {LocationList} from "./locations/LocationList.js"

FishList()
TipList()
LocationList()

const allTheFish = useFish()
for (const fish of allTheFish) {
    console.log(fish)
}