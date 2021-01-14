import {useFish} from "./fish/FishDataProvider.js"
import {FishList} from "./fish/fishList.js"
import {TipList} from "./tips/TipList.js"

FishList()
TipList()

const allTheFish = useFish()
for (const fish of allTheFish) {
    console.log(fish)
}