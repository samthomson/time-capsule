import { 
    main
} from './main'


const cycle = () => {
    setTimeout(cycle, 60000)
    main()
}

cycle()
