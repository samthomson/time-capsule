import { 
    main
} from './main'
import { CronJob } from 'cron'

var taskEveryMinute = new CronJob('* * * * *', function() {
    // run every minute
    main()
}, () => {}, true, 'Europe/fdfdsfss');
