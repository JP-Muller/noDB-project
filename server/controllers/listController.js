let id = 7

let list = [
    {
        id: 1,
        date: 'Mon June 3 2019',
        accTasks: ['Start DevMountain', 'Unpack', 'Study GitHub', 'Sleep'],
        thought: 'Today was great, I started DevMountain and made some new friends.'
    },
    {
        id: 2,
        date: 'Thurs June 6 2019',
        accTasks: ['Learn JavaScript', '40 push-ups', 'Buy a bike'],
        thought: 'Today was cool, I learned a lot about JavaScript! I also had to buy a bike, but it will be well worth it.'
    },
    {
        id: 3,
        date: 'Fri June 14 2019',
        accTasks: ['Learn HTML', 'Bike to grocery store'],
        thought: 'Today was great, I learned a lot about HTML!'
    },
    {
        id: 4,
        date: 'Thu June 20 2019',
        accTasks: ['Learn more node', 'Study' ],
        thought: 'Looking forward to learning more'
    },
    {
        id: 5,
        date: 'Fri June 28 2019',
        accTasks: ['Study express endpoints', 'Go grocery shopping', 'Kill it'],
        thought: 'Today was a good day. I made more progress on my noDb project.'
    },
    {
        id: 6,
        date: 'Sat June 29 2019',
        accTasks: ['Work on CRUD', 'Go on a bike ride' ],
        thought: 'Today was good. I added more functionality to my project.'
    
    }

]

module.exports = {
    dailyEntries(req, res) {
        console.log('hit dailyEntries data')
        res.status(200).send(list)
    },

    updateItem(req, res) {
        console.log('hit update')
        let { id } = req.params
        let { newThought } = req.query
        let index = list.findIndex(entries => entries.id === +id)
        list[index].thought = newThought
        res.status(200).send(list)
    },
        // const newThought = list.map((element, index) => {
        //    if (id = element.id) {
        //        list[index].thought = thought
        //    }
        
    addItem(req, res) {
        console.log('hit addItem')
        const { date, accTasks, thought } = req.body

        let newEntry = {
            id,
            date,
            accTasks,
            thought,
        }

        list.push(newEntry)
        id++

        res.status(200).send(list)
    },

    deleteEntry(req, res) {
        console.log('hit delete')
        let { id } = req.params
        console.log({ id })
        let index = list.findIndex(list => list.id === +id);
        index !== -1 && list.splice(index, 1);
        res.status(200).send(list)
    }

}






