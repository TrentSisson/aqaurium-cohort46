import {useFish} from "./fish/FishDataProvider.js"
import {FishList} from "./fish/fishList.js"

FishList()

const allTheFish = useFish()
for (const fish of allTheFish) {
    console.log(fish)
}