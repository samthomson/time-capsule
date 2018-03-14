import { 
    main
} from './main'
import {
    disconnectDatabase
} from './db/db'

const once = async () => {
    await main()
    disconnectDatabase()
}

once()
